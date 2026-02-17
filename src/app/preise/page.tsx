"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
    TrampolinIcon,
    KletternIcon,
    BowlingIcon,
    SquashIcon,
    TennisIcon,
    CheckIcon
} from "@/components/Icons";

// --- Configuration & Data ---

const DOLLAR_LINK = "https://v5.bookandplay.com/p_pro_arlpark.php"; // Generic booking link

// Trampolin Data
const TRAMPOLINE_OPTIONS = [
    { label: "1 Stunde Eintritt", value: "1h", price: 17.00 },
    { label: "2 Stunden Eintritt", value: "2h", price: 22.00 },
    { label: "4 Stunden Eintritt", value: "4h", price: 30.00 },
    { label: "10er-Block", value: "10er", price: 153.00 },
];

// Klettern Data
const CLIMBING_TYPES = [
    { label: "Tageskarte", value: "day" },
    { label: "10er-Block", value: "10er" },
    { label: "3-Monatskarte", value: "3m" },
    { label: "Halbjahreskarte", value: "6m" },
    { label: "Jahreskarte", value: "year" },
];

const CLIMBING_GROUPS = [
    { label: "Erwachsene (ab 18)", value: "adult" },
    { label: "Jugendliche (bis 17)", value: "youth" },
];

// Price Matrix: [Type][Group] -> Price
const CLIMBING_PRICES: Record<string, Record<string, number>> = {
    day: {
        adult: 13.50,
        youth: 10.00,
    },
    "10er": {
        adult: 121.50,
        youth: 90.00,
    },
    "3m": {
        adult: 159.00,
        youth: 109.00,
    },
    "6m": {
        adult: 290.00,
        youth: 180.00,
    },
    year: {
        adult: 415.00,
        youth: 250.00,
    },
};

// --- Components ---

function BookingButton({ href = DOLLAR_LINK, text = "Jetzt Buchen" }: { href?: string; text?: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            className="block w-full text-center bg-sky-700 text-white font-bold py-3 px-4 rounded-xl hover:bg-sky-800 transition-colors shadow-lg shadow-sky-500/20 mt-6 focus:outline-none focus:ring-4 focus:ring-sky-500/50"
            aria-label={text}
        >
            {text}
        </Link>
    );
}

