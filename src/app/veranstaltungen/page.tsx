"use client";

import Image from "next/image";

import Link from "next/link";
import { ClockIcon } from "@/components/Icons";
import { events } from "@/data/events";

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

export default function VeranstaltungenPage() {
    return (
        <main className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/activities/Sportsbar/DSC2049-scaled.jpg')`,
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="absolute inset-0 bg-violet-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg text-white">
                        Aktuelles im Kletterzentrum
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">
                        Hier findest du einen Überblick aller Kurse, Veranstaltungen und Angebote.
                    </p>
                </div>
            </section>
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => {
                        const isBlue = event.colorTheme === "blue";
                        const bgClass = isBlue
                            ? "bg-sky-400"
                            : "bg-emerald-400";

                        return (
                            <article key={event.id} className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
                                {/* Top Image/Color Area */}
                                <div className={`h-64 ${bgClass} p-8 flex flex-col justify-between relative`}>
                                    {/* Decorative Elements */}
                                    <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700" />

                                    {/* Date Badge */}
                                    <div className="self-start relative z-10">
                                        <span className={`inline-block px-5 py-2 rounded-full font-bold text-lg bg-white/25 text-white backdrop-blur-md shadow-sm border border-white/10`}>
                                            {event.dateBadge}
                                        </span>
                                    </div>

                                    {/* Title in Box */}
                                    <div className="relative z-10 text-white mt-auto">
                                        <h3 className="text-2xl font-bold leading-tight mb-2 drop-shadow-sm">
                                            {event.title}
                                        </h3>
                                        <p className="font-medium text-white/90 text-lg">
                                            {event.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Content Area */}
                                <div className="p-8 flex flex-col flex-grow bg-white">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight min-h-[3.5rem]">
                                        {event.title}
                                    </h3>

                                    <div className="space-y-4 mb-8 text-slate-600 font-medium">
                                        <div className="flex items-center gap-3">
                                            <CalendarIcon className="w-5 h-5 text-slate-400" />
                                            <span>{event.dateRange}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <ClockIcon className="w-5 h-5 text-slate-400" />
                                            <span>{event.time}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <Link
                                            href={`/veranstaltungen/${event.slug}`}
                                            className="block w-full bg-slate-900 text-white text-center py-4 font-bold text-sm tracking-widest uppercase hover:bg-sky-600 transition-colors rounded-xl shadow-md"
                                        >
                                            Weitere Informationen
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Social Media Footer */}
                <div className="mt-24 max-w-3xl mx-auto text-center py-12 px-6 rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-8">Folge uns für Updates</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://www.instagram.com/arlpark/" target="_blank" className="px-8 py-3 rounded-full font-bold bg-white text-sky-600 hover:bg-sky-50 transition-colors shadow-lg">
                            Instagram
                        </a>
                        <a href="https://www.facebook.com/arlpark/" target="_blank" className="px-8 py-3 rounded-full font-bold bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors">
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
