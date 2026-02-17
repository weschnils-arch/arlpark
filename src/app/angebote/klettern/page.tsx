"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { KletternIcon } from "@/components/Icons";

export default function KletternPage() {
    const [priceType, setPriceType] = useState("tageskarten");

    const prices = {
        tageskarten: [
            { label: "Erwachsene", price: "12,00 €" },
            { label: "Jugendliche (14-17)", price: "10,00 €" },
            { label: "Kinder (6-13)", price: "7,00 €" },
        ],
        verleih: [
            { label: "Kletterschuhe", price: "3,50 €" },
            { label: "Klettergurt", price: "3,00 €" },
            { label: "Seil + Sicherungsgerät", price: "4,50 €" },
        ],
        kurse: [
            { label: "Schnupperkurs (2h)", price: "45,00 €" },
            { label: "Grundkurs (3x 2h)", price: "125,00 €" },
        ]
    };

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-emerald-900/40 z-10" />
                {/* Hero Image - Placeholder */}
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                    <span className="text-4xl text-white/50 font-bold">Foto: Kletterhalle</span>
                </div>

                <div className="relative z-20 text-center text-white px-4">
                    <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <KletternIcon size={40} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6">Klettern & Bouldern</h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Hoch hinaus auf 130 Routen und im großen Boulderbereich.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

                {/* Left Column: Info & Partner */}
                <div className="space-y-12">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Die Kletter-Arena</h2>
                        <div className="prose prose-lg text-slate-600">
                            <p>
                                Auf 14 Metern Höhe bieten wir eine massive Kletterfläche für alle Schwierigkeitsgrade. Von der sanften Platte bis zum spektakulären Überhang.
                            </p>
                            <ul className="list-none space-y-2 mt-4 pl-0">
                                {["Ca. 130 Routen", "Schwierigkeit 3 bis 8c", "Boulderbereich", "Selbstsicherungs-Automaten (Auto-Belay)", "Moonboard"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Partner Section */}
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 transform transition-all hover:shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                            <h3 className="text-2xl font-bold text-slate-900">Partner: Kletterzentrum Imst</h3>
                        </div>
                        <p className="text-slate-600 mb-6">
                            Wir kooperieren eng mit dem weltbekannten Kletterzentrum Imst. Profitiere von erstklassigen Kursen und Trainern.
                        </p>
                        <Link
                            href="https://kletterhalle.com"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline"
                        >
                            Besuche kletterhalle.com
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Pricing & Booking */}
                <div className="space-y-8">
                    {/* Pricing Card */}
                    <div className="glass-card bg-white p-8 md:p-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center justify-between">
                            Preise
                        </h2>

                        <div className="mb-8">
                            <label htmlFor="price-select" className="block text-sm font-medium text-slate-700 mb-2">Kategorie wählen:</label>
                            <select
                                id="price-select"
                                value={priceType}
                                onChange={(e) => setPriceType(e.target.value)}
                                className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer appearance-none"
                            >
                                <option value="tageskarten">Tageskarten</option>
                                <option value="verleih">Verleihmaterial</option>
                                <option value="kurse">Kurse & Training</option>
                            </select>
                        </div>

                        <div className="space-y-4 mb-8">
                            {/* @ts-expect-error type safety ignored for brevity */}
                            {prices[priceType].map((item: any, i: number) => (
                                <div key={i} className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                                    <span className="font-medium text-slate-700">{item.label}</span>
                                    <span className="text-xl font-black text-slate-900">{item.price}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="https://v5.bookandplay.com/p_pro_arlpark.php"
                            target="_blank"
                            className="btn-primary bg-gradient-to-r from-emerald-500 to-teal-600 shadow-emerald-500/30 w-full flex items-center justify-center gap-2 text-lg"
                        >
                            Tickets buchen
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>

                    {/* Monday.com Form Placeholder */}
                    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Anmeldung für Kurse</h3>
                        <div className="bg-slate-100 rounded-xl h-64 flex items-center justify-center flex-col text-slate-500 p-4 text-center border-2 border-dashed border-slate-300">
                            <span className="block mb-2 font-bold">[Monday.com Formular Embed]</span>
                            <span className="text-sm">Hier wird das Anmeldeformular von Monday.com eingebunden.</span>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}
