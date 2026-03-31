"use client";

import Link from "next/link";
import Image from "next/image";
import { SchuleIcon, FirmaIcon, CheckIcon, GeburtstagIcon } from "@/components/Icons";

export default function GruppenSchulenPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/activities/Climbing/DSC2726-scaled.jpg')",
                        backgroundAttachment: "fixed",
                    }}
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-teal-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
                        Gruppen & Vereine
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Gemeinsam erleben – für Schulen, Vereine und Firmen.</p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto space-y-20">

                {/* Schulen & Vereine */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                            <SchuleIcon className="text-blue-600" size={32} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Schulen & Sportvereine</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Bringen Sie Bewegung in den Schulalltag! Im arl.park können sich Schüler sicher austoben und neue Sportarten entdecken.
                        </p>
                        <h3 className="font-bold text-slate-900 mb-4">Ihre Vorteile:</h3>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Attraktive Gruppenrabatte ab 8 Personen",
                                "Flexible Zeitfenster — auch am Vormittag und außerhalb der Öffnungszeiten",
                                "Kostenlose Begleitpersonen (Lehrer, Betreuer, Aufsichtsperson)",
                                "Kombinierbare Aktivitäten"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckIcon className="w-5 h-5 text-emerald-500" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/kontakt" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                            Individuelles Angebot anfordern &rarr;
                        </Link>
                    </div>
                    <div className="relative rounded-3xl h-80 lg:h-full min-h-[300px] overflow-hidden shadow-lg">
                        <Image
                            src="/images/activities/Trampoline/DSC0636-scaled.jpg"
                            alt="Schulklasse im arl.park"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Firmenevents */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative rounded-3xl h-80 lg:h-full min-h-[300px] overflow-hidden shadow-lg">
                        <Image
                            src="/images/activities/Bowling/DSC2041-scaled.jpg"
                            alt="Teamevent Bowling im arl.park"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                            <FirmaIcon className="text-indigo-600" size={32} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Firmenevents & Teambuilding</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Stärken Sie den Teamgeist abseits des Büros. Ob sportliche Challenge oder entspanntes Bowling-Turnier – wir haben das passende Programm.
                        </p>
                        <h3 className="font-bold text-slate-900 mb-4">Möglichkeiten:</h3>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Exklusive Anmietung von Bereichen",
                                "Geführte Teambuilding-Spiele",
                                "Catering & Sektempfang",
                                "Tagungsraum optional verfügbar"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckIcon className="w-5 h-5 text-emerald-500" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/kontakt" className="text-indigo-600 font-bold hover:underline flex items-center gap-2">
                            Firmenevent planen &rarr;
                        </Link>
                    </div>
                </div>

                {/* Erwachsenengeburtstage & JGA */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                            <GeburtstagIcon className="text-pink-600" size={32} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Erwachsenengeburtstage & Junggesellenabschiede</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Feiert euren besonderen Tag mit Action und Spaß im arl.park! Ob sportlicher Wettkampf beim Bowling oder ein Kletter-Abenteuer – bei uns wird jede Feier unvergesslich.
                        </p>
                        <h3 className="font-bold text-slate-900 mb-4">Highlights für euch:</h3>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Sport-Action kombiniert mit gemütlichem Beisammensein",
                                "Reservierte Bereiche in der Sportsbar",
                                "Spezielle Getränke- und Snack-Pakete",
                                "Kein Vorwissen nötig – Spaß steht im Vordergrund"
                            ].map((item, i) => (
                                <li key={`jga-${i}`} className="flex items-center gap-3">
                                    <CheckIcon className="w-5 h-5 text-emerald-500" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/kontakt" className="text-pink-600 font-bold hover:underline flex items-center gap-2">
                            Jetzt Feier anfragen &rarr;
                        </Link>
                    </div>
                    <div className="relative rounded-3xl h-80 lg:h-full min-h-[300px] overflow-hidden shadow-lg">
                        <Image
                            src="/images/activities/Sportsbar/DSC2065-scaled.jpg"
                            alt="Geburtstagsfeier in der Sportsbar"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </section>

            {/* Preise & Verpflegung */}
            <section className="py-16 px-4 md:px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Preise für Schulen & Vereine</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4">Aktivitäten</h3>
                            <div className="space-y-3 text-sm text-slate-700">
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span>2h Trampolin oder Klettern (inkl. Verleih)</span>
                                    <span className="font-bold">11,00 € / Person</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span>1h 9-Pin Bowling</span>
                                    <span className="font-bold">4,50 € / Person</span>
                                </div>
                                <p className="text-sky-700 font-medium pt-2">Mit Kombipaketen noch mehr sparen. Erhalte dein individuelles Angebot auf Anfrage.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4">Verpflegung</h3>
                            <div className="space-y-3 text-sm text-slate-700">
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span>Nudeln & Skiwasser</span>
                                    <span className="font-bold">10,50 €</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span>Chili Con Carne (oder sin Carne) mit Brot & Skiwasser</span>
                                    <span className="font-bold">15,50 €</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-100">
                                    <span>Trainer (1h)</span>
                                    <span className="font-bold">60,00 €</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-3">Bierzapfanlage</h3>
                            <p className="text-slate-600 text-sm">
                                Für alle, die ihr Getränk lieber selbst zapfen: Unsere Bierzapfanlage mit 15-Liter-Fass steht auf Anfrage bereit – zum Preis von 133 €. Perfekt für Feiern, oder gemütliche Runden nach dem Sport.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-3">Catering nach Wunsch</h3>
                            <p className="text-slate-600 text-sm">
                                Auf Anfrage stellen wir individuell abgestimmte Verpflegung ganz nach euren Vorstellungen zusammen. Ob belegte Brote für zwischendurch, herzhafte warme Gerichte wie Chili con Carne oder sin Carne, bunte Fingerfood-Platten oder etwas ganz anderes – wir machen (fast) alles möglich.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white py-16 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Planen Sie Ihr Event mit uns</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Wir unterstützen Sie gerne bei der Organisation. Kontaktieren Sie uns für ein unverbindliches Angebot.
                    </p>
                    <Link href="/kontakt" className="btn-primary">
                        Kontaktformular
                    </Link>
                </div>
            </section>
        </main>
    );
}
