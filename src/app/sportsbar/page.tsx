"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FoodIcon } from "@/components/Icons";
import PremiumMenuViewer from "@/components/PremiumMenuViewer";

const sportsbarImages = [
    "/images/activities/Sportsbar/DSC2133-scaled.jpg",
    "/images/activities/Sportsbar/DSC2049-scaled.jpg",
    "/images/activities/Sportsbar/DSC2065-scaled.jpg",
    "/images/activities/Sportsbar/1657095157740-scaled.jpg",
    "/images/activities/Sportsbar/1657095157752-scaled.jpg",
];

function SportsbarSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % sportsbarImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden">
            {sportsbarImages.map((src, i) => (
                <Image
                    key={i}
                    src={src}
                    alt={`Sportsbar Impression ${i + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
                    loading="lazy"
                />
            ))}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {sportsbarImages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white w-5" : "bg-white/50"}`}
                        aria-label={`Bild ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function SportsbarPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/activities/Sportsbar/DSC2065-scaled.jpg')",
                        backgroundAttachment: "fixed",
                    }}
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-amber-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
                        Sportsbar
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Genieße kühle Drinks, warme Küche und Live-Sport.</p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Food & Drink Info */}
                    <div>
                        <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-bold text-sm mb-6">
                            Durchgehend warme Küche
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Leckeres für den Hunger</h2>
                        <div className="prose prose-lg text-slate-600 mb-8">
                            <p>
                                Unsere Küche versorgt euch mit frisch zubereiteten Snacks und warmen Gerichten. Perfekt zur Stärkung nach dem Bouldern oder Trampolinspringen.
                            </p>
                            <p>
                                Dazu servieren wir kühle Drinks, Kaffeespezialitäten und natürlich frisches Bier vom Fass.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-bold text-slate-900 mb-3">Highlights</h3>
                            <ul className="list-none space-y-2 mt-4 pl-0">
                                {["Biertender", "Catering auf Anfrage", "Junggesellen- und Firmenabende", "Gruppenveranstaltungen"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm font-bold">✓</span>
                                        <span className="text-slate-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Games & Entertainment */}
                    <div className="glass-card bg-white p-8 md:p-10 border-t-4 border-amber-500">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">More than just Food</h2>
                        <p className="text-slate-600 mb-6">
                            In unserer Sportsbar gibt es jede Menge Entertainment abseits der großen Sportflächen. Alle Geräte mit Münzeinwurf. Billard und Tischfußball pro Spiel 1 €. Kartenzahlung — Credits an der Bar erhältlich.
                        </p>

                        {/* Image Slider */}
                        <SportsbarSlider />

                        <div className="grid grid-cols-2 gap-3 mt-6">
                            {[
                                "Billard",
                                "Darts",
                                "Tischfußball",
                                "Boxautomat",
                                "Kickautomat",
                            ].map((name, i) => (
                                <div key={i} className="flex items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-amber-50 hover:border-amber-200 transition-colors">
                                    <span className="font-bold text-slate-700 text-sm">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Viewer Section placed right before the Footer which contains "So finden Sie uns" */}
            <PremiumMenuViewer />
        </main>
    );
}
