"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { TrampolinIcon } from "@/components/Icons";

export default function TrampolinPage() {
    const [priceType, setPriceType] = useState("einzel");

    const prices = {
        einzel: [
            { label: "1 Stunde", price: "17,00 €" },
            { label: "2 Stunden", price: "22,00 €" },
        ],
        block: [
            { label: "10er Block (NEU!)", price: "153,00 €", highlight: true },
        ],
        gruppen: [
            { label: "Schulklasse (pro Person)", price: "12,00 €" },
            { label: "Verein (pro Person)", price: "12,00 €" },
        ]
    };

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/activities/Trampoline/DSC0523-scaled.jpg')",
                        backgroundAttachment: "fixed",
                    }}
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-blue-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
                        Trampolin
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">1.000 m² Indoor Action für die ganze Familie.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

                {/* Info Text */}
                <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Der totale Sprungspaß</h2>
                    <div className="prose prose-lg text-slate-600 mb-8">
                        <p>
                            Unsere Trampolinhalle bietet auf über 1.000 m² alles, was das Springer-Herz begehrt. Egal ob Anfänger oder Profi, hier kommt jeder auf seine Kosten.
                        </p>
                        <ul className="list-none space-y-2 mt-4 pl-0">
                            {[
                                "Freejump Area mit über 20 Trampolinen",
                                "Ninja Warrior Parcours",
                                "Bagjump (Luftkissen)",
                                "Schnitzelgrube (Foampit)",
                                "ValoJump (Interaktives Trampolin-Videospiel)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start">
                        <span className="text-2xl">🧦</span>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-1">Wichtig: Stopper-Socken</h3>
                            <p className="text-sm text-slate-600">
                                Aus Sicherheitsgründen sind Stopper-Socken Pflicht! Du kannst deine eigenen mitbringen oder bei uns für 3,00 € kaufen.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pricing Card with Dropdown */}
                <div className="glass-card bg-white p-8 md:p-10 sticky top-24">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center justify-between">
                        Preise
                        <span className="text-sm font-normal text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Pro Person</span>
                    </h2>

                    {/* Dropdown Selector */}
                    <div className="mb-8">
                        <label htmlFor="price-select" className="block text-sm font-medium text-slate-700 mb-2">Ticket-Art wählen:</label>
                        <select
                            id="price-select"
                            value={priceType}
                            onChange={(e) => setPriceType(e.target.value)}
                            className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer appearance-none"
                        >
                            <option value="einzel">Einzeltickets (Erwachsene/Kinder)</option>
                            <option value="block">10er Block</option>
                            <option value="gruppen">Gruppen & Vereine</option>
                        </select>
                    </div>

                    {/* Price Display */}
                    <div className="space-y-4 mb-8">
                        {/* @ts-expect-error - TS doesn't know the keys match perfectly here but they do */}
                        {prices[priceType].map((item: any, i: number) => (
                            <div
                                key={i}
                                className={`flex justify-between items-center p-4 rounded-xl ${item.highlight ? 'bg-sky-50 border-2 border-sky-500 shadow-md transform scale-105' : 'bg-slate-50 border border-slate-100'}`}
                            >
                                <span className={`font-medium ${item.highlight ? 'text-sky-900 font-bold' : 'text-slate-700'}`}>{item.label}</span>
                                <span className={`text-xl font-black ${item.highlight ? 'text-sky-600' : 'text-slate-900'}`}>{item.price}</span>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="https://v5.bookandplay.com/p_pro_arlpark.php"
                        target="_blank"
                        className="btn-primary w-full flex items-center justify-center gap-2 text-lg"
                    >
                        Jetzt Ticket buchen
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                    <p className="text-xs text-center text-slate-400 mt-4">
                        Keine Reservierung notwendig! Einfach vorbeikommen.
                    </p>
                </div>

            </section>
        </main>
    );
}
