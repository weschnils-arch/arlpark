"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  TrampolinIcon, KletternIcon, BowlingIcon,
  SquashIcon, GeburtstagIcon, KidsPlayIcon
} from "@/components/Icons";
import EventsSection from "@/components/EventsSection";
import FaqTeaser from "@/components/FaqTeaser";

// ─── Activity Tile ───────────────────────────────────────────
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
      className={`activity-tile flex flex-col items-center p-2.5 md:p-5 rounded-2xl md:rounded-3xl ${glassBg} backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl hover:border-white/40 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] group`}
      aria-label={`${name} - ${description}`}
    >
      <div className={`w-11 h-11 md:w-18 md:h-18 ${color} rounded-xl md:rounded-2xl flex items-center justify-center mb-1.5 md:mb-3 group-hover:scale-110 transition-transform shadow-lg`} aria-hidden="true">
        <Icon className="text-white" size={30} />
      </div>
      <span className="text-xs md:text-lg font-bold text-white text-center leading-tight">{name}</span>
      <span className="text-xs text-white/80 text-center hidden md:block">{description}</span>
    </Link>
  );
}

// ─── Hero ────────────────────────────────────────────────────
function HeroSection() {
  const quickLinks = [
    { href: "/angebote/trampolin", icon: TrampolinIcon, name: "Trampolin", description: "1.000 m²", color: "bg-blue-600", glassBg: "bg-blue-900/40 hover:bg-blue-900/60" },
    { href: "/angebote/kids-play", icon: KidsPlayIcon, name: "Kids Play", description: "Mini Airbag, Hüpfburg und mehr", color: "bg-pink-500", glassBg: "bg-pink-900/40 hover:bg-pink-900/60" },
    { href: "/angebote/klettern", icon: KletternIcon, name: "Klettern", description: "100+ Routen", color: "bg-red-600", glassBg: "bg-red-900/40 hover:bg-red-900/60" },
    { href: "/angebote/bowling", icon: BowlingIcon, name: "9-Pin Bowling", description: "4 Bahnen", color: "bg-purple-700", glassBg: "bg-purple-900/40 hover:bg-purple-900/60" },
    { href: "/angebote/squash", icon: SquashIcon, name: "Squash", description: "Courts", color: "bg-lime-600", glassBg: "bg-lime-900/40 hover:bg-lime-900/60" },
    { href: "/geburtstage", icon: GeburtstagIcon, name: "Geburtstage", description: "Partys", color: "bg-pink-500", glassBg: "bg-pink-900/40 hover:bg-pink-900/60" },
  ];

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden" aria-label="Hero Bereich">
      <div className="fixed inset-0 w-full h-full -z-10">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" poster="/images/hero-poster.jpg" aria-hidden="true">
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-3 md:mb-6 leading-tight tracking-tight drop-shadow-xl">
          Indoor Funpark<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white">St. Anton am Arlberg</span>
        </h1>
        <p className="text-base md:text-2xl text-slate-100 mb-6 md:mb-10 max-w-2xl font-light drop-shadow-md">
          Dein Action-Erlebnis unter einem Dach: Trampolin, Klettern, 9-Pin Bowling &amp; mehr.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-16 w-full max-w-md sm:max-w-none justify-center">
          <Link href="https://v5.bookandplay.com/p_pro_arlpark.php" className="btn-primary text-base md:text-lg px-6 py-3 md:px-8 md:py-4 shadow-xl shadow-sky-500/20">Jetzt Buchen</Link>
          <Link href="/gutscheine" className="btn-secondary text-base md:text-lg px-6 py-3 md:px-8 md:py-4 hover:bg-white/10">Gutscheine</Link>
        </div>
        <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {quickLinks.map((link) => (
            <ActivityTile key={link.name} {...link} />
          ))}
        </div>
        {/* Scroll indicator — centered between tiles and section 2 */}
        <div className="mt-4 md:mt-10 flex justify-center animate-bounce text-white/50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>
    </section>
  );
}

