const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/**/page.tsx', { ignore: ['src/app/page.tsx', 'src/app/layout.tsx', 'src/app/not-found.tsx'] });

const colorMap = {
    'trampolin': 'blue',
    'klettern': 'orange',
    'bowling': 'slate',
    'squash': 'purple',
    'tennis': 'lime',
    'tischtennis': 'red',
    'pickleball': 'emerald',
    'kids-play': 'pink',
    'sportsbar': 'amber',
    'mietanlagen': 'cyan',
    'vereinstraining': 'indigo',
    'geburtstage': 'fuchsia',
    'gruppen-schulen': 'teal',
    'gutscheine': 'pink',
    'preise': 'sky',
    'oeffnungszeiten': 'emerald',
    'faq': 'slate',
    'kontakt': 'blue',
    'impressum': 'slate',
    'datenschutz': 'slate',
    'aktivitaeten': 'blue'
};

const imageMap = {
    'trampolin': '/images/activities/Trampoline/DSC0523-scaled.jpg',
    'klettern': '/images/activities/Climbing/DSC2839-scaled.jpg',
    'bowling': '/images/activities/Bowling/DSC2041-scaled.jpg',
    'squash': '/images/activities/Squash_Tischtennis/DSC2580-scaled.jpg',
    'tennis': '/images/activities/Tennis_Pickleball/DSC0043-scaled.jpg',
    'tischtennis': '/images/tischtennis/1.webp',
    'pickleball': '/images/pickleball/pickleball_1.webp',
    'kids-play': '/images/activities/Trampoline/DSC0877-scaled.jpg',
    'sportsbar': '/images/activities/Sportsbar/DSC2065-scaled.jpg',
    'mietanlagen': '/images/mietanlagen/Mobiler_Bolderblock.jpg',
    'vereinstraining': '/images/activities/Climbing/20230629_155046-scaled.jpg',
    'geburtstage': '/images/activities/Trampoline/DSC0662-scaled.jpg',
    'gruppen-schulen': '/images/activities/Bowling/DSC2041-scaled.jpg',
    'gutscheine': '/hero-bg-v2.webp',
    'preise': '/hero-bg-v2.webp',
    'oeffnungszeiten': '/hero-bg-v2.webp',
    'faq': '/hero-bg-v2.webp',
    'kontakt': '/hero-bg-v2.webp',
    'impressum': '/hero-bg-v2.webp',
    'datenschutz': '/hero-bg-v2.webp',
    'aktivitaeten': '/hero-bg-v2.webp'
};

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // figure out which color based on filename
    let color = 'slate';
    let image = '/hero-bg-v2.webp';
    for (const [key, val] of Object.entries(colorMap)) {
        if (file.includes(key)) {
            color = val;
            image = imageMap[key];
            break;
        }
    }

    // Attempt to parse out existing H1 and P within the first <section> or Hero area
    // Sometimes previous scripts mangled it, so let's carefully extract H1
    let title = '';
    const titleMatch = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    if (titleMatch) title = titleMatch[1].trim();

    let subtitle = '';
    const subtitleMatch = content.match(/<p[^>]*>([\s\S]*?)<\/p>/);
    if (subtitleMatch && subtitleMatch[1].length < 150) subtitle = subtitleMatch[1].trim();
    // In some components like faq/page.tsx, the first p is large or not what we want.
    if (subtitle.includes('Kontaktiere uns')) subtitle = '';

    // Fix specific cases where h1 might be missing or wrong
    if (file.includes('impressum') && !title) title = 'Impressum';
    if (file.includes('datenschutz') && !title) title = 'Datenschutz';
    if (file.includes('faq') && !title) title = 'FAQ';

    const regex = /<section className="relative[^>]*>[\s\S]*?<\/section>/;
    if (regex.test(content)) {
        const newSection = `
            {/* Hero Section */}
            <section 
                className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
                style={{ backgroundImage: "url('" + image + "')" }}
            >
                {/* Transparent Color Overlay */}
                <div className="absolute inset-0 bg-${color}-900/60 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />

                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg text-white">
                        ${title}
                    </h1>
                    ${subtitle ?\`<p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90">
                        ${subtitle}
                    </p>\` : ''}
                </div>
            </section>`.trim();

        const updatedContent = content.replace(regex, newSection);
        if (updatedContent !== content) {
            fs.writeFileSync(file, updatedContent, 'utf8');
            console.log('Updated:', file);
        }
    }
});
