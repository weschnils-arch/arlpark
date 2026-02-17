"use client";

import Link from "next/link";
import { PickleballIcon } from "@/components/Icons";

export default function PickleballPage() {
    return (
        <main className="bg-white min-h-screen">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-lime-900/40 z-10" />
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                    <span className="text-4xl text-white/50 font-bold">Foto: Pickleball</span>
                </div>

                <div className="relative z-20 text-center text-white px-4">
                    <div className="w-20 h-20 bg-lime-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <PickleballIcon size={40} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6">Pickleball</h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Entdecke den Trendsport aus den USA!
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Was ist Pickleball?</h2>
                    <div className="prose prose-lg text-slate-600 mb-8">
                        <p>
                            Pickleball ist eine Mischung aus Tennis, Badminton und Tischtennis. Es wird auf einem Badminton-großen Feld mit speziellen Schlägern und einem löchrigen Plastikball gespielt.
                        </p>
                        <p>
                            Der Sport ist leicht zu lernen, aber rasant und macht unglaublich viel Spaß. Perfekt für alle Altersgruppen!
                        </p>
                        <ul className="list-none space-y-2 mt-4 pl-0">
                            {["Einfach zu lernen", "Geringe Gelenkbelastung", "Hoher Spaßfaktor", "Für Singles und Doubles"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center text-sm font-bold">✓</span>
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
                            <span className="font-medium text-slate-700">Court Miete (60 Min)</span>
                            <span className="text-xl font-black text-slate-900">24,00 €</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Schläger & Bälle</span>
                            <span className="text-xl font-black text-slate-900">inklusive</span>
                        </div>
                    </div>
                    <Link
                        href="https://v5.bookandplay.com/p_pro_arlpark.php"
                        target="_blank"
                        className="btn-primary bg-gradient-to-r from-lime-500 to-green-600 shadow-lime-500/30 w-full flex items-center justify-center gap-2 text-lg"
                    >
                        Pickleball Court buchen
                    </Link>
                </div>
            </section>
        </main>
    );
}
