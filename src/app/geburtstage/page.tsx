import type { Metadata } from "next";
import Link from "next/link";
import { GeburtstagIcon, TrampolinIcon, BowlingIcon, KletternIcon, CheckIcon, PhoneIcon, EmailIcon, FoodIcon, SchuleIcon, FirmaIcon } from "@/components/Icons";

export const metadata: Metadata = {
    title: "Geburtstage & Gruppen - ARL.PARK Indoor Funpark",
    description: "Feiere deinen Geburtstag im ARL.PARK! Pakete für Kindergeburtstage, Schulausflüge und Gruppenevents.",
};

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
        <main>
            {/* Hero Section - Unified Style */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 min-h-[280px] md:min-h-[320px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.3)_0%,transparent_60%)]" />

                <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6 text-center text-white">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tight">
                        Geburtstage & Gruppen
                    </h1>
                    <p className="text-base md:text-xl text-white/90 max-w-4xl mx-auto md:whitespace-nowrap">
                        Feiere unvergessliche Momente bei uns! Perfekt für Kindergeburtstage, Schulausflüge und Teamevents.
                    </p>
                </div>
            </section>

            {/* Birthday Packages */}
            <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-orange-50 to-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-3 text-gray-900">Geburtstagspakete</h2>
                    <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg">Ab 8 Personen</p>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                        {birthdayPackages.map((pkg) => {
                            const IconComponent = pkg.icon;
                            return (
                                <article
                                    key={pkg.title}
                                    className={`glass-card p-6 md:p-8 text-center relative transition-all duration-300 hover:shadow-xl ${pkg.popular ? "ring-2 ring-orange-500 md:scale-105" : ""
                                        }`}
                                >
                                    {pkg.popular && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                                            BELIEBT
                                        </span>
                                    )}

                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                                        <IconComponent className="text-orange-500" size={24} />
                                    </div>

                                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{pkg.title}</h3>
                                    <p className="text-3xl md:text-4xl font-black text-orange-500 mb-1">
                                        {pkg.price}
                                        <span className="text-sm md:text-base text-gray-500 font-medium">/Person</span>
                                    </p>

                                    <ul className="space-y-2 md:space-y-3 text-gray-600 mt-4 md:mt-6 text-left text-sm md:text-base" role="list">
                                        {pkg.includes.map((item) => (
                                            <li key={item} className="flex items-center gap-2 md:gap-3">
                                                <CheckIcon className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" size={18} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Catering */}
            <section className="py-12 md:py-16 bg-white px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                            <FoodIcon className="text-white" size={24} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900">Catering Optionen</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                        {cateringOptions.map((option) => (
                            <div
                                key={option.title}
                                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 md:p-6 text-center border border-amber-100 hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{option.title}</h3>
                                <p className="text-2xl md:text-3xl font-black text-orange-500 mb-2">{option.price}</p>
                                <p className="text-gray-600 text-xs md:text-sm">{option.includes}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Group Offers */}
            <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-black text-center mb-8 md:mb-12 text-gray-900">Gruppenangebote</h2>

                    <div className="glass-card p-6 md:p-10">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                                        <SchuleIcon className="text-white" size={20} />
                                    </span>
                                    Schulen & Vereine
                                </h3>
                                <ul className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base" role="list">
                                    {["Gruppenrabatte ab 8 Personen", "Flexible Zeitfenster nach Absprache", "Begleitpersonen kostenlos (nach Absprache)"].map((item) => (
                                        <li key={item} className="flex items-start gap-2 md:gap-3">
                                            <CheckIcon className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" size={18} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                                        <FirmaIcon className="text-white" size={20} />
                                    </span>
                                    Firmenevents
                                </h3>
                                <ul className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base" role="list">
                                    {["Teambuilding-Aktivitäten", "Exklusive Buchungen möglich", "Catering auf Anfrage"].map((item) => (
                                        <li key={item} className="flex items-start gap-2 md:gap-3">
                                            <CheckIcon className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" size={18} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]" />

                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">Jetzt Geburtstag anfragen</h2>
                        <p className="text-white/90 mb-6 md:mb-8 text-sm md:text-base max-w-lg mx-auto">
                            Kontaktiere uns für deine individuelle Anfrage. Wir erstellen dir gerne ein maßgeschneidertes Angebot!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                            <a
                                href="tel:+4366099880066"
                                className="bg-white text-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform inline-flex items-center justify-center gap-2 shadow-lg"
                            >
                                <PhoneIcon size={20} />
                                Anrufen
                            </a>
                            <a
                                href="mailto:info@arlpark.com"
                                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white/30 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                <EmailIcon size={20} />
                                E-Mail senden
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
