import type { Metadata } from "next";
import Link from "next/link";
import { TrampolinIcon, KletternIcon, BowlingIcon, SquashIcon, PriceIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
    title: "Preise - ARL.PARK Indoor Funpark",
    description: "Alle Preise für Trampolin, Klettern, Bowling, Squash und mehr im ARL.PARK St. Anton am Arlberg.",
};

const priceCategories = [
    {
        id: "trampolin",
        title: "Trampolin",
        icon: TrampolinIcon,
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-500",
        bgLight: "bg-blue-50",
        textColor: "text-blue-600",
        items: [
            { name: "1 Stunde", price: "17€", note: "pro Person" },
            { name: "2 Stunden", price: "22€", note: "pro Person" },
            { name: "Trampolinsocken", price: "4€", note: "Pflicht, einmalig" },
        ],
    },
    {
        id: "klettern",
        title: "Klettern",
        icon: KletternIcon,
        color: "from-orange-500 to-orange-600",
        bgColor: "bg-orange-500",
        bgLight: "bg-orange-50",
        textColor: "text-orange-600",
        items: [
            { name: "Tageskarte Erw.", price: "13,50€", note: "" },
            { name: "Tageskarte Jugend", price: "10€", note: "bis 17 Jahre" },
            { name: "Schuhe Verleih", price: "5€", note: "" },
        ],
    },
    {
        id: "bowling",
        title: "Bowling",
        icon: BowlingIcon,
        color: "from-gray-700 to-gray-800",
        bgColor: "bg-gray-700",
        bgLight: "bg-gray-100",
        textColor: "text-gray-800",
        items: [
            { name: "Pro Person / Std.", price: "4,50€", note: "" },
            { name: "Mindestverbrauch", price: "18€", note: "pro Bahn" },
        ],
    },
    {
        id: "squash",
        title: "Squash & Tennis",
        icon: SquashIcon,
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-500",
        bgLight: "bg-purple-50",
        textColor: "text-purple-600",
        items: [
            { name: "Squash / Tischtennis", price: "15€", note: "/Std./Court" },
            { name: "Tennis / Pickleball", price: "27€", note: "/Std./Court" },
            { name: "Prime Time 19-21h", price: "+5€", note: "" },
        ],
    },
];

export default function PreisePage() {
    return (
        <main>
            {/* Hero Section - Unified Style */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 min-h-[280px] md:min-h-[320px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.3)_0%,transparent_60%)]" />

                <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tight">
                        Unsere Preise
                    </h1>
                    <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto">
                        Transparente Preise – keine versteckten Kosten!
                    </p>
                </div>
            </section>

            {/* Prices Grid */}
            <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-orange-50 to-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                        {priceCategories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                                <article
                                    key={category.id}
                                    id={category.id}
                                    className="glass-card p-5 md:p-8 hover:shadow-xl transition-all duration-300 scroll-mt-28"
                                >
                                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                        <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${category.color} rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                                            <IconComponent className="text-white" size={24} />
                                        </div>
                                        <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                                            {category.title}
                                        </h2>
                                    </div>

                                    <dl className="space-y-1">
                                        {category.items.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`flex justify-between items-center py-3 md:py-4 border-b border-gray-100 last:border-0 ${index % 2 === 0 ? category.bgLight : ''} -mx-2 px-3 rounded-xl`}
                                            >
                                                <div className="min-w-0 flex-1">
                                                    <dt className="font-semibold text-gray-800 text-sm md:text-base">{item.name}</dt>
                                                    {item.note && <span className="text-xs md:text-sm text-gray-500">{item.note}</span>}
                                                </div>
                                                <dd className={`text-xl md:text-2xl font-black ${category.textColor} ml-2 flex-shrink-0`}>{item.price}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </article>
                            );
                        })}
                    </div>

                    {/* Kombi Deal */}
                    <div className="mt-6 md:mt-10">
                        <div className="glass-card p-6 md:p-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <div className="flex items-center gap-4 text-center md:text-left">
                                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <CheckIcon className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-gray-900">Tagespass Trampolin + Klettern</h3>
                                        <p className="text-gray-600 text-sm md:text-base">inkl. Equipment (ohne Socken)</p>
                                    </div>
                                </div>
                                <p className="text-3xl md:text-4xl font-black text-green-600">52€</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-8 md:mt-12">
                        <Link
                            href="https://v5.bookandplay.com/p_pro_arlpark.php"
                            className="btn-primary text-base md:text-lg px-8 md:px-10 py-3.5 md:py-5 inline-flex items-center gap-2 md:gap-3 shadow-xl"
                        >
                            Jetzt Tickets buchen
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Equipment Rental */}
            <section className="py-12 md:py-16 bg-gray-50 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-black text-center mb-6 md:mb-8 text-gray-900">Equipment Verleih</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {[
                            { item: "Kletterschuhe", price: "5€" },
                            { item: "Squash Schläger", price: "5€" },
                            { item: "TT-Schläger", price: "3€" },
                            { item: "Tennis Schläger", price: "5€" },
                        ].map((rental) => (
                            <div key={rental.item} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm text-center">
                                <p className="font-semibold text-gray-800 text-sm md:text-base mb-1">{rental.item}</p>
                                <p className="text-2xl md:text-3xl font-black text-orange-500">{rental.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
