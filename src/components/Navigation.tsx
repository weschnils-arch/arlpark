"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
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
        { href: "/preise", label: "Preise" },
        { href: "/aktivitaeten", label: "Aktivitäten" },
        { href: "/oeffnungszeiten", label: "Öffnungszeiten" },
        { href: "/gutscheine", label: "Gutscheine" },
        { href: "/geburtstage", label: "Geburtstage" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${useDarkTheme
                    ? "bg-white/95 backdrop-blur-lg shadow-lg py-2 md:py-3"
                    : "bg-gradient-to-b from-black/30 to-transparent py-3 md:py-5"
                    }`}
                role="navigation"
                aria-label="Hauptnavigation"
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center" aria-label="ARL.PARK Homepage">
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
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8" role="menubar">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-medium text-sm xl:text-base transition-colors hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1 ${useDarkTheme ? "text-gray-700" : "text-white/90"
                                    } ${pathname === link.href ? "text-orange-500" : ""}`}
                                role="menuitem"
                                aria-current={pathname === link.href ? "page" : undefined}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button - Desktop */}
                    <Link
                        href="https://v5.bookandplay.com/p_pro_arlpark.php"
                        className="hidden lg:block btn-primary text-sm px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                        Tickets buchen
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`lg:hidden p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${useDarkTheme ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                            }`}
                        aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d={menuOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Menu Panel */}
            <div
                id="mobile-menu"
                className={`lg:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                role="menu"
            >
                <div className="flex flex-col h-full">
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <Image
                            src="/logo.svg"
                            alt="ARL.PARK"
                            width={100}
                            height={32}
                            className="h-8 w-auto"
                        />
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
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
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block px-4 py-3.5 rounded-xl font-medium text-lg transition-colors ${pathname === link.href
                                        ? "bg-orange-50 text-orange-600"
                                        : "text-gray-700 hover:bg-gray-50"
                                        }`}
                                    onClick={() => setMenuOpen(false)}
                                    role="menuitem"
                                    aria-current={pathname === link.href ? "page" : undefined}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>

                    {/* Menu Footer */}
                    <div className="p-4 border-t border-gray-100">
                        <Link
                            href="https://v5.bookandplay.com/p_pro_arlpark.php"
                            className="btn-primary w-full text-center py-4 text-lg"
                            onClick={() => setMenuOpen(false)}
                        >
                            Tickets buchen
                        </Link>
                        <p className="text-center text-gray-500 text-sm mt-4">
                            +43 660 99 88 0 66
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
