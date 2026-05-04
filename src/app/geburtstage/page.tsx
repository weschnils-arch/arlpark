"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { GeburtstagIcon, TrampolinIcon, BowlingIcon, KletternIcon, CheckIcon, FoodIcon } from "@/components/Icons";

const partyImages = [
    { src: "/images/anpassungen/geburtstag_1.webp", alt: "Geburtstagsparty Impression 1" },
    { src: "/images/anpassungen/geburtstag_2.webp", alt: "Geburtstagsparty Impression 2" },
    { src: "/images/anpassungen/geburtstag_3.webp", alt: "Geburtstagsparty Impression 3" },
];

function PartyGalleryCarousel() {
    const [slide, setSlide] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setSlide((p) => (p + 1) % partyImages.length), 4000);
        return () => clearInterval(t);
    }, []);
    return (
        <section className="py-12 px-4 md:px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="relative h-72 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
                    {partyImages.map((img, i) => (
                        <Image
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            fill
                            className={`object-cover transition-opacity duration-700 ${i === slide ? "opacity-100" : "opacity-0"}`}
                            loading={i === 0 ? "eager" : "lazy"}
                            sizes="(max-width: 768px) 100vw, 80vw"
                        />
                    ))}
                    <button type="button" onClick={() => setSlide((p) => (p - 1 + partyImages.length) % partyImages.length)} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-slate-800 hover:bg-white transition-colors shadow" aria-label="Vorheriges Bild">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button type="button" onClick={() => setSlide((p) => (p + 1) % partyImages.length)} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-slate-800 hover:bg-white transition-colors shadow" aria-label="Nächstes Bild">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {partyImages.map((_, i) => (
                            <button key={i} type="button" onClick={() => setSlide(i)} className={`w-2 h-2 rounded-full transition-all ${i === slide ? "bg-white w-6" : "bg-white/50"}`} aria-label={`Bild ${i + 1}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const birthdayPackages = [
    {
        title: "Trampolin Party",
        price: "15€",
        icon: TrampolinIcon,
        includes: ["2 Stunden Trampolin", "Eigener Partybereich"],
        popular: false,
    },
    {
        title: "Trampolin + 9-Pin Bowling",
        price: "17,25€",
        icon: BowlingIcon,
        includes: ["2 Stunden Trampolin", "1 Stunde 9-Pin Bowling"],
        popular: true,
    },
    {
        title: "Action-Paket",
        price: "22,50€",
        icon: KletternIcon,
        includes: ["2 Stunden Trampolin", "Kletter-Tageskarte", "Kletterverleih inkl."],
        popular: false,
    },
    {
        title: "Kids Play Geburtstag",
        price: "9€",
        icon: GeburtstagIcon,
        includes: ["2 Stunden Kids Play", "Gruppe ab 6 Kinder", "Alter: 1–10 Jahre"],
        popular: false,
    },
];

const cateringOptions = [
    {
        title: "Menü (optional beim Checkout buchbar)",
        price: "11,50€",
        includes: "Nuggets + Pommes oder Pizza + unlim. Skiwasser",
    },
    {
        title: "Snack Box klein",
        price: "5€",
        includes: "Brezn oder Donut + Skiwasser",
    },
    {
        title: "Snack Box groß",
        price: "7€",
        includes: "Brezn & Donut + Skiwasser",
    },
    {
        title: "Nur Skiwasser unlimitiert",
        price: "3€",
        includes: "Unlimitiert Skiwasser für die Party",
    },
    {
        title: "Sachertorte",
        price: "36€",
        includes: "Original Sachertorte für den Geburtstag",
    },
    {
        title: "Partytisch",
        price: "10€",
        includes: "Eigener Partytisch + Geschirr von uns. Essen selbst mitbringen? Kein Problem!",
    },
    {
        title: "Trainer",
        price: "ab 30€",
        includes: "30 Min: 30 € / 1 Stunde: 60 € — auf Anfrage buchbar",
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
                    <div className="text-center mb-12">
                        <h2 className="section-title text-slate-900">Unsere Party-Pakete</h2>
                        <p className="text-xl text-slate-600">Buchbar ab 8 Personen</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                    <span className="text-sm text-slate-500 font-medium block mb-4">pro Kind</span>

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

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

            <PartyGalleryCarousel />

            {/* Erwachsenen Geburtstag Link */}
            <section className="py-8 px-4 md:px-6 bg-slate-50 text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-slate-600">
                        Du planst einen Erwachsenen-Geburtstag oder Junggesellenabschied?
                    </p>
                    <Link href="/gruppen-schulen" className="text-sky-600 font-bold hover:underline text-lg">
                        Mehr dazu bei Gruppen & Vereine &rarr;
                    </Link>
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
