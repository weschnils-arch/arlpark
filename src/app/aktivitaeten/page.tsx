"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TrampolinIcon, KletternIcon, BowlingIcon, SquashIcon, TennisIcon, FoodIcon, CheckIcon } from "@/components/Icons";

// Image Slideshow Component
function ImageSlideshow({ images, alt }: { images: string[]; alt: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    if (images.length === 0) return null;

    return (
        <div className="relative w-full h-full overflow-hidden rounded-2xl md:rounded-3xl">
            {images.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt={`${alt} ${index + 1}`}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    className={`object-cover transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    sizes="(max-width: 768px) 280px, 400px"
                />
            ))}

            {/* Dots Indicator */}
            {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                ? "bg-white w-4"
                                : "bg-white/50 hover:bg-white/70"
                                }`}
                            aria-label={`Bild ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

const activities = [
    {
        id: "trampolin",
        title: "Trampolin",
        subtitle: "1.000 m² Indoor Action",
        icon: TrampolinIcon,
        description: "Unser 1.000 m² großer Trampolinpark bietet verschiedene Bereiche für Anfänger und Profis.",
        features: ["1.000 m² Fläche", "Airbags", "Trampolinwände", "Dodgeball Arena", "Freejump"],
        images: [
            "/images/activities/Trampoline/DSC0877-scaled.jpg",
            "/images/activities/Trampoline/DSC0662-scaled.jpg",
            "/images/activities/Trampoline/DSC0767-scaled.jpg",
            "/images/activities/Trampoline/DSC0345-scaled.jpg",
        ],
        bgColor: "bg-blue-500",
    },
    {
        id: "klettern",
        title: "Klettern & Bouldern",
        subtitle: "Über 100 Routen",
        icon: KletternIcon,
        description: "Über 100 Indoor- und Outdoor-Routen, 3 Autobelay-Systeme und 125 m² Boulderhalle.",
        features: ["100+ Routen", "3 Autobelay", "Interaktive Wand", "125 m² Bouldern"],
        images: [
            "/images/activities/Climbing/DSC2986-scaled.jpg",
            "/images/activities/Climbing/DSC2971-scaled.jpg",
            "/images/activities/Climbing/DSC2839-scaled.jpg",
            "/images/activities/Climbing/DSC2726-scaled.jpg",
        ],
        bgColor: "bg-orange-500",
    },
    {
        id: "bowling",
        title: "9-Pin Bowling",
        subtitle: "4 moderne Bahnen",
        icon: BowlingIcon,
        description: "Vier moderne Bowlingbahnen für die ganze Familie und Gruppen.",
        features: ["4 Bahnen", "Bis zu 6 Personen/Bahn", "Modern", "Sports Bar"],
        images: [
            "/images/activities/Bowling/DSC2180-scaled.jpg",
            "/images/activities/Bowling/DSC2041-scaled.jpg",
            "/images/activities/Bowling/IMG_20220623_163214-scaled.jpg",
        ],
        bgColor: "bg-gray-700",
    },
    {
        id: "squash",
        title: "Squash & Tischtennis",
        subtitle: "Professionelle Courts",
        icon: SquashIcon,
        description: "Professionelle Courts mit Equipment-Verleih für stundenweise Buchung.",
        features: ["Profi Courts", "Equipment Verleih", "Flexible Buchung"],
        images: [
            "/images/activities/Squash_Tischtennis/DSC2508-scaled.jpg",
            "/images/activities/Squash_Tischtennis/DSC2580-scaled.jpg",
            "/images/activities/Squash_Tischtennis/DSC2345-scaled.jpg",
        ],
        bgColor: "bg-purple-500",
    },
    {
        id: "tennis",
        title: "Tennis & Pickleball",
        subtitle: "Indoor Courts",
        icon: TennisIcon,
        description: "Indoor-Tennisplätze für Spiele bei jedem Wetter. Auch Pickleball verfügbar.",
        features: ["Indoor Courts", "Tennis & Pickleball", "Equipment Verleih"],
        images: [
            "/images/activities/Tennis_Pickleball/DSC2656-scaled.jpg",
            "/images/activities/Tennis_Pickleball/IMG_20220519_182302-scaled.jpg",
            "/images/activities/Tennis_Pickleball/DSC2637-scaled.jpg",
        ],
        bgColor: "bg-green-500",
    },
    {
        id: "sportsbar",
        title: "Sports Bar",
        subtitle: "Snacks & Getränke",
        icon: FoodIcon,
        description: "Nach dem Sport ist vor dem Snack! Entspannte Atmosphäre mit Blick auf die Bowlingbahnen.",
        features: ["Snacks & Pizza", "Getränke", "Bier & Wein", "Gemütliche Atmosphäre"],
        images: [
            "/images/activities/Sportsbar/DSC2133-scaled.jpg",
            "/images/activities/Sportsbar/DSC2065-scaled.jpg",
            "/images/activities/Sportsbar/DSC2049-scaled.jpg",
            "/images/activities/Sportsbar/1657095157752-scaled.jpg",
        ],
        bgColor: "bg-amber-500",
    },
];

export default function AktivitaetenPage() {
    return (
        <main>
            {/* Hero Section - Fixed Height */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 min-h-[280px] md:min-h-[320px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.3)_0%,transparent_60%)]" />

                <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tight">
                        Unsere Aktivitäten
                    </h1>
                    <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto">
                        Von Trampolinen bis Klettern – erlebe Action pur unter einem Dach!
                    </p>
                </div>
            </section>

            {/* Activity Pills - Below Hero */}
            <section className="py-6 md:py-8 px-4 md:px-6 bg-gradient-to-b from-indigo-100 to-indigo-50">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {["Trampolin", "Klettern", "9-Pin", "Squash", "Tennis", "Sports"].map((activity) => (
                            <span
                                key={activity}
                                className="bg-white/80 hover:bg-white backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm md:text-base font-semibold text-gray-700 hover:text-gray-900 transition-all shadow-sm hover:shadow-md cursor-default border border-gray-200/50"
                            >
                                {activity}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activities */}
            <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-indigo-50 to-white">
                <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
                    {activities.map((activity, index) => {
                        const IconComponent = activity.icon;
                        const isReversed = index % 2 === 1;

                        return (
                            <article
                                key={activity.id}
                                id={activity.id}
                                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-6 md:gap-10 items-center scroll-mt-24`}
                            >
                                {/* Image Slideshow */}
                                <div className="w-full md:w-1/2 aspect-[4/3] relative shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden">
                                    <ImageSlideshow images={activity.images} alt={activity.title} />
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <div className={`inline-flex items-center gap-2 ${activity.bgColor} text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full mb-3`}>
                                        <IconComponent size={14} />
                                        {activity.subtitle}
                                    </div>

                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 text-gray-900">
                                        {activity.title}
                                    </h2>

                                    <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-4 leading-relaxed">
                                        {activity.description}
                                    </p>

                                    <ul className="grid grid-cols-2 gap-2 mb-5 text-left" role="list">
                                        {activity.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-gray-700 text-sm">
                                                <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" size={16} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {activity.id !== "sportsbar" && (
                                        <Link
                                            href={`/preise#${activity.id}`}
                                            className="btn-primary inline-flex items-center gap-2 text-sm"
                                        >
                                            Preise ansehen
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-black mb-3 text-gray-900">Bereit für Action?</h2>
                    <p className="text-gray-600 mb-6 text-sm md:text-base">
                        Sichere dir jetzt dein Ticket und erlebe unvergesslichen Spaß!
                    </p>
                    <Link
                        href="https://v5.bookandplay.com/p_pro_arlpark.php"
                        className="btn-primary text-base md:text-lg px-8 py-4 inline-flex items-center gap-2"
                    >
                        Jetzt buchen
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    );
}
