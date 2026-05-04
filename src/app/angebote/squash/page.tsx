"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SquashIcon } from "@/components/Icons";
import WeitereAngeboteSection from "@/components/WeitereAngeboteSection";
import EarlyBirdBlock from "@/components/EarlyBirdBlock";

export default function SquashPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/activities/Squash_Tischtennis/DSC2580-scaled.jpg')",
                        backgroundAttachment: "fixed",
                    }}
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-purple-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
                        Squash
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Schnelligkeit, Präzision und Spielspaß pur.</p>
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
                            {["Professioneller Court", "Schläger und Hallenschuhe zum Verleih", "Einzel oder Doppel"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-bold">✓</span>
                                    {item}

                                </li>
                            ))}
                        </ul>
                    </div>

                    <EarlyBirdBlock />
                </div>

                <div className="glass-card bg-white p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Preise</h2>
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Court Miete / Stunde</span>
                            <span className="text-xl font-black text-slate-900">15,00 €</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">10er Block</span>
                            <span className="text-xl font-black text-slate-900">135,00 €</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Schläger inkl. Bälle</span>
                            <span className="text-xl font-black text-slate-900">5,00 €</span>
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

            <WeitereAngeboteSection currentHref="/angebote/squash" />
        </main>
    );
}
