import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { SC } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Cookie Policy — Wiftco',
  description:
    'How Wiftco uses cookies and similar technologies on the Wiftco website, and the choices you have to manage them.',
};

const sections = [
  [
    '1. What cookies are',
    'Cookies are small text files placed on your device when you visit a website. They let the site recognise your device, remember preferences, and report on how the site is used. We also use related technologies (such as local storage and pixels) that work in a similar way — we refer to them collectively as "cookies" in this policy.',
  ],
  [
    '2. Which cookies we use',
    'We group the cookies and similar technologies used on the Wiftco website into four categories:',
  ],
];

const categories = [
  {
    name: 'Strictly necessary',
    accent: 'Always on',
    body:
      'These cookies are required for the site to function. They handle things like remembering your session, protecting against abuse, and routing traffic correctly. They cannot be switched off in our systems.',
  },
  {
    name: 'Performance & analytics',
    accent: 'Optional',
    body:
      'These cookies help us understand how visitors use the site so we can measure and improve it. For example, we may count page views and see which pages people visit most. The information is aggregated and does not identify you personally.',
  },
  {
    name: 'Functional',
    accent: 'Optional',
    body:
      'These cookies remember choices you make — such as your preferred language or region — and provide enhanced, more personal features. They may also be used to remember changes you have made to text size, fonts, and other parts of pages you can customise.',
  },
  {
    name: 'Marketing',
    accent: 'Optional',
    body:
      'These cookies are used to deliver advertising and marketing communications more relevant to you and your interests, and to measure the effectiveness of advertising campaigns. They may also be used to limit how often you see an advertisement.',
  },
];

const details = [
  [
    '3. Specific cookies we set',
    'The exact set of cookies on the Wiftco website will evolve as we add and remove features. Below is a summary of the typical categories you can expect:',
  ],
  [
    '   · Session cookies',
    'A short-lived session identifier that lets the site recognise a single visit and remember state between page loads. Expires when you close your browser.',
  ],
  [
    '   · Preference cookies',
    'Remember small choices such as your selected region or the dismissal of the cookie banner itself. Typically expire after 30 to 365 days.',
  ],
  [
    '   · Analytics cookies',
    'If you accept analytics cookies, a privacy-respecting analytics tool records anonymous page views, referrers and device classes. We never use analytics cookies to identify you personally, and we do not share the raw data with advertisers.',
  ],
  [
    '   · Embedded content',
    'Some pages may embed videos, podcasts or other third-party content. Those providers may set their own cookies when you play or view their content. We embed content on a privacy-respecting basis where possible.',
  ],
  [
    '4. Your choices',
    'You can manage cookies in several ways:',
  ],
  [
    '   · Cookie banner',
    'The first time you visit the Wiftco website you will see a cookie banner. You can accept all optional cookies, reject all optional cookies, or choose specific categories. You can change your selection at any time using the "Cookie preferences" link in the website footer.',
  ],
  [
    '   · Browser controls',
    'Most modern browsers let you block or delete cookies for any site you visit. Because strictly necessary cookies are required for the site to work, blocking them will degrade or break core functionality.',
  ],
  [
    '   · Mobile device controls',
    'Your mobile operating system (iOS, Android) provides advertising and tracking controls that work across apps and websites. You can reset your advertising identifier or limit ad tracking in those settings.',
  ],
  [
    '5. Third parties',
    'Where we use a third party to set cookies (for example, an analytics or video provider), that third party may process information about your visit under its own privacy notice. We only work with vendors that offer appropriate safeguards, and we minimise what is shared.',
  ],
  [
    '6. International processing',
    'Some cookie providers may process information outside Nigeria. Where this happens, Wiftco assesses the level of protection available and uses safeguards required by applicable data-protection law.',
  ],
  [
    '7. Do Not Track and similar signals',
    'We honour Do Not Track and Global Privacy Control where the law requires us to. We treat those signals as a request to opt out of optional cookies for the current browser.',
  ],
  [
    '8. Children',
    'The Wiftco website is not directed to children. We do not knowingly use cookies to track or build profiles of children.',
  ],
  [
    '9. Updates',
    'We may update this cookie policy as the Wiftco website evolves. Material changes will be posted with a new effective date. The latest version is always available at this page.',
  ],
  [
    '10. Contact',
    'For questions about this cookie policy or how we process information collected through cookies, email support@wiftco.com.',
  ],
];

