const fs = require('fs');

// Map: file path (relative) -> { image, color, title, subtitle }
const pages = [
    {
        file: 'src/app/geburtstage/page.tsx',
        image: '/images/activities/Trampoline/DSC0662-scaled.jpg',
        color: 'fuchsia',
        title: 'Geburtstage',
        subtitle: 'Feiere den besten Tag des Jahres bei uns!'
    },
    {
        file: 'src/app/angebote/klettern/page.tsx',
        image: '/images/activities/Climbing/DSC2839-scaled.jpg',
        color: 'orange',
        title: 'Klettern &amp; Bouldern',
        subtitle: 'Hoch hinaus auf 130 Routen und im großen Boulderbereich.'
    },
    {
        file: 'src/app/angebote/trampolin/page.tsx',
        image: '/images/activities/Trampoline/DSC0523-scaled.jpg',
        color: 'blue',
        title: 'Trampolin',
        subtitle: '1.000 m² Indoor Action für die ganze Familie.'
    },
    {
        file: 'src/app/angebote/bowling/page.tsx',
        image: '/images/activities/Bowling/DSC2041-scaled.jpg',
        color: 'slate',
        title: '9-Pin Bowling',
        subtitle: 'Vier moderne Bahnen – Spaß für Groß und Klein.'
    },
    {
        file: 'src/app/angebote/squash/page.tsx',
        image: '/images/activities/Squash_Tischtennis/DSC2580-scaled.jpg',
        color: 'purple',
        title: 'Squash',
        subtitle: 'Professionelle Courts mit Equipment-Verleih.'
    },
    {
        file: 'src/app/angebote/tennis/page.tsx',
        image: '/images/activities/Tennis_Pickleball/DSC2637-scaled.jpg',
        color: 'lime',
        title: 'Tennis',
        subtitle: 'Tennisplätze mit Flutlicht für spannende Matches.'
    },
    {
        file: 'src/app/angebote/tischtennis/page.tsx',
        image: '/images/tischtennis/1.webp',
        color: 'red',
        title: 'Tischtennis',
        subtitle: 'Schnelle Ballwechsel an der Platte.'
    },
    {
        file: 'src/app/angebote/pickleball/page.tsx',
        image: '/images/pickleball/pickleball_1.webp',
        color: 'emerald',
        title: 'Pickleball',
        subtitle: 'Entdecke den Trendsport aus den USA!'
    },
    {
        file: 'src/app/angebote/kids-play/page.tsx',
        image: '/images/activities/Trampoline/DSC0877-scaled.jpg',
        color: 'pink',
        title: 'Kids Play',
        subtitle: 'Ein Paradies für die Kleinsten!'
    },
    {
        file: 'src/app/angebote/vereinstraining/page.tsx',
        image: '/images/activities/Climbing/20230629_155046-scaled.jpg',
        color: 'indigo',
        title: 'Vereinstraining',
        subtitle: 'Professionelle Trainingsmöglichkeiten für Vereine.'
    },
    {
        file: 'src/app/sportsbar/page.tsx',
        image: '/images/activities/Sportsbar/DSC2065-scaled.jpg',
        color: 'amber',
        title: 'Sportsbar',
        subtitle: 'Genieße kühle Drinks, warme Küche und Live-Sport.'
    },
    {
        file: 'src/app/gruppen-schulen/page.tsx',
        image: '/images/activities/Climbing/DSC2726-scaled.jpg',
        color: 'teal',
        title: 'Gruppen & Schulen',
        subtitle: 'Gemeinsam erleben – für Schulen, Vereine und Firmen.'
    },
    {
        file: 'src/app/gutscheine/page.tsx',
        image: '/images/activities/Trampoline/DSC0345-scaled.jpg',
        color: 'rose',
        title: 'Gutscheine',
        subtitle: 'Das perfekte Geschenk für Action-Liebhaber!'
    },
    {
        file: 'src/app/preise/page.tsx',
        image: '/images/activities/Bowling/DSC2180-scaled.jpg',
        color: 'sky',
        title: 'Preise',
        subtitle: 'Faire Preise für unvergessliche Erlebnisse.'
    },
    {
        file: 'src/app/oeffnungszeiten/page.tsx',
        image: '/images/activities/Sportsbar/DSC2133-scaled.jpg',
        color: 'emerald',
        title: 'Öffnungszeiten',
        subtitle: 'Wann wir für dich da sind.'
    },
    {
        file: 'src/app/faq/page.tsx',
        image: '/images/activities/Trampoline/DSC0316-scaled.jpg',
        color: 'slate',
        title: 'FAQ',
        subtitle: 'Häufig gestellte Fragen – wir haben die Antworten.'
    },
    {
        file: 'src/app/kontakt/page.tsx',
        image: '/images/activities/Bowling/IMG_20220623_163214-scaled.jpg',
        color: 'blue',
        title: 'Kontakt',
        subtitle: 'Wir freuen uns von dir zu hören!'
    },
    {
        file: 'src/app/mietanlagen/page.tsx',
        image: '/images/mietanlagen/Mobiler_Bolderblock.jpg',
        color: 'cyan',
        title: 'Mietanlagen',
        subtitle: 'Professionelles Event-Equipment für dein unvergessliches Event.'
    },
    {
        file: 'src/app/aktivitaeten/page.tsx',
        image: '/images/activities/Trampoline/DSC0523-scaled.jpg',
        color: 'blue',
        title: 'Aktivitäten',
        subtitle: 'Entdecke alle Angebote im arl.park.'
    },
    {
        file: 'src/app/veranstaltungen/page.tsx',
        image: '/images/activities/Sportsbar/DSC2049-scaled.jpg',
        color: 'violet',
        title: 'Veranstaltungen',
        subtitle: 'Spannende Events im arl.park.'
    },
    {
        file: 'src/app/impressum/page.tsx',
        image: '/images/activities/Bowling/DSC2041-scaled.jpg',
        color: 'slate',
        title: 'Impressum',
        subtitle: ''
    },
    {
        file: 'src/app/datenschutz/page.tsx',
        image: '/images/activities/Bowling/DSC2041-scaled.jpg',
        color: 'slate',
        title: 'Datenschutz',
        subtitle: ''
    },
    {
        file: 'src/app/angebote/page.tsx',
        image: '/images/activities/Trampoline/DSC0636-scaled.jpg',
        color: 'sky',
        title: 'Angebote',
        subtitle: 'Alles was das Sportherz begehrt – an einem Ort.'
    },
];

