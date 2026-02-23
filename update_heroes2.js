const fs = require('fs');

/* Pages that need a hero section INSERTED before their first <section> or first content block */
const pages = [
    {
        file: 'src/app/angebote/tennis/page.tsx',
        image: '/images/activities/Tennis_Pickleball/DSC2637-scaled.jpg',
        color: 'lime',
        title: 'Tennis',
        subtitle: 'Spiel, Satz und Sieg auf unserem Indoor-Platz.',
        match: '<section className="relative h-[50vh]',
    },
    {
        file: 'src/app/angebote/tischtennis/page.tsx',
        image: '/images/tischtennis/1.webp',
        color: 'red',
        title: 'Tischtennis',
        subtitle: 'Schnelle Ballwechsel an der Platte.',
        match: '<section className="relative h-[50vh]',
    },
    {
        file: 'src/app/angebote/pickleball/page.tsx',
        image: '/images/pickleball/pickleball_1.webp',
        color: 'emerald',
        title: 'Pickleball',
        subtitle: 'Entdecke den Trendsport aus den USA!',
        match: '<section className="relative h-[50vh]',
    },
    {
        file: 'src/app/angebote/kids-play/page.tsx',
        image: '/images/activities/Trampoline/DSC0877-scaled.jpg',
        color: 'pink',
        title: 'Kids Play',
        subtitle: 'Ein Paradies für die Kleinsten!',
        match: '<section className="relative h-[50vh]',
    },
    {
        file: 'src/app/angebote/vereinstraining/page.tsx',
        image: '/images/activities/Climbing/20230629_155046-scaled.jpg',
        color: 'indigo',
        title: 'Vereinstraining',
        subtitle: 'Professionelle Trainingsmöglichkeiten für Vereine.',
        match: '<section className="relative h-[50vh]',
    },
    {
        file: 'src/app/mietanlagen/page.tsx',
        image: '/images/mietanlagen/Mobiler_Bolderblock.jpg',
        color: 'cyan',
        title: 'Mietanlagen',
        subtitle: 'Professionelles Event-Equipment für dein unvergessliches Event.',
        match: null, // needs to be injected before main content
    },
    {
        file: 'src/app/preise/page.tsx',
        image: '/images/activities/Bowling/DSC2180-scaled.jpg',
        color: 'sky',
        title: 'Preise & Tickets',
        subtitle: 'Faire Preise für unvergessliche Erlebnisse.',
        match: null,
    },
    {
        file: 'src/app/oeffnungszeiten/page.tsx',
        image: '/images/activities/Sportsbar/DSC2133-scaled.jpg',
        color: 'emerald',
        title: 'Öffnungszeiten',
        subtitle: 'Wann wir für dich da sind.',
        match: null,
    },
    {
        file: 'src/app/faq/page.tsx',
        image: '/images/activities/Trampoline/DSC0316-scaled.jpg',
        color: 'slate',
        title: 'FAQ',
        subtitle: 'Häufig gestellte Fragen – wir haben die Antworten.',
        match: null,
    },
    {
        file: 'src/app/kontakt/page.tsx',
        image: '/images/activities/Bowling/IMG_20220623_163214-scaled.jpg',
        color: 'blue',
        title: 'Kontakt & Anfahrt',
        subtitle: 'Wir freuen uns auf deinen Besuch!',
        match: null,
    },
    {
        file: 'src/app/aktivitaeten/page.tsx',
        image: '/images/activities/Trampoline/DSC0523-scaled.jpg',
        color: 'blue',
        title: 'Aktivitäten',
        subtitle: 'Entdecke alle Angebote im arl.park.',
        match: null,
    },
    {
        file: 'src/app/veranstaltungen/page.tsx',
        image: '/images/activities/Sportsbar/DSC2049-scaled.jpg',
        color: 'violet',
        title: 'Veranstaltungen',
        subtitle: 'Spannende Events im arl.park.',
        match: null,
    },
    {
        file: 'src/app/impressum/page.tsx',
        image: '/images/activities/Bowling/DSC2041-scaled.jpg',
        color: 'slate',
        title: 'Impressum',
        subtitle: '',
        match: null,
    },
    {
        file: 'src/app/datenschutz/page.tsx',
        image: '/images/activities/Climbing/DSC2726-scaled.jpg',
        color: 'slate',
        title: 'Datenschutz',
        subtitle: '',
        match: null,
    },
    {
        file: 'src/app/angebote/page.tsx',
        image: '/images/activities/Trampoline/DSC0636-scaled.jpg',
        color: 'sky',
        title: 'Angebote',
        subtitle: 'Alles was das Sportherz begehrt – an einem Ort.',
        match: null,
    },
];

function buildHero(image, color, title, subtitle) {
    return `{/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: \`url('${image}')\`,
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="absolute inset-0 bg-${color}-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg text-white">
                        ${title}
                    </h1>
                    ${subtitle ? `<p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">${subtitle}</p>` : ''}
                </div>
            </section>`;
}

// For pages with existing (broken) hero sections – replace them
const heroReplaceRegex = /<section className="relative h-\[50vh\][^>]*>[\s\S]*?<\/section>/;

pages.forEach(({ file, image, color, title, subtitle, match }) => {
    if (!fs.existsSync(file)) { console.log('MISSING:', file); return; }

    let content = fs.readFileSync(file, 'utf8');
    const hero = buildHero(image, color, title, subtitle);

    // Ensure no Image import duplication
    const needsImageImport = !content.includes('import Image from');

    let newContent = content;

    if (match && heroReplaceRegex.test(newContent)) {
        // Replace existing broken hero
        newContent = newContent.replace(heroReplaceRegex, hero);
    } else if (!heroReplaceRegex.test(newContent)) {
        // No hero exists – inject right after <main ...>
        newContent = newContent.replace(
            /(<main[^>]*>)/,
            `$1\n            ${hero}`
        );
    }

    if (needsImageImport && newContent !== content) {
        // Add Image import
        newContent = newContent.replace(
            /^("use client";\n)/,
            `$1\nimport Image from "next/image";\n`
        );
        // avoid double if Link import is there
        if (!newContent.includes('import Image from') && newContent.includes('import Link')) {
            newContent = newContent.replace(
                /import Link from "next\/link";/,
                'import Link from "next/link";\nimport Image from "next/image";'
            );
        }
    }

    if (newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated:', file);
    } else {
        console.log('No change:', file);
    }
});