export default function CookiePolicyPage() {
  return (
    <div style={{ fontFamily: SC.font, color: SC.ink, background: '#fff' }}>
      <Nav />
      <PageHeader
        eyebrow="LEGAL & PRIVACY"
        title="Cookie policy"
        subtitle="A clear explanation of the cookies we use on the Wiftco website — and the choices you have to manage them."
      />
      <main style={{ padding: '72px 0 90px' }}>
        <Container>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <div
              style={{
                padding: '18px 22px',
                borderRadius: 14,
                background: '#f6f1ff',
                border: `1px solid ${SC.hairline}`,
                color: SC.muted,
                fontSize: 13.5,
                lineHeight: 1.6,
                marginBottom: 38,
              }}
            >
              Effective 4 September 2026 · This notice explains the cookies
              and similar technologies used on www.wiftco.com. It is designed
              to complement our Privacy Policy.
            </div>
            <div
              style={{
                padding: '22px 24px',
                borderRadius: 16,
                background: SC.ink,
                color: '#fff',
                marginBottom: 38,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 20,
                flexWrap: 'wrap',
              }}
            >
              <div>
                <strong style={{ display: 'block', fontSize: 17, marginBottom: 4 }}>
                  Want to change your preferences later?
                </strong>
                <span style={{ color: 'rgba(255,255,255,.72)', fontSize: 13.5 }}>
                  Use the "Cookie preferences" link in the website footer to
                  update your choices at any time.
                </span>
              </div>
              <Link
                href="/privacy"
                style={{
                  padding: '11px 17px',
                  borderRadius: 11,
                  background: '#fff',
                  color: SC.primary,
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: 13.5,
                }}
              >
                Read privacy policy →
              </Link>
            </div>

            {sections.map(([title, body]) => (
              <section
                key={title}
                style={{ padding: '26px 0', borderTop: `1px solid ${SC.hairline}` }}
              >
                <h2 style={{ margin: '0 0 10px', fontSize: 22, letterSpacing: -.4 }}>{title}</h2>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: SC.muted }}>{body}</p>
              </section>
            ))}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 14,
                margin: '20px 0 26px',
              }}
            >
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  style={{
                    padding: '18px 18px',
                    borderRadius: 14,
                    border: `1px solid ${SC.hairline}`,
                    background: '#fff',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 8,
                    }}
                  >
                    <strong style={{ fontSize: 15, color: SC.ink }}>{cat.name}</strong>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: .6,
                        textTransform: 'uppercase',
                        color: cat.accent === 'Always on' ? SC.success : SC.primary,
                        background:
                          cat.accent === 'Always on'
                            ? 'rgba(16,185,129,.12)'
                            : 'rgba(94,23,235,.10)',
                        padding: '3px 8px',
                        borderRadius: 99,
                      }}
                    >
                      {cat.accent}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: SC.muted }}>
                    {cat.body}
                  </p>
                </div>
              ))}
            </div>

            {details.map(([title, body]) => (
              <section
                key={title}
                style={{ padding: '18px 0', borderTop: `1px solid ${SC.hairline}` }}
              >
                <h3
                  style={{
                    margin: '0 0 8px',
                    fontSize: title.startsWith('   ') ? 15 : 19,
                    letterSpacing: -.3,
                    color: SC.ink,
                    fontWeight: title.startsWith('   ') ? 600 : 700,
                    paddingLeft: title.startsWith('   ') ? 12 : 0,
                  }}
                >
                  {title.trim()}
                </h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: SC.muted }}>{body}</p>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
