import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, EmailIcon } from "@/components/Icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: "/preise", label: "Preise" },
        { href: "/aktivitaeten", label: "Aktivitäten" },
        { href: "/oeffnungszeiten", label: "Öffnungszeiten" },
        { href: "/gutscheine", label: "Gutscheine" },
        { href: "/geburtstage", label: "Geburtstage" },
    ];

    const legalLinks = [
        { href: "/impressum", label: "Impressum" },
        { href: "/datenschutz", label: "Datenschutz" },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 md:py-16">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="inline-block mb-4" aria-label="ARL.PARK Homepage">
                            <Image
                                src="/logo.svg"
                                alt="ARL.PARK"
                                width={120}
                                height={40}
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Indoor Funpark in St. Anton am Arlberg. Trampolin, Klettern, Bowling und mehr!
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/arlpark/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-colors"
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
                                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-colors"
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
                        <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
                        <ul className="space-y-2" role="list">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Kontakt</h3>
                        <ul className="space-y-3" role="list">
                            <li>
                                <a
                                    href="tel:+4366099880066"
                                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2"
                                >
                                    <PhoneIcon size={16} className="text-orange-500" />
                                    +43 660 99 88 0 66
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@arlpark.com"
                                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2"
                                >
                                    <EmailIcon size={16} className="text-orange-500" />
                                    info@arlpark.com
                                </a>
                            </li>
                        </ul>
                        <div className="mt-4 text-sm text-gray-400">
                            <p className="font-medium text-white">Adresse</p>
                            <p>6580 St. Anton am Arlberg</p>
                            <p>Österreich</p>
                        </div>
                    </div>

                    {/* Booking CTA */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Jetzt buchen</h3>
                        <Link
                            href="https://v5.bookandplay.com/p_pro_arlpark.php"
                            className="btn-primary inline-block text-sm mb-4"
                        >
                            Tickets buchen
                        </Link>
                        <p className="text-gray-500 text-xs">
                            Keine Reservierung nötig für Trampolin & Klettern
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} ARL.PARK GmbH. Alle Rechte vorbehalten.
                    </p>
                    <div className="flex gap-6">
                        {legalLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
