"use client";

import Image from "next/image";

import Link from "next/link";
import { ClockIcon } from "@/components/Icons";

export default function OeffnungszeitenPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
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
                        Öffnungszeiten
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Wann wir für dich da sind.</p>
                </div>
            </section>
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h1 className="section-title text-slate-900">Öffnungszeiten</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Wir haben täglich für euch geöffnet! Hier findest du alle Zeiten im Detail.
                    </p>
                </div>

                <div className="glass-card bg-white p-8 md:p-10 border-l-8 border-sky-500">
                    <div className="flex items-center gap-4 mb-8">
                        <ClockIcon className="text-sky-600" size={40} />
                        <h2 className="text-2xl font-bold text-slate-900">Reguläre Öffnungszeiten</h2>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3 block border-b border-slate-100 pb-2">Trampolinhalle</h3>
                            <div className="grid grid-cols-2 gap-4 text-slate-600">
                                <div>Montag – Freitag</div>
                                <div className="font-bold text-slate-900 text-right">14:00 – 22:00 Uhr</div>
                                <div>Samstag, Sonntag & Feiertage</div>
                                <div className="font-bold text-slate-900 text-right">09:00 – 22:00 Uhr</div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3 block border-b border-slate-100 pb-2">Klettern & Bouldern</h3>
                            <div className="grid grid-cols-2 gap-4 text-slate-600">
                                <div>Täglich</div>
                                <div className="font-bold text-slate-900 text-right">09:00 – 22:00 Uhr</div>
                            </div>
                            <p className="text-sm text-slate-500 mt-2 italic">Zutritt von 09:00 - 14:00 Uhr nur mit Ticket oder Abo (Kasse ab 14:00 Uhr besetzt).</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3 block border-b border-slate-100 pb-2">Bowling, Squash & Kegeln</h3>
                            <div className="grid grid-cols-2 gap-4 text-slate-600">
                                <div>Täglich</div>
                                <div className="font-bold text-slate-900 text-right">14:00 – 23:00 Uhr</div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3 block border-b border-slate-100 pb-2">Sportsbar</h3>
                            <div className="grid grid-cols-2 gap-4 text-slate-600">
                                <div>Täglich</div>
                                <div className="font-bold text-slate-900 text-right">14:00 – 24:00 Uhr</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 bg-amber-50 rounded-2xl p-6 border border-amber-100 flex items-start gap-4">
                    <span className="text-3xl">⚠️</span>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Sonderöffnungszeiten</h3>
                        <p className="text-slate-600">
                            Für Schulklassen und Gruppen öffnen wir nach Vereinbarung auch am Vormittag.
                            Bitte kontaktiere uns für eine individuelle Anfrage.
                        </p>
                        <Link href="/kontakt" className="text-amber-700 font-bold hover:underline mt-2 inline-block">
                            Kontakt aufnehmen &rarr;
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
