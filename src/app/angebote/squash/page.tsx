"use client";

import Link from "next/link";
import { useState } from "react";
import { SquashIcon } from "@/components/Icons";

export default function SquashPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-violet-900/40 z-10" />
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                    <span className="text-4xl text-white/50 font-bold">Foto: Squash Court</span>
                </div>

                <div className="relative z-20 text-center text-white px-4">
                    <div className="w-20 h-20 bg-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <SquashIcon size={40} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6">Squash</h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Maximale Power auf dem Court.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Squash im arl.park</h2>
                    <div className="prose prose-lg text-slate-600 mb-8">
                        <p>
                            Squash ist der ideale Sport, um sich so richtig auszupowern. Technik, Taktik und Kondition sind gefragt.
                        </p>
                        <ul className="list-none space-y-2 mt-4 pl-0">
                            {["Professioneller Court", "Schlägerverleih", "Einzel oder Doppel", "Sauna nach dem Spiel (optional)"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-bold">✓</span>
                                    {item}

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="glass-card bg-white p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Preise</h2>
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Court Miete (30 Min)</span>
                            <span className="text-xl font-black text-slate-900">12,00 €</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Court Miete (60 Min)</span>
                            <span className="text-xl font-black text-slate-900">24,00 €</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Leihschläger</span>
                            <span className="text-xl font-black text-slate-900">4,00 €</span>
                        </div>
                    </div>

                    <Link
                        href="https://v5.bookandplay.com/p_pro_arlpark.php"
                        target="_blank"
                        className="btn-primary bg-gradient-to-r from-violet-500 to-fuchsia-600 shadow-violet-500/30 w-full flex items-center justify-center gap-2 text-lg"
                    >
                        Court buchen
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </div>
            </section>
        </main>
    );
}
