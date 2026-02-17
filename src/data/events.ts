export interface Event {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    dateBadge: string;
    dateRange: string;
    time: string;
    price: string;
    age: string;
    requirements: string[];
    cancellation: string[];
    colorTheme: "blue" | "green";
}

export const events: Event[] = [
    {
        id: "1",
        slug: "kletterkurs-beginner-feb-17",
        title: "Kletterkurs für Kletterbeginner",
        subtitle: "Kids 6 - 8 Jahre mit Martin",
        description: "Der Kletterkurs richtet sich an Kinder von 6 bis 8 Jahren ohne oder mit wenig Vorerfahrung. Die Kinder lernen spielerisch die ersten Schritte an der Kletterwand. Dabei stehen Spaß, Bewegung und das Stärken von Selbstvertrauen im Vordergrund.",
        dateBadge: "17.02.2026",
        dateRange: "Feb. 17 - März 24, 2026",
        time: "15:00 - 16:30",
        price: "100 €",
        age: "6 - 8 Jahre",
        requirements: [
            "Keine Vorkenntnisse erforderlich",
            "Mitgliedschaft beim Verein arl.x (Mitgliedsbeitrag: 10 € pro Jahr)"
        ],
        cancellation: [
            "Bis 7 Tage vor Kursbeginn: 100 % Rückerstattung",
            "Bis 4 Tage vor Kursbeginn: 50 % Rückerstattung"
        ],
        colorTheme: "green"
    },
    {
        id: "2",
        slug: "kletterkurs-fortgeschritten-feb-20",
        title: "Kletterkurs für leicht Fortgeschrittene",
        subtitle: "Kids 9 - 11 Jahre mit Vanessa",
        description: "Der Kletterkurs richtet sich an Kinder von 9 bis 11 Jahren mit etwas Vorerfahrung. Die Kinder lernen ihren nächsten Schritte an der Kletterwand. Abwechselnd wird Bouldern und Seilklettern geübt. Einerseits festigen die Kinder dadurch ihre Seiltechnik und gewinnen Vertrauen, andererseits erlernen sie neue Klettertechniken. Dabei stehen Spaß, Bewegung und das Stärken von Selbstvertrauen im Vordergrund.",
        dateBadge: "20.02.2026",
        dateRange: "Feb. 20 - März 27, 2026",
        time: "16:30 - 18:00",
        price: "100 €",
        age: "9 - 11 Jahre",
        requirements: [
            "Leichte Vorkenntnisse erforderlich (z. B. Boulderkurs oder sonstige Klettererfahrung)",
            "Mitgliedschaft beim Verein arl.x (Mitgliedsbeitrag: 10 € pro Jahr)"
        ],
        cancellation: [
            "Bis 7 Tage vor Kursbeginn: 100 % Rückerstattung",
            "Bis 4 Tage vor Kursbeginn: 50 % Rückerstattung"
        ],
        colorTheme: "blue"
    },
    {
        id: "3",
        slug: "kletterkurs-beginner-mar-03",
        title: "Kletterkurs für Beginner",
        subtitle: "Kids 5 - 7 Jahre mit Lena",
        description: "Ein spielerischer Einstieg in die Welt des Kletterns für die Kleinsten. Wir üben motorische Fähigkeiten und haben gemeinsam Spaß an der Bewegung.",
        dateBadge: "03.03.2026",
        dateRange: "März 3 - Apr. 28, 2026",
        time: "13:30 - 15:00",
        price: "100 €",
        age: "5 - 7 Jahre",
        requirements: [
            "Keine Vorkenntnisse erforderlich",
            "Mitgliedschaft beim Verein arl.x (Mitgliedsbeitrag: 10 € pro Jahr)"
        ],
        cancellation: [
            "Bis 7 Tage vor Kursbeginn: 100 % Rückerstattung",
            "Bis 4 Tage vor Kursbeginn: 50 % Rückerstattung"
        ],
        colorTheme: "green"
    }
];
