import type { Metadata } from "next";
import Link from "next/link";
import { GutscheinIcon, PhoneIcon, EmailIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
    title: "Gutscheine - ARL.PARK Indoor Funpark",
    description: "Verschenke Action und Spaß! Gutscheine für den ARL.PARK in St. Anton am Arlberg.",
};

const voucherOptions = [
    {
        title: "Trampolin Gutschein",
        description: "2 Stunden Trampolinspaß",
        price: "22€",
        popular: false,
    },
    {
        title: "Kletter-Tageskarte",
        description: "Voller Tag Klettern & Bouldern",
        price: "13,50€",
        popular: false,
    },
    {
        title: "Action-Paket",
        description: "Trampolin + Klettern Kombi",
        price: "52€",
        popular: true,
    },
    {
        title: "Bowling Gutschein",
        description: "1 Stunde Bowling",
        price: "27€",
        popular: false,
    },
    {
        title: "Wertgutschein",
        description: "Flexibel einlösbar",
        price: "Frei wählbar",
        popular: true,
    },
];

export default function GutscheinePage() {
    return (
        <main>
            {/* Hero Section - Unified Style */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 min-h-[280px] md:min-h-[320px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.3)_0%,transparent_60%)]" />

                <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tight">
                        Gutscheine
                    </h1>
                    <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto">
                        Das perfekte Geschenk für Action-Liebhaber! Verschenke unvergessliche Erlebnisse.
                    </p>
                </div>
            </section>

            {/* Voucher Options */}
            <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-purple-50 to-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-black text-center mb-8 md:mb-12 text-gray-900">Unsere Gutscheine</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {voucherOptions.map((voucher) => (
                            <div
                                key={voucher.title}
                                className={`glass-card p-5 md:p-6 relative hover:shadow-xl transition-shadow ${voucher.popular ? "ring-2 ring-orange-500" : ""
                                    }`}
                            >
                                {voucher.popular && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        BELIEBT
                                    </span>
                                )}
                                <h3 className="text-lg md:text-xl font-bold mb-1 text-gray-900">{voucher.title}</h3>
                                <p className="text-gray-600 text-sm mb-3">{voucher.description}</p>
                                <p className="text-2xl md:text-3xl font-black text-orange-500">{voucher.price}</p>
                            </div>
                        ))}
                    </div>

                    {/* How it works */}
                    <div className="mt-12 md:mt-16">
                        <h2 className="text-2xl md:text-3xl font-black text-center mb-8 md:mb-10 text-gray-900">So funktioniert&apos;s</h2>
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            {[
                                { step: "1", title: "Gutschein wählen", desc: "Wähle den passenden Gutschein oder einen Wertgutschein." },
                                { step: "2", title: "Kontaktiere uns", desc: "Ruf uns an oder schreib eine E-Mail." },
                                { step: "3", title: "Verschenken", desc: "Erhalte den Gutschein per E-Mail oder vor Ort." },
                            ].map((item) => (
                                <div key={item.step} className="text-center">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black mx-auto mb-3 md:mb-4 shadow-lg">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 md:mt-16 text-center bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]" />
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">Jetzt Gutschein bestellen</h2>
                            <p className="text-white/90 mb-6 md:mb-8 max-w-lg mx-auto text-sm md:text-base">
                                Kontaktiere uns telefonisch oder per E-Mail.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                                <a
                                    href="tel:+4366099880066"
                                    className="bg-white text-pink-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2 shadow-lg text-sm md:text-base"
                                >
                                    <PhoneIcon size={20} />
                                    Anrufen
                                </a>
                                <a
                                    href="mailto:info@arlpark.com"
                                    className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-white/30 transition-colors inline-flex items-center justify-center gap-2 text-sm md:text-base"
                                >
                                    <EmailIcon size={20} />
                                    E-Mail senden
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
