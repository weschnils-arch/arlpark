"use client";

import Link from "next/link";

export default function ImpressumPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[35vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/activities/Bowling/DSC2041-scaled.jpg')`,
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="absolute inset-0 bg-slate-900/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg text-white">
                        Impressum
                    </h1>
                </div>
            </section>

            <div className="max-w-3xl mx-auto px-4 md:px-6 py-16">
                <p className="text-slate-500 text-sm mb-10">
                    Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.
                </p>

                <section className="mb-10">
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Unternehmensangaben</h2>
                    <p className="text-slate-700 leading-relaxed">
                        <strong>Gohl &amp; Wolf GmbH</strong><br />
                        Bahnhofstraße 1<br />
                        6580 St. Anton am Arlberg<br />
                        Österreich
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Unternehmensdaten</h2>
                    <p className="text-slate-700 leading-relaxed">
                        <strong>Unternehmensgegenstand:</strong> arl.park – Trampolin-Halle<br />
                        <strong>UID-Nummer:</strong> ATU79226758<br />
                        <strong>Firmenbuchnummer:</strong> 600337z<br />
                        <strong>Firmenbuchgericht:</strong> Landeck<br />
                        <strong>Firmensitz:</strong> St. Anton am Arlberg<br />
                        <strong>Verleihungsstaat:</strong> Österreich
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Kontakt</h2>
                    <p className="text-slate-700 leading-relaxed">
                        <strong>Tel.:</strong> <a href="tel:06609988066" className="text-sky-600 hover:underline">06609988066</a><br />
                        <strong>E-Mail:</strong> <a href="mailto:info@arlpark.at" className="text-sky-600 hover:underline">info@arlpark.at</a>
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Vertretungsbefugte Gesellschafter</h2>
                    <p className="text-slate-700">Christoph Wolf, Andreas Gohl</p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-black text-slate-900 mb-4">EU-Streitschlichtung</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
                        Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter{" "}
                        <a href="http://ec.europa.eu/odr?tid=121201424" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                            http://ec.europa.eu/odr?tid=121201424
                        </a>{" "}
                        zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Haftung für Inhalte dieser Webseite</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir Sie uns umgehend zu kontaktieren, Sie finden die Kontaktdaten im Impressum.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Haftung für Links auf dieser Webseite</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht laut § 17 ECG für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitten wir Sie uns zu kontaktieren, Sie finden die Kontaktdaten im Impressum.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Urheberrechtshinweis</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Bildernachweis</h2>
                    <p className="text-slate-600 leading-relaxed mb-2">
                        Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:
                    </p>
                    <p className="text-slate-700 font-medium mt-2">
                        arl.park, Gohl &amp; Wolf GmbH, Kletterzentrum Imst, FGW GmbH, Tourismusverband St. Anton am Arlberg – Patrick Bätz
                    </p>
                </section>

                <div className="pt-8 border-t border-slate-100 flex gap-6">
                    <Link href="/datenschutz" className="text-sky-600 hover:underline font-medium">Datenschutzerklärung</Link>
                    <Link href="/kontakt" className="text-sky-600 hover:underline font-medium">Kontakt</Link>
                </div>
            </div>
        </main>
    );
}
