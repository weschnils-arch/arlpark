"use client";

import Link from "next/link";
import Image from "next/image";
import { GeburtstagIcon, TrampolinIcon, BowlingIcon, KletternIcon, CheckIcon, FoodIcon } from "@/components/Icons";

const birthdayPackages = [
    {
        title: "Trampolin Party",
        price: "15€",
        icon: TrampolinIcon,
        includes: ["2 Stunden Trampolin", "Trampolinsocken inkl.", "Eigener Partybereich"],
        popular: false,
    },
    {
        title: "Trampolin + Bowling",
        price: "17€",
        icon: BowlingIcon,
        includes: ["2 Stunden Trampolin", "1 Stunde Bowling", "Trampolinsocken inkl."],
        popular: true,
    },
    {
        title: "Action-Paket",
        price: "22,50€",
        icon: KletternIcon,
        includes: ["2 Stunden Trampolin", "Kletter-Tageskarte", "Trampolinsocken inkl."],
        popular: false,
    },
];

const cateringOptions = [
    {
        title: "Kleines Menü",
        price: "11,50€",
        includes: "Nuggets oder Pizza + Pommes + unlim. Schiwasser",
    },
    {
        title: "Großes Menü",
        price: "13,50€",
        includes: "Mehr Auswahl + Pommes + unlim. Schiwasser",
    },
    {
        title: "Geburtstagstorte",
        price: "36€",
        includes: "Original ARL.PARK Torte",
    },
];

export default function GeburtstagePage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/activities/Trampoline/DSC0662-scaled.jpg')",
                        backgroundAttachment: "fixed",
                    }}
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-fuchsia-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
                        Geburtstage
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Feiere den besten Tag des Jahres bei uns!</p>
                </div>
            </section>

            {/* Birthday Packages */}
            <section className="py-20 px-4 md:px-6 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="section-title text-slate-900">Unsere Party-Pakete</h2>
                        <p className="text-xl text-slate-600">Buchbar ab 8 Personen</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {birthdayPackages.map((pkg) => {
                            const IconComponent = pkg.icon;
                            return (
                                <article
                                    key={pkg.title}
                                    className={`glass-card bg-white p-8 text-center relative transition-all duration-300 hover:shadow-2xl ${pkg.popular ? "ring-2 ring-fuchsia-500 transform scale-105 z-10" : "hover:-translate-y-2"
                                        }`}
                                >
                                    {pkg.popular && (
                                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-fuchsia-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                                            BELIEBT
                                        </span>
                                    )}

                                    <div className="w-16 h-16 bg-fuchsia-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <IconComponent className="text-fuchsia-600" size={32} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-slate-900">{pkg.title}</h3>
                                    <p className="text-4xl font-black text-fuchsia-600 mb-2">
                                        {pkg.price}
                                    </p>
                                    <span className="text-sm text-slate-500 font-medium block mb-6">pro Person</span>

                                    <ul className="space-y-3 text-slate-600 text-left text-sm" role="list">
                                        {pkg.includes.map((item) => (
                                            <li key={item} className="flex items-center gap-3">
                                                <CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0" size={18} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8">
                                        <Link
                                            href="https://v5.bookandplay.com/p_pro_arlpark.php"
                                            target="_blank"
                                            className="btn-primary w-full block text-sm bg-fuchsia-600 shadow-fuchsia-500/20"
                                        >
                                            Jetzt buchen
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Catering */}
            <section className="py-20 bg-white px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                            <FoodIcon className="text-amber-600" size={32} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 text-center">Leckeres für die Party</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {cateringOptions.map((option) => (
                            <div
                                key={option.title}
                                className="bg-amber-50 rounded-3xl p-8 text-center border border-amber-100 hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-bold mb-2 text-slate-900">{option.title}</h3>
                                <p className="text-3xl font-black text-amber-600 mb-4">{option.price}</p>
                                <p className="text-slate-600">{option.includes}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Form CTA */}
            <section className="py-20 px-4 md:px-6 bg-slate-900 text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">Noch Fragen?</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        Wir helfen dir gerne bei der Planung deiner perfekten Geburtstagsparty.
                    </p>
                    <Link href="/kontakt" className="btn-primary bg-white text-slate-900 hover:bg-slate-100 shadow-none px-10 py-4 text-lg">
                        Kontakt aufnehmen
                    </Link>
                </div>
            </section>
        </main>
    );
}
