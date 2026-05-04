import Link from "next/link";

const ALL_LINKS = [
    { href: "/angebote/trampolin", label: "Trampolin" },
    { href: "/angebote/klettern", label: "Klettern" },
    { href: "/angebote/bowling", label: "9-Pin Bowling" },
    { href: "/angebote/squash", label: "Squash" },
    { href: "/angebote/tennis", label: "Tennis" },
    { href: "/angebote/tischtennis", label: "Tischtennis" },
    { href: "/angebote/pickleball", label: "Pickleball" },
    { href: "/angebote/kids-play", label: "Kids Play" },
    { href: "/sportsbar", label: "Sportsbar" },
    { href: "/mietanlagen", label: "Mietanlagen" },
    { href: "/geburtstage", label: "Geburtstage" },
    { href: "/gruppen-schulen", label: "Gruppen & Vereine" },
];

export default function WeitereAngeboteSection({ currentHref }: { currentHref: string }) {
    const links = ALL_LINKS.filter((l) => l.href !== currentHref);
    return (
        <section className="py-12 px-4 md:px-6 bg-slate-50 border-t border-slate-100">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                    Weitere Angebote im arl.park
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-medium text-sm hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
