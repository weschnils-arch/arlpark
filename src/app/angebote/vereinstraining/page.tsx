"use client";

import Image from "next/image";

import Link from "next/link";
import { TrainingIcon } from "@/components/Icons";

export default function VereinstrainingPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/activities/Climbing/20230629_155046-scaled.jpg')`,
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="absolute inset-0 bg-indigo-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg text-white">
                        Vereinstraining
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Professionelle Trainingsmöglichkeiten für Vereine.</p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Werde Teil des Teams</h2>
                    <div className="prose prose-lg text-slate-600 mb-8">
                        <p>
                            Das arl.x Vereinstraining bietet Kindern und Jugendlichen die Möglichkeit, Klettern und Bouldern als Leistungssport oder ambitioniertes Hobby zu betreiben.
                        </p>
                        <h3 className="font-bold text-slate-900 mt-6 mb-2">Unser Angebot:</h3>
                        <ul className="list-none space-y-2 pl-0">
                            {[
                                "Regelmäßiges Training mit lizenzierten Trainern",
                                "Teilnahme an Wettkämpfen",
                                "Förderung von Talenten",
                                "Gemeinsame Events und Ausflüge"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-sm font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="glass-card bg-white p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Interessiert?</h2>
                    <p className="text-slate-600 mb-8">
                        Melde dich jetzt für ein Probetraining an oder informiere dich über die aktuellen Trainingszeiten.
                    </p>
                    <a
                        href="mailto:training@arlpark.com"
                        className="btn-primary bg-slate-800 text-white w-full flex items-center justify-center gap-2 text-lg hover:bg-slate-700 shadow-none"
                    >
                        Kontakt aufnehmen
                    </a>
                </div>
            </section>
        </main>
    );
}