export default function PreisePage() {
    // State for calculators
    const [trampolineDuration, setTrampolineDuration] = useState(TRAMPOLINE_OPTIONS[0]);
    const [climbingType, setClimbingType] = useState(CLIMBING_TYPES[0]);
    const [climbingGroup, setClimbingGroup] = useState(CLIMBING_GROUPS[0]);

    // Derived states
    const climbingPrice = CLIMBING_PRICES[climbingType.value]?.[climbingGroup.value] || 0;

    return (
        <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Preise & Tickets</h1>
                    <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
                        Wähle deine Aktivität und finde das passende Ticket für dein Abenteuer im arl.park.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* 1. Trampolin */}
                    <div className="glass-card bg-white p-8 rounded-3xl border border-slate-200 shadow-xl flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700" aria-hidden="true">
                                <TrampolinIcon size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Trampolin</h2>
                        </div>

                        <div className="flex-1 space-y-6">
                            <div>
                                <label htmlFor="trampolin-select" className="block text-sm font-bold text-slate-700 mb-2">Ticket-Art wählen</label>
                                <select
                                    id="trampolin-select"
                                    className="w-full p-3 rounded-xl border border-slate-300 bg-white font-medium text-slate-900 focus:ring-2 focus:ring-sky-600 focus:border-sky-600 outline-none appearance-none"
                                    value={trampolineDuration.value}
                                    onChange={(e) => setTrampolineDuration(TRAMPOLINE_OPTIONS.find(o => o.value === e.target.value) || TRAMPOLINE_OPTIONS[0])}
                                >
                                    {TRAMPOLINE_OPTIONS.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-sky-50 rounded-xl border border-sky-100">
                                <span className="text-sky-900 font-bold">Preis pro Person</span>
                                <span className="text-3xl font-black text-sky-700">{trampolineDuration.price.toFixed(2).replace('.', ',')} €</span>
                            </div>

                            <div className="space-y-3 text-sm text-slate-700">
                                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                    <span>Trampolinsocken (Pflicht)</span>
                                    <span className="font-bold text-slate-900">4,00 €</span>
                                </div>
                                <div className="flex flex-col gap-1 text-sky-800 bg-sky-50/50 p-3 rounded-lg border border-sky-100">
                                    <p className="font-bold">Gruppenrabatt:</p>
                                    <p>Ab 8 Personen 2 Stunden für nur 15 € pro Person (zzgl. Socken).</p>
                                </div>
                            </div>
                        </div>
                        <BookingButton text="Trampolin buchen" />
                    </div>

                    {/* 2. Klettern & Bouldern */}
                    <div className="glass-card bg-white p-8 rounded-3xl border border-slate-200 shadow-xl flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-700" aria-hidden="true">
                                <KletternIcon size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Klettern & Bouldern</h2>
                        </div>

                        <div className="flex-1 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="climb-type" className="block text-sm font-bold text-slate-700 mb-2">Ticket-Art</label>
                                    <select
                                        id="climb-type"
                                        className="w-full p-3 rounded-xl border border-slate-300 bg-white font-medium text-slate-900 focus:ring-2 focus:ring-sky-600 focus:border-sky-600 outline-none"
                                        value={climbingType.value}
                                        onChange={(e) => setClimbingType(CLIMBING_TYPES.find(o => o.value === e.target.value) || CLIMBING_TYPES[0])}
                                    >
                                        {CLIMBING_TYPES.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="climb-group" className="block text-sm font-bold text-slate-700 mb-2">Personengruppe</label>
                                    <select
                                        id="climb-group"
                                        className="w-full p-3 rounded-xl border border-slate-300 bg-white font-medium text-slate-900 focus:ring-2 focus:ring-sky-600 focus:border-sky-600 outline-none"
                                        value={climbingGroup.value}
                                        onChange={(e) => setClimbingGroup(CLIMBING_GROUPS.find(o => o.value === e.target.value) || CLIMBING_GROUPS[0])}
                                    >
                                        {CLIMBING_GROUPS.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-100">
                                <span className="text-orange-900 font-bold">Preis</span>
                                <span className="text-3xl font-black text-orange-700">{climbingPrice.toFixed(2).replace('.', ',')} €</span>
                            </div>

                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <p className="font-bold text-slate-900 mb-2 text-sm">Verleihpreise</p>
                                <div className="space-y-1 text-sm text-slate-700">
                                    <div className="flex justify-between"><span>Kletterschuhe (Erw.)</span><span>5,00 €</span></div>
                                    <div className="flex justify-between"><span>Kletterschuhe (Kind 0-5)</span><span>3,00 €</span></div>
                                    <div className="flex justify-between"><span>Gurt / Sicherungsgerät</span><span>je 3,00 €</span></div>
                                    <div className="flex justify-between"><span>Seil</span><span>3,00 €</span></div>
                                </div>
                            </div>
                        </div>
                        <BookingButton text="Klettern buchen" />
                    </div>

                    {/* 3. Tagesticket arl.park */}
                    {/* User asked for "dunkle font machne wie die anderen boxen". 
                           Wait, user said "make font dark like other boxes". 
                           The previous screenshot shows the box was WHITE but text invisible.
                           User wants it to look like others. Others are WHITE bg, DARK font.
                           So I should use bg-white and text-slate-900.
                           BUT I will stick to the user's explicit request: "make font dark like other boxes".
                           This implies the box IS white (or user wants it white).
                           I will make it white bg, dark font.
                        */}
                    <div className="glass-card bg-white p-8 rounded-3xl border border-slate-200 shadow-xl flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Image src="/logo.svg" alt="" width={150} height={50} className="grayscale opacity-20" aria-hidden="true" />
                        </div>
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700" aria-hidden="true">
                                <CheckIcon size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Tagesticket arl.park</h2>
                        </div>

                        <div className="flex-1 relative z-10 flex flex-col">
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-5xl font-black text-emerald-600">52,00 €</span>
                                <span className="text-slate-500">/ Person</span>
                            </div>

                            <ul className="space-y-3 mb-8 text-slate-700">
                                <li className="flex gap-3">
                                    <CheckIcon size={20} className="text-emerald-500 shrink-0" aria-hidden="true" />
                                    <span>Tagesticket Trampolin</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckIcon size={20} className="text-emerald-500 shrink-0" aria-hidden="true" />
                                    <span>Tagesticket Klettern</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckIcon size={20} className="text-emerald-500 shrink-0" aria-hidden="true" />
                                    <span>Inkl. Kletterausrüstung</span>
                                </li>
                                <li className="flex gap-3 opacity-60">
                                    <span className="w-5 text-center text-xs" aria-hidden="true">•</span>
                                    <span>Exkl. Trampolinsocken</span>
                                </li>
                            </ul>

                            <div className="mt-auto bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                <p className="text-sm font-bold text-emerald-800 mb-1">🔥 Sonderaktion</p>
                                <p className="text-sm text-slate-700">Zusatzaktivitäten (z.B. Bowling) können zum halben Preis dazu gebucht werden!</p>
                            </div>
                        </div>
                        <BookingButton text="Tagesticket buchen" />
                    </div>

                    {/* 4. Bowling */}
                    <div className="glass-card bg-white p-8 rounded-3xl border border-slate-200 shadow-xl flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700" aria-hidden="true">
                                <BowlingIcon size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">9-Pin Bowling</h2>
                        </div>

                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex justify-between items-baseline mb-2">
                                <span className="text-lg text-slate-700 font-medium">Pro Person / Stunde</span>
                                <span className="text-3xl font-black text-slate-900">4,50 €</span>
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg inline-block self-start mb-6 border border-slate-200">
                                <p className="text-sm font-medium text-slate-600">Mindestpreis pro Bahn: <span className="text-slate-900 font-bold">18,00 €</span></p>
                            </div>

                            <div className="border-t border-slate-100 pt-4 mt-auto">
                                <div className="flex justify-between items-center text-sm text-slate-700">
                                    <span>Leihschuhe (Pflicht)</span>
                                    <span className="font-bold text-slate-900">3,00 €</span>
                                </div>
                            </div>
                        </div>
                        <BookingButton text="Bowling buchen" />
                    </div>

                    {/* 5. Squash / Tischtennis */}
                    <div className="glass-card bg-white p-8 rounded-3xl border border-slate-200 shadow-xl flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700" aria-hidden="true">
                                <SquashIcon size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Squash & Tischtennis</h2>
                        </div>

                        <div className="flex-1 flex flex-col">
                            <div className="flex justify-between items-baseline mb-6">
                                <span className="text-lg text-slate-700 font-medium">Platzmiete / Stunde</span>
                                <span className="text-3xl font-black text-purple-700">15,00 €</span>
                            </div>

                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-auto">
                                <p className="font-bold text-slate-900 mb-2 text-sm">Verleih</p>
                                <div className="space-y-1 text-sm text-slate-700">
                                    <div className="flex justify-between"><span>Squashschläger (+ Bälle)</span><span>5,00 €</span></div>
                                    <div className="flex justify-between"><span>Tischtennisschläger (+ Bälle)</span><span>3,00 €</span></div>
                                </div>
                            </div>
                        </div>
                        <BookingButton text="Court buchen" />
                    </div>

                    {/* 6. Tennis / Pickleball */}
                    <div className="glass-card bg-white p-8 rounded-3xl border border-slate-200 shadow-xl flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center text-lime-700" aria-hidden="true">
                                <TennisIcon size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Tennis & Pickleball</h2>
                        </div>

                        <div className="flex-1 flex flex-col">
                            <div className="flex justify-between items-baseline mb-2">
                                <span className="text-lg text-slate-700 font-medium">Platzmiete / Stunde</span>
                                <span className="text-3xl font-black text-lime-700">27,00 €</span>
                            </div>

                            <div className="mb-6">
                                <span className="inline-block bg-lime-50 text-lime-800 text-xs font-bold px-2 py-1 rounded-md border border-lime-100">
                                    Prime Time (19-21 Uhr): +5,00 €
                                </span>
                            </div>

                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-auto">
                                <p className="font-bold text-slate-900 mb-2 text-sm">Verleih</p>
                                <div className="space-y-1 text-sm text-slate-700">
                                    <div className="flex justify-between"><span>Tennis-/Pickleballschläger (+ Bälle)</span><span>5,00 €</span></div>
                                </div>
                            </div>
                        </div>
                        <BookingButton text="Tennis/Pickleball buchen" />
                    </div>

                    {/* 7. Gutscheine */}
                    <div className="glass-card bg-white p-8 rounded-3xl shadow-xl flex flex-col text-center md:col-span-2 lg:col-span-1 border border-slate-200">
                        <div className="mb-6">
                            <h2 className="text-3xl font-black text-slate-900 mb-2">Gutscheine</h2>
                            <p className="text-emerald-600 font-bold text-lg">Verschenke Action & Spaß!</p>
                        </div>

                        <div className="flex-1 flex flex-col justify-center items-center space-y-4">
                            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 w-full max-w-sm shadow-sm group transition-transform hover:scale-[1.02]">
                                <p className="font-bold text-lg text-slate-900 mb-2">Wertgutschein</p>
                                <p className="text-sm text-slate-600 mb-4">Betrag frei wählbar. Gültig für alle Bereiche.</p>
                                <div className="text-5xl mb-2 filter drop-shadow-md transform transition-transform group-hover:rotate-12 duration-300" role="img" aria-label="Geschenk">🎁</div>
                            </div>
                        </div>
                        <BookingButton href="/gutscheine" text="Gutschein kaufen" />
                    </div>

                    {/* 8. Sonstige / Verleih Overview */}
                    <div className="glass-card bg-white p-8 rounded-3xl border border-slate-200 shadow-xl flex flex-col">
                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-slate-900">Weitere Services</h2>
                        </div>
                        <div className="flex-1 space-y-3 text-sm text-slate-700">
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Gepäckdepot / Tag</span>
                                <span className="font-bold">3,00 €</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Dusche (inkl. Handtuch)</span>
                                <span className="font-bold">5,00 €</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Verlust Chiparmband</span>
                                <span className="font-bold">10,00 €</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-100">
                                <span>Bearbeitungsgebühr Storno</span>
                                <span className="font-bold">5,00 €</span>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 text-center">
                            <p className="text-xs text-slate-500">Alle Preise inkl. gesetzlicher MwSt.</p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
