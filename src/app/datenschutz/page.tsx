import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutz - ARL.PARK",
    description: "Datenschutzerklärung der ARL.PARK GmbH.",
};

export default function DatenschutzPage() {
    return (
        <main className="pt-24 pb-16">
            <section className="section-padding max-w-3xl mx-auto">
                <h1 className="text-4xl font-black mb-8">Datenschutzerklärung</h1>

                <div className="prose prose-lg max-w-none">
                    <h2>1. Datenschutz auf einen Blick</h2>
                    <h3>Allgemeine Hinweise</h3>
                    <p>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                        personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                    </p>

                    <h3>Datenerfassung auf dieser Website</h3>
                    <p>
                        <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                    </p>

                    <h2>2. Hosting</h2>
                    <p>
                        Wir hosten die Inhalte unserer Website bei folgendem Anbieter: [Hosting-Anbieter]
                    </p>

                    <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
                    <h3>Datenschutz</h3>
                    <p>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                        Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                        Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>

                    <h3>Hinweis zur verantwortlichen Stelle</h3>
                    <p>
                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                        ARL.PARK GmbH<br />
                        St. Anton am Arlberg<br />
                        6580 St. Anton am Arlberg<br />
                        Österreich<br /><br />
                        Telefon: +43 660 99 88 0 66<br />
                        E-Mail: info@arlpark.com
                    </p>

                    <h2>4. Datenerfassung auf dieser Website</h2>
                    <h3>Cookies</h3>
                    <p>
                        Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete
                        und richten auf Ihrem Endgerät keinen Schaden an.
                    </p>

                    <h3>Server-Log-Dateien</h3>
                    <p>
                        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                        Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
                    </p>

                    <h2>5. Ihre Rechte</h2>
                    <p>
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                        Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
                        ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                    </p>

                    <h2>6. Kontakt</h2>
                    <p>
                        Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:<br />
                        E-Mail: info@arlpark.com<br />
                        Telefon: +43 660 99 88 0 66
                    </p>
                </div>
            </section>
        </main>
    );
}
