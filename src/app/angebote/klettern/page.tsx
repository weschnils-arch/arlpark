"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { KletternIcon } from "@/components/Icons";

const highlights = [
    {
        id: "clift",
        title: "CLIFT",
        subtitle: "Interaktive Kletterwand",
        description: "Zeichne beispielsweise deine gewählten Griffe oder deine Geschwindigkeit auf. Aufgrund leuchtender Griffe können Routen sogar selbst und ganz individuell angelegt und geklettert werden! Gemeinsam mit unserem Autobelay erlebst du ein ganz neues Klettererlebnis.",
        extra: null,
        image: "/images/klettern_highlights/Clift.png",
    },
    {
        id: "autobelay",
        title: "Autobelay",
        subtitle: "Selbstsicherungsgerät",
        description: "Du bist das erste Mal in einer Kletterhalle oder hast keinen Partner der dich sichert? Kein Problem mit unseren 3 Autobelays. Du benötigst lediglich einen Klettergurt (kann bei uns ausgeliehen werden) und schon kannst du loslegen… unser arl.park Team zeigt dir gerne wie's geht!",
        extra: "Gemeinsam mit unserer CLIFT Kletterwand wird es zu einem ganz neuen Klettererlebnis.",
        image: "/images/klettern_highlights/Autobelay.png",
    },
    {
        id: "toprope",
        title: "Toprope",
        subtitle: "Ideal für Beginner",
        description: "Ein paar unserer Routen sind als Toprope begehbar. Das bedeutet es ist bereits ein Seil in der Route eingehängt – somit wird der Aufstieg vor allem für Anfänger erleichtert.",
        extra: null,
        image: "/images/klettern_highlights/Toprope.png",
    },
    {
        id: "outdoor",
        title: "Outdoor Klettern",
        subtitle: "Mehrere Outdoor-Routen im Sommer",
        description: "Auch im Sommer bietet sich der arl.park mit seiner Outdoor Kletterwand ideal für alle Kletterfans an. Eine sonnige Outdoor Wand mit Chill-Area und anspruchsvollen, wie auch einfacheren Routen wartet auf dich!",
        extra: "⚠️ Outdoor-Bereich nur im Sommer geöffnet!",
        image: "/images/anpassungen/Klettern_Outdoor.webp",
    },
];

const TWO_HALL_PRICES: Record<string, number> = {
    "10er": 150.00,
    "3m": 278.00,
    "6m": 461.00,
    year: 640.00,
};

const sponsors: { name: string; url: string | null; logo: string; dark?: boolean }[] = [
    { name: "Hotel Pete", url: "https://www.hotel-pete.com/sport-pete/", logo: "/images/routensponsoren/1.png", dark: true },
    { name: "Great Valluga", url: null, logo: "/images/routensponsoren/2.png" },
    { name: "Arlberger Bergbahnen", url: "https://www.arlbergerbergbahnen.com/de/stanton-sommer/", logo: "/images/routensponsoren/3.png" },
    { name: "Arc'teryx", url: "https://arcteryx.com/ie/de", logo: "/images/routensponsoren/4.png" },
    { name: "Arlberg Endurance", url: "https://www.arlbergendurance.com/", logo: "/images/routensponsoren/5.png" },
    { name: "Intersport Arlberg", url: "https://www.intersport.at/shop/pangratz-arlberg-st-anton-haupthaus-st-anton-am-arlberg-9120045540130/", logo: "/images/routensponsoren/6.png" },
    { name: "Raiffeisen Arlberg Silvretta", url: "https://www.raiffeisen.at/tirol/arlberg-silvretta/de/privatkunden.html", logo: "/images/routensponsoren/7.png" },
    { name: "Kletterzentrum Imst", url: "https://kletterhalle.com/", logo: "/images/routensponsoren/8.png" },
];

