const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('src/app/**/page.tsx', { ignore: ['src/app/page.tsx', 'src/app/layout.tsx', 'src/app/not-found.tsx'] });

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Skip if it doesn't have a hero section-like structure
  if (!content.includes('section className="relative') || !content.includes('bg-')) return;

  const changed = content.replace(
    /<section className="relative[\s\S]*?<\/section>/,
    match => {
      // Find the color (e.g., fuchsia-900, sky-500)
      const colorMatch = match.match(/bg-([a-z]+-[0-9]+)/);
      let colorClass = 'bg-slate-900';
      if (colorMatch) {
         colorClass = `bg-${colorMatch[1].split('-')[0]}-900/60`; // Extract color and apply 900/60 for overlay
      }
      
      const titleMatch = match.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const title = titleMatch ? titleMatch[1] : '';

      const subtitleMatch = match.match(/<p[^>]*>([\s\S]*?)<\/p>/);
      const subtitle = subtitleMatch ? `<p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md text-white">\n                        ${subtitleMatch[1].trim()}\n                    </p>` : '';

      // we use next/image so we check if file imports Image
      let newSection = `
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/hero-bg-v2.webp"
                    alt="Hero Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Colored Overlay */}
                <div className="absolute inset-0 ${colorClass} z-10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />

                <div className="relative z-20 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg text-white">${title}</h1>
                    ${subtitle}
                </div>
            </section>
`;
      return newSection.trim();
    }
  );
  
  if (content !== changed) {
    if (!changed.includes('import Image from "next/image"')) {
        content = changed.replace(/"use client";\n/, '"use client";\n\nimport Image from "next/image";\n');
    } else {
        content = changed;
    }
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
