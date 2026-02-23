"use client";

import Image from "next/image";

import Link from "next/link";

export default function DatenschutzPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/activities/Climbing/DSC2726-scaled.jpg')`,
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg text-white">
                        Datenschutz
                    </h1>
                    
                </div>
            </section>
            <div className="max-w-3xl mx-auto px-4 md:px-6 prose prose-slate">
                <h1 className="text-4xl font-black text-slate-900 mb-8">Datenschutzerklärung</h1>

                <p>
                    Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
                </p>

                <h3>Kontakt mit uns</h3>
                <p>
                    Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>

                <h3>Datenspeicherung</h3>
                <p>
                    Wir weisen darauf hin, dass zum Zweck des einfacheren Einkaufsvorganges und zur späteren Vertragsabwicklung vom Webshop-Betreiber im Rahmen von Cookies die IP-Daten des Anschlussinhabers gespeichert werden, ebenso wie Name, Anschrift und Kreditkartennummer des Käufers.
                </p>

                <h3>Cookies</h3>
                <p>
                    Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an.
                </p>

                <h3>Ihre Rechte</h3>
                <p>
                    Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde.
                </p>

                <p>
                    <strong>Kontaktieren Sie uns unter:</strong><br />
                    ARL.PARK GmbH<br />
                    Bahnhofstraße 1, 6580 St. Anton am Arlberg<br />
                    info@arlpark.com
                </p>

                <p className="text-slate-500 italic mt-12 border-t pt-8">
                    Dies ist ein Platzhaltertext für die Datenschutzerklärung gemäß DSGVO.
                </p>
            </div>
        </main>
    );
}
