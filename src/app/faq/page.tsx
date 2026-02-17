"use client";

import { faqs, FAQItem } from "@/data/faqs";
import { useState } from "react";

export default function FAQPage() {
    // Group FAQs by category
    const categories = Array.from(new Set(faqs.map(f => f.category)));
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 md:px-6">

                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Häufige Fragen (FAQ)</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Hier findest du Antworten auf die wichtigsten Fragen rund um den arl.park.
                    </p>
                </div>

                <div className="space-y-12">
                    {categories.map((category) => {
                        const categoryFaqs = faqs.filter(f => f.category === category);
                        return (
                            <div key={category}>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-sky-500 pl-4">{category}</h2>
                                <div className="space-y-4">
                                    {categoryFaqs.map((faq, index) => {
                                        // Create a unique index for state management logic if needed, but <details> works natively.
                                        // However, native <details> doesn't auto-close others.
                                        // I'll stick to native <details> for simplicity as in FaqTeaser.
                                        return (
                                            <details key={index} className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 [&_summary::-webkit-details-marker]:hidden open:shadow-md transition-all">
                                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                                                    <h3 className="text-lg">{faq.question}</h3>
                                                    <span className="shrink-0 rounded-full bg-slate-50 p-1.5 text-slate-900 sm:p-3 group-open:bg-sky-100 group-open:text-sky-600 transition-all">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </summary>
                                                <p className="mt-4 leading-relaxed text-slate-600 pl-1">
                                                    {faq.answer}
                                                </p>
                                            </details>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center bg-sky-50 rounded-3xl p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Noch Fragen offen?</h3>
                    <p className="text-slate-600 mb-8">
                        Unser Team hilft dir gerne weiter. Schreib uns einfach eine Nachricht oder ruf uns an.
                    </p>
                    <a href="/kontakt" className="btn-primary inline-block">
                        Kontakt aufnehmen
                    </a>
                </div>

            </div>
        </main>
    );
}
