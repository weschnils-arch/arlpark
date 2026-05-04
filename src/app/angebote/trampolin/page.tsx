"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TrampolinIcon } from "@/components/Icons";
import WeitereAngeboteSection from "@/components/WeitereAngeboteSection";
import EarlyBirdBlock from "@/components/EarlyBirdBlock";

const galleryImages = [
    "/images/activities/Trampoline/DSC0523-scaled.jpg",
    "/images/activities/Trampoline/DSC0316-scaled.jpg",
    "/images/activities/Trampoline/DSC0345-scaled.jpg",
    "/images/activities/Trampoline/DSC0636-scaled.jpg",
    "/images/activities/Trampoline/DSC0662-scaled.jpg",
    "/images/activities/Trampoline/DSC0767-scaled.jpg",
    "/images/activities/Trampoline/DSC0877-scaled.jpg",
];

export default function TrampolinPage() {
    const [priceType, setPriceType] = useState("einzel");
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const prices = {
        einzel: [
            { label: "1 Stunde", price: "17,00 €" },
            { label: "2 Stunden", price: "22,00 €" },
            { label: "4 Stunden (nur mit Kundenkarte)", price: "27,00 €" },
        ],
        block: [
            { label: "10er Block", price: "153,00 €", highlight: true },
        ],
        kundenkarte: [
            { label: "Kundenkarte (einmalig)", price: "20,00 €", highlight: true },
            { label: "Rabatt pro Besuch", price: "-5,00 €" },
        ],
        gruppen: [
            { label: "Schulklasse (pro Person)", price: "12,00 €" },
            { label: "Verein (pro Person)", price: "12,00 €" },
        ]
    };

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/activities/Trampoline/DSC0523-scaled.jpg')",
                        backgroundAttachment: "fixed",
                    }}
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-blue-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
                        Trampolin
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">1.000 m² Indoor Action für die ganze Familie.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

                {/* Info Text */}
                <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Der totale Sprungspaß</h2>
                    <div className="prose prose-lg text-slate-600 mb-8">
                        <p>
                            Unsere Trampolinhalle bietet auf über 1.000 m² alles, was das Springer-Herz begehrt. Egal ob Anfänger oder Profi, hier kommt jeder auf seine Kosten.
                        </p>
                        <ul className="list-none space-y-2 mt-4 pl-0">
                            {[
                                "13 Trampolinfelder",
                                "Freefall Tower",
                                "15 m Air-Track",
                                "Trampolin Ski & Boards kostenlos",
                                "Airbag"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                        <h3 className="font-bold text-slate-900 mb-1">Wichtig: Trampolinsocken</h3>
                        <p className="text-sm text-slate-600">
                            Aus Sicherheitsgründen sind Trampolinsocken Pflicht! Du kannst deine eigenen mitbringen oder bei uns für 4,00 € kaufen.
                        </p>
                    </div>

                    <div className="mt-6">
                        <EarlyBirdBlock />
                    </div>
                </div>

                {/* Pricing Card with Dropdown */}
                <div className="glass-card bg-white p-8 md:p-10 sticky top-24">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center justify-between">
                        Preise
                        <span className="text-sm font-normal text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Pro Person</span>
                    </h2>

                    {/* Dropdown Selector */}
                    <div className="mb-8">
                        <label htmlFor="price-select" className="block text-sm font-medium text-slate-700 mb-2">Ticket-Art wählen:</label>
                        <div className="relative">
                            <select
                                id="price-select"
                                value={priceType}
                                onChange={(e) => setPriceType(e.target.value)}
                                className="w-full p-4 pr-12 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer appearance-none"
                            >
                                <option value="einzel">Einzeltickets (Erwachsene/Kinder)</option>
                                <option value="block">10er Block</option>
                                <option value="kundenkarte">Kundenkarte</option>
                                <option value="gruppen">Gruppen & Vereine</option>
                            </select>
                            <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Price Display */}
                    <div className="space-y-4 mb-8">
                        {/* @ts-expect-error - TS doesn't know the keys match perfectly here but they do */}
                        {prices[priceType].map((item: any, i: number) => (
                            <div
                                key={i}
                                className={`flex justify-between items-center p-4 rounded-xl ${item.highlight ? 'bg-sky-50 border-2 border-sky-500 shadow-md transform scale-105' : 'bg-slate-50 border border-slate-100'}`}
                            >
                                <span className={`font-medium ${item.highlight ? 'text-sky-900 font-bold' : 'text-slate-700'}`}>{item.label}</span>
                                <span className={`text-xl font-black ${item.highlight ? 'text-sky-600' : 'text-slate-900'}`}>{item.price}</span>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="https://v5.bookandplay.com/p_pro_arlpark.php"
                        target="_blank"
                        className="btn-primary w-full flex items-center justify-center gap-2 text-lg"
                    >
                        Jetzt Ticket buchen
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                    <p className="text-xs text-center text-slate-400 mt-4">
                        Ticket online kaufen und beim Check-In Zeit sparen.
                    </p>
                    <div className="flex gap-3 mt-4">
                        <Link href="/geburtstage" className="flex-1 text-center text-sm text-sky-600 font-bold hover:underline">Geburtstage</Link>
                        <Link href="/gruppen-schulen" className="flex-1 text-center text-sm text-sky-600 font-bold hover:underline">Gruppen</Link>
                    </div>
                </div>

            </section>

            {/* Auto-Play Image Carousel */}
            <section className="py-12 px-4 md:px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Impressionen</h2>
                    <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
                        {galleryImages.map((src, i) => (
                            <Image
                                key={i}
                                src={src}
                                alt={`Trampolin Impression ${i + 1}`}
                                fill
                                className={`object-cover transition-opacity duration-700 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
                                loading="lazy"
                            />
                        ))}
                        <button
                            type="button"
                            onClick={() => setCurrentSlide((p) => (p - 1 + galleryImages.length) % galleryImages.length)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-slate-800 hover:bg-white transition-colors shadow"
                            aria-label="Vorheriges Bild"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => setCurrentSlide((p) => (p + 1) % galleryImages.length)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-slate-800 hover:bg-white transition-colors shadow"
                            aria-label="Nächstes Bild"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {galleryImages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? "bg-white w-6" : "bg-white/50"}`}
                                    aria-label={`Bild ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Family Sonntag */}
            <section className="py-12 px-4 md:px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gradient-to-r from-sky-50 to-pink-50 rounded-3xl p-8 md:p-10 border border-sky-100">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl">👨‍👩‍👧‍👦</span>
                            <h2 className="text-2xl font-black text-slate-900">Family Sonntag</h2>
                        </div>
                        <p className="text-slate-600 mb-6">
                            Jeden Sonntag ist Family-Tag im arl.park! Kommt als Familie vorbei und genießt gemeinsam einen aktiven Tag auf unserer Trampolinanlage.
                        </p>
                        <Link href="https://v5.bookandplay.com/p_pro_arlpark.php" target="_blank" className="btn-primary inline-flex items-center gap-2">
                            Jetzt Buchen
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Hallenplan */}
            <section className="py-16 px-4 md:px-6 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">So sieht unsere Halle aus</h2>
                    <div className="bg-white rounded-3xl p-4 md:p-8 border border-slate-200 shadow-lg">
                        <Image
                            src="/images/trampolin-hallenplan.svg"
                            alt="Hallenplan der Trampolinhalle im arl.park"
                            width={800}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            <WeitereAngeboteSection currentHref="/angebote/trampolin" />
        </main>
    );
}
