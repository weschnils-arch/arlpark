import type { Metadata } from "next";
import { TrampolinIcon, KletternIcon, BowlingIcon, TennisIcon, ClockIcon, PhoneIcon, InfoIcon } from "@/components/Icons";

export const metadata: Metadata = {
    title: "Öffnungszeiten - ARL.PARK Indoor Funpark",
    description: "Alle Öffnungszeiten für Trampolin, Klettern, Bowling und mehr im ARL.PARK St. Anton am Arlberg.",
};

const openingHours = [
    {
        activity: "Trampolin",
        icon: TrampolinIcon,
        color: "bg-blue-500",
        textColor: "text-blue-600",
        hours: [
            { days: "Mo – Do", time: "14:00 – 19:00" },
            { days: "Freitag", time: "14:00 – 21:00" },
            { days: "Samstag", time: "09:00 – 21:00" },
            { days: "So & Feiertage", time: "09:00 – 19:00" },
        ],
    },
    {
        activity: "Klettern & Bouldern",
        icon: KletternIcon,
        color: "bg-orange-500",
        textColor: "text-orange-600",
        hours: [
            { days: "Mo, Mi, Fr", time: "14:00 – 22:00" },
            { days: "Di, Do", time: "09:00 – 22:00" },
            { days: "Sa, So & Feiertage", time: "09:00 – 22:00" },
        ],
    },
    {
        activity: "Bowling & Bar",
        icon: BowlingIcon,
        color: "bg-gray-700",
        textColor: "text-gray-800",
        hours: [
            { days: "Mo, Di, Do", time: "14:00 – 23:00" },
            { days: "Mi, Fr", time: "14:00 – 00:00" },
            { days: "Samstag", time: "09:00 – 00:00" },
            { days: "Sonntag", time: "09:00 – 23:00" },
        ],
    },
    {
        activity: "Tennis & Pickleball",
        icon: TennisIcon,
        color: "bg-green-500",
        textColor: "text-green-600",
        hours: [
            { days: "Täglich", time: "Nach Reservierung" },
        ],
        note: "Reservierung: +43 660 99 88 0 66",
    },
];

export default function OeffnungszeitenPage() {
    return (
        <main>
            {/* Hero Section - Unified Style */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 min-h-[280px] md:min-h-[320px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.3)_0%,transparent_60%)]" />

                <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tight">
                        Öffnungszeiten
                    </h1>
                    <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto">
                        Plane deinen Besuch – wir haben fast jeden Tag für dich geöffnet!
                    </p>
                </div>
            </section>

            {/* Opening Hours Grid */}
            <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-teal-50 to-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                        {openingHours.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <article
                                    key={item.activity}
                                    className="glass-card p-5 md:p-8 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                        <div className={`w-12 h-12 md:w-14 md:h-14 ${item.color} rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                                            <IconComponent className="text-white" size={24} />
                                        </div>
                                        <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                                            {item.activity}
                                        </h2>
                                    </div>

                                    <dl className="space-y-2 md:space-y-3">
                                        {item.hours.map((hour, index) => (
                                            <div key={index} className="flex justify-between items-center py-2 md:py-3 border-b border-gray-100 last:border-0">
                                                <dt className="text-gray-600 text-sm md:text-base">{hour.days}</dt>
                                                <dd className={`font-bold text-base md:text-lg ${item.textColor}`}>{hour.time}</dd>
                                            </div>
                                        ))}
                                    </dl>

                                    {item.note && (
                                        <p className="mt-4 text-sm text-orange-600 font-semibold flex items-center gap-2 bg-orange-50 rounded-xl p-3">
                                            <InfoIcon size={18} className="text-orange-500 flex-shrink-0" />
                                            <span>{item.note}</span>
                                        </p>
                                    )}
                                </article>
                            );
                        })}
                    </div>

                    {/* Important Note */}
                    <div className="mt-8 md:mt-12 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl md:rounded-3xl p-6 md:p-10">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                <InfoIcon className="text-white" size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-orange-700 mb-2">Gut zu wissen</h3>
                                <p className="text-gray-700 text-sm md:text-lg">
                                    <strong>Keine Reservierung nötig</strong> für Trampolin und Klettern – komm einfach vorbei!
                                    Für Bowling, Tennis und Squash empfehlen wir eine Reservierung.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-8 md:mt-12 text-center">
                        <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg">Fragen zu unseren Öffnungszeiten?</p>
                        <a
                            href="tel:+4366099880066"
                            className="btn-primary inline-flex items-center gap-2 md:gap-3 text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                        >
                            <PhoneIcon size={20} />
                            +43 660 99 88 0 66
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
