"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { KidsPlayIcon } from "@/components/Icons";

const galleryImages = [
    { src: "/images/activities/KidsPlay/IMG_20250623_153032.webp", alt: "Bällebad mit Rutsche" },
    { src: "/images/activities/KidsPlay/IMG_20250720_071557.webp", alt: "Hüpfburg" },
    { src: "/images/activities/KidsPlay/IMG_20251201_170200.webp", alt: "Kinderklettern an der Boulderwand" },
    { src: "/images/activities/KidsPlay/IMG_20250623_154018.webp", alt: "Kinderrutsche und Spielhaus" },
    { src: "/images/activities/KidsPlay/IMG_20250623_152828.webp", alt: "Klettergerüst und Tischfußball" },
    { src: "/images/activities/KidsPlay/IMG_20250802_115514.webp", alt: "Kids Play Bereich Übersicht" },
];

export default function KidsPlayPage() {
    const [kidsSlide, setKidsSlide] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setKidsSlide((p) => (p + 1) % galleryImages.length), 4000);
        return () => clearInterval(t);
    }, []);

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <Image
                    src="/images/activities/KidsPlay/IMG_20250802_115514.webp"
                    alt="Kids Play Bereich im arl.park"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-pink-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg text-white">
                        Kids Play
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Ein Paradies für die Kleinsten!</p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Spiel & Spaß sicher erleben</h2>
                    <div className="prose prose-lg text-slate-600 mb-8">
                        <p>
                            In unserer Kids World können sich Kinder bis 8 Jahre richtig austoben. Sicher, behütet und mit jeder Menge Spaß.
                        </p>
                        <ul className="list-none space-y-2 mt-4 pl-0">
                            {[
                                "Bällebad & Rutschen",
                                "Hüpfburg",
                                "Weiche Kletterelemente",
                                "Altersgerechte Spiele",
                                "Sitzbereich für Eltern in der Nähe"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="glass-card bg-white p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Eintrittspreise</h2>
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">1 Stunde</span>
                            <span className="text-xl font-black text-slate-900">6,00 €</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">2 Stunden</span>
                            <span className="text-xl font-black text-slate-900">11,00 €</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">10er Block (1h)</span>
                            <span className="text-xl font-black text-slate-900">54,00 €</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">10er Block (2h)</span>
                            <span className="text-xl font-black text-slate-900">99,00 €</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <span className="font-medium text-slate-700">Begleitperson</span>
                            <span className="text-xl font-black text-slate-900">frei</span>
                        </div>
                    </div>
                    <Link
                        href="https://v5.bookandplay.com/p_pro_arlpark.php"
                        target="_blank"
                        className="btn-primary w-full flex items-center justify-center gap-2 text-lg mb-4"
                    >
                        Jetzt Buchen
                    </Link>
                    <p className="text-slate-500 text-sm">
                        Tickets auch einfach vor Ort erhältlich.
                    </p>
                </div>
            </section>

            {/* Image Gallery — auto-rotating carousel */}
            <section className="pb-20 px-4 md:px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-black text-slate-900 mb-8">Einblicke in unsere Kids World</h2>
                <div className="relative h-72 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
                    {galleryImages.map((img, i) => (
                        <Image
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            fill
                            className={`object-cover transition-opacity duration-700 ${i === kidsSlide ? "opacity-100" : "opacity-0"}`}
                            loading={i === 0 ? "eager" : "lazy"}
                            sizes="(max-width: 768px) 100vw, 80vw"
                        />
                    ))}
                    <button
                        type="button"
                        onClick={() => setKidsSlide((p) => (p - 1 + galleryImages.length) % galleryImages.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-slate-800 hover:bg-white transition-colors shadow"
                        aria-label="Vorheriges Bild"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        type="button"
                        onClick={() => setKidsSlide((p) => (p + 1) % galleryImages.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-slate-800 hover:bg-white transition-colors shadow"
                        aria-label="Nächstes Bild"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {galleryImages.map((_, i) => (
                            <button key={i} type="button" onClick={() => setKidsSlide(i)} className={`w-2 h-2 rounded-full transition-all ${i === kidsSlide ? "bg-white w-6" : "bg-white/50"}`} aria-label={`Bild ${i + 1}`} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
