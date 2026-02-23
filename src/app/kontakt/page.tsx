"use client";

import Image from "next/image";

import Link from "next/link";
import { InfoIcon, PhoneIcon, EmailIcon } from "@/components/Icons";

export default function KontaktPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/activities/Bowling/IMG_20220623_163214-scaled.jpg')`,
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="absolute inset-0 bg-blue-900/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg text-white">
                        Kontakt & Anfahrt
                    </h1>
                    <p className="text-xl md:text-2xl font-light drop-shadow-md text-white/90 max-w-2xl mx-auto">Wir freuen uns auf deinen Besuch!</p>
                </div>
            </section>
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        {/* Address Card */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center">📍</span>
                                Adresse
                            </h2>
                            <address className="not-italic text-lg text-slate-600 leading-relaxed mb-6">
                                <strong>ARL.PARK GmbH</strong><br />
                                Bahnhofstraße 1<br />
                                6580 St. Anton am Arlberg<br />
                                Österreich
                            </address>
                            <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden relative">
                                {/* Map Placeholder or Iframe */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.474636906236!2d10.26768397686523!3d47.12937912444641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ca305609349c1%3A0x6a0c0a85590059c1!2sarl.park%20sport%20%26%20fun!5e0!3m2!1sde!2sat!4v1709234234234!5m2!1sde!2sat"
                                    className="absolute inset-0 w-full h-full border-0"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        {/* Contact Channels */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <a href="tel:+4366099880066" className="bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <PhoneIcon size={24} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1">Telefon</h3>
                                <p className="text-slate-600">+43 660 99 88 0 66</p>
                            </a>
                            <a href="mailto:info@arlpark.com" className="bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <EmailIcon size={24} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1">E-Mail</h3>
                                <p className="text-slate-600">info@arlpark.com</p>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card bg-white p-8 md:p-10 shadow-xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Schreib uns eine Nachricht</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Betreff</label>
                                <select id="subject" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all">
                                    <option value="general">Allgemeine Anfrage</option>
                                    <option value="birthday">Geburtstagsanfrage</option>
                                    <option value="group">Gruppe / Schule / Verein</option>
                                    <option value="corporate">Firmenevent</option>
                                    <option value="rental">Mietanlagen</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Vorname</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" required />
                                </div>
                                <div>
                                    <label htmlFor="surname" className="block text-sm font-medium text-slate-700 mb-2">Nachname</label>
                                    <input type="text" id="surname" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" required />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-Mail Adresse</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" required />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Deine Nachricht</label>
                                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" required placeholder="Wie können wir dir helfen?"></textarea>
                            </div>

                            <div className="flex items-start gap-3">
                                <input type="checkbox" id="privacy" className="mt-1 w-5 h-5 text-sky-600 border-gray-300 rounded focus:ring-sky-500" required />
                                <label htmlFor="privacy" className="text-sm text-slate-500">
                                    Ich stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert werden. Weitere Informationen findest du in der <Link href="/datenschutz" className="text-sky-600 hover:underline">Datenschutzerklärung</Link>.
                                </label>
                            </div>

                            <button type="submit" className="btn-primary w-full text-lg">
                                Nachricht absenden
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}
