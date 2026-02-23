"use client";

import Link from "next/link";
import Image from "next/image";
import { SchuleIcon, FirmaIcon, CheckIcon } from "@/components/Icons";

export default function GruppenSchulenPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/activities/Climbing/DSC2726-scaled.jpg')",
                        backgroundAttachment: "fixed",
                    }}
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-teal-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
                        Gruppen & Schulen
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Gemeinsam erleben – für Schulen, Vereine und Firmen.</p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto space-y-20">

                {/* Schulen & Vereine */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                            <SchuleIcon className="text-blue-600" size={32} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Schulen & Sportvereine</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Bringen Sie Bewegung in den Schulalltag! Im arl.park können sich Schüler sicher austoben und neue Sportarten entdecken.
                        </p>
                        <h3 className="font-bold text-slate-900 mb-4">Ihre Vorteile:</h3>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Attraktive Gruppenrabatte ab 8 Personen",
                                "Flexible Zeitfenster am Vormittag",
                                "Kostenlose Begleitpersonen (nach Absprache)",
                                "Kombinierbare Aktivitäten"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckIcon className="w-5 h-5 text-emerald-500" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/kontakt" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                            Individuelles Angebot anfordern &rarr;
                        </Link>
                    </div>
                    <div className="bg-slate-100 rounded-3xl h-80 lg:h-full min-h-[300px] flex items-center justify-center">
                        <span className="text-slate-400 font-bold">Foto: Schulklasse</span>
                    </div>
                </div>

                {/* Firmenevents */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 bg-slate-100 rounded-3xl h-80 lg:h-full min-h-[300px] flex items-center justify-center">
                        <span className="text-slate-400 font-bold">Foto: Teamevent</span>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                            <FirmaIcon className="text-indigo-600" size={32} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Firmenevents & Teambuilding</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Stärken Sie den Teamgeist abseits des Büros. Ob sportliche Challenge oder entspanntes Bowling-Turnier – wir haben das passende Programm.
                        </p>
                        <h3 className="font-bold text-slate-900 mb-4">Möglichkeiten:</h3>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Exklusive Anmietung von Bereichen",
                                "Geführte Teambuilding-Spiele",
                                "Catering & Sektempfang",
                                "Tagungsraum optional verfügbar"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckIcon className="w-5 h-5 text-emerald-500" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/kontakt" className="text-indigo-600 font-bold hover:underline flex items-center gap-2">
                            Firmenevent planen &rarr;
                        </Link>
                    </div>
                </div>

            </section>

            {/* CTA */}
            <section className="bg-slate-50 py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Planen Sie Ihr Event mit uns</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Wir unterstützen Sie gerne bei der Organisation. Kontaktieren Sie uns für ein unverbindliches Angebot.
                    </p>
                    <Link href="/kontakt" className="btn-primary">
                        Kontaktformular
                    </Link>
                </div>
            </section>
        </main>
    );
}
