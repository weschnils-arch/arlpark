"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrampolinIcon, KletternIcon, BowlingIcon, SquashIcon, TennisIcon, CheckIcon } from "@/components/Icons";

const ACTIVITY_DATA = [
    {
        id: "trampolin",
        title: "Trampolin",
        badge: "1.000 m² Indoor Action",
        badgeColor: "bg-blue-600",
        description: "Unser 1.000 m² großer Trampolinpark bietet verschiedene Bereiche für Anfänger und Profis.",
        features: ["13 Trampolinfelder", "Freefall Tower", "15 m Air-Track", "Ski & Boards kostenlos", "Freejump"],
        buttonLink: "/angebote/trampolin",
        images: [
            "/images/activities/Trampoline/DSC0523-scaled.jpg",
            "/images/activities/Trampoline/DSC0316-scaled.jpg",
            "/images/activities/Trampoline/DSC0662-scaled.jpg",
            "/images/activities/Trampoline/DSC0345-scaled.jpg"
        ]
    },
    {
        id: "klettern",
        title: "Kletterhalle",
        badge: "Über 100 Routen",
        badgeColor: "bg-orange-500",
        description: "Über 100 Indoor- und Outdoor-Routen, 3 Autobelay-Systeme und 125 m² Boulderhalle. In Kooperation mit dem Kletterzentrum Imst.",
        features: ["100+ Routen", "3 Autobelay", "Interaktive Wand", "125 m² Bouldern"],
        buttonLink: "/angebote/klettern",
        images: [
            "/images/activities/Climbing/DSC2839-scaled.jpg",
            "/images/activities/Climbing/DSC2726-scaled.jpg",
            "/images/activities/Climbing/DSC2971-scaled.jpg",
            "/images/activities/Climbing/20230629_155046-scaled.jpg"
        ]
    },
    {
        id: "bowling",
        title: "9-Pin Bowling",
        badge: "4 Bahnen",
        badgeColor: "bg-slate-700",
        description: "Vier 9-Pin Bowlingbahnen für die ganze Familie und Gruppen. Bis zu 8 Personen pro Bahn.",
        features: ["4 Bahnen", "Bis zu 8 Personen/Bahn", "Eigene Kinderkugeln", "Kinderbahn mit Bande"],
        buttonLink: "/angebote/bowling",
        images: [
            "/images/activities/Bowling/DSC2041-scaled.jpg",
            "/images/activities/Bowling/DSC2180-scaled.jpg",
            "/images/activities/Bowling/DSC21972305843009222707519-scaled.jpg",
            "/images/activities/Bowling/IMG_20220623_163214-scaled.jpg"
        ]
    },
    {
        id: "squash",
        title: "Squash",
        badge: "Schnelligkeit, Präzision und Spielspaß pur",
        badgeColor: "bg-green-600",
        description: "Indoor Court mit Schläger und Hallenschuhe zum Verleih.",
        features: ["Indoor Court", "Schläger und Schuhverleih", "Einzel & Doppel", "Gruppen"],
        buttonLink: "/angebote/squash",
        images: [
            "/images/activities/Squash_Tischtennis/DSC2580-scaled.jpg"
        ]
    },
    {
        id: "tennis",
        title: "Tennis",
        badge: "Indoor Tennisplatz",
        badgeColor: "bg-yellow-500",
        description: "Indoor Tennisplatz mit großer Fensterfläche. Einzel und Doppel möglich.",
        features: ["Indoor Platz", "Große Fensterfläche", "Schläger und Hallenschuhe Verleih", "Einzel & Doppel"],
        buttonLink: "/angebote/tennis",
        images: [
            "/images/activities/Tennis_Pickleball/DSC2637-scaled.jpg",
            "/images/activities/Tennis_Pickleball/DSC2656-scaled.jpg"
        ]
    },
    {
        id: "tischtennis",
        title: "Tischtennis",
        badge: "Schnelle Ballwechsel",
        badgeColor: "bg-green-600",
        description: "Tischtennisplatten für spannende Duelle. Schläger und Bälle können geliehen werden.",
        features: ["Professioneller Tisch", "Schläger und Schuhverleih", "Einzel & Doppel oder in der Gruppe"],
        buttonLink: "/angebote/tischtennis",
        images: [
            "/images/activities/Squash_Tischtennis/DSC2345-scaled.jpg"
        ]
    },
    {
        id: "pickleball",
        title: "Pickleball",
        badge: "Der Trendsport",
        badgeColor: "bg-yellow-500",
        description: "Entdecke den neuen Trendsport aus den USA! Eine Mischung aus Tennis, Badminton und Tischtennis.",
        features: ["Indoor Court", "Einfach zu lernen", "Equipment vor Ort", "Für alle Alter"],
        buttonLink: "/angebote/pickleball",
        images: [
            "/images/pickleball/pickleball_1.webp"
        ]
    },
    {
        id: "kids-play",
        title: "Kids Play",
        badge: "Von klein bis groß für alle etwas dabei",
        badgeColor: "bg-red-500",
        description: "Ein Paradies für die Kleinsten! Entdecke unseren neuen Kids-Play Bereich mit Mini Airbag, Hüpfburg und mehr.",
        features: ["Hüpfburg", "Kletterwand", "Mini Airbag", "Für Kleinkinder"],
        buttonLink: "/angebote/kids-play",
        images: [
            "/images/activities/KidsPlay/IMG_20250720_071557.webp",
            "/images/activities/KidsPlay/IMG_20250623_153032.webp",
            "/images/activities/KidsPlay/IMG_20250802_115514.webp",
            "/images/activities/KidsPlay/IMG_20251201_170200.webp"
        ]
    },
    {
        id: "sportsbar",
        title: "Sportsbar",
        badge: "Relax & Enjoy",
        badgeColor: "bg-blue-600",
        description: "Genieße kühle Drinks und Snacks. Durchgehend warme Küche, Billard, Darts und Tischfußball.",
        features: ["Warme Küche", "Billard & Darts", "Tischfußball", "Boxautomat"],
        buttonLink: "/sportsbar",
        images: [
            "/images/activities/Sportsbar/DSC2065-scaled.jpg",
            "/images/activities/Sportsbar/DSC2133-scaled.jpg",
            "/images/activities/Sportsbar/DSC2049-scaled.jpg"
        ]
    },
    {
        id: "mietanlagen",
        title: "Mietanlagen",
        badge: "Mobile Action",
        badgeColor: "bg-blue-600",
        description: "Wir bringen die Action zu dir! Mobiler Boulderblock, Bungee Trampolin, Airtrack, Free-Fall Tower und mehr.",
        features: ["Boulderblock", "Bungee Trampolin", "Airtrack", "Free-Fall Tower"],
        buttonLink: "/mietanlagen",
        images: [
            "/images/mietanlagen/Mobiler_Bolderblock.jpg",
            "/images/mietanlagen/Bunge Trampolin.png",
            "/images/mietanlagen/Free Fall Tower.png",
            "/images/mietanlagen/Airtracker.png",
            "/images/mietanlagen/4er Trampolin Anlage.png",
            "/images/mietanlagen/Dschungel Tiere.jpg",
        ]
    },
    {
        id: "vereinstraining",
        title: "arl.x Vereinstraining",
        badge: "Training für Profis",
        badgeColor: "bg-indigo-600",
        description: "Arl X – der Verein für alle, die sich bewegen wollen: mit Trampolin, Klettern, Tanzen und jeder Menge Spaß an Sport und Gemeinschaft!",
        features: ["Regelmäßige Termine", "Trainer-Support", "Individuelle Pakete", "Professionelle Ausstattung"],
        buttonLink: "/angebote/vereinstraining",
        images: [
            "/images/activities/Climbing/DSC2971-scaled.jpg", // Placeholder
            "/images/activities/Climbing/20230629_155046-scaled.jpg"
        ]
    },
    {
        id: "geburtstage",
        title: "Geburtstage",
        badge: "Party Alarm",
        badgeColor: "bg-blue-600",
        description: "Feiere deinen Geburtstag bei uns! Actiongeladene Pakete für unvergessliche Kindergeburtstage. Eigener Partytisch möglich.",
        features: ["Eigener Partybereich", "Eigener Partytisch möglich", "Essen & Trinken", "Individuelle Pakete"],
        buttonLink: "/geburtstage",
        images: [
            "/images/activities/Trampoline/DSC0662-scaled.jpg", // Placeholder
            "/images/activities/Bowling/DSC21972305843009222707519-scaled.jpg"
        ]
    },
    {
        id: "gruppen",
        title: "Gruppen & Vereine",
        badge: "Gemeinsam erleben",
        badgeColor: "bg-blue-600",
        description: "Ideal für Schulausflüge, Firmenfeiern und Vereinsausflüge. Individuelle Angebote für große Gruppen.",
        features: ["Schulklassen", "Firmenfeiern", "Teambuilding", "Junggesellenabschied"],
        buttonLink: "/gruppen-schulen",
        images: [
            "/images/activities/Bowling/DSC2041-scaled.jpg", // Placeholder
            "/images/activities/Climbing/DSC2726-scaled.jpg"
        ]
    },
    {
        id: "gepaeckdepot",
        title: "Gepäckdepot & Duschen",
        badge: "Service für unterwegs",
        badgeColor: "bg-slate-700",
        description: "Praktischer Service für Gäste auf der Durchreise — Gepäck sicher verstauen und frisch in den nächsten Programmpunkt starten.",
        features: ["Gepäckdepot 3 € pro Tag", "Dusche inkl. Handtuch 5 €", "Direkt am Bahnhof", "Ohne Voranmeldung"],
        buttonLink: "/kontakt",
        images: [
            "/images/activities/Sportsbar/DSC2065-scaled.jpg"
        ]
    }
];

