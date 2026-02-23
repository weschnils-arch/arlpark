"use client";

import Link from "next/link";
import { useState } from "react";

const schedules = [
    {
        id: "trampolin",
        label: "Trampolin",
        color: "bg-blue-600",
        lightColor: "bg-blue-50",
        borderColor: "border-blue-200",
        textColor: "text-blue-700",
        icon: "🤸",
        rows: [
            { day: "Montag bis Donnerstag", time: "14:00 – 19:00 Uhr" },
            { day: "Freitag", time: "14:00 – 21:00 Uhr" },
            { day: "Samstag", time: "09:00 – 21:00 Uhr" },
            { day: "Sonntag / Feiertags", time: "09:00 – 19:00 Uhr" },
        ],
    },
    {
        id: "sportsbar-bowling",
        label: "Sportsbar | 9Pin-Bowling",
        color: "bg-amber-600",
        lightColor: "bg-amber-50",
        borderColor: "border-amber-200",
        textColor: "text-amber-700",
        icon: "🎳",
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
        id: "klettern",
        label: "Klettern | Bouldern | Squash",
        color: "bg-orange-600",
        lightColor: "bg-orange-50",
        borderColor: "border-orange-200",
        textColor: "text-orange-700",
        icon: "🧗",
        rows: [
            { day: "Montag, Mittwoch & Freitag", time: "14:00 – 22:00 Uhr" },
            { day: "Dienstag & Donnerstag", time: "09:00 – 22:00 Uhr" },
            { day: "Samstag / Sonntag / Feiertags", time: "09:00 – 22:00 Uhr" },
        ],
    },
    {
        id: "tennis",
        label: "Tennis – mit Reservierung",
        color: "bg-emerald-600",
        lightColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        textColor: "text-emerald-700",
        icon: "🎾",
        note: "Reservierung erforderlich – telefonisch oder online.",
        rows: [
            { day: "Montag bis Donnerstag", time: "08:00 – 14:00 & 19:00 – 23:00 Uhr" },
            { day: "Freitag", time: "08:00 – 14:00 & 21:00 – 23:00 Uhr" },
            { day: "Samstag", time: "21:00 – 23:00 Uhr" },
            { day: "Sonntag", time: "19:00 – 23:00 Uhr" },
        ],
    },
];

