/**
 * Launch gate (PRD §17, §18, §21). Reports which owner approvals are still missing
 * in src/config/site.ts and the dictionaries. Exits 1 while any blocker remains.
 *   npm run launch-check
 */
const { SITE } = await import('../src/config/site.ts');
const { default: id } = await import('../src/i18n/id.ts');
const { default: en } = await import('../src/i18n/en.ts');

const blockers = [];
const pending = [];
const ok = [];

const email = SITE.contact.email;
const wa = SITE.contact.whatsappE164;

if (!email && !wa)
  blockers.push('No approved contact channel: set contact.email and/or contact.whatsappE164.');
if (email && !/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email))
  blockers.push(`contact.email looks invalid: ${email}`);
if (email && /example\./i.test(email)) blockers.push(`contact.email is a placeholder: ${email}`);
if (wa && !/^[1-9]\d{7,14}$/.test(wa))
  blockers.push(`contact.whatsappE164 must be E.164 digits without "+": ${wa}`);
if (email) ok.push(`Email: ${email}`);
if (wa) ok.push(`WhatsApp: +${wa}`);
if (email && !wa) pending.push('WhatsApp not set — site will offer email only.');
if (wa && !email) pending.push('Email not set — site will offer WhatsApp only.');

if (SITE.legal.showAhu) ok.push(`AHU reference shown: ${SITE.legal.ahuNumber}`);
else
  pending.push(
    'AHU reference hidden — set legal.showAhu = true once the owner approves publishing it.',
  );

if (id.work.cases.length !== en.work.cases.length)
  blockers.push(
    `Selected Work count differs: id=${id.work.cases.length} en=${en.work.cases.length}`,
  );
if (id.work.cases.length === 0) pending.push('Selected Work is hidden (no approved cases yet).');
else ok.push(`Selected Work: ${id.work.cases.length} approved case(s).`);

if (SITE.sameAs.length === 0) pending.push('No verified social profiles listed (optional).');

const manual = [
  'ID and EN copy approved by the business owner',
  'Logo/wordmark and favicon approved',
  'Domain sts.web.id controlled, DNS pointed to host, HTTPS active',
  'Root "/" returns 301/308 to /id/ on the live host',
  'Lighthouse mobile ≥ 90 and zero critical accessibility violations on the live URL',
  'Search Console: sitemap submitted, both locales indexed',
];

console.log('\nSTS launch check\n================');
for (const m of ok) console.log(`  ✓ ${m}`);
for (const m of pending) console.log(`  • ${m}`);
for (const m of blockers) console.log(`  ✗ ${m}`);
console.log('\nManual sign-off (PRD §17 launch gate):');
for (const m of manual) console.log(`  [ ] ${m}`);

if (blockers.length) {
  console.log(`\n${blockers.length} blocker(s). Not ready for production.\n`);
  process.exit(1);
}
console.log('\nNo automated blockers. Complete the manual sign-off, then deploy.\n');
