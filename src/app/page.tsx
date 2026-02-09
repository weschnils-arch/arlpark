"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TrampolinIcon, KletternIcon, BowlingIcon, SquashIcon, GeburtstagIcon, GutscheinIcon, ClockIcon, PriceIcon, CheckIcon } from "@/components/Icons";

// Counter Animation Hook
function useCounterAnimation(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// Activity Tile Component - Colored Glassmorphism
interface ActivityTileProps {
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  name: string;
  description: string;
  color: string;
  glassBg: string;
}

function ActivityTile({ href, icon: Icon, name, description, color, glassBg }: ActivityTileProps) {
  return (
    <Link
      href={href}
      className={`activity-tile flex flex-col items-center p-4 md:p-5 rounded-2xl md:rounded-3xl ${glassBg} backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-2xl hover:border-white/50 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent`}
      aria-label={`${name} - ${description}`}
    >
      <div
        className={`w-14 h-14 md:w-16 md:h-16 ${color} rounded-xl md:rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}
        aria-hidden="true"
      >
        <Icon className="text-white" size={28} />
      </div>
      <span className="text-base md:text-lg font-bold text-white text-center">{name}</span>
      <span className="text-xs md:text-sm text-white/80 text-center">{description}</span>
    </Link>
  );
}

// Counter Component
function Counter({ target, suffix = "€" }: { target: number; suffix?: string }) {
  const { count, ref } = useCounterAnimation(target);
  return (
    <span ref={ref} className="counter font-black text-orange-500">
      {count}{suffix}
    </span>
  );
}

// Hero Section
function HeroSection() {
  const quickLinks = [
    {
      href: "/aktivitaeten#trampolin",
      icon: TrampolinIcon,
      name: "Trampolin",
      description: "1.000 m²",
      color: "bg-blue-500",
      glassBg: "bg-blue-500/30 hover:bg-blue-500/40",
    },
    {
      href: "/aktivitaeten#klettern",
      icon: KletternIcon,
      name: "Klettern",
      description: "100+ Routen",
      color: "bg-orange-500",
      glassBg: "bg-orange-500/30 hover:bg-orange-500/40",
    },
    {
      href: "/aktivitaeten#bowling",
      icon: BowlingIcon,
      name: "Bowling",
      description: "4 Bahnen",
      color: "bg-gray-700",
      glassBg: "bg-gray-700/30 hover:bg-gray-700/40",
    },
    {
      href: "/aktivitaeten#squash",
      icon: SquashIcon,
      name: "Squash",
      description: "Courts",
      color: "bg-purple-500",
      glassBg: "bg-purple-500/30 hover:bg-purple-500/40",
    },
    {
      href: "/geburtstage",
      icon: GeburtstagIcon,
      name: "Geburtstage",
      description: "Feiern",
      color: "bg-red-500",
      glassBg: "bg-red-500/30 hover:bg-red-500/40",
    },
    {
      href: "/gutscheine",
      icon: GutscheinIcon,
      name: "Gutscheine",
      description: "Schenken",
      color: "bg-green-500",
      glassBg: "bg-green-500/30 hover:bg-green-500/40",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" aria-label="Hero Bereich">
      {/* Video Background - Lazy Loaded */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center text-center text-white px-4 md:px-6 pt-24 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
            Indoor Funpark<br />
            <span className="text-orange-400">St. Anton am Arlberg</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-10 max-w-2xl mx-auto">
            Dein Action-Erlebnis unter einem Dach
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-10 md:mb-14 px-4">
            <Link
              href="https://v5.bookandplay.com/p_pro_arlpark.php"
              className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              Tickets buchen
            </Link>
            <Link
              href="/preise"
              className="btn-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Preise ansehen
            </Link>
          </div>

          {/* Schnellzugriffe - 6 Tiles with Glassmorphism */}
          <nav aria-label="Schnellzugriffe">
            <h2 className="sr-only">Schnellzugriffe zu Aktivitäten</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 max-w-4xl mx-auto">
              {quickLinks.map((link) => (
                <ActivityTile
                  key={link.name}
                  href={link.href}
                  icon={link.icon}
                  name={link.name}
                  description={link.description}
                  color={link.color}
                  glassBg={link.glassBg}
                />
              ))}
            </div>
          </nav>

          {/* Activity Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6 md:mt-8">
            {["Trampolin", "Klettern", "9-Pin", "Squash", "Tennis", "Sports"].map((activity) => (
              <span
                key={activity}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium text-white transition-colors cursor-default"
              >
                {activity}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <div className="relative z-10 pb-6 md:pb-8 px-4">
        <div className="max-w-lg mx-auto flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2.5 md:py-3 text-white text-xs md:text-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" aria-hidden="true"></span>
          <span><strong>Keine</strong> Reservierung für Trampolin & Klettern!</span>
        </div>
      </div>
    </section>
  );
}

// Info Section
function InfoSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-gradient-to-b from-orange-50 to-white" aria-labelledby="info-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="info-heading" className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-8 md:mb-12 text-gray-900">
          Wichtige Infos & Zeiten
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {/* Opening Hours Card */}
          <article className="glass-card p-5 md:p-8">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <ClockIcon className="text-orange-500" size={24} />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-900">Öffnungszeiten</h3>
            </div>
            <dl className="space-y-3 md:space-y-4 text-gray-600 text-sm md:text-base">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <dt className="font-medium">Trampolin</dt>
                <dd className="text-right">Mo–Fr: 14h | Sa/So: 9h</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <dt className="font-medium">Klettern</dt>
                <dd className="text-right">Täglich 9/14–22h</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="font-medium">Bowling</dt>
                <dd className="text-right">Mo–So: 14–23h</dd>
              </div>
            </dl>
            <Link href="/oeffnungszeiten" className="inline-flex items-center gap-2 text-orange-500 font-semibold mt-4 hover:gap-3 transition-all focus:outline-none focus:underline">
              Alle Zeiten ansehen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </article>

          {/* Pricing Card */}
          <article className="glass-card p-5 md:p-8">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <PriceIcon className="text-blue-500" size={24} />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-900">Preise & Buchung</h3>
            </div>
            <div className="space-y-2 md:space-y-3 text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              <p><strong>Trampolin:</strong> 1 Std. <Counter target={17} /> | 2 Std. <Counter target={22} /></p>
              <p><strong>Klettern:</strong> ab <Counter target={10} /></p>
              <p><strong>Bowling:</strong> ab <Counter target={4} suffix="€/Pers." /></p>
            </div>
            <Link
              href="https://v5.bookandplay.com/p_pro_arlpark.php"
              className="btn-primary inline-flex items-center gap-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Jetzt buchen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

// Birthday Section
function BirthdaySection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 text-white relative overflow-hidden" aria-labelledby="birthday-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:24px_24px]" aria-hidden="true" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6" aria-hidden="true">
          <GeburtstagIcon className="text-white" size={32} />
        </div>
        <h2 id="birthday-heading" className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">Geburtstage & Gruppen</h2>
        <p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
          Feiere unvergessliche Momente bei uns! Perfekt für Kindergeburtstage und Teamevents.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 px-2" role="list">
          {[
            { title: "Trampolin Party", price: "15€", desc: "2 Std. Action" },
            { title: "Trampolin + Bowling", price: "17€", desc: "Kombi-Paket" },
            { title: "Action-Paket", price: "22,50€", desc: "Trampolin + Klettern" },
          ].map((pkg) => (
            <article key={pkg.title} className="bg-white/15 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/20">
              <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2">{pkg.title}</h3>
              <p className="text-2xl md:text-3xl font-black mb-1">{pkg.price}</p>
              <p className="text-white/70 text-xs md:text-sm">{pkg.desc} p.P.</p>
            </article>
          ))}
        </div>
        <Link
          href="/geburtstage"
          className="bg-white text-orange-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform inline-block shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
        >
          Jetzt anfragen
        </Link>
      </div>
    </section>
  );
}

// Voucher Section
function VoucherSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden" aria-labelledby="voucher-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_60%)]" aria-hidden="true" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6" aria-hidden="true">
          <GutscheinIcon className="text-white" size={32} />
        </div>
        <h2 id="voucher-heading" className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">Gutscheine</h2>
        <p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-xl mx-auto px-4">
          Verschenke Action und Spaß! Das perfekte Geschenk für jeden Anlass.
        </p>
        <Link
          href="/gutscheine"
          className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform inline-block shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
        >
          Gutscheine kaufen
        </Link>
      </div>
    </section>
  );
}

// Newsletter Section - Light Design
function NewsletterSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden" aria-labelledby="newsletter-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" aria-hidden="true" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg" aria-hidden="true">
          <svg className="text-white w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <h2 id="newsletter-heading" className="text-2xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 text-gray-900">
          Newsletter
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto">
          Melde dich zu unserem Newsletter an und profitiere von exklusiven Angeboten und News!
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Deine E-Mail-Adresse"
            className="flex-1 px-5 py-3.5 md:py-4 rounded-full border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-base shadow-sm"
            required
          />
          <button
            type="submit"
            className="btn-primary px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-base whitespace-nowrap shadow-lg hover:scale-105 transition-transform"
          >
            Anmelden
          </button>
        </form>

        {/* Trust text */}
        <p className="text-xs md:text-sm text-gray-500 mt-4">
          Kein Spam, nur relevante Updates. Du kannst dich jederzeit abmelden.
        </p>
      </div>
    </section>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <InfoSection />
      <BirthdaySection />
      <VoucherSection />
      <NewsletterSection />
    </main>
  );
}