const CLIMBING_TYPES = [
    { label: "Tageskarte", value: "day" },
    { label: "10er-Block", value: "10er" },
    { label: "3-Monatskarte", value: "3m" },
    { label: "Halbjahreskarte", value: "6m" },
    { label: "Jahreskarte", value: "year" },
];

const CLIMBING_GROUPS = [
    { label: "Erwachsene (ab 18)", value: "adult" },
    { label: "Jugendliche 12–17 J.*", value: "youth" },
    { label: "Kinder 6–11 J.**", value: "child" },
    { label: "Minis 3–5 J.***", value: "mini" },
];

const CLIMBING_PRICES: Record<string, Record<string, number>> = {
    day: { adult: 13.50, youth: 10.00, child: 8.00, mini: 6.00 },
    "10er": { adult: 121.50, youth: 90.00, child: 0, mini: 0 },
    "3m": { adult: 159.00, youth: 109.00, child: 0, mini: 0 },
    "6m": { adult: 290.00, youth: 180.00, child: 0, mini: 0 },
    year: { adult: 415.00, youth: 250.00, child: 0, mini: 0 },
};

export default function KletternPage() {
    const [climbingType, setClimbingType] = useState(CLIMBING_TYPES[0]);
    const [climbingGroup, setClimbingGroup] = useState(CLIMBING_GROUPS[0]);
    const [showTwoHall, setShowTwoHall] = useState(false);
    const [openHighlight, setOpenHighlight] = useState<string | null>(null);
    const climbingPrice = CLIMBING_PRICES[climbingType.value]?.[climbingGroup.value] || 0;
    const twoHallPrice = TWO_HALL_PRICES[climbingType.value as keyof typeof TWO_HALL_PRICES] || 0;

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/activities/Climbing/DSC2839-scaled.jpg')",
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="absolute inset-0 bg-orange-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg text-white">
                        Klettern &amp; Bouldern im arl.park
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">
                        Hoch hinaus auf 130 Routen und im großen Boulderbereich.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-14 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

                {/* Left Column: Partner only (desktop) */}
                <div className="space-y-8 order-3 lg:order-1">
                    {/* Partner Section */}
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 transform transition-all hover:shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                            <Image
                                src="/logo-kletterzentrum-imst.svg"
                                alt="Kletterzentrum Imst"
                                width={80}
                                height={55}
                                className="h-12 w-auto"
                            />
                            <h3 className="text-2xl font-bold text-slate-900">Partner: Kletterzentrum Imst</h3>
                        </div>
                        <p className="text-slate-600 mb-6">
                            Wir kooperieren eng mit dem weltbekannten Kletterzentrum Imst. Profitiere von erstklassigen Kursen und Trainern.
                        </p>
                        <Link
                            href="https://kletterhalle.com/"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline"
                        >
                            Besuche kletterhalle.com
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Pricing, then Info, then AV Landeck */}
                <div className="space-y-8 order-1 lg:order-2">
                    {/* Interactive Pricing Card */}
                    <div className="glass-card bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-700" aria-hidden="true">
                                <KletternIcon size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Klettern & Bouldern</h2>
                        </div>

                        <div className="flex-1 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="climb-type" className="block text-sm font-bold text-slate-700 mb-2">Ticket-Art</label>
                                    <select
                                        id="climb-type"
                                        className="w-full p-3 rounded-xl border border-slate-300 bg-white font-medium text-slate-900 focus:ring-2 focus:ring-sky-600 focus:border-sky-600 outline-none"
                                        value={climbingType.value}
                                        onChange={(e) => setClimbingType(CLIMBING_TYPES.find(o => o.value === e.target.value) || CLIMBING_TYPES[0])}
                                    >
                                        {CLIMBING_TYPES.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="climb-group" className="block text-sm font-bold text-slate-700 mb-2">Personengruppe</label>
                                    <select
                                        id="climb-group"
                                        className="w-full p-3 rounded-xl border border-slate-300 bg-white font-medium text-slate-900 focus:ring-2 focus:ring-sky-600 focus:border-sky-600 outline-none"
                                        value={climbingGroup.value}
                                        onChange={(e) => setClimbingGroup(CLIMBING_GROUPS.find(o => o.value === e.target.value) || CLIMBING_GROUPS[0])}
                                    >
                                        {CLIMBING_GROUPS.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-6 bg-orange-50/70 rounded-xl border border-orange-100">
                                <span className="text-orange-950 font-bold text-lg">Preis</span>
                                {climbingPrice > 0 ? (
                                    <span className="text-4xl font-black text-[#c2410c]">{climbingPrice.toFixed(2).replace('.', ',')} €</span>
                                ) : (
                                    <span className="text-lg font-medium text-slate-400">Nur als Tageskarte</span>
                                )}
                            </div>

                            {/* 2-Hallen-Karte — only for 10er+  */}
                            {twoHallPrice > 0 && (
                                <div className="bg-sky-50/70 rounded-xl border border-sky-100 overflow-hidden">
                                    <button
                                        onClick={() => setShowTwoHall(!showTwoHall)}
                                        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-sky-50 transition-colors"
                                    >
                                        <span className="font-bold text-sky-900">2-Hallen-Karte <span className="text-sky-600 text-sm font-medium">(arl.park + Imst)</span></span>
                                        <svg className={`w-4 h-4 text-sky-600 transition-transform ${showTwoHall ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                    {showTwoHall && (
                                        <div className="px-6 pb-4">
                                            <div className="flex items-center justify-between py-3">
                                                <span className="text-sky-900 font-medium">2 Hallen {climbingType.label}</span>
                                                <span className="text-2xl font-black text-sky-700">{twoHallPrice.toFixed(2).replace('.', ',')} €</span>
                                            </div>
                                            <p className="text-xs text-sky-600">Gültig im arl.park St. Anton &amp; Kletterzentrum Imst</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-4 text-base">Verleih Material (pro Stück)</h4>
                                <div className="space-y-3 text-base text-slate-700">
                                    <div className="flex justify-between"><span>Schuhe 0–5 Jahre</span><span>3,00 €</span></div>
                                    <div className="flex justify-between"><span>Schuhe ab 5 Jahren</span><span>5,00 €</span></div>
                                    <div className="flex justify-between"><span>Gurt, Seil, Chalk, Sicherungsgerät inkl. Karabiner</span><span>3,00 €</span></div>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="https://v5.bookandplay.com/p_pro_arlpark.php"
                            target="_blank"
                            className="block w-full text-center bg-[#006fb4] text-white font-bold py-4 px-4 rounded-xl hover:bg-[#005a94] transition-colors shadow-lg shadow-sky-500/20 mt-8 focus:outline-none focus:ring-4 focus:ring-sky-500/50 text-lg"
                        >
                            Klettern buchen
                        </Link>
                        <p className="text-center mt-4">
                            <Link href="https://climboffice.com" target="_blank" className="text-sm text-sky-600 font-medium hover:underline inline-flex items-center gap-1">
                                Ticket-Kauf über Climboffice erklärt
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </Link>
                        </p>
                    </div>

                    {/* Klettern & Bouldern Info */}
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Klettern &amp; Bouldern im arl.park</h2>
                        <div className="prose prose-lg text-slate-600">
                            <p>
                                Auf 15 Metern Höhe bieten wir eine massive Kletterfläche für alle Schwierigkeitsgrade. Von der sanften Platte bis zum spektakulären Überhang.
                            </p>
                            <ul className="list-none space-y-2 mt-4 pl-0">
                                {["Ca. 130 Routen", "Schwierigkeit 3 bis 8b", "Boulderbereich", "3 Auto-Belay Systeme", "Interaktive CLIFT Kletterwand"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* AV Landeck Kooperation */}
                    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Kooperation mit dem AV Landeck</h3>
                        <p className="text-slate-600 mb-4">
                            Im arl.park arbeiten wir eng mit der Sektion Landeck des Alpenverein zusammen und bieten immer wieder verschiedene Kletterkurse zur Aus- und Weiterbildung an. AV Landeck Mitglieder bekommen vergünstigte Eintrittskonditionen.
                        </p>
                        <p className="text-slate-600">
                            Unsere Kletterkurse findest du im Aktuelles Bereich. Einen Kletterlehrer für individuelle Trainerstunden ist auf Anfrage buchbar.
                        </p>
                        <Link href="/veranstaltungen" className="mt-4 inline-flex items-center gap-2 text-sky-600 font-bold hover:underline text-sm">
                            Aktuelle Kurse ansehen &rarr;
                        </Link>
                    </div>
                </div>

            </section>

            {/* Highlights Section — Expandable Dropdowns */}
            <section className="py-16 px-4 md:px-6 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 text-center uppercase tracking-wider">
                        Highlights
                    </h2>

                    <div className="space-y-4">
                        {highlights.map((h) => {
                            const isOpen = openHighlight === h.id;
                            return (
                                <div key={h.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                                    <button
                                        onClick={() => setOpenHighlight(isOpen ? null : h.id)}
                                        className="w-full flex items-center gap-4 p-4 md:p-5 text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shrink-0">
                                            <Image src={h.image} alt={h.title} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg md:text-xl font-black text-slate-900">{h.title}</h3>
                                            <p className="text-sm text-slate-500">{h.subtitle}</p>
                                        </div>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-400"}`}>
                                            <svg className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                                        <div className="px-4 md:px-5 pb-6 flex flex-col md:flex-row gap-6">
                                            <div className="relative w-full md:w-1/2 h-56 md:h-72 rounded-xl overflow-hidden shrink-0">
                                                <Image src={h.image} alt={h.title} fill className="object-cover" />
                                            </div>
                                            <div className="md:w-1/2">
                                                <p className="text-slate-600 leading-relaxed mb-4">{h.description}</p>
                                                {h.extra && (
                                                    <p className={`text-sm font-semibold ${h.id === "outdoor" ? "text-amber-600 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3" : "text-emerald-700"}`}>
                                                        {h.extra}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Route Sponsors */}
            <section className="py-16 px-4 md:px-6 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
                        Vielen Dank an unsere Routensponsoren:
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {sponsors.map((s) => {
                            const card = (
                                <div
                                    className={`rounded-xl border border-slate-100 shadow-sm flex items-center justify-center px-4 py-3 w-32 h-18 ${s.dark ? "bg-slate-900" : "bg-white"} hover:shadow-md transition-shadow duration-300`}
                                >
                                    <Image
                                        src={s.logo}
                                        alt={s.name}
                                        width={120}
                                        height={60}
                                        className="max-h-12 w-auto object-contain"
                                    />
                                </div>
                            );
                            return s.url ? (
                                <Link key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="hover:scale-105 transition-transform duration-200">
                                    {card}
                                </Link>
                            ) : (
                                <div key={s.name} className="cursor-default">
                                    {card}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Cross-Links to other activities */}
            <section className="py-12 px-4 md:px-6 bg-slate-50 border-t border-slate-100">
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Weitere Angebote im arl.park</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/angebote/trampolin", label: "Trampolin" },
                            { href: "/angebote/bowling", label: "9-Pin Bowling" },
                            { href: "/angebote/squash", label: "Squash" },
                            { href: "/angebote/tennis", label: "Tennis" },
                            { href: "/angebote/tischtennis", label: "Tischtennis" },
                            { href: "/angebote/pickleball", label: "Pickleball" },
                            { href: "/angebote/kids-play", label: "Kids Play" },
                            { href: "/sportsbar", label: "Sportsbar" },
                            { href: "/geburtstage", label: "Geburtstage" },
                            { href: "/gruppen-schulen", label: "Gruppen & Vereine" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-medium text-sm hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