function buildHeroSection(image, color, title, subtitle) {
    return `{/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('${image}')",
                        backgroundAttachment: "fixed",
                    }}
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-${color}-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
                        ${title}
                    </h1>
                    ${subtitle ? `<p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">${subtitle}</p>` : ''}
                </div>
            </section>`;
}

// Regex patterns to match a hero <section>
// We look for the opening tag of section with relative class inside main
const heroRegex = /\{?\/\*\s*Hero Section\s*\*\/\}?\s*<section[^>]*className="relative[^"]*"[^>]*>[\s\S]*?<\/section>/;

pages.forEach(({ file, image, color, title, subtitle }) => {
    if (!fs.existsSync(file)) {
        console.log('SKIP (no file):', file);
        return;
    }

    let content = fs.readFileSync(file, 'utf8');

    // Make sure Image is imported
    const hasImageImport = content.includes('import Image from');
    let newContent = content;

    const newHero = buildHeroSection(image, color, title, subtitle);

    if (heroRegex.test(newContent)) {
        newContent = newContent.replace(heroRegex, newHero);
    } else {
        // No existing hero – skip
        console.log('No hero found in:', file);
        return;
    }

    if (!hasImageImport) {
        newContent = newContent.replace(
            /import Link from "next\/link";/,
            'import Link from "next/link";\nimport Image from "next/image";'
        );
    }

    if (newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated:', file);
    }
});
