"use client";

import Link from "next/link";
import { TennisIcon } from "@/components/Icons";

export default function TennisPage() {
    return (
        <main className="bg-white min-h-screen">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-amber-900/40 z-10" />
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                    <span className="text-4xl text-white/50 font-bold">Foto: Tennisplatz</span>
                </div>

                <div className="relative z-20 text-center text-white px-4">
                    <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <TennisIcon size={40} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6">Tennis</h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Spiel, Satz und Sieg auf unserem Indoor-Platz.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Indoor Tennis</h2>
                    <p className="text-lg text-slate-600 mb-6">
                        Genieße wetterunabhängiges Tennisvergnügen. Unser Platz bietet optimale Bedingungen für spannende Matches.
                    </p>
                </div>

                <div className="glass-card bg-white p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Preise</h2>
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Platzmiete (60 Min)</span>
                            <span className="text-xl font-black text-slate-900">28,00 €</span>
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
