"use client";

import Link from "next/link";
import { KidsPlayIcon } from "@/components/Icons";

export default function KidsPlayPage() {
    return (
        <main className="bg-white min-h-screen">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-pink-900/40 z-10" />
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                    <span className="text-4xl text-white/50 font-bold">Foto: Kids World</span>
                </div>

                <div className="relative z-20 text-center text-white px-4">
                    <div className="w-20 h-20 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <KidsPlayIcon size={40} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6">Kids World</h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Das Paradies für unsere kleinsten Gäste.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Spiel & Spaß sicher erleben</h2>
                    <div className="prose prose-lg text-slate-600 mb-8">
                        <p>
                            In unserer Kids World können sich Kinder bis 8 Jahre richtig austoben. Sicher, behütet und mit jeder Menge Spaß.
                        </p>
                        <ul className="list-none space-y-2 mt-4 pl-0">
                            {[
                                "Bällebad & Rutschen",
                                "Weiche Kletterelemente",
                                "Altersgerechte Spiele",
                                "Sitzbereich für Eltern in der Nähe",
                                "Direkter Zugang zum Café"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="glass-card bg-white p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Eintrittspreise</h2>
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Tageskarte Kind</span>
                            <span className="text-xl font-black text-slate-900">8,00 €</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Begleitperson</span>
                            <span className="text-xl font-black text-slate-900">frei</span>
                        </div>
                    </div>
                    <p className="text-slate-500 text-sm mb-6">
                        Keine Reservierung notwendig. Tickets einfach vor Ort kaufen.
                    </p>
                </div>
            </section>
        </main>
    );
}
