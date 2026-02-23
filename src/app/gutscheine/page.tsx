"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { GutscheinIcon } from "@/components/Icons";

export default function GutscheinePage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/activities/Trampoline/DSC0345-scaled.jpg')",
                        backgroundAttachment: "fixed",
                    }}
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-rose-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
                        Gutscheine
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Das perfekte Geschenk für Action-Liebhaber!</p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">

                <div className="glass-card bg-white p-8 md:p-12 text-center max-w-4xl mx-auto border-2 border-emerald-500 shadow-2xl relative overflow-hidden">
                    {/* Decorative ribbons content */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-emerald-100 rounded-full blur-2xl -z-10"></div>

                    <h2 className="text-3xl font-black text-slate-900 mb-6">Der ARL.PARK Wertgutschein</h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                        Unsere Gutscheine sind Wertgutscheine und können flexibel für alle Angebote im arl.park eingelöst werden. Egal ob Trampolin, Klettern, Bowling oder in der Gastronomie.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-2">💎 Flexibler Betrag</h3>
                            <p className="text-slate-600">Du bestimmst den Wert des Gutscheins ganz individuell.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-2">🖨️ Print @ Home</h3>
                            <p className="text-slate-600">Bequem online kaufen und direkt zu Hause ausdrucken.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-2">⏳ Lange Gültigkeit</h3>
                            <p className="text-slate-600">Unsere Gutscheine sind 2 Jahre lang gültig.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-2">🎁 Für alles einlösbar</h3>
                            <p className="text-slate-600">Gültig für Eintritte, Ausrüstung, Kurse und Bar.</p>
                        </div>
                    </div>

                    <Link
                        href="https://v5.bookandplay.com/p_pro_arlpark.php"
                        target="_blank"
                        className="btn-primary bg-emerald-600 text-white px-12 py-5 text-xl shadow-emerald-500/30 hover:scale-105 inline-block"
                    >
                        Gutschein jetzt kaufen
                    </Link>
                </div>

            </section>
        </main>
    );
}
