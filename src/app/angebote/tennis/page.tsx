"use client";

import Image from "next/image";

import Link from "next/link";
import { TennisIcon } from "@/components/Icons";

export default function TennisPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/activities/Tennis_Pickleball/DSC2637-scaled.jpg')`,
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="absolute inset-0 bg-lime-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg text-white">
                        Tennis
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Spiel, Satz und Sieg auf unserem Indoor-Platz.</p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Indoor Tennis</h2>
                    <p className="text-lg text-slate-600 mb-6">
                        Genieße wetterunabhängiges Tennisvergnügen. Unser Indoor Platz mit großer Fensterfläche bietet optimale Bedingungen für spannende Matches.
                    </p>
                    <ul className="list-none space-y-2 pl-0 mb-6">
                        {["Trainer auf Anfrage", "Schläger und Hallenschuhe Verleih", "Indoor Platz mit großer Fensterfläche", "Einzel & Doppel"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-600">
                                <span className="w-6 h-6 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center text-sm font-bold">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                        <p className="text-sm text-amber-800 font-medium">Hinweis: Juli – September kein Tennis verfügbar.</p>
                    </div>
                </div>

                <div className="glass-card bg-white p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Preise</h2>
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Platzmiete / Stunde</span>
                            <span className="text-xl font-black text-slate-900">27,00 €</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Primetime (19–21 Uhr)</span>
                            <span className="text-xl font-black text-slate-900">+5,00 €</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">10er Block</span>
                            <span className="text-xl font-black text-slate-900">243,00 €</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Schläger inkl. Bälle</span>
                            <span className="text-xl font-black text-slate-900">5,00 €</span>
                        </div>
                    </div>
                    <Link
                        href="https://v5.bookandplay.com/p_pro_arlpark.php"
                        target="_blank"
                        className="btn-primary bg-gradient-to-r from-amber-500 to-orange-600 shadow-amber-500/30 w-full flex items-center justify-center gap-2 text-lg"
                    >
                        Platz buchen
                    </Link>
                </div>
            </section>
        </main>
    );
}