// ─── Section 2: Welcome + Öffnungszeiten ─────────────────────
const schedules = [
  {
    id: "trampolin", label: "Trampolin", color: "bg-blue-600", lightColor: "bg-blue-50", borderColor: "border-blue-200", textColor: "text-blue-700", icon: "🤸",
    rows: [
      { day: "Montag bis Donnerstag", time: "14:00 – 19:00 Uhr" },
      { day: "Freitag", time: "14:00 – 21:00 Uhr" },
      { day: "Samstag", time: "09:00 – 21:00 Uhr" },
      { day: "Sonntag / Feiertags", time: "09:00 – 19:00 Uhr" },
    ],
  },
  {
    id: "sportsbar-bowling", label: "Sportsbar | 9Pin-Bowling", color: "bg-amber-600", lightColor: "bg-amber-50", borderColor: "border-amber-200", textColor: "text-amber-700", icon: "🎳",
    note: "Reservierung erforderlich für 9-Pin Bowling – online buchbar.",
    rows: [
      { day: "Montag", time: "14:00 – 23:00 Uhr" },
      { day: "Dienstag", time: "14:00 – 23:00 Uhr" },
      { day: "Mittwoch", time: "14:00 – 00:00 Uhr" },
      { day: "Donnerstag", time: "14:00 – 23:00 Uhr" },
      { day: "Freitag", time: "14:00 – 00:00 Uhr" },
      { day: "Samstag", time: "09:00 – 00:00 Uhr" },
      { day: "Sonntag", time: "09:00 – 23:00 Uhr" },
    ],
  },
  {
    id: "klettern", label: "Klettern | Bouldern | Squash | Tischtennis", color: "bg-orange-600", lightColor: "bg-orange-50", borderColor: "border-orange-200", textColor: "text-orange-700", icon: "🧗",
    note: "Reservierung erforderlich für Squash & Tischtennis – online buchbar.",
    rows: [
      { day: "Montag, Mittwoch & Freitag", time: "14:00 – 22:00 Uhr" },
      { day: "Dienstag & Donnerstag", time: "09:00 – 22:00 Uhr" },
      { day: "Samstag / Sonntag / Feiertags", time: "09:00 – 22:00 Uhr" },
    ],
  },
  {
    id: "tennis", label: "Tennis | Pickleball", color: "bg-emerald-600", lightColor: "bg-emerald-50", borderColor: "border-emerald-200", textColor: "text-emerald-700", icon: "🎾",
    note: "Reservierung erforderlich – online buchbar.",
    rows: [
      { day: "Montag bis Donnerstag", time: "08:00 – 14:00 & 19:00 – 23:00 Uhr" },
      { day: "Freitag", time: "08:00 – 14:00 & 21:00 – 23:00 Uhr" },
      { day: "Samstag", time: "21:00 – 23:00 Uhr" },
      { day: "Sonntag", time: "19:00 – 23:00 Uhr" },
    ],
  },
];

