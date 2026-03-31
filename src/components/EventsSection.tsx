"use client";

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

export default function EventsSection() {
    return (
        <section className="relative z-30 bg-white py-20 lg:py-28 px-4 rounded-t-[3rem] -mt-10 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Aktuelles im arl.park
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Hier findest du einen Überblick aller Kurse, Veranstaltungen und Angebote.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
                    {events.slice(0, 3).map((event) => {
                        const isBlue = event.colorTheme === "blue";
                        const bgClass = isBlue
                            ? "bg-sky-400"
                            : "bg-emerald-400";

                        return (
                            <article key={event.id} className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
                                {/* Top Image/Color Area */}
                                <div className={`h-32 md:h-44 ${bgClass} p-4 md:p-6 flex flex-col justify-between relative`}>
                                    <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700" />

                                    <div className="self-start relative z-10">
                                        <span className="inline-block px-3 py-1 md:px-5 md:py-2 rounded-full font-bold text-xs md:text-lg bg-white/25 text-white backdrop-blur-md shadow-sm border border-white/10">
                                            {event.dateBadge}
                                        </span>
                                    </div>

                                    <div className="relative z-10 text-white mt-auto">
                                        <h3 className="text-sm md:text-2xl font-bold leading-tight mb-1 drop-shadow-sm">
                                            {event.title}
                                        </h3>
                                        <p className="font-medium text-white/90 text-xs md:text-lg hidden md:block">
                                            {event.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Content Area */}
                                <div className="p-3 md:p-5 flex flex-col flex-grow bg-white">
                                    <div className="space-y-2 mb-4 text-slate-600 font-medium text-xs md:text-sm">
                                        <div className="flex items-center gap-2">
                                            <CalendarIcon className="w-4 h-4 text-slate-400 shrink-0" />
                                            <span className="truncate">{event.dateRange}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ClockIcon className="w-4 h-4 text-slate-400 shrink-0" />
                                            <span>{event.time}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <Link
                                            href={`/veranstaltungen/${event.slug}`}
                                            className="block w-full bg-slate-900 text-white text-center py-2.5 md:py-3.5 font-bold text-xs md:text-sm hover:bg-sky-600 transition-colors rounded-xl shadow-md"
                                        >
                                            Mehr erfahren
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <Link href="/veranstaltungen" className="text-sky-600 font-bold hover:underline text-lg">
                        Alle Veranstaltungen ansehen &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
