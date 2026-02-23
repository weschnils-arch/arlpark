"use client";

import Image from "next/image";

import Link from "next/link";
import { TableTennisIcon } from "@/components/Icons";

export default function TischtennisPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/tischtennis/1.webp')`,
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="absolute inset-0 bg-red-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg text-white">
                        Tischtennis
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Schnelle Ballwechsel an der Platte.</p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Tischtennis Action</h2>
                    <p className="text-lg text-slate-600">
                        Ob Rundlauf mit Freunden oder ein spannendes Match – Tischtennis macht immer Spaß!
                    </p>
                </div>

                <div className="glass-card bg-white p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Preise</h2>
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Tischmiete (60 Min)</span>
                            <span className="text-xl font-black text-slate-900">12,00 €</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Schlägerverleih</span>
                            <span className="text-xl font-black text-slate-900">3,00 €</span>
                        </div>
                    </div>
                    <Link
                        href="https://v5.bookandplay.com/p_pro_arlpark.php"
                        target="_blank"
                        className="btn-primary bg-gradient-to-r from-red-500 to-rose-600 shadow-red-500/30 w-full flex items-center justify-center gap-2 text-lg"
                    >
                        Tisch reservieren
                    </Link>
                </div>
            </section>
        </main>
    );
}
