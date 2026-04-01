export interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

export const faqs: FAQItem[] = [
    // Allgemeine Informationen
    {
        category: "Allgemeine Informationen",
        question: "Was ist der arl.park?",
        answer: "Der arl.park ist ein modernes Sport- und Freizeitzentrum für die ganze Familie. Wir bieten abwechslungsreiche Indoor- und Outdoor-Aktivitäten für jedes Alter – von Ballsport und Klettern bis hin zu Spiel- und Bewegungszonen für Kinder."
    },
    {
        category: "Allgemeine Informationen",
        question: "Welche Angebote gibt es bei euch?",
        answer: "Unser Zentrum umfasst Sportbereiche wie Trampolin, Klettern, Softplay für Kinder, 9pin Bowling, Squash, Pickleball, Tennis, Billard, Darts, Tischfußball und vieles mehr. Zusätzlich gibt es eine Gastronomie für Snacks und Erholung."
    },
    {
        category: "Allgemeine Informationen",
        question: "Wo befindet sich der arl.park?",
        answer: "Du findest uns in der Bahnhofstraße 1 in 6580 St. Anton am Arlberg, direkt neben dem Bahnhof – zentral gelegen und gut erreichbar mit dem Auto und den öffentlichen Verkehrsmitteln."
    },
    {
        category: "Allgemeine Informationen",
        question: "Für welches Alter sind eure Angebote geeignet?",
        answer: "Bei uns ist für alle etwas dabei – vom Kleinkind bis zum Erwachsenen. Viele Bereiche sind altersgerecht konzipiert. Altersbeschränkungen: Kinderbereich von 0-6 Jahren, Trampolin ab 3 Jahren findest du ggf. in der jeweiligen Aktivitätsbeschreibung."
    },
    {
        category: "Allgemeine Informationen",
        question: "Gibt es feste Öffnungszeiten?",
        answer: "Ja, wir haben täglich ab 14 Uhr geöffnet am Wochenenden, Feiertagen und Ferien bereits ab 9 Uhr."
    },

    // Eintritt & Preise
    {
        category: "Eintritt & Preise",
        question: "Was kostet der Eintritt in den arl.park?",
        answer: "Unsere Preise richten sich nach den gewählten Aktivitäten und der Aufenthaltsdauer. Eine aktuelle Preisliste findest du auf unserer Website."
    },
    {
        category: "Eintritt & Preise",
        question: "Gibt es Tageskarten oder Abos?",
        answer: "Ja! Du kannst zwischen Einzelbesuchen, Tagespässen, 10er-Karten und vergünstigten Monatsabos wählen – perfekt für regelmäßige Besucher."
    },
    {
        category: "Eintritt & Preise",
        question: "Gibt es Rabatte für Familien oder Gruppen?",
        answer: "Wir bieten Familienpakete und Gruppenpreise an – ideal für Kindergeburtstage, Schulklassen oder Vereine. Sprich uns einfach an oder buche direkt online."
    },
    {
        category: "Eintritt & Preise",
        question: "Müssen Begleitpersonen Eintritt zahlen?",
        answer: "Begleitpersonen, die keine Anlagen nutzen, zahlen bei uns keinen Eintritt."
    },

    // Angebote & Aktivitäten
    {
        category: "Angebote & Aktivitäten",
        question: "Welche Sportarten kann man bei euch machen?",
        answer: "Aktuell bieten wir: Trampolin, Klettern, Softplay für Kinder, 9pin Bowling, Squash, Pickleball, Tennis, Billard, Darts, Tischfußball u. v. m. Die Liste wächst stetig!"
    },
    {
        category: "Angebote & Aktivitäten",
        question: "Gibt es spezielle Angebote für Kinder?",
        answer: "Ja! Von Kindertrampolin über Softplay bis hin zu betreuten Aktivitäten – Kinder kommen bei uns voll auf ihre Kosten."
    },
    {
        category: "Angebote & Aktivitäten",
        question: "Können bei euch auch Geburtstage gefeiert werden?",
        answer: "Ja, wir bieten spezielle Geburtstagspakete mit reservierten Bereichen, Aktivitäten und Verpflegung. Jetzt unverbindlich anfragen!"
    },
    {
        category: "Angebote & Aktivitäten",
        question: "Bietet ihr Kurse oder Training an?",
        answer: "Ja, regelmäßig finden Kurse, Camps und Sporttrainings statt. Alle Termine findest du im Veranstaltungskalender."
    },

    // Buchung & Reservierung
    {
        category: "Buchung & Reservierung",
        question: "Muss ich im Voraus buchen?",
        answer: "Für Trampolin und Klettern ist keine Buchung notwendig für alle anderen Bereiche empfehlen wir eine Buchung."
    },
    {
        category: "Buchung & Reservierung",
        question: "Wie kann ich reservieren?",
        answer: "Ganz einfach über unser Online-Buchungssystem oder telefonisch. www.arlpark.com"
    },
    {
        category: "Buchung & Reservierung",
        question: "Kann ich meine Buchung ändern oder stornieren?",
        answer: "Ja, Änderungen und Stornierungen sind möglich. Bitte kontaktiere uns rechtzeitig per E-Mail oder Telefon."
    },

    // Kinder & Familien
    {
        category: "Kinder & Familien",
        question: "Dürfen Kinder alleine bei euch bleiben?",
        answer: "Kinder unter 10 Jahren müssen von einer erwachsenen Begleitperson beaufsichtigt werden. Für ältere Kinder bieten wir bei bestimmten Angeboten auch Betreuung."
    },
    {
        category: "Kinder & Familien",
        question: "Gibt es Wickelmöglichkeiten und kinderfreundliche Einrichtungen?",
        answer: "Ja, wir haben eine Wickelstation, Eingang mit Kinderwagen ist nur über eine Treppe möglich. Kinderwägen können jedoch geparkt werden, dazu bitte bei der Kassa melden."
    },

    // Gastronomie
    {
        category: "Gastronomie",
        question: "Gibt es ein Restaurant oder Café?",
        answer: "Ja, unser Bistro bietet eine Auswahl an Snacks, leckerem Fingerfood und Getränken – auch für Kinder und Allergiker."
    },
    {
        category: "Gastronomie",
        question: "Darf ich eigenes Essen mitbringen?",
        answer: "In den Sportbereichen ja. In unseren Sitzbereichen bitten wir um den Verzehr unserer Gastronomieangebote. Ausnahmen gelten für Kinder oder bei Allergien."
    },

    // Anfahrt & Parken
    {
        category: "Anfahrt & Parken",
        question: "Gibt es Parkplätze?",
        answer: "Ja, direkt vor dem Haus stehen ausreichend kostenlose Parkplätze zur Verfügung. Parkdauer 3h mit Parkscheibe."
    },
    {
        category: "Anfahrt & Parken",
        question: "Wie komme ich mit dem ÖPNV zu euch?",
        answer: "Die nächste Haltestelle ist Bahnhof St. Anton am Arlberg. Von dort sind es nur wenige Sekunden zu Fuß."
    },

    // Ausstattung & Umkleiden
    {
        category: "Ausstattung & Umkleiden",
        question: "Gibt es Umkleiden und Duschen?",
        answer: "Ja, für alle Ticketbesitzer stehen Umkleidekabinen mit Duschen und Spinden kostenlos zur Verfügung. Eine ausschließliche Nutzung (ohne Ticket) ist ebenfalls möglich – hierfür wird eine Gebühr erhoben."
    },
    {
        category: "Ausstattung & Umkleiden",
        question: "Muss ich Sportkleidung mitbringen?",
        answer: "Ja, wir empfehlen bequeme Sportkleidung und rutschfeste Schuhe. Für manche Aktivitäten gelten besondere Anforderungen (z. B. saubere Hallenschuhe, Trampolinsocken, Kletterschuhe)."
    },
    {
        category: "Ausstattung & Umkleiden",
        question: "Können Ausrüstungen geliehen werden?",
        answer: "Ja, für alle Sportarten kannst du alle notwendigen Artikel ausleihen."
    },

    // Gutscheine
    {
        category: "Gutscheine",
        question: "Bietet ihr Gutscheine an?",
        answer: "Ja! Unsere Gutscheine eignen sich perfekt als Geschenk und können für alle Angebote eingelöst werden. Jetzt online kaufen oder vor Ort erwerben."
    },
    {
        category: "Gutscheine",
        question: "Wie lange sind Gutscheine gültig?",
        answer: "Unsere Gutscheine sind 3 Jahre ab Ausstellungsdatum gültig."
    },

    // Kontakt & Hilfe
    {
        category: "Kontakt & Hilfe",
        question: "Wie kann ich euch erreichen?",
        answer: "Du erreichst uns telefonisch unter +43 (0) 660 99 88 066 oder per E-Mail an info@arlpark.at. Alternativ kannst du unser Kontaktformular nutzen."
    },
    {
        category: "Kontakt & Hilfe",
        question: "An wen kann ich mich bei Problemen wenden?",
        answer: "Unser Team vor Ort hilft dir gerne weiter. Sprich einfach einen Mitarbeiter an, oder melde dich telefonisch oder per Mail."
    }
];
