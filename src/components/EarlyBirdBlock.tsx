import Link from "next/link";

export default function EarlyBirdBlock() {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 via-amber-50 to-orange-50 border border-amber-200 p-6 md:p-7 shadow-sm">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-200/40 rounded-full blur-3xl" aria-hidden="true" />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="flex items-center justify-center w-14 h-14 shrink-0 rounded-2xl bg-amber-500 text-white shadow-lg shadow-amber-500/30">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="inline-block px-2 py-0.5 text-[10px] font-black tracking-wider uppercase rounded-full bg-amber-500 text-white">EarlyBird</span>
                        <span className="text-2xl font-black text-amber-700">−20 %</span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-1">Früher buchen lohnt sich</h3>
                    <p className="text-sm text-slate-600">
                        20 % Rabatt für Buchungen mindestens eine Woche im Voraus.
                    </p>
                </div>
                <Link
                    href="https://v5.bookandplay.com/p_pro_arlpark.php"
                    target="_blank"
                    className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors shadow-md shadow-amber-500/20"
                >
                    Jetzt buchen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
            </div>
        </div>
    );
}
