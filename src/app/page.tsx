"use client";

import Link from "next/link";
import { TrampolinIcon, KletternIcon, BowlingIcon, SquashIcon, GeburtstagIcon, GutscheinIcon, ClockIcon, PriceIcon } from "@/components/Icons";


// Activity Tile Component - Blue Theme
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
      className={`activity-tile flex flex-col items-center p-4 md:p-5 rounded-3xl ${glassBg} backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl hover:border-white/40 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] group`}
      aria-label={`${name} - ${description}`}
    >
      <div
        className={`w-14 h-14 md:w-16 md:h-16 ${color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}
        aria-hidden="true"
      >
        <Icon className="text-white" size={28} />
      </div>
      <span className="text-base md:text-lg font-bold text-white text-center">{name}</span>
      <span className="text-xs md:text-sm text-white/80 text-center">{description}</span>
    </Link>
  );
}

// Hero Section with Parallax Video
function HeroSection() {
  const quickLinks = [
    {
      href: "/angebote/trampolin",
      icon: TrampolinIcon,
      name: "Trampolin",
      description: "1.000 m²",
      color: "bg-blue-600",
      glassBg: "bg-blue-900/40 hover:bg-blue-900/60",
    },
    {
      href: "/angebote/klettern",
      icon: KletternIcon,
      name: "Klettern",
      description: "100+ Routen",
      color: "bg-red-600",
      glassBg: "bg-red-900/40 hover:bg-red-900/60",
    },
    {
      href: "/angebote/bowling",
      icon: BowlingIcon,
      name: "Bowling",
      description: "4 Bahnen",
      color: "bg-purple-700",
      glassBg: "bg-purple-900/40 hover:bg-purple-900/60",
    },
    {
      href: "/angebote/squash",
      icon: SquashIcon,
      name: "Squash",
      description: "Courts",
      color: "bg-lime-600",
      glassBg: "bg-lime-900/40 hover:bg-lime-900/60",
    },
    {
      href: "/geburtstage",
      icon: GeburtstagIcon,
      name: "Geburtstage",
      description: "Partys",
      color: "bg-pink-500",
      glassBg: "bg-pink-900/40 hover:bg-pink-900/60",
    },
    {
      href: "/gutscheine",
      icon: GutscheinIcon,
      name: "Gutscheine",
      description: "Schenken",
      color: "bg-emerald-500",
      glassBg: "bg-emerald-900/40 hover:bg-emerald-900/60",
    },
  ];

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden" aria-label="Hero Bereich">
      {/* Parallax Video Background - Fixed */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          {/* Replace with actual video path if available, using existing placeholder logic */}
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay Removed as requested */}
        {/* Minimal gradient for text readability at the very bottom/top only if needed, but removing general tint */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-20 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
          Indoor Funpark<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white">St. Anton am Arlberg</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-100 mb-10 max-w-2xl font-light drop-shadow-md">
          Dein Action-Erlebnis unter einem Dach: Trampolin, Klettern, Bowling & mehr.
        </p>

        {/* CTA Buttons - Blue Theme */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-md sm:max-w-none justify-center">
          <Link
            href="https://v5.bookandplay.com/p_pro_arlpark.php"
            className="btn-primary text-lg px-8 py-4 shadow-xl shadow-sky-500/20"
          >
            Jetzt Buchen
          </Link>
          <Link
            href="/preise"
            className="btn-secondary text-lg px-8 py-4 hover:bg-white/10"
          >
            Preise & Infos
          </Link>
        </div>

        {/* Quick Access Tiles */}
        <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
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
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
}

// Info & Kids Section
function InfoSection() {
  return (
    <section className="relative z-20 bg-white py-20 lg:py-32 px-4 rounded-t-[3rem] -mt-10 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto">

        {/* Info Grid - Moved above Kids Play */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {/* Hours */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center">
                <ClockIcon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Öffnungszeiten</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-200">
                <span className="font-medium text-slate-600">Trampolin</span>
                <span className="font-bold text-slate-900">Mo–Fr 14h | Sa/So 9h</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-200">
                <span className="font-medium text-slate-600">Klettern</span>
                <span className="font-bold text-slate-900">Täglich 9/14–22h</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-200">
                <span className="font-medium text-slate-600">Bowling</span>
                <span className="font-bold text-slate-900">Mo–So 14–23h</span>
              </div>
            </div>
            <Link href="/oeffnungszeiten" className="mt-8 inline-block text-sky-600 font-bold hover:underline">
              Alle Zeiten ansehen &rarr;
            </Link>
          </div>

          {/* Prices */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                <PriceIcon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Preise & Tickets</h3>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-slate-200">
                <span className="font-medium text-slate-600">Trampolin (1h)</span>
                <span className="font-bold text-sky-600 text-xl">17€</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-200">
                <span className="font-medium text-slate-600">Klettern (ab)</span>
                <span className="font-bold text-sky-600 text-xl">10€</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-200">
                <span className="font-medium text-slate-600">Bowling (p.P.)</span>
                <span className="font-bold text-sky-600 text-xl">4€</span>
              </div>
            </div>
            <Link
              href="https://v5.bookandplay.com/p_pro_arlpark.php"
              className="btn-primary w-full inline-block text-center"
            >
              Tickets buchen
            </Link>
          </div>
        </div>

        {/* Kids Play Promo - Prominent Placement (now below) */}
        <div>
          <div className="bg-gradient-to-tr from-sky-500 to-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-4 border border-white/20">NEU IM ARL.PARK</span>
                <h2 className="text-3xl md:text-5xl font-black mb-6">Kids Play</h2>
                <p className="text-lg md:text-xl text-sky-100 mb-8 leading-relaxed">
                  Ein Paradies für die Kleinsten! Entdecke unseren neuen Kids-Play Bereich mit Rutschen, Bällebad und Klettergerüsten.
                </p>
                <Link href="/angebote/kids-play" className="bg-white text-sky-600 px-8 py-3.5 rounded-full font-bold hover:bg-sky-50 transition-colors shadow-lg inline-flex items-center gap-2">
                  Mehr erfahren
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
              {/* Placeholder for Kids Image */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-sky-800/30 border border-white/10 flex items-center justify-center">
                <span className="text-white/50 font-bold text-xl">Foto: Kids Play Bereich</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Mietanlagen Preview Section
function RentalSection() {
  return (
    <section className="relative z-20 py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-bold tracking-wider uppercase text-sm mb-2 block">Party & Events</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Mietanlagen für dein Event</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hole dir den Spaß nach Hause! Wir vermieten professionelles Equipment für Firmenfeiern, Events und private Partys.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { title: "Mobiler Boulderblock", desc: "Klettern überall genießen", icon: "🧗‍♂️" },
            { title: "Bungee Trampolin", desc: "Hoch hinaus mit Sicherheit", icon: "🤸‍♂️" },
            { title: "Hüpfburgen & mehr", desc: "Spaß für die Kleinen", icon: "🏰" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/kontakt" className="btn-primary px-8 py-3.5 text-lg inline-flex items-center gap-2 shadow-lg shadow-sky-500/20">
            Jetzt unverbindlich anfragen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <Link href="/mietanlagen" className="btn-secondary text-sky-600 border-sky-200 hover:bg-sky-50 px-8 py-3.5 whitespace-nowrap">
            Alle Mietanlagen ansehen
          </Link>
        </div>
      </div>
    </section>
  )
}



import EventsSection from "@/components/EventsSection";
import FaqTeaser from "@/components/FaqTeaser";

// Main Page Component
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EventsSection />
      <InfoSection />
      <RentalSection />
      <FaqTeaser />
    </main>
  );
}
