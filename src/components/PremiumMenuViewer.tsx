"use client";

import { useState, useRef } from "react";

type MenuItem = {
    name: string;
    desc?: string;
    price: string;
    allergens?: string;
};

type MenuCategory = {
    id: number;
    title: string;
    colorClass: string;
    sections: {
        title?: string;
        items: MenuItem[];
    }[];
};

const MENU_DATA: MenuCategory[] = [
    {
        id: 1,
        title: "HEISSE GETRÄNKE",
        colorClass: "bg-teal-900 text-white",
        sections: [
            {
                items: [
                    { name: "Kaffee schwarz", price: "3,30 €" },
                    { name: "Kaffee schwarz stark", price: "3,30 €" },
                    { name: "Espresso", price: "2,90 €" },
                    { name: "Doppelter Espresso", price: "3,90 €" },
                    { name: "Espresso Macchiato", price: "3,20 €" },
                    { name: "Kaffee hell", price: "3,30 €" },
                    { name: "Café au Lait", price: "3,30 €" },
                    { name: "Cappuccino", price: "3,60 €" },
                    { name: "Cappuccino mit Kakao", price: "3,60 €" },
                    { name: "Latte Macchiato", price: "4,00 €" },
                    { name: "Schokokaffee", price: "3,30 €" },
                    { name: "Kakaotraum", price: "3,30 €" },
                    { name: "Tee verschiedene Sorten", price: "3,10 €" },
                    { name: "Portion Sahne", price: "0,50 €" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "GETRÄNKE",
        colorClass: "bg-teal-800 text-white",
        sections: [
            {
                items: [
                    { name: "Römerquelle still / prickelnd 0,33l", price: "3,60 €" },
                    { name: "Almdudler 0,33l", price: "3,60 €" },
                    { name: "Coca Cola / Zero 0,33l", price: "3,60 €" },
                    { name: "Fanta / Mezzo Mix 0,33l", price: "3,60 €" },
                    { name: "Fuze Tea Pfirsich 0,25l", price: "3,60 €" },
                    { name: "Midi's Apfelsaft gespritzt 0,33l", price: "3,60 €" },
                    { name: "Midi's Zitrone gespritzt 0,33l", price: "3,60 €" },
                    { name: "Midi's Ingwer Zitr. gespritzt 0,33l", price: "3,60 €" },
                    { name: "Midi's Johannis gespritzt 0,33l", price: "3,60 €" },
                    { name: "Orangensaft 0,3l", price: "3,30 €" },
                    { name: "Orangensaft gespritzt 0,3l / 0,5l", price: "3,70 € / 4,20 €" },
                    { name: "Ginger Beer 0,25l", price: "3,60 €" },
                    { name: "Red Bull 0,25l", price: "3,60 €" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "ALKOHOLISCHE GETRÄNKE",
        colorClass: "bg-teal-700 text-white",
        sections: [
            {
                items: [
                    { name: "Zillertal Pils vom Fass 0,3l / 0,5l", price: "4,40 € / 5,50 €" },
                    { name: "Zillertal Radler vom Fass 0,3l / 0,5l", price: "4,40 € / 5,50 €" },
                    { name: "Weißbier hell vom Fass 0,3l / 0,5l", price: "4,40 € / 5,50 €" },
                    { name: "Weizen Cola 0,5l", price: "5,50 €" },
                    { name: "Alkoholfreies Weißbier 0,33l", price: "5,50 €" },
                    { name: "Zeller Hell 0,5l", price: "4,90 €" },
                    { name: "Corona 0,35l", price: "5,50 €" },
                    { name: "Desperados 0,33l", price: "5,50 €" },
                    { name: "15L Bierfass Zillertal", price: "133,00 €" },
                    { name: "1,5L Pitcher Zillertal", price: "14,90 €" },
                    { name: "Grüner Veltliner 0,25l", price: "7,60 €" },
                    { name: "Zweigelt 0,25l", price: "7,60 €" },
                    { name: "Aperol Spritz / Hugo 0,2l", price: "5,50 €" },
                    { name: "Prosecco 0,2l", price: "5,50 €" },
                    { name: "Weiß Sauer / Süß 0,33l", price: "5,50 €" }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "FINGERFOOD",
        colorClass: "bg-teal-600 text-white",
        sections: [
            {
                items: [
                    { name: "Schinken-Käse Toast", allergens: "A, N, G", price: "5,50 €" },
                    { name: "Käse Toast (V)", allergens: "A, N, G", price: "5,50 €" },
                    { name: "Pommes (V)", price: "4,60 €" },
                    { name: "arl.park Pommes", desc: "Fries with Cheese (V)", price: "5,60 €" },
                    { name: "Chicken Nuggets", allergens: "A, F, G, L, N", price: "8,00 €" },
                    { name: "Chicken Wings", allergens: "A, C, F, G, L, M", price: "9,60 €" },
                    { name: "Onion Rings (V)", allergens: "A", price: "6,10 €" },
                    { name: "Mozzarella Sticks (V)", allergens: "A, G", price: "6,10 €" },
                    { name: "Röstisticks", price: "6,60 €" },
                    { name: "Nacho-Cheese mit Dip (V)", allergens: "C, M", price: "7,00 €" },
                    { name: "Nacho mit Salsa (V)", price: "5,50 €" },
                    { name: "Popcorn", desc: "salty / sweet (V)", price: "3,00 €" }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "PIZZA / EIS",
        colorClass: "bg-teal-500 text-white",
        sections: [
            {
                title: "Pizza",
                items: [
                    { name: "Salami", allergens: "A, D, G", price: "12,90 €" },
                    { name: "Margherita (V)", allergens: "A, D, G", price: "12,90 €" },
                ]
            },
            {
                title: "Flammkuchen",
                items: [
                    { name: "mit Speck und Zwiebel", allergens: "A, G", price: "8,90 €" },
                    { name: "mit Gemüse (V)", allergens: "A, G", price: "8,90 €" }
                ]
            },
            {
                title: "Eis & Desserts",
                items: [
                    { name: "Fwip (V)", allergens: "C, F, G", price: "3,80 €" },
                    { name: "Ben & Jerrys (V)", allergens: "C, F, G", price: "3,80 €" },
                    { name: "Eiskaffee (V)", allergens: "C, F, G", price: "6,90 €" }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "LONGDRINKS",
        colorClass: "bg-teal-400 text-sky-950",
        sections: [
            {
                title: "BOTTLE",
                items: [
                    { name: "Absolut Vodka 0,7l", desc: "inkl. 6 Red Bull", price: "99,00 €" },
                    { name: "Jägermeister 0,7l", desc: "inkl. 6 Red Bull", price: "99,00 €" }
                ]
            },
            {
                title: "LONGDRINKS",
                items: [
                    { name: "Jacky Cola", price: "7,90 €" },
                    { name: "Screwdriver", desc: "4cl Vodka mit Orangensaft", price: "9,90 €" },
                    { name: "Moscow Mule", desc: "4cl Vodka mit Ginger Beer", price: "9,90 €" },
                    { name: "Vodka Lemon", desc: "4cl Vodka mit Midis Zitrone", price: "9,90 €" },
                    { name: "Vodka Red Bull", desc: "4cl Vodka mit Red Bull", price: "9,90 €" },
                    { name: "Vodka Slush-Ice", desc: "4cl Vodka mit Slush-Ice", price: "9,90 €" },
                    { name: "Flying Hirsch", price: "8,90 €" }
                ]
            },
            {
                title: "SHOTS",
                items: [
                    { name: "Absolut Sneeky", desc: "2cl Vodka mit Slush-Ice", price: "4,00 €" },
                    { name: "Jägermeister", price: "4,00 €" },
                    { name: "Berliner Luft", price: "4,00 €" }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "ALLERGENE",
        colorClass: "bg-teal-300 text-sky-950",
        sections: [
            {
                items: [
                    { name: "A - Glutenhaltige Getreide", price: "" },
                    { name: "B - Krebstiere", price: "" },
                    { name: "C - Eier", price: "" },
                    { name: "D - Fisch", price: "" },
                    { name: "E - Nüsse", price: "" },
                    { name: "F - Sojabohnen", price: "" },
                    { name: "G - Milch (Laktose)", price: "" },
                    { name: "H - Schalenfrüchte", price: "" },
                    { name: "L - Sellerie", price: "" },
                    { name: "M - Senf", price: "" },
                    { name: "N - Sesamsamen", price: "" },
                    { name: "O - Sulfite", price: "" },
                    { name: "P - Lupinen", price: "" },
                    { name: "R - Weichtiere", price: "" },
                    { name: "V - Vegetarisch", price: "" }
                ]
            }
        ]
    }
];

export default function PremiumMenuViewer() {
    const [openId, setOpenId] = useState<number>(1);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleToggle = (id: number) => {
        const isOpening = openId !== id;
        setOpenId(isOpening ? id : 0);

        if (isOpening) {
            setTimeout(() => {
                const el = document.getElementById(`menu-category-${id}`);
                if (el) {
                    // Navigation bar offset (appx 85px)
                    const y = el.getBoundingClientRect().top + window.scrollY - 85;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }, 310); // Wait for the transition to finish to get the exact final position
        }
    };

    return (
        <section className="py-24 bg-white relative" ref={containerRef}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-16">
                    <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3 block">Entdecke unsere Karte</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Menükarte</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Frisch zubereitet, kühl serviert. Unsere große Auswahl an Speisen und Getränken in der Sportsbar.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden border border-slate-200 min-h-[700px]">
                    {/* Vertical Sidebar */}
                    <div className="hidden md:flex flex-col justify-start items-center bg-[#0f172a] w-24 relative overflow-hidden flex-shrink-0 pt-8">
                        {/* Plus Pattern Background */}
                        <div className="absolute inset-0 opacity-40" style={{
                            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'30\\' height=\\'30\\' viewBox=\\'0 0 30 30\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M14 14H8v2h6v6h2v-6h6v-2h-6V8h-2v6z\\' fill=\\'%23ffffff\\' fill-opacity=\\'0.1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')"
                        }}></div>

                        <div
                            className="text-3xl font-black text-white tracking-[0.2em] uppercase z-10 whitespace-nowrap"
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                        >
                            arl.park <span className="text-teal-400">Menü</span>
                        </div>
                    </div>

                    {/* Accordion Content Area */}
                    <div className="flex-1 flex flex-col bg-white">
                        {MENU_DATA.map((category) => (
                            <div key={category.id} id={`menu-category-${category.id}`} className="flex flex-col border-b border-white/20 last:border-b-0">
                                {/* Accordion Header */}
                                <button
                                    onClick={() => handleToggle(category.id)}
                                    className={`w-full text-left py-5 px-6 md:px-8 flex justify-between items-center transition-all font-black uppercase tracking-wider text-xl md:text-2xl z-10 border-b border-black/10 ${openId === category.id
                                        ? category.colorClass + " brightness-[1.12]"
                                        : category.colorClass + " hover:brightness-110"
                                        }`}
                                >
                                    {category.title}
                                    <span className={`transform transition-transform duration-300 ${openId === category.id ? "rotate-180" : "rotate-0"}`}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </span>
                                </button>

                                {/* Accordion Body (Content directly under the button) */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out bg-white ${openId === category.id ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-6 md:p-12 relative shadow-inner">
                                        {category.sections.map((section, sIdx) => (
                                            <div key={sIdx} className="mb-12 last:mb-0">
                                                {section.title && (
                                                    <h4 className="text-xl font-bold text-slate-900 mb-8 pb-2 border-b-2 border-slate-900 inline-block">
                                                        {section.title}
                                                    </h4>
                                                )}
                                                <div className="space-y-4">
                                                    {section.items.map((item, iIdx) => (
                                                        <div key={iIdx} className="flex flex-row justify-between items-start sm:items-baseline relative group gap-4">
                                                            <div className="bg-white z-10 max-w-[70%] sm:max-w-none pr-2 sm:pr-4">
                                                                <h5 className="font-bold text-slate-800 text-base sm:text-xl uppercase break-words">
                                                                    {item.name}
                                                                </h5>
                                                                {(item.desc || item.allergens) && (
                                                                    <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-widest mt-1">
                                                                        {item.desc} {item.allergens && <span className="text-teal-600 font-medium">[{item.allergens}]</span>}
                                                                    </p>
                                                                )}
                                                            </div>
                                                            <div className="hidden sm:block flex-grow border-b-2 border-dotted border-slate-300 mb-2 opacity-50 z-0"></div>
                                                            <div className="bg-white z-10 pl-0 sm:pl-4 whitespace-nowrap flex-shrink-0 text-right mt-0.5 sm:mt-0">
                                                                <span className="font-bold text-slate-900 text-lg sm:text-xl">{item.price}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
