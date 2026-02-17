"use client";

import Link from "next/link";
import { faqs } from "@/data/faqs";

export default function FaqTeaser() {
    const teaserFaqs = faqs.slice(0, 4);

    return (
        <section className="relative z-20 py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-black text-center text-slate-900 mb-12">Häufige Fragen</h2>
                <div className="space-y-4 mb-12">
                    {teaserFaqs.map((faq, index) => (
                        <details key={index} className="group bg-slate-50 rounded-2xl p-4 md:p-6 [&_summary::-webkit-details-marker]:hidden open:bg-slate-100 transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                                <h3 className="text-lg">{faq.question}</h3>
                                <span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 shadow-sm sm:p-3 group-open:bg-sky-100 group-open:text-sky-600 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-slate-600 animate-fadeIn">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
                <div className="text-center">
                    <Link href="/faq" className="font-bold text-sky-600 hover:text-sky-700 hover:underline text-lg">
                        Zu allen Fragen & Antworten &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
