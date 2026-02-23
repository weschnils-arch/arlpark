"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BowlingIcon } from "@/components/Icons";

export default function BowlingPage() {
    const [priceType, setPriceType] = useState("bahn");

    const prices = {
        bahn: [
            { label: "Pro Bahn / Stunde (bis 17 Uhr)", price: "24,00 €" },
            { label: "Pro Bahn / Stunde (ab 17 Uhr)", price: "30,00 €" },
        ],
        verleih: [
            { label: "Leihschuhe (pro Person)", price: "3,00 €" },
            { label: "Socken (Kauf)", price: "3,00 €" },
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
                        backgroundImage: "url('/images/activities/Bowling/DSC2041-scaled.jpg')",
                        backgroundAttachment: "fixed",
                    }}
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
                        9-Pin Bowling
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Vier moderne Bahnen – Spaß für Groß und Klein.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

                <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Bowling im arl.park</h2>
                    <div className="prose prose-lg text-slate-600 mb-8">
                        <p>
                            Unsere Bowlinganlage ist der perfekte Ort für gesellige Abende. Ob Kindergeburtstag, Firmenfeier oder einfach so mit Freunden.
                        </p>
                        <ul className="list-none space-y-2 mt-4 pl-0">
                            {[
                                "4 moderne Bahnen",
                                "Kinder-Bumper (Banden) möglich",
                                "Leihschuhe in allen Größen",
                                "Direkt an der Sportsbar",
                                "Musik & Disco-Bowling Events"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="glass-card bg-white p-8 md:p-10 sticky top-24">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center justify-between">
                        Preise
                        <span className="text-sm font-normal text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Pro Bahn</span>
                    </h2>

                    <div className="mb-8">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Preisübersicht:</label>
                        <select
                            value={priceType}
                            onChange={(e) => setPriceType(e.target.value)}
                            className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer appearance-none"
                        >
                            <option value="bahn">Bahnmiete</option>
                            <option value="verleih">Schuhe & Zubehör</option>
                        </select>
                    </div>

                    <div className="space-y-4 mb-8">
                        {/* @ts-expect-error type safety ignored */}
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
                        className="btn-primary bg-gradient-to-r from-indigo-500 to-purple-600 shadow-indigo-500/30 w-full flex items-center justify-center gap-2 text-lg"
                    >
                        Jetzt Bahn reservieren
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </div>

            </section>
        </main>
    );
}
