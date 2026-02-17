"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
    const pathname = usePathname();
    const isHomepage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
        setExpandedMenu(null);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    // On subpages or when scrolled, use dark text
    const useDarkTheme = !isHomepage || isScrolled;

    const navLinks = [
        { href: "/", label: "Home" },
        {
            href: "/angebote",
            label: "Angebote",
            subLinks: [
                { href: "/angebote", label: "Alle Angebote" },
                { href: "/angebote/trampolin", label: "Trampolin" },
                { href: "/angebote/klettern", label: "Klettern & Bouldern" },
                { href: "/angebote/bowling", label: "Bowling" },
                { href: "/angebote/squash", label: "Squash" },
                { href: "/angebote/tennis", label: "Tennis" },
                { href: "/angebote/tischtennis", label: "Tischtennis" },
                { href: "/angebote/pickleball", label: "Pickleball" },
                { href: "/angebote/kids-play", label: "Kids Play" },
                { href: "/sportsbar", label: "Gastronomie" },
                { href: "/mietanlagen", label: "Mietanlagen" },
                { href: "/angebote/vereinstraining", label: "arl.x Vereinstraining" },
                { href: "/geburtstage", label: "Geburtstage" },
                { href: "/gruppen-schulen", label: "Gruppen & Vereine" },
            ]
        },
        { href: "/geburtstage", label: "Geburtstage" },
        { href: "/gruppen-schulen", label: "Gruppen & Vereine" },
        { href: "/sportsbar", label: "Sportsbar" },
        { href: "/mietanlagen", label: "Mietanlagen" },
        { href: "/preise", label: "Preise" },
        { href: "/veranstaltungen", label: "Events" }, // User asked for "Veranstaltungen / Aktuelles", keeping it short for menu
        { href: "/faq", label: "FAQ" },
        { href: "/kontakt", label: "Kontakt" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${useDarkTheme
                    ? "bg-white/95 backdrop-blur-lg shadow-lg py-2 md:py-3"
                    : "bg-gradient-to-b from-black/60 to-transparent py-3 md:py-5"
                    }`}
                role="navigation"
                aria-label="Hauptnavigation"
            >
                <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center flex-shrink-0" aria-label="ARL.PARK Homepage">
                        <Image
                            src="/logo.svg"
                            alt="ARL.PARK Logo"
                            width={120}
                            height={40}
                            className={`h-8 md:h-10 w-auto transition-all ${useDarkTheme ? "" : "brightness-0 invert"
                                }`}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center gap-4 2xl:gap-6" role="menubar">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-medium text-sm transition-colors hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded-md px-2 py-1 ${useDarkTheme ? "text-slate-700" : "text-white/90"
                                    } ${pathname === link.href ? "text-sky-500 font-bold" : ""}`}
                                role="menuitem"
                                aria-current={pathname === link.href ? "page" : undefined}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button - Visible on lg and below */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`xl:hidden p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${useDarkTheme ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
                            }`}
                        aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d={menuOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
                        </svg>
                    </button>

                    {/* CTA Button - Desktop (Adjusted visibility for XL screens) */}
                    <div className="hidden xl:block pl-4">
                        <Link
                            href="https://v5.bookandplay.com/p_pro_arlpark.php"
                            className="btn-primary text-sm px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 whitespace-nowrap"
                        >
                            Tickets buchen
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`xl:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Menu Panel */}
            <div
                id="mobile-menu"
                className={`xl:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                role="menu"
            >
                <div className="flex flex-col h-full">
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-100">
                        <Image
                            src="/logo.svg"
                            alt="ARL.PARK"
                            width={100}
                            height={32}
                            className="h-8 w-auto"
                        />
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="p-2 rounded-xl hover:bg-slate-100 transition-colors"
                            aria-label="Menü schließen"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Links */}
                    <nav className="flex-1 overflow-y-auto py-6 px-4">
                        <div className="space-y-1">
                            {navLinks.map((link) => (
                                <div key={link.href}>
                                    {link.subLinks ? (
                                        <>
                                            <button
                                                onClick={() => setExpandedMenu(expandedMenu === link.label ? null : link.label)}
                                                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-medium text-lg transition-colors ${pathname.startsWith(link.href) || expandedMenu === link.label
                                                    ? "bg-sky-50 text-sky-600"
                                                    : "text-slate-700 hover:bg-slate-50"
                                                    }`}
                                                aria-expanded={expandedMenu === link.label}
                                            >
                                                {link.label}
                                                <svg
                                                    className={`w-5 h-5 transition-transform duration-200 ${expandedMenu === link.label ? "rotate-180" : ""}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMenu === link.label ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                                                    }`}
                                            >
                                                <div className="pl-4 pr-2 pb-2 space-y-1">
                                                    {link.subLinks.map((subLink) => (
                                                        <Link
                                                            key={subLink.href}
                                                            href={subLink.href}
                                                            className={`block px-4 py-2.5 rounded-lg text-base transition-colors ${pathname === subLink.href
                                                                ? "text-sky-600 bg-sky-50/50 font-medium"
                                                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                                                }`}
                                                            onClick={() => setMenuOpen(false)}
                                                        >
                                                            {subLink.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={`block px-4 py-3.5 rounded-xl font-medium text-lg transition-colors ${pathname === link.href
                                                ? "bg-sky-50 text-sky-600"
                                                : "text-slate-700 hover:bg-slate-50"
                                                }`}
                                            onClick={() => setMenuOpen(false)}
                                            role="menuitem"
                                            aria-current={pathname === link.href ? "page" : undefined}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </nav>

                    {/* Menu Footer */}
                    <div className="p-4 border-t border-slate-100">
                        <Link
                            href="https://v5.bookandplay.com/p_pro_arlpark.php"
                            className="btn-primary w-full text-center py-4 text-lg inline-block"
                            onClick={() => setMenuOpen(false)}
                        >
                            Tickets buchen
                        </Link>
                        <p className="text-center text-slate-500 text-sm mt-4">
                            +43 660 99 88 0 66
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
