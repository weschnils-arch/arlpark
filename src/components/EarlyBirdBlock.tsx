import Link from "next/link";

export default function EarlyBirdBlock() {
    return (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start">
            <span className="text-2xl" aria-hidden="true">🐦</span>
            <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-1">EarlyBird Tickets</h3>
                <p className="text-sm text-slate-600 mb-3">
                    Früher buchen lohnt sich. <strong>−20 %</strong> für Buchungen
                    mindestens eine Woche im Voraus.
                </p>
                <Link
                    href="https://v5.bookandplay.com/p_pro_arlpark.php"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-amber-700 font-bold text-sm hover:underline"
                >
                    Jetzt buchen
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
