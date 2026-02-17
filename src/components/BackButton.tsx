"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BackButton() {
    const router = useRouter();
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show if not on home and history exists (though history length check unreliable in SSR, pathname check is fine)
        if (pathname !== "/") {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [pathname]);

    if (!isVisible) return null;

    return (
        <button
            onClick={() => router.back()}
            className="fixed top-24 left-4 z-40 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg border border-slate-200 hover:bg-white hover:scale-105 transition-all duration-300 group hover:shadow-xl"
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
                className="text-slate-600 group-hover:text-sky-600 transition-colors"
            >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
            </svg>
        </button>
    );
}
