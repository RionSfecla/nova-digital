import { useState, type FormEvent } from "react";
import "./lux-theme.css";

type Lang = "sq" | "en";

const EMAIL = "novadigitalks@outlook.com";
// Vendose numrin pa "+" dhe pa hapësira, p.sh. "38349123456". Nëse mbetet bosh, butoni nuk shfaqet.
const WHATSAPP = "";

/* ------------------------------------------------------------------ */
/* Small UI pieces                                                     */
/* ------------------------------------------------------------------ */

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LogoMark({ size = 44, gid }: { size?: number; gid: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22D3EE" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="32" rx="27" ry="9" transform="rotate(-24 32 32)" stroke={`url(#${gid})`} strokeWidth="2" />
      <ellipse cx="32" cy="32" rx="27" ry="9" transform="rotate(24 32 32)" stroke={`url(#${gid})`} strokeWidth="2" />
      <path
        d="M32 10C33.5 25 39 30.5 54 32C39 33.5 33.5 39 32 54C30.5 39 25 33.5 10 32C25 30.5 30.5 25 32 10Z"
        fill="#fff"
      />
    </svg>
  );
}

function Brand({ size = 44, gid }: { size?: number; gid: string }) {
  return (
    <a href="#top" className="flex items-center gap-3 no-underline" aria-label="Nova Digital Solutions">
      <LogoMark size={size} gid={gid} />
      <span className="leading-none">
        <span className="block text-lg font-bold tracking-[0.14em] text-[var(--text)]">
          NOVA <span className="text-[var(--accent2)]">DIGITAL</span>
        </span>
        <span className="block mt-1.5 text-[10px] font-medium tracking-[0.4em] text-[var(--muted)]">SOLUTIONS</span>
      </span>
    </a>
  );
}

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const base = "px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors";
  return (
    <div className="lux-switch" role="group" aria-label="Language">
      {(["sq", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`${base} ${lang === l ? "bg-[var(--accent)] text-white" : "text-[var(--muted)] hover:text-[var(--text)]"}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function SectionHead({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-10 max-w-xl">
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-[15px] leading-7 text-[var(--muted)]">{sub}</p>
    </div>
  );
}

const serviceIcons = [
  // landing page
  <svg key="a" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>,
  // business website
  <svg key="b" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>,
  // e-commerce
  <svg key="c" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 4h2l2.3 10.2a1 1 0 0 0 1 .8h8.4a1 1 0 0 0 1-.8L19 8H6" />
    <circle cx="9" cy="19.5" r="1.3" />
    <circle cx="17" cy="19.5" r="1.3" />
  </svg>,
];

/* ------------------------------------------------------------------ */
/* Copy                                                                */
/* ------------------------------------------------------------------ */

const year = new Date().getFullYear();

const sq = {
  nav: { services: "Shërbimet", pricing: "Çmimet", faq: "FAQ", contact: "Kontakti" },
  hero: {
    pill: "Web design dhe development në Kosovë",
    h1: "Website moderne që duken profesionale dhe sjellin klientë",
    p: "Ndërtojmë landing pages, website biznesi dhe dyqane online me fokus te konvertimet, shpejtësia dhe dizajni i pastër.",
    cta1: "Merr ofertë falas",
    cta2: "Shërbimet",
    stats: [
      { k: "Fokusi", v: "Cilësi" },
      { k: "Dorëzimi", v: "3–14 ditë" },
      { k: "Përgjigje", v: "< 24 orë" },
    ],
  },
  services: {
    title: "Shërbimet",
    sub: "Çfarë ofrojmë për klientët tanë.",
    items: [
      { title: "Landing Page", desc: "Për oferta, biznese lokale dhe brende personale. Ndërtohet për të sjellë kontakte." },
      { title: "Website biznesi", desc: "Faqe me seksione të plota: shërbimet, rreth nesh, kontakti, me layout të pastër." },
      { title: "E-commerce", desc: "Dyqan online me strukturë të qartë dhe faqe produkti të optimizuara." },
    ],
  },
  pricing: {
    title: "Çmimet",
    sub: "Paketa të qarta, që nga €250.",
    plans: [
      {
        name: "Starter",
        price: "€250+",
        note: "Për reklama dhe nisje të shpejtë",
        bullets: ["Landing 1-faqeshe", "Mobile-first", "CTA (WhatsApp/Email)", "SEO bazike dhe shpejtësi"],
      },
      {
        name: "Business",
        price: "€450+",
        note: "Më e kërkuara",
        badge: "Më e zgjedhura",
        bullets: ["Deri në 5 faqe", "Seksione sipas kërkesës", "Strukturë që sjell klientë", "SEO dhe performancë"],
      },
      {
        name: "Custom",
        price: "Sipas kërkesës",
        note: "E-commerce / booking",
        bullets: ["Funksione të personalizuara", "Integrime", "Strukturë e shkallëzueshme", "Mbështetje opsionale"],
      },
    ],
  },
  faq: {
    title: "Pyetje të shpeshta",
    sub: "Përgjigje për ato që na pyesin më shpesh.",
    items: [
      { q: "Sa shpejt e dorëzoni website-in?", a: "Zakonisht 3–7 ditë për landing page. Për website biznesi me disa faqe, 1–2 javë, varësisht nga përmbajtja." },
      { q: "A e bëni edhe në anglisht dhe shqip?", a: "Po. Website-i mund të jetë dygjuhësh (EN/SQ), me ndërrim gjuhe në faqe." },
      { q: "A përfshihet domain-i dhe hosting-u?", a: "Opsionale. Ju ndihmojmë me setup-in ose e lidhim me hosting-un që e keni tashmë." },
      { q: "Si ndihmon website-i të sjell klientë?", a: "Me butona kontakti të qartë (WhatsApp/Email), strukturë të menduar për konvertime, shpejtësi, SEO bazike dhe landing pages për reklama." },
    ],
  },
  contact: {
    title: "Kontakti",
    sub: "Na shkruaj çfarë të duhet dhe të përgjigjemi shpejt.",
    name: "Emri",
    email: "Email",
    send: "Dërgo mesazhin",
    sending: "Duke dërguar...",
    successTitle: "Mesazhi u dërgua",
    successMessage: "Faleminderit! Do të të kontaktojmë së shpejti.",
    error: "Mesazhi nuk u dërgua. Provo përsëri ose na shkruaj direkt në email.",
    helper: "Ose na shkruaj direkt:",
    quick: "Oferta jonë",
    quickTitle: "Website gati për klientë",
    quickSub: "Responsive, i optimizuar, SEO bazike, formë kontakti dhe ndihmë me hosting.",
    quickBullets: ["Dizajn modern dhe i pastër", "Shpejtësi dhe performancë", "Strukturë për konvertime", "Setup domain/hosting (opsionale)"],
    placeholder: "Na trego çfarë të duhet (lloji i biznesit dhe afati)…",
    from: "Duke filluar nga",
    priceNote: "Landing page për reklama dhe lead generation (CTA, formë kontakti, SEO bazike, shpejtësi).",
    chips: ["Mobile-first", "Ngarkim i shpejtë", "Layout i pastër", "SEO bazike"],
  },
  footer: `© ${year} Nova Digital Solutions. Të gjitha të drejtat e rezervuara.`,
};

const en: typeof sq = {
  nav: { services: "Services", pricing: "Pricing", faq: "FAQ", contact: "Contact" },
  hero: {
    pill: "Web design and development in Kosovo",
    h1: "Modern websites that look professional and bring in clients",
    p: "We build landing pages, business websites and online stores focused on conversions, speed and clean design.",
    cta1: "Get a free quote",
    cta2: "Services",
    stats: [
      { k: "Focus", v: "Quality" },
      { k: "Delivery", v: "3–14 days" },
      { k: "Response", v: "< 24 hours" },
    ],
  },
  services: {
    title: "Services",
    sub: "What we build for our clients.",
    items: [
      { title: "Landing Page", desc: "For offers, local businesses and personal brands. Built to generate leads." },
      { title: "Business Website", desc: "Multi-page site with services, about and contact sections in a clean layout." },
      { title: "E-commerce", desc: "Online store with a clear structure and optimized product pages." },
    ],
  },
  pricing: {
    title: "Pricing",
    sub: "Clear packages, starting from €250.",
    plans: [
      {
        name: "Starter",
        price: "€250+",
        note: "For ads and a quick launch",
        bullets: ["1-page landing", "Mobile-first", "CTA (WhatsApp/Email)", "Basic SEO and speed"],
      },
      {
        name: "Business",
        price: "€450+",
        note: "Most popular",
        badge: "Best choice",
        bullets: ["Up to 5 pages", "Custom sections", "Lead-focused layout", "SEO and performance"],
      },
      {
        name: "Custom",
        price: "On request",
        note: "E-commerce / booking",
        bullets: ["Custom features", "Integrations", "Scalable structure", "Optional support"],
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    sub: "Answers to what clients ask us most.",
    items: [
      { q: "How fast can you deliver?", a: "Usually 3–7 days for a landing page. Multi-page business sites take 1–2 weeks depending on content." },
      { q: "Can you build in English and Albanian?", a: "Yes. The website can be bilingual (EN/SQ) with a language switch on the page." },
      { q: "Are domain and hosting included?", a: "Optional. We can help you set them up or connect the site to hosting you already have." },
      { q: "How does a website bring in clients?", a: "Clear contact buttons (WhatsApp/Email), a structure designed for conversions, speed, basic SEO and ad-ready landing pages." },
    ],
  },
  contact: {
    title: "Contact",
    sub: "Tell us what you need and we'll reply quickly.",
    name: "Name",
    email: "Email",
    send: "Send message",
    sending: "Sending...",
    successTitle: "Message sent",
    successMessage: "Thank you! We'll get back to you soon.",
    error: "Your message was not sent. Try again or email us directly.",
    helper: "Or email us directly:",
    quick: "Our offer",
    quickTitle: "A client-ready website",
    quickSub: "Responsive, optimized, basic SEO, contact form and hosting help.",
    quickBullets: ["Clean, modern design", "Speed and performance", "Conversion structure", "Domain/hosting setup (optional)"],
    placeholder: "Tell us what you need (business type and deadline)…",
    from: "Starting from",
    priceNote: "Landing page for ads and lead generation (CTA, contact form, basic SEO, speed).",
    chips: ["Mobile-first", "Fast loading", "Clean layout", "SEO basics"],
  },
  footer: `© ${year} Nova Digital Solutions. All rights reserved.`,
};

const copy = { sq, en };

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */

export default function App() {
  const [lang, setLang] = useState<Lang>("sq");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = copy[lang];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xgozpkoa", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="lux-app" id="top">
      {/* Header */}
      <header className="lux-header sticky top-0 z-50">
        <div className="lux-wrap flex items-center justify-between py-3">
          <Brand size={44} gid="nd-header" />

          <nav className="lux-nav hidden md:flex items-center gap-9 text-sm font-medium">
            <a href="#services">{t.nav.services}</a>
            <a href="#pricing">{t.nav.pricing}</a>
            <a href="#faq">{t.nav.faq}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LangSwitch lang={lang} setLang={setLang} />
            </div>
            <a href="#contact" className="lux-btn">
              {t.hero.cta1} <Arrow />
            </a>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden border-t border-[var(--border)]">
          <div className="lux-wrap py-3 flex items-center justify-between">
            <LangSwitch lang={lang} setLang={setLang} />
            <nav className="lux-nav flex gap-4 text-sm font-medium">
              <a href="#services">{t.nav.services}</a>
              <a href="#pricing">{t.nav.pricing}</a>
              <a href="#contact">{t.nav.contact}</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="lux-wrap py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center">
          <div>
            <div className="lux-pill">{t.hero.pill}</div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold leading-[1.12] tracking-[-0.02em]">
              {t.hero.h1}
            </h1>

            <p className="mt-5 text-base leading-7 text-[var(--muted)] max-w-xl">{t.hero.p}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="lux-btn">
                {t.hero.cta1} <Arrow />
              </a>
              <a href="#services" className="lux-btn-outline">
                {t.hero.cta2}
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
              {t.hero.stats.map((s) => (
                <div key={s.k} className="lux-stat">
                  <div className="text-xs text-[var(--muted)]">{s.k}</div>
                  <div className="mt-1 text-xl font-semibold">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Offer card */}
          <div className="lux-hero-card p-7 sm:p-9">
            <div className="text-sm font-medium text-[var(--accent2)]">{t.contact.quick}</div>
            <div className="mt-2 text-2xl font-semibold leading-snug">{t.contact.quickTitle}</div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{t.contact.quickSub}</p>

            <div className="mt-6 space-y-3">
              {t.contact.quickBullets.map((x) => (
                <div key={x} className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-[var(--accent2)]">
                    <Check />
                  </span>
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="lux-wrap py-16">
        <SectionHead title={t.services.title} sub={t.services.sub} />

        <div className="grid md:grid-cols-3">
          {t.services.items.map((s, i) => (
            <div key={s.title} className="lux-service">
              <div className="lux-icon">{serviceIcons[i]}</div>
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="lux-wrap py-16">
        <SectionHead title={t.pricing.title} sub={t.pricing.sub} />

        <div className="grid gap-6 lg:grid-cols-3 items-stretch">
          {t.pricing.plans.map((p) => (
            <div key={p.name} className={`lux-card p-7 flex flex-col ${p.badge ? "lux-card-featured" : ""}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <div className="mt-1 text-sm text-[var(--muted)]">{p.note}</div>
                </div>
                {p.badge ? <div className="lux-badge">{p.badge}</div> : null}
              </div>

              <div className="mt-6 text-3xl font-semibold tracking-tight">{p.price}</div>

              <div className="mt-6 space-y-3 flex-1">
                {p.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                    <span className="text-[var(--accent2)]">
                      <Check />
                    </span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className={`${p.badge ? "lux-btn" : "lux-btn-outline"} mt-8 w-full`}>
                {t.hero.cta1} <Arrow />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="lux-wrap py-16">
        <SectionHead title={t.faq.title} sub={t.faq.sub} />

        <div className="max-w-3xl border-t border-[var(--border)]">
          {t.faq.items.map((item, idx) => {
            const open = faqOpen === idx;
            return (
              <div key={item.q} className="lux-faq-item">
                <button
                  type="button"
                  className="lux-faq-btn"
                  aria-expanded={open}
                  onClick={() => setFaqOpen(open ? null : idx)}
                >
                  <span className="lux-faq-q text-base font-medium">{item.q}</span>
                  <span className="text-xl leading-none text-[var(--accent2)]" aria-hidden="true">
                    {open ? "–" : "+"}
                  </span>
                </button>
                {open ? <p className="pb-6 -mt-2 pr-8 text-sm leading-7 text-[var(--muted)]">{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="lux-wrap py-16 pb-24">
        <SectionHead title={t.contact.title} sub={t.contact.sub} />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Form */}
          <div className="lux-card p-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" className="lux-input" placeholder={t.contact.name} required disabled={isSubmitting} />
              <input name="email" type="email" className="lux-input" placeholder={t.contact.email} required disabled={isSubmitting} />
              <textarea name="message" className="lux-input" placeholder={t.contact.placeholder} rows={6} required disabled={isSubmitting} />
              <button type="submit" className="lux-btn w-full" disabled={isSubmitting}>
                {isSubmitting ? t.contact.sending : t.contact.send} <Arrow />
              </button>

              {showError ? (
                <div role="alert" className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {t.contact.error}
                </div>
              ) : null}

              <div className="text-xs text-[var(--muted)]">
                {t.contact.helper} <span className="font-semibold text-[var(--text)]">{EMAIL}</span>
              </div>
            </form>
          </div>

          {/* Contact card */}
          <div className="lux-card p-7">
            <Brand size={40} gid="nd-contact" />

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a href={`mailto:${EMAIL}`} className="lux-btn flex-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
              </a>
              {WHATSAPP ? (
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lux-btn-outline flex-1"
                >
                  WhatsApp
                </a>
              ) : null}
            </div>

            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-white/[0.03] p-6">
              <div className="text-xs font-medium text-[var(--muted)]">{t.contact.from}</div>
              <div className="mt-1 text-4xl font-semibold tracking-tight">€250</div>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{t.contact.priceNote}</p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {t.contact.chips.map((x) => (
                  <div key={x} className="lux-chip">
                    <span className="text-[var(--accent2)]">
                      <Check />
                    </span>
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="lux-footer">
        <div className="lux-wrap py-8 text-sm text-[var(--muted)]">{t.footer}</div>
      </footer>

      {/* Success popup */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <div className="lux-card p-8 max-w-md w-full">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-emerald-500/15 flex items-center justify-center mb-4 text-emerald-400">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 id="success-title" className="text-xl font-semibold mb-2">
                {t.contact.successTitle}
              </h3>
              <p className="text-sm text-[var(--muted)] mb-6">{t.contact.successMessage}</p>
              <button type="button" onClick={() => setShowSuccess(false)} className="lux-btn">
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
