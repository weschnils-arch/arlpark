"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckIcon } from "@/components/Icons";

export default function MietanlagenPage() {
    const mietanlagen = [
        {
            title: "Mobiler Boulderblock",
            description: "Der mobile Boulderblock von boulderblock.at ist das Highlight für jedes Event. Überall aufstellbar, bietet er Kletterspaß für Groß und Klein.",
            price: "Auf Anfrage",
            features: ["Überall aufstellbar", "Verschiedene Schwierigkeitsgrade", "Inkl. Matten und Sicherheit"],
            image: "/images/mietanlagen/Mobiler_Bolderblock.jpg"
        },
        {
            title: "Bungee Trampolin",
            description: "Sichere Sprünge in bis zu 6 Meter Höhe. Der Adrenalinkick für Kinder und Erwachsene.",
            price: "Auf Anfrage",
            features: ["4 Sprungplätze", "Höchste Sicherheitsstandards", "Betreuung inklusive"],
            image: "/images/mietanlagen/Bunge Trampolin.png"
        },
        {
            title: "4er Trampolin Anlage",
            description: "Der Klassiker für Straßenfeste und Events! Unsere Anlage bietet vier Trampoline für jede Menge Springspaß und zieht garantiert alle Blicke auf sich – ein Highlight für Groß und Klein.",
            price: "Auf Anfrage",
            features: ["Platzsparend", "Hohe Kapazität", "Wetterfest"],
            image: "/images/mietanlagen/4er Trampolin Anlage.png"
        },
        {
            title: "Free-Fall Tower",
            description: "Nervenkitzel pur! Der mobile Free-Fall Tower sorgt für Kribbeln im Bauch.",
            price: "Auf Anfrage",
            features: ["Mobiler Turm", "Gesichert", "Einzigartig in der Region"],
            image: "/images/mietanlagen/Free Fall Tower.png"
        },
        {
            title: "Airtrack",
            description: "Die luftgefüllte Turnmatte für Akrobatik, Gymnastik oder einfach zum Toben.",
            price: "Auf Anfrage",
            features: ["Schneller Aufbau", "Weiche Landung", "Vielseitig einsetzbar"],
            image: "/images/mietanlagen/Airtracker.png"
        },
        {
            title: "Mobiler Pickleball Court",
            description: "Der Trendsport aus den USA jetzt auch mobil bei dir! Pickleball Court zum mieten.",
            price: "Auf Anfrage",
            features: ["Komplettes Set", "Netz & Schläger inkl.", "Schnell spielbereit"],
            image: "/images/mietanlagen/Pickelball.png"
        },
        {
            title: "Hüpfburg 'Dschungel Tiere'",
            description: "Große Hüpfburg im Dschungel-Design. Der Blickfang für jedes Kinderfest.",
            price: "Auf Anfrage",
            features: ["Große Springfläche", "Dach als Sonnenschutz", "Zertifiziert"],
            image: "/images/mietanlagen/Dschungel Tiere.jpg"
        }
    ];

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/mietanlagen/Mobiler_Bolderblock.jpg')`,
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="absolute inset-0 bg-cyan-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg text-white">
                        Mietanlagen
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Professionelles Event-Equipment für dein unvergessliches Event.</p>
                </div>
            </section>
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mietanlagen.map((anlage, index) => {
                        return (
                            <div key={index} className="glass-card bg-white flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden">
                                <div className="relative h-56 w-full bg-slate-100">
                                    <Image
                                        src={anlage.image}
                                        alt={anlage.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6 md:p-8 flex flex-col flex-grow">
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

                                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-center">
                                        <Link href="/kontakt" className="btn-primary text-sm px-6 py-2 bg-slate-900 text-white hover:bg-slate-700 shadow-none">
                                            Anfragen
                                        </Link>
                                    </div>
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
