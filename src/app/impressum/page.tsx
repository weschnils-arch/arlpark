"use client";

import Link from "next/link";

export default function ImpressumPage() {
    return (
        <main className="bg-white min-h-screen pt-24 pb-20">
            <div className="max-w-3xl mx-auto px-4 md:px-6 prose prose-slate">
                <h1 className="text-4xl font-black text-slate-900 mb-8">Impressum</h1>

                <h3>ARL.PARK GmbH</h3>
                <p>
                    Bahnhofstraße 1<br />
                    6580 St. Anton am Arlberg<br />
                    Österreich
                </p>

                <p>
                    <strong>Telefon:</strong> +43 660 99 88 0 66<br />
                    <strong>E-Mail:</strong> info@arlpark.com<br />
                    <strong>Web:</strong> www.arlpark.com
                </p>

                <h3>Unternehmensdaten</h3>
                <p>
                    <strong>Geschäftsführer:</strong> [Name]<br />
                    <strong>Firmenbuchnummer:</strong> [Nummer]<br />
                    <strong>Firmenbuchgericht:</strong> [Gericht]<br />
                    <strong>UID-Nummer:</strong> [UID]
                </p>

                <p className="text-slate-500 italic mt-12 border-t pt-8">
                    Dies ist eine neu gestaltete Website für den ARL.PARK. Inhalte basieren auf dem Redesign-Konzept.
                </p>
            </div>
        </main>
    );
}
