import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ARL.PARK - Indoor Funpark St. Anton am Arlberg",
  description: "Dein Action-Erlebnis unter einem Dach: Trampolin, Klettern, Bowling, Squash und mehr in St. Anton am Arlberg.",
  keywords: "Trampolin, Klettern, Bowling, Squash, Indoor Funpark, St. Anton, Arlberg, Geburtstag, Sport",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