function AccordionPill({ schedule, isOpen, onToggle }: {
    schedule: typeof schedules[0];
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className={`rounded-3xl border-2 overflow-hidden transition-all duration-300 ${isOpen ? schedule.borderColor : "border-slate-100"} bg-white shadow-sm hover:shadow-md`}>
            {/* Pill Header */}
            <button
                onClick={onToggle}
                className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200 ${isOpen ? schedule.lightColor : "hover:bg-slate-50"}`}
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${schedule.color} rounded-2xl flex items-center justify-center text-2xl shadow-sm`}>
                        {schedule.icon}
                    </div>
                    <span className={`text-lg font-black tracking-tight ${isOpen ? schedule.textColor : "text-slate-800"}`}>
                        {schedule.label}
                    </span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? `${schedule.color} text-white` : "bg-slate-100 text-slate-400"}`}>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {/* Expanded Content */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className={`px-6 pb-6 pt-2 ${schedule.lightColor}`}>
                    {schedule.note && (
                        <p className={`text-sm font-medium ${schedule.textColor} mb-4 flex items-center gap-2`}>
                            <span>ℹ️</span> {schedule.note}
                        </p>
                    )}
                    <div className="space-y-3">
                        {schedule.rows.map((row, i) => (
                            <div key={i} className="flex justify-between items-center py-3 border-b border-white/70 last:border-0">
                                <span className="text-slate-600 font-medium text-sm md:text-base">{row.day}</span>
                                <span className={`font-black text-sm md:text-base ${schedule.textColor}`}>{row.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function OeffnungszeitenPage() {
    const [openId, setOpenId] = useState<string>("trampolin");

    const toggle = (id: string) => setOpenId(openId === id ? "" : id);

    return (
        <main className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/activities/Sportsbar/DSC2133-scaled.jpg')`,
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="absolute inset-0 bg-emerald-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg text-white">
                        Öffnungszeiten,<br />
                        <span className="text-4xl md:text-5xl font-light opacity-90">Preise & Tickets</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">
                        Wann wir für dich da sind – alle Zeiten auf einen Blick.
                    </p>
                </div>
            </section>

            {/* Welcome & Info Section */}
            <section className="bg-white border-b border-slate-100">
                <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
                    {/* Welcome Text */}
                    <div>
                        <span className="inline-block text-sky-600 font-bold tracking-wider uppercase text-xs mb-3">Willkommen im arl.park</span>
                        <h2 className="text-3xl font-black text-slate-900 mb-5 leading-tight">Dein Indoor Erlebnispark in St. Anton</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Im ideal erreichbaren Sportcenter arl.park in St. Anton am Arlberg, der direkt beim Bahnhof gelegen ist, sind diverse sportliche Erlebnisse unter einem Dach vereint: Von Klettern, über Trampolin-Hüpfen, Squash, Tennis bis hin zu Bowling und mehr. Auch das kulinarische Angebot kann sich sehen lassen – im Zentrum des Sportbereichs gibt es mit der „Sportsbar" einen Ausschank und eine Vielzahl köstlicher Snacks und erfrischender Getränke.
                        </p>
                    </div>

                    {/* Reservation Info */}
                    <div className="bg-sky-50 rounded-3xl p-8 border border-sky-100">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center text-white text-lg">📋</div>
                            <h3 className="text-xl font-black text-slate-900">Info zu Reservierungen</h3>
                        </div>
                        <ul className="space-y-4 text-slate-600 text-sm leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 font-black mt-0.5">✓</span>
                                <span><strong className="text-slate-800">Trampolin & Klettern:</strong> Keine Reservierung notwendig (wird nur an Schlechtwettertagen empfohlen).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-sky-500 font-black mt-0.5">→</span>
                                <span><strong className="text-slate-800">9Pin-Bowling, Squash, Tischtennis, Tennis & Pickleball:</strong> Vorab reservieren empfohlen – telefonisch oder online.</span>
                            </li>
                        </ul>
                        <div className="mt-6 pt-5 border-t border-sky-200 flex flex-col sm:flex-row gap-3">
                            <a href="tel:+4366099880066" className="flex items-center gap-2 text-sky-700 font-bold text-sm hover:underline">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                +43 660 99 88 066
                            </a>
                            <Link href="https://v5.bookandplay.com/p_pro_arlpark.php" target="_blank" className="flex items-center gap-2 text-sky-700 font-bold text-sm hover:underline">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                Online reservieren
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expandable Schedules */}
            <section className="max-w-3xl mx-auto px-4 md:px-6 py-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-slate-900 mb-2">Öffnungszeiten im Detail</h2>
                    <p className="text-slate-500">Wähle einen Bereich, um die Zeiten aufzuklappen.</p>
                </div>

                <div className="space-y-4">
                    {schedules.map((s) => (
                        <AccordionPill
                            key={s.id}
                            schedule={s}
                            isOpen={openId === s.id}
                            onToggle={() => toggle(s.id)}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-8 md:p-10 text-white text-center shadow-xl shadow-sky-500/20">
                    <h3 className="text-2xl font-black mb-3">Bereit für dein Erlebnis?</h3>
                    <p className="text-sky-100 mb-8 text-lg">Tickets & Reservierungen direkt online – schnell und einfach.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="https://v5.bookandplay.com/p_pro_arlpark.php"
                            target="_blank"
                            className="bg-white text-sky-700 font-black px-8 py-3.5 rounded-full hover:bg-sky-50 transition-colors shadow-lg inline-flex items-center gap-2 justify-center"
                        >
                            Tickets buchen
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                        <Link
                            href="/preise"
                            className="bg-white/10 border-2 border-white/30 text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors inline-flex items-center gap-2 justify-center"
                        >
                            Preisübersicht
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
