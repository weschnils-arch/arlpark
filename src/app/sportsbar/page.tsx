"use client";

import Link from "next/link";
import { FoodIcon } from "@/components/Icons";

export default function SportsbarPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-amber-900/40 z-10" />
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                    <span className="text-4xl text-white/50 font-bold">Foto: Sportsbar / Essen</span>
                </div>

                <div className="relative z-20 text-center text-white px-4">
                    <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <FoodIcon size={40} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6">Sportsbar</h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Relax & Enjoy. Drinks, Snacks und Action.
                    </p>
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
                                Unsere Küche versorgt euch mit frisch zubereiteten Snacks, Pizza, Burgern und knackigen Salaten. Perfekt zur Stärkung nach dem Bouldern oder Trampolinspringen.
                            </p>
                            <p>
                                Dazu servieren wir kühle Drinks, Kaffeespezialitäten und natürlich frisches Bier vom Fass.
                            </p>
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
                        <p className="text-slate-600 mb-8">
                            In unserer Sportsbar gibt es jede Menge Entertainment abseits der großen Sportflächen.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: "Billard", icon: "🎱" },
                                { name: "Darts", icon: "🎯" },
                                { name: "Tischfußball", icon: "⚽" },
                                { name: "Boxautomat", icon: "🥊" },
                                { name: "Kickautomat", icon: "👣" },
                                { name: "Live Sport", icon: "📺" },
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
        </main>
    );
}
