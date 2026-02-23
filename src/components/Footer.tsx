import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, EmailIcon } from "@/components/Icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: "/angebote", label: "Angebote" },
        { href: "/preise", label: "Preise" },
        { href: "/oeffnungszeiten", label: "Öffnungszeiten" },
        { href: "/gutscheine", label: "Gutscheine" },
        { href: "/geburtstage", label: "Geburtstage" },
        { href: "/mietanlagen", label: "Mietanlagen" },
        { href: "/faq", label: "FAQ" },
    ];

    const legalLinks = [
        { href: "/impressum", label: "Impressum" },
        { href: "/datenschutz", label: "Datenschutz" },
    ];

    return (
        <>
            {/* Anfahrt Section - Now a distinct section */}
            <section className="bg-slate-50 py-20 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 font-bold px-4 py-2 rounded-full text-sm mb-4">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                Nur 2 Gehminuten vom Bahnhof
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">So finden Sie uns</h2>
                            <p className="text-lg text-slate-600 max-w-2xl">
                                Direkt am Bahnhof St. Anton am Arlberg — nur 2 Gehminuten entfernt. Einfach und bequem mit dem Zug oder Auto anreisen. Parkplätze direkt vor der Halle sowie Tiefgarage vorhanden.
                            </p>
                        </div>
                        <Link href="/kontakt" className="btn-primary whitespace-nowrap px-8 py-3.5 shadow-lg shadow-sky-500/20">
                            Anfahrt planen &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="bg-slate-900 text-slate-300" role="contentinfo">
                <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8">

                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
                        {/* Brand Column */}
                        <div className="col-span-1 lg:col-span-1">
                            <Link href="/" className="inline-block mb-6" aria-label="ARL.PARK Homepage">
                                <Image
                                    src="/logo.svg"
                                    alt="ARL.PARK"
                                    width={120}
                                    height={40}
                                    className="h-10 w-auto brightness-0 invert"
                                />
                            </Link>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Dein Indoor Funpark in St. Anton. Klettern, Trampolin, Bowling, Squash und mehr - Spiel, Spaß & Action für alle!
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.instagram.com/arlpark/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-sky-600 rounded-xl flex items-center justify-center transition-colors"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.facebook.com/arlpark/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-sky-600 rounded-xl flex items-center justify-center transition-colors"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
                            <ul className="space-y-3" role="list">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-6">Kontakt</h3>
                            <ul className="space-y-4" role="list">
                                <li>
                                    <a
                                        href="tel:+4366099880066"
                                        className="text-slate-400 hover:text-sky-400 transition-colors text-sm flex items-center gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                            <PhoneIcon size={14} className="text-sky-500" />
                                        </div>
                                        +43 660 99 88 0 66
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:info@arlpark.com"
                                        className="text-slate-400 hover:text-sky-400 transition-colors text-sm flex items-center gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                            <EmailIcon size={14} className="text-sky-500" />
                                        </div>
                                        info@arlpark.com
                                    </a>
                                </li>
                            </ul>
                            <div className="mt-6 text-sm text-slate-400 pl-[44px]">
                                <p className="font-medium text-white mb-1">ARL.PARK GmbH</p>
                                <p>Bahnhofstraße 1</p>
                                <p>6580 St. Anton am Arlberg</p>
                            </div>
                        </div>

                        {/* Booking CTA */}
                        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 flex flex-col h-full">
                            <h3 className="text-white font-bold text-lg mb-6">Jetzt buchen</h3>
                            <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">
                                Sichere dir deinen Platz für Bowling, Squash oder Tennis bequem online.
                            </p>
                            <div>
                                <Link
                                    href="https://v5.bookandplay.com/p_pro_arlpark.php"
                                    className="btn-primary w-full text-center text-sm py-4 block shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-shadow"
                                >
                                    Online Reservieren
                                </Link>
                                <p className="text-slate-500 text-xs mt-6 text-center">
                                    * Keine Reservierung für Trampolin & Klettern nötig
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sponsors Section */}
                    <div className="py-12 border-b border-slate-800">
                        <h4 className="text-slate-500 text-xs font-bold mb-8 text-center uppercase tracking-[0.2em]">Unsere Partner</h4>
                        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <Link href="https://kletterhalle.com/" target="_blank" className="hover:scale-105 transition-transform flex items-center justify-center">
                                <Image
                                    src="/logo-kletterzentrum-imst.svg"
                                    alt="Kletterzentrum Imst"
                                    width={120}
                                    height={80}
                                    className="h-16 w-auto"
                                />
                            </Link>
                            <Link href="https://boulderblock.at/" target="_blank" className="hover:scale-105 transition-transform flex items-center justify-center">
                                <span className="text-3xl font-black text-white tracking-tight uppercase">BOULDERBLOCK.AT</span>
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <p className="text-slate-500 text-sm">
                            &copy; {currentYear} ARL.PARK GmbH.
                        </p>
                        <div className="flex gap-6">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-slate-500 hover:text-white transition-colors text-sm font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