const TABS = [
    { id: "trampolin", label: "Trampolin" },
    { id: "klettern", label: "Klettern" },
    { id: "bowling", label: "Bowling" },
    { id: "squash", label: "Squash" },
    { id: "tennis", label: "Tennis" },
    { id: "tischtennis", label: "Tischtennis" },
    { id: "pickleball", label: "Pickleball" },
    { id: "kids-play", label: "Kids Play" },
    { id: "sportsbar", label: "Sportsbar" },
    { id: "mietanlagen", label: "Mietanlagen" },
    { id: "geburtstage", label: "Geburtstage" },
    { id: "gruppen", label: "Gruppen & Vereine" },
    { id: "gepaeckdepot", label: "Gepäckdepot & Duschen" }
];

function ImageSlider({ images, alt }: { images: string[], alt: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    // Auto-play could be added here

    return (
        <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer" onClick={nextSlide}>
            {images.map((img, idx) => (
                <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentIndex ? "opacity-100" : "opacity-0"}`}
                >
                    <Image
                        src={img}
                        alt={`${alt} image ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={idx === 0}
                    />
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-white w-4" : "bg-white/50"}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function ActivitiesSection() {
    const [activeTab, setActiveTab] = useState("all"); // Or implement scrolling to section

    const scrollToSection = (id: string) => {
        const element = document.getElementById(`activity-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <section className="bg-slate-50 py-14 relative z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Navigation Tabs (Visual only for now, or jump links) */}
                <div className="hidden md:flex flex-wrap justify-center gap-3 mb-16 md:sticky md:top-24 z-30 bg-slate-50/80 backdrop-blur-sm py-4 rounded-full">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => scrollToSection(tab.id)}
                            className="px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-sm text-sm uppercase tracking-wide"
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="space-y-16 md:space-y-24">
                    {ACTIVITY_DATA.map((activity, index) => (
                        <div
                            key={activity.id}
                            id={`activity-${activity.id}`}
                            className={`flex flex-col gap-6 md:gap-10 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
                        >
                            {/* Slideshow */}
                            <div className="w-full md:w-1/2">
                                <ImageSlider images={activity.images} alt={activity.title} />
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 text-left">
                                <span className={`inline-block px-4 py-1.5 rounded-full text-white text-sm font-bold mb-6 shadow-md ${activity.badgeColor}`}>
                                    {activity.badge}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                                    {activity.title}
                                </h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                                    {activity.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-10">
                                    {activity.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-slate-600 font-medium text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={activity.buttonLink}
                                    className="inline-block bg-sky-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-sky-700 transition-colors shadow-lg shadow-sky-500/20"
                                >
                                    Preise ansehen &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