function WelcomeAndHoursSection() {
  const [openId, setOpenId] = useState<string>("trampolin");
  const toggle = (id: string) => setOpenId(openId === id ? "" : id);

  return (
    <section className="relative z-20 bg-white py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">

          {/* Left: Welcome + Reservation Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5 leading-tight">Dein Indoor Erlebnispark<br />in St. Anton am Arlberg</h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Nur einen Sprung vom Bahnhof entfernt — im arl.park in St. Anton am Arlberg sind diverse sportliche Erlebnisse unter einem Dach vereint: Von Klettern, über Trampolin-Hüpfen, Squash, Tennis bis hin zu 9-Pin Bowling und mehr. Parkplätze sind direkt beim Eingang neben dem Gebäude. Auch das kulinarische Angebot kann sich sehen lassen – im Zentrum des Sportbereichs gibt es mit der „Sportsbar" einen Ausschank und eine Vielzahl köstlicher Snacks und erfrischender Getränke.
            </p>

            {/* Preise & Tickets Card (replaces former Info-zu-Reservierungen block) */}
            <div className="bg-sky-50 rounded-3xl p-8 border border-sky-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center text-white text-lg" aria-hidden="true">💶</div>
                <h3 className="text-xl font-black text-slate-900">Preise &amp; Tickets</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                Alle Preise für sämtliche Aktivitäten auf einen Blick — Trampolin, Klettern, 9-Pin Bowling, Squash, Tennis, Tischtennis, Pickleball &amp; Kids Play.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Mit unseren EarlyBird Tickets sparst du <strong className="text-amber-700">−20 %</strong> bei Buchungen mindestens eine Woche im Voraus.
              </p>
              <div className="mt-6 pt-5 border-t border-sky-200 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="/preise" className="flex items-center gap-2 text-sky-700 font-bold text-sm hover:underline">
                  Zur Preisübersicht
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link href="https://v5.bookandplay.com/p_pro_arlpark.php" target="_blank" className="flex items-center gap-2 text-sky-700 font-bold text-sm hover:underline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  Jetzt online buchen
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Öffnungszeiten Accordion */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 leading-tight">Öffnungszeiten</h2>
            <p className="text-slate-500 text-base mb-2">Wann wir für dich da sind</p>
            <p className="text-slate-400 text-xs mb-6">Ferien und Feiertage ab 9 Uhr geöffnet</p>
            <div className="space-y-3">
              {schedules.map((s) => (
                <div key={s.id} className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${openId === s.id ? s.borderColor : "border-slate-100"} bg-white shadow-sm hover:shadow-md`}>
                  <button
                    onClick={() => toggle(s.id)}
                    className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${openId === s.id ? s.lightColor : "hover:bg-slate-50"}`}
                    aria-expanded={openId === s.id}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-base font-black tracking-tight ${openId === s.id ? s.textColor : "text-slate-800"}`}>{s.label}</span>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${openId === s.id ? `${s.color} text-white` : "bg-slate-100 text-slate-400"}`}>
                      <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${openId === s.id ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === s.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className={`px-5 pb-5 pt-1 ${s.lightColor}`}>
                      {s.note && <p className={`text-xs font-medium ${s.textColor} mb-3 flex items-center gap-2`}><span>ℹ️</span>{s.note}</p>}
                      <div className="space-y-2">
                        {s.rows.map((row, i) => (
                          <div key={i} className="flex justify-between items-center py-2.5 border-b border-white/70 last:border-0">
                            <span className="text-slate-600 font-medium text-sm">{row.day}</span>
                            <span className={`font-black text-sm ${s.textColor}`}>{row.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Section 4: Kids Play ─────────────────────────────────────
function KidsPlaySection() {
  return (
    <section className="relative z-20 py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-tr from-sky-500 to-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-4 border border-white/20">NEU IM ARL.PARK</span>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Kids Play</h2>
              <p className="text-lg md:text-xl text-sky-100 mb-8 leading-relaxed">
                Ein Paradies für die Kleinsten! Entdecke unseren neuen Kids-Play Bereich mit Mini Airbag, Hüpfburg und mehr.
              </p>
              <Link href="/angebote/kids-play" className="bg-white text-sky-600 px-8 py-3.5 rounded-full font-bold hover:bg-sky-50 transition-colors shadow-lg inline-flex items-center gap-2">
                Mehr erfahren
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/activities/KidsPlay/IMG_20250720_071557.webp"
                alt="Kids Play Bereich im arl.park — Hüpfburg"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-indigo-900/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Mietanlagen ───────────────────────────────────
function RentalSection() {
  return (
    <section className="relative z-20 py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-bold tracking-wider uppercase text-sm mb-2 block">Party &amp; Events</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Mietanlagen für dein Event</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hole dir den Spaß nach Hause! Wir vermieten professionelles Equipment für Firmenfeiern, Events und private Partys.
          </p>
        </div>
        <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-xl">
          <Image
            src="/images/anpassungen/mietanlagen.webp"
            alt="Mietanlagen — mobiler Boulderblock, Bungee Trampolin, Hüpfburgen und mehr"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
        <div className="mt-8 flex justify-center w-full">
          <Link href="/mietanlagen" className="btn-primary px-8 py-3.5 text-lg inline-flex items-center gap-2 shadow-lg shadow-sky-500/20">
            Mietanlagen ansehen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Main ─────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. Willkommen + Öffnungszeiten */}
      <WelcomeAndHoursSection />
      {/* 3. Aktuelles im Kletterzentrum */}
      <EventsSection />
      {/* 4. Kids Play */}
      <KidsPlaySection />
      {/* 5. Mietanlagen */}
      <RentalSection />
      {/* 6. FAQ */}
      <FaqTeaser />
    </main>
  );
}
