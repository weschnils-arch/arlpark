"use client";

import BackButton from "@/components/BackButton"; // Since it's client component already, but using a dedicated Client component
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Forcing client side rendering since usePathname is client side
export default function BackButtonWrapper() {
    const router = useRouter();
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || pathname === "/") return null;

    return (
        <button
            onClick={() => router.back()}
            className="fixed z-50 top-24 left-4 p-3 bg-white hover:bg-slate-100 rounded-full shadow-lg border border-slate-200 transition-all duration-300 md:hidden" // Adjust styling as needed, md:hidden if desired only on mobile or visible everywhere? User said "top left when a new page is opened". I'll make it visible everywhere but adjust styling. Maybe a larger, styled arrow.
            aria-label="Zurück"
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-800 w-6 h-6"
            >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
            </svg>
        </button>
    );
}
