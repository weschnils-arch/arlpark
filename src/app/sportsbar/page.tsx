"use client";

import Link from "next/link";
import Image from "next/image";
import { FoodIcon } from "@/components/Icons";
import PremiumMenuViewer from "@/components/PremiumMenuViewer";

export default function SportsbarPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/activities/Sportsbar/DSC2065-scaled.jpg')",
                        backgroundAttachment: "fixed",
                    }}
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-amber-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
                        Sportsbar
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Genieße kühle Drinks, warme Küche und Live-Sport.</p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Food & Drink Info */}
                    <div>
                        <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-bold text-sm mb-6">
                            🍕 Durchgehend warme Küche
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Leckeres für den Hunger</h2>
                        <div className="prose prose-lg text-slate-600 mb-8">
                            <p>
                                Unsere Küche versorgt euch mit frisch zubereiteten Snacks und warmen Gerichten. Perfekt zur Stärkung nach dem Bouldern oder Trampolinspringen.
                            </p>
                            <p>
                                Dazu servieren wir kühle Drinks, Kaffeespezialitäten und natürlich frisches Bier vom Fass.
                            </p>
                        </div>

                        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 mb-6">
                            <h3 className="font-bold text-slate-900 mb-3">Highlights</h3>
                            <ul className="text-sm text-slate-600 space-y-1">
                                <li>Biertender</li>
                                <li>Catering auf Anfrage</li>
                                <li>Junggesellen- und Firmenabende</li>
                                <li>Gruppenveranstaltungen</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 max-w-md">
                            <h3 className="font-bold text-slate-900 mb-2">Speisekarte</h3>
                            <p className="text-sm text-slate-500 mb-4">Hier kannst du dir vorab Appetit holen.</p>
                            <a href="#" className="flex items-center gap-3 text-amber-600 font-bold hover:underline p-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                Speisekarte herunterladen (PDF)
                            </a>
                        </div>
                    </div>

                    {/* Games & Entertainment */}
                    <div className="glass-card bg-white p-8 md:p-10 border-t-4 border-amber-500">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">More than just Food</h2>
                        <p className="text-slate-600 mb-4">
                            In unserer Sportsbar gibt es jede Menge Entertainment abseits der großen Sportflächen. Alle Geräte mit Münzeinwurf. Billard und Tischfußball pro Spiel 1 €. Kartenzahlung — Credits an der Bar erhältlich.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: "Billard", icon: "🎱" },
                                { name: "Darts", icon: "🎯" },
                                { name: "Tischfußball", icon: "⚽" },
                                { name: "Boxautomat", icon: "🥊" },
                                { name: "Kickautomat", icon: "👣" },
                            ].map((game, i) => (
                                <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-amber-50 hover:border-amber-200 transition-colors">
                                    <span className="text-3xl mb-2">{game.icon}</span>
                                    <span className="font-bold text-slate-700">{game.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Viewer Section placed right before the Footer which contains "So finden Sie uns" */}
            <PremiumMenuViewer />
        </main>
    );
}
