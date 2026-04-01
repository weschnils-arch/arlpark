"use client";

import { events } from "@/data/events";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ClockIcon } from "@/components/Icons";

const CalendarIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

export default function EventDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const event = events.find((e) => e.slug === slug);

    if (!event) {
        return (
            <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-900 mb-4">Event nicht gefunden</h1>
                    <Link href="/veranstaltungen" className="text-sky-600 hover:underline">Zurück zur Übersicht</Link>
                </div>
            </div>
        );
    }

    const isBlue = event.colorTheme === "blue";
    const headerBgClass = isBlue ? "bg-sky-400" : "bg-emerald-400";

    return (
        <main className="min-h-screen bg-slate-50 pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 md:px-6">

                {/* Header Card */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 mb-12">
                    <div className={`${headerBgClass} p-8 md:p-12 relative overflow-hidden`}>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-2xl" />

                        <div className="relative z-10">
                            <span className="inline-block px-4 py-1.5 rounded-full font-bold text-lg bg-white/25 text-white backdrop-blur-md shadow-sm border border-white/10 mb-6">
                                {event.dateBadge}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-2 drop-shadow-md">
                                {event.title}
                            </h1>
                            <p className="text-xl text-white/90 font-medium">
                                {event.subtitle}
                            </p>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        {/* Short Details Box */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div>
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">DETAILS</h3>
                                <div className="space-y-2 text-slate-700 font-medium">
                                    <div className="flex items-center gap-3">
                                        <CalendarIcon className="w-5 h-5 text-slate-400" />
                                        <span>{event.dateRange}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ClockIcon className="w-5 h-5 text-slate-400" />
                                        <span>{event.time}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Link
                                    href="https://v5.bookandplay.com/p_pro_arlpark.php" // Or mailto if preferred
                                    className="w-full bg-black text-white text-center py-4 font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors rounded-xl shadow-lg"
                                >
                                    DEM KALENDER ZUFÜGEN
                                </Link>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="prose prose-lg max-w-none text-slate-600 mb-12">
                            <h2 className="text-2xl font-black text-slate-900 uppercase mb-4">{event.title}</h2>
                            <p className="leading-relaxed">
                                {event.description}
                            </p>
                        </div>

                        {/* Detailed Lists */}
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="font-bold text-slate-900 uppercase mb-4">KURSDETAILS</h3>
                                <ul className="space-y-2 text-slate-600 list-disc pl-5 marker:text-slate-400">
                                    <li><strong className="text-slate-900">Beginn:</strong> {event.dateBadge}</li>
                                    <li><strong className="text-slate-900">Uhrzeit:</strong> {event.time}</li>
                                    <li><strong className="text-slate-900">Alter:</strong> {event.age}</li>
                                    <li><strong className="text-slate-900">Kosten:</strong> {event.price}</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-slate-900 uppercase mb-4">VORAUSSETZUNGEN</h3>
                                <ul className="space-y-2 text-slate-600 list-disc pl-5 marker:text-slate-400">
                                    {event.requirements.map((req, i) => (
                                        <li key={i}>{req}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="md:col-span-2">
                                <h3 className="font-bold text-slate-900 uppercase mb-4">STORNOBEDINGUNGEN</h3>
                                <ul className="space-y-2 text-slate-600 list-disc pl-5 marker:text-slate-400">
                                    {event.cancellation.map((c, i) => (
                                        <li key={i}>{c}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Bottom CTA / Generic Banner */}
                        <div className={`mt-12 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden ${isBlue ? 'bg-sky-100' : 'bg-emerald-100'}`}>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Interesse geweckt?</h3>
                                <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                                    Sichere dir jetzt deinen Platz für diesen Kurs. Die Teilnehmerzahl ist begrenzt!
                                </p>
                                <Link
                                    href="mailto:info@arlpark.at"
                                    className={`inline-block px-8 py-3 font-bold text-white rounded-xl shadow-lg transition-transform hover:scale-105 ${headerBgClass}`}
                                >
                                    Jetzt Anmelden
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
