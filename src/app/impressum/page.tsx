import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum - ARL.PARK",
    description: "Impressum und rechtliche Informationen der ARL.PARK GmbH.",
};

export default function ImpressumPage() {
    return (
        <main className="pt-24 pb-16">
            <section className="section-padding max-w-3xl mx-auto">
                <h1 className="text-4xl font-black mb-8">Impressum</h1>

                <div className="prose prose-lg max-w-none">
                    <h2>Angaben gemäß § 5 TMG</h2>
                    <p>
                        ARL.PARK GmbH<br />
                        St. Anton am Arlberg<br />
                        6580 St. Anton am Arlberg<br />
                        Österreich
                    </p>

                    <h2>Kontakt</h2>
                    <p>
                        Telefon: +43 660 99 88 0 66<br />
                        E-Mail: info@arlpark.com
                    </p>

                    <h2>Geschäftsführung</h2>
                    <p>[Geschäftsführer Name]</p>

                    <h2>Registereintrag</h2>
                    <p>
                        Handelsregister: [Registergericht]<br />
                        Registernummer: [Nummer]
                    </p>

                    <h2>Umsatzsteuer-ID</h2>
                    <p>
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                        [USt-IdNr.]
                    </p>

                    <h2>Verantwortlich für den Inhalt</h2>
                    <p>
                        ARL.PARK GmbH<br />
                        St. Anton am Arlberg
                    </p>

                    <h2>Streitschlichtung</h2>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </div>
            </section>
        </main>
    );
}
