
import { useMemo, useState } from "react";


type Lang = "sq" | "en";
const EMAIL = "novadigitalks@outlook.com";



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

export default function App() {
  const [lang, setLang] = useState<Lang>("sq");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const t = useMemo(() => {
    const sq = {
      brand: "NOVA DIGITAL",
      nav: { services: "Shërbimet", pricing: "Çmimore", faq: "FAQ", contact: "Kontakti" },
      ctaTop: "Shiko punët",
      hero: {
        pill: "Clean • Luxury • Fast • SEO-ready",
        h1: "Website moderne që duken premium dhe sjellin klienta",
        p: "Ndërtojmë landing pages, website biznesi dhe e-commerce me fokus në konvertime, shpejtësi dhe dizajn të pastër.",
        cta1: "Merr ofertë falas",
        cta2: "Shërbimet",
        stats: [
          { k: "Fokusi në", v: "Cilësi" },
          { k: "Delivery", v: "7–14d" },
          { k: "Mbështetje", v: "24/7" },
        ],
      },
      
      services: {
        title: "Services",
        sub: "Çka bëj për klientët",
        items: [
          { title: "Landing Page", desc: "Për oferta, biznese lokale, brende personale. Fokus në konvertime." },
          { title: "Business Website", desc: "Faqe me seksione të plota: services, about, contact — premium layout." },
          { title: "E-commerce", desc: "Dyqan online me strukturë të qartë dhe faqe produkti të optimizuar." },
        ],
      },
      pricing: {
        title: "Pricing",
        sub: "Paketa të thjeshta (starting from €250)",
        plans: [
          {
            name: "Starter",
            price: "€250+",
            note: "Për reklama & start të shpejtë",
            bullets: ["1-page landing", "Mobile-first", "CTA (WhatsApp/Email)", "SEO bazike + shpejtësi"],
          },
          {
            name: "Business",
            price: "€450+",
            note: "Më e kërkuara",
            badge: "Best",
            bullets: ["Deri 5 faqe", "Seksione custom", "Layout që sjell klientë", "SEO + performance"],
          },
          {
            name: "Custom",
            price: "Çmimi sipas kërkesës",
            note: "E-commerce / booking",
            bullets: ["Feature custom", "Integrime", "Strukturë e shkallëzueshme", "Support opsional"],
          },
        ],
      },
      faq: {
        title: "FAQ",
        sub: "Pyetje të shpeshta",
        items: [
          { q: "Sa shpejt e dorëzon website?", a: "Zakonisht 3–7 ditë për landing. Për business site (multi-page) 1–2 javë, varësisht nga përmbajtja." },
          { q: "A e bëni edhe në anglisht/shqip?", a: "Po. Mund ta bëjmë bilingual (EN/SQ) me switch në faqe." },
          { q: "A përfshin domain/hosting?", a: "Opsionale. Mund të të ndihmoj me setup, ose e lidhim me hostingun që ti e ke." },
          { q: "Si i marrim klientët me website?", a: "Me CTA të qarta (WhatsApp/Email), strukturë konvertimi, shpejtësi, SEO bazike dhe landing për reklama." },
        ],
      },
      contact: {
        title: "Kontakti",
        sub: "Dërgo mesazh, merr përgjigje të shpejtë",
        name: "Emri",
        email: "Email",
        message: "Mesazhi",
        send: "Dërgo",
        sending: "Duke dërguar...",
        successTitle: "Mesazhi u dërgua!",
        successMessage: "Faleminderit! Do të të kontaktojmë së shpejti.",
        helper: "Ose kontakto direkt:",
        quick: "Quick Offer",
        quickTitle: "Website i gatshëm për klienta",
        quickSub: "Responsive • Optimized • Basic SEO • Contact form • Hosting help",
        quickBullets: ["Dizajn clean luxury", "Shpejtësi & performance", "Strukturë për konvertime", "Setup domain/hosting (opsionale)"],
        placeholder: "Shkruaj çka të duhet (lloji i biznesit + deadline)…",
      },
      footer: "© " + new Date().getFullYear() + " Nova Digital. All rights reserved.",
    };

    const en = {
      brand: "NOVA DIGITAL",
      nav: { services: "Services", pricing: "Pricing", faq: "FAQ", contact: "Contact" },
      ctaTop: "View work",
      hero: {
        pill: "Clean • Luxury • Fast • SEO-ready",
        h1: "Modern websites that look premium and bring clients.",
        p: "I build landing pages, business websites and e-commerce with a focus on conversions, speed and clean design.",
        cta1: "Get a free quote",
        cta2: "Services",
        stats: [
          { k: "Focus", v: "Quality" },
          { k: "Delivery", v: "7–14d" },
          { k: "Support", v: "24/7" },
        ],
      },
      services: {
        title: "Services",
        sub: "What I do for clients",
        items: [
          { title: "Landing Page", desc: "For offers, local businesses, personal brands. Conversion-focused." },
          { title: "Business Website", desc: "Multi-page website: services, about, contact — premium layout." },
          { title: "E-commerce", desc: "Online store with clean structure and optimized product pages." },
        ],
      },
      pricing: {
        title: "Pricing",
        sub: "Simple packages (starting from €250)",
        plans: [
          {
            name: "Starter",
            price: "€250+",
            note: "Ads & quick launch",
            bullets: ["1-page landing", "Mobile-first", "CTA (WhatsApp/Email)", "Basic SEO + speed"],
          },
          {
            name: "Business" ,
            price: "€450+",
            note: "Most popular",
            badge: "Best",
            bullets: ["Up to 5 pages", "Custom sections", "Lead-focused layout", "SEO + performance"],
          },
          {
            name: "Custom",
            price: "Contact for Pricing",
            note: "E-commerce / booking",
            bullets: ["Custom features", "Integrations", "Scalable structure", "Optional support"],
          },
        ],
      },
      faq: {
        title: "FAQ",
        sub: "Common questions",
        items: [
          { q: "How fast can you deliver?", a: "Usually 3–7 days for a landing page. Multi-page business sites take 1–2 weeks depending on content." },
          { q: "Can you do EN/SQ bilingual?", a: "Yes. We can add a clean language switch on the website." },
          { q: "Do you include domain/hosting?", a: "Optional. I can help you set it up or connect it to your existing hosting." },
          { q: "How does a website bring clients?", a: "Clear CTAs (WhatsApp/Email), conversion structure, speed, basic SEO, and ad-ready landing pages." },
        ],
      },
      contact: {
        title: "Contact",
        sub: "Send a message, get a quick response.",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        sending: "Sending...",
        successTitle: "Message sent!",
        successMessage: "Thank you! I'll get back to you soon.",
        helper: "Or contact directly:",
        quick: "Quick Offer",
        quickTitle: "Client-ready website",
        quickSub: "Responsive • Optimized • Basic SEO • Contact form • Hosting help",
        quickBullets: ["Clean luxury design", "Speed & performance", "Conversion structure", "Domain/hosting setup (optional)"],
        placeholder: "Tell me what you need (business type + deadline)…",
      },
      footer: "© " + new Date().getFullYear() + " Nova Digital. All rights reserved.",
    };

    return lang === "sq" ? sq : en;
  }, [lang]);

 return (
  <div className="lux-app">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] backdrop-blur"
        style={{ backgroundColor: "var(--card)" }}>
        <div className="lux-wrap flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
        
              <img src="/logo.svg" alt="Nova Digital" style={{ height: 100 }} />
             </div>
              </div>

          <nav className="hidden md:flex items-center gap-16 text-sm font-semibold text-[var(--muted)]">

            <a className="hover:text-[var(--text)]" href="#services">{t.nav.services}</a>

            {/* WORK (enable later when  projects) */}
            {/* <a className="hover:text-[var(--text)]" href="#work">Work</a> */}

            <a className="hover:text-[var(--text)]" href="#pricing">{t.nav.pricing}</a>
            <a className="hover:text-[var(--text)]" href="#faq">{t.nav.faq}</a>
            <a className="hover:text-[var(--text)]" href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2">
            {/* Language switch */}
            <div className="hidden sm:flex items-center rounded-xl border border-[var(--border)] bg-white p-1">
              <button
                onClick={() => setLang("sq")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg ${lang === "sq" ? "bg-[var(--accent)] text-white" : "text-[var(--muted)]"}`}
              >
                SQ
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg ${lang === "en" ? "bg-[var(--accent)] text-white" : "text-[var(--muted)]"}`}
              >
                EN
              </button>
            </div>

            <a href="#contact" className="lux-btn">
              {t.hero.cta1} <Arrow />
            </a>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden border-t border-[var(--border)]">
          <div className="lux-wrap py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white p-1">
              <button
                onClick={() => setLang("sq")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg ${lang === "sq" ? "bg-[var(--accent)] text-white" : "text-[var(--muted)]"}`}
              >
                SQ
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg ${lang === "en" ? "bg-[var(--accent)] text-white" : "text-[var(--muted)]"}`}
              >
                EN
              </button>
            </div>

            <div className="flex gap-3 text-sm font-semibold text-[var(--muted)]">
              <a href="#services" className="hover:text-[var(--text)]">{t.nav.services}</a>
              <a href="#pricing" className="hover:text-[var(--text)]">{t.nav.pricing}</a>
              <a href="#contact" className="hover:text-[var(--text)]">{t.nav.contact}</a>
            </div>
          </div>
        </div>
      </header>
    

      {/* Hero */}
      <section className="lux-wrap py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="lux-pill">{t.hero.pill}</div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">
              <span className="text-[var(--text)]">{t.hero.h1}</span>
              <span className="ml-2 text-[var(--accent2)]">•</span>
            </h1>

            <p className="mt-4 text-[15px] leading-7 text-[var(--muted)] max-w-xl">
              {t.hero.p}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="lux-btn">{t.hero.cta1} <Arrow /></a>
              <a href="#services" className="lux-btn-outline">{t.hero.cta2}</a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {t.hero.stats.map((s) => (
                <div key={s.k} className="lux-card p-4">
                  <div className="text-xs text-[var(--muted)] font-semibold">{s.k}</div>
                  <div className="mt-1 text-lg font-extrabold">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right "quick offer" */}
          <div className="lux-card p-6 sm:p-8">
            <div
            className="lux-card p-6 text-[var(--text)] border-0 shadow-none"
            style={{
                background: `
                  radial-gradient(
                  500px 220px at 20% 0%,
                  rgba(220,190,120,0.45),
                  transparent 55%
                ),
                linear-gradient(
                  180deg,
                  #131430,
                  #5e4d39
                )
              `,
              }}
          >

              <div className="text-xs font-bold opacity-80">{t.contact.quick}</div>
              <div className="mt-2 text-2xl font-extrabold">{t.contact.quickTitle}</div>
              <div className="mt-2 text-sm opacity-80">{t.contact.quickSub}</div>

              <div className="mt-5 space-y-3">
                {t.contact.quickBullets.map((x) => (
                  <div key={x} className="flex items-center gap-2 text-sm font-semibold">
                    <span style={{ color: "var(--accent2)" }}><Check /></span>

                    <span>{x}</span>
                  </div>
                ))}
              </div>

              {/* <div className="mt-6 rounded-xl bg-white/10 h-12" /> */}
            </div>
          </div>
        </div>
      </section>
                

      {/* Services */}
      <section id="services" className="lux-wrap py-14">
        <div className="mb-7">
          <div className="text-sm font-extrabold">{t.services.title}</div>
          <div className="text-sm text-[var(--muted)] mt-1">{t.services.sub}</div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {t.services.items.map((s) => (
            <div key={s.title} className="lux-card p-6">
              <div className="text-base font-extrabold">{s.title}</div>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{s.desc}</p>
              <div className="mt-5 h-10 w-10 rounded-xl border border-[var(--border)] grid place-items-center text-[var(--accent2)] font-extrabold">
                ✦
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK SECTION — enable later */}
      {/*
      <section id="work" className="lux-wrap py-14">
        <div className="mb-7">
          <div className="text-sm font-extrabold">Work</div>
          <div className="text-sm text-[var(--muted)] mt-1">Coming soon…</div>
        </div>
      </section>
      */}
    

      {/* Pricing */}
      <section id="pricing" className="lux-wrap py-14">
        <div className="mb-7">
          <div className="text-sm font-extrabold">{t.pricing.title}</div>
          <div className="text-sm text-[var(--muted)] mt-1">{t.pricing.sub}</div>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {t.pricing.plans.map((p) => (
            <div key={p.name} className="lux-card p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-extrabold">{p.name}</div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{p.note}</div>
                </div>
                {p.badge ? (
                  <div className="rounded-full px-4 py-2 text-xs font-extrabold from-[#E6C77A] to-[#C9A86A] shadow text-black border border-[var(--border)] bg-white">
                    {p.badge}
                  </div>
                ) : null}
              </div>

              <div className="mt-5 text-3xl font-extrabold">{p.price}</div>

              <div className="mt-4 space-y-2">
                {p.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                    <span style={{ color: "var(--accent2)" }}><Check /></span>

                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="lux-btn mt-6 w-full">{t.hero.cta1} <Arrow /></a>
            </div>
          ))}
        </div>
      </section>
          

      {/* FAQ */}
      <section id="faq" className="lux-wrap py-14">
        <div className="mb-7">
          <div className="text-sm font-extrabold">{t.faq.title}</div>
          <div className="text-sm text-[var(--muted)] mt-1">{t.faq.sub}</div>
        </div>

        <div className="grid gap-4">
          {t.faq.items.map((item, idx) => {
            const open = faqOpen === idx;
            return (
              <button
                key={item.q}
                onClick={() => setFaqOpen(open ? null : idx)}
                className="lux-card p-6 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm sm:text-base font-extrabold">{item.q}</div>
                  <div className="text-[var(--muted)] font-extrabold">{open ? "—" : "+"}</div>
                </div>
                {open ? (
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {item.a}
                  </p>
                ) : null}
              </button>
            );
          })}
        </div>
      </section>
          

      {/* Contact */}
      <section id="contact" className="lux-wrap py-14 pb-20">
        <div className="mb-7">
          <div className="text-sm font-extrabold">{t.contact.title}</div>
          <div className="text-sm text-[var(--muted)] mt-1">{t.contact.sub}</div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* FORM */}
          <div className="lux-card p-6">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                
                const form = e.currentTarget;
                const formData = new FormData(form);
                
                try {
                  const response = await fetch("https://formspree.io/f/xgozpkoa", {
                    method: "POST",
                    body: formData,
                    headers: {
                      Accept: "application/json",
                    },
                  });
                  
                  if (response.ok) {
                    setShowSuccess(true);
                    form.reset();
                    setTimeout(() => setShowSuccess(false), 5000);
                  }
                } catch (error) {
                  console.error("Error:", error);
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="space-y-4"
            >
              
              <input name="name" className="lux-input" placeholder={t.contact.name} required disabled={isSubmitting} />
              <input name="email" type="email" className="lux-input" placeholder={t.contact.email} required disabled={isSubmitting} />
              <textarea name="message" className="lux-input" placeholder={t.contact.placeholder} rows={6} required disabled={isSubmitting} />
              <button type="submit" className="lux-btn w-full" disabled={isSubmitting}>
                {isSubmitting ? t.contact.sending : t.contact.send} <Arrow />
              </button>

              <div className="mt-3 text-xs text-[var(--muted)]">
                {t.contact.helper} <span className="font-bold">{EMAIL}</span>
              </div>
            </form>
          </div>
          
          {/* CONTACT CARD */}
          <div className="lux-card p-6">
            <img src="/logo.svg" alt="Nova Digital" style={{ height: 60 }} />
            <div className="mt-1 text-sm text-[var(--muted)]">Email: <span className="font-bold">{EMAIL}</span></div>
              {/* NEW: Quick Contact Buttons */}
            <div className="mt-4 flex gap-3">
            <a 
            href={`mailto:${EMAIL}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent)] hover:opacity-90 text-white text-sm font-semibold transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>Email</span>
          </a>
              <a 
                href="https://wa.me/38349XXXXXX" // Vendos numrin tend
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold text-center transition-colors"
              >
                WhatsApp
              </a>
            </div>
            <div className="mt-6 lux-card p-6 border border-[var(--border)]">
              
              <div className="text-xs font-extrabold text-[var(--muted)]">Starting from</div>
              <div className="mt-1 text-4xl font-extrabold">€250</div>
              <div className="mt-3 text-sm text-[var(--muted)]">
                Landing page për reklama + lead generation (CTA, form, SEO bazike, shpejtësi).
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                {["Mobile-first", "Fast loading", "Clean layout", "SEO basics"].map((x) => (
                  <div
                    key={x}
                    className="
                      flex items-center gap-2
                      rounded-xl
                      border border-white/10
                      bg-[#1a2233]
                      px-3 py-2
                      font-semibold
                      text-white
                    "
                  >
                    <span className="text-[#C9A86A]">✔</span>
                    {x}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-xs text-[var(--muted)]">
              {/*  WhatsApp/Instagram buttons. */}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)]">
        <div className="lux-wrap py-8 text-sm text-[var(--muted)]">{t.footer}</div>
      </footer>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="lux-card p-8 max-w-md w-full">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-green-600">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold mb-2">{t.contact.successTitle}</h3>
              <p className="text-sm text-[var(--muted)] mb-6">{t.contact.successMessage}</p>
              <button onClick={() => setShowSuccess(false)} className="lux-btn">OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}