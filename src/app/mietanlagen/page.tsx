"use client";

import Link from "next/link";
import { KletternIcon, TrampolinIcon, PickleballIcon, CheckIcon } from "@/components/Icons";

export default function MietanlagenPage() {
    const mietanlagen = [
        {
            title: "Mobiler Boulderblock",
            description: "Der mobile Boulderblock von boulderblock.at ist das Highlight für jedes Event. Überall aufstellbar, bietet er Kletterspaß für Groß und Klein.",
            price: "Auf Anfrage",
            features: ["Überall aufstellbar", "Verschiedene Schwierigkeitsgrade", "Inkl. Matten und Sicherheit"],
            icon: KletternIcon,
            color: "text-emerald-500 bg-emerald-100"
        },
        {
            title: "Bungee Trampolin",
            description: "Sichere Sprünge in bis zu 8 Meter Höhe. Der Adrenalinkick für Kinder und Erwachsene.",
            price: "Auf Anfrage",
            features: ["4 Sprungplätze", "Höchste Sicherheitsstandards", "Betreuung inklusive"],
            icon: TrampolinIcon,
            color: "text-sky-500 bg-sky-100"
        },
        {
            title: "4er Trampolin Anlage",
            description: "Der Klassiker für Straßenfeste und Events. Vier Trampoline für gleichzeitigen Spaß.",
            price: "Auf Anfrage",
            features: ["Platzsparend", "Hohe Kapazität", "Wetterfest"],
            icon: TrampolinIcon,
            color: "text-blue-500 bg-blue-100"
        },
        {
            title: "Free-Fall Tower",
            description: "Nervenkitzel pur! Der mobile Free-Fall Tower sorgt für Kribbeln im Bauch.",
            price: "Auf Anfrage",
            features: ["Mobiler Turm", "Gesichert", "Einzigartig in der Region"],
            icon: null, // No specific icon, fallback or emoji
            emoji: "🎢",
            color: "text-purple-500 bg-purple-100"
        },
        {
            title: "Airtrack",
            description: "Die luftgefüllte Turnmatte für Akrobatik, Gymnastik oder einfach zum Toben.",
            price: "Auf Anfrage",
            features: ["Schneller Aufbau", "Weiche Landung", "Vielseitig einsetzbar"],
            icon: null,
            emoji: "💨",
            color: "text-cyan-500 bg-cyan-100"
        },
        {
            title: "Mobiler Pickleball Court",
            description: "Der Trendsport aus den USA jetzt auch mobil bei dir! Pickleball Court zum mieten.",
            price: "Auf Anfrage",
            features: ["Komplettes Set", "Netz & Schläger inkl.", "Schnell spielbereit"],
            icon: PickleballIcon,
            color: "text-lime-500 bg-lime-100"
        },
        {
            title: "Hüpfburg 'Dschungel Tiere'",
            description: "Große Hüpfburg im Dschungel-Design. Der Blickfang für jedes Kinderfest.",
            price: "Auf Anfrage",
            features: ["Große Springfläche", "Dach als Sonnenschutz", "Zertifiziert"],
            icon: null,
            emoji: "🐯",
            color: "text-orange-500 bg-orange-100"
        }
    ];

    return (
        <main className="bg-white min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h1 className="section-title text-slate-900">Mietanlagen & Events</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Mache dein Event unvergesslich! Wir vermieten professionelles Equipment in Kooperation mit <strong>boulderblock.at</strong>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mietanlagen.map((anlage, index) => {
                        const Icon = anlage.icon;
                        return (
                            <div key={index} className="glass-card bg-white p-6 md:p-8 flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-slate-100">
                                <div className={`h-40 ${anlage.color} rounded-2xl mb-6 flex items-center justify-center shadow-inner`}>
                                    {Icon ? <Icon size={64} className="opacity-80" /> : <span className="text-6xl">{anlage.emoji}</span>}
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-3">{anlage.title}</h2>
                                <p className="text-slate-600 mb-6 flex-grow">{anlage.description}</p>

                                <ul className="space-y-2 mb-8">
                                    {anlage.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                                            <CheckIcon className="w-4 h-4 text-emerald-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <span className="font-bold text-slate-900">{anlage.price}</span>
                                    <Link href="/kontakt" className="btn-primary text-sm px-6 py-2 bg-slate-900 text-white hover:bg-slate-700 shadow-none">
                                        Anfragen
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-20 bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
                    <h2 className="text-3xl font-bold mb-4">Interesse geweckt?</h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        Kontaktiere uns für ein individuelles Angebot für dein Event. Wir beraten dich gerne!
                    </p>
                    <Link href="/kontakt" className="btn-primary bg-white text-slate-900 hover:bg-slate-100 shadow-none text-lg px-8 py-4">
                        Jetzt unverbindlich anfragen
                    </Link>
                </div>
            </div>
        </main>
    );
}
