import React from "react";

interface IconProps {
    className?: string;
    size?: number;
}

// Trampolin — Lucide PersonStanding (person in motion)
export const TrampolinIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        {/* Head */}
        <circle cx="12" cy="4" r="2" />
        {/* Arms spread — jumping pose */}
        <path d="M8 8l4 2 4-2" />
        {/* Body */}
        <path d="M12 6v5" />
        {/* Legs — spread in jump */}
        <path d="M12 11l-3 5" />
        <path d="M12 11l3 5" />
        {/* Trampoline surface */}
        <path d="M3 19c0-1.5 4-2.5 9-2.5s9 1 9 2.5" />
        {/* Trampoline legs */}
        <path d="M5 19.5L4 22" />
        <path d="M19 19.5l1 2.5" />
    </svg>
);

// Klettern — Clean climbing figure from Material/sport pictograms
export const KletternIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        {/* Head */}
        <circle cx="12" cy="4" r="2" />
        {/* Rope / wall line */}
        <line x1="4" y1="1" x2="4" y2="23" strokeWidth="1.5" opacity="0.35" />
        {/* Right arm reaching up to rope */}
        <path d="M12 6L7 3" />
        {/* Left arm gripping rope */}
        <path d="M12 9L6 8" />
        {/* Torso */}
        <path d="M12 6v8" />
        {/* Right leg bent */}
        <path d="M12 14l-4 3.5" />
        {/* Left leg extended */}
        <path d="M12 14l3 5" />
        {/* Foot on hold */}
        <path d="M8 17.5L5 18" />
    </svg>
);

// Bowling — Clean bowling ball + pin
export const BowlingIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        {/* Bowling ball */}
        <circle cx="9" cy="15" r="6" />
        {/* Finger holes */}
        <circle cx="7.5" cy="13" r="0.8" fill="currentColor" />
        <circle cx="10" cy="12.5" r="0.8" fill="currentColor" />
        <circle cx="8" cy="15.5" r="0.8" fill="currentColor" />
        {/* Pin */}
        <circle cx="19" cy="5" r="1.5" />
        <path d="M18 6.5h2l.5 2h-3z" />
        <path d="M17.8 9c0 0-.3 1.5-.3 3 0 1.2.5 2.5 1.5 2.5s1.5-1.3 1.5-2.5c0-1.5-.3-3-.3-3" />
    </svg>
);

// Squash — Clean racquet + ball
export const SquashIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        {/* Racquet head */}
        <ellipse cx="10" cy="9" rx="6" ry="7" />
        {/* Strings */}
        <line x1="7" y1="5.5" x2="7" y2="12.5" strokeWidth="1" opacity="0.3" />
        <line x1="10" y1="3" x2="10" y2="15" strokeWidth="1" opacity="0.3" />
        <line x1="13" y1="5.5" x2="13" y2="12.5" strokeWidth="1" opacity="0.3" />
        <line x1="5" y1="9" x2="15" y2="9" strokeWidth="1" opacity="0.3" />
        {/* Handle */}
        <line x1="10" y1="16" x2="12" y2="23" strokeWidth="1.5" />
        {/* Ball */}
        <circle cx="20" cy="5" r="2" fill="currentColor" />
    </svg>
);

// Tennis - Tennisball
export const TennisIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="9" />
        <path d="M5.5 5.5c3.5 3 9.5 3 13 0" />
        <path d="M5.5 18.5c3.5-3 9.5-3 13 0" />
    </svg>
);

// Geburtstag - Clean cake icon
export const GeburtstagIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        {/* Cake base */}
        <path d="M20 21H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z" />
        {/* Cake top layer */}
        <path d="M20 13H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2z" />
        {/* Candles */}
        <line x1="8" y1="8" x2="8" y2="5" />
        <line x1="12" y1="8" x2="12" y2="5" />
        <line x1="16" y1="8" x2="16" y2="5" />
        {/* Flames */}
        <path d="M8 5c0-1 .5-2 0-3" />
        <path d="M12 5c0-1 .5-2 0-3" />
        <path d="M16 5c0-1 .5-2 0-3" />
    </svg>
);

// Gutschein - Geschenkbox mit Schleife
export const GutscheinIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        {/* Box bottom */}
        <rect x="3" y="10" width="18" height="11" rx="2" />
        {/* Box lid */}
        <rect x="2" y="6" width="20" height="4" rx="1" />
        {/* Ribbon vertical */}
        <line x1="12" y1="6" x2="12" y2="21" />
        {/* Bow loops */}
        <path d="M12 6c-2-2-4-2-4 0s2 2 4 0z" />
        <path d="M12 6c2-2 4-2 4 0s-2 2-4 0z" />
    </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

export const PriceIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12" />
        <path d="M15 9.5c0-1.5-1.5-2.5-3-2.5s-3 1-3 2.5 1.5 2 3 2.5 3 1 3 2.5-1.5 2.5-3 2.5-3-1-3-2.5" />
    </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

export const EmailIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
);

export const FoodIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
);

export const SchuleIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
);

export const FirmaIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
    </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);



export const TableTennisIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
    </svg>
);

export const PickleballIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <line x1="6" y1="12" x2="18" y2="12" />
    </svg>
);

// Kids Play — Child with star/fun element
export const KidsPlayIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        {/* Head */}
        <circle cx="12" cy="5" r="2.5" />
        {/* Body */}
        <path d="M12 7.5v5" />
        {/* Arms raised — happy kid */}
        <path d="M12 9l-4-2" />
        <path d="M12 9l4-2" />
        {/* Legs — running/playing */}
        <path d="M12 12.5l-3.5 5.5" />
        <path d="M12 12.5l3.5 5.5" />
        {/* Star — fun element */}
        <path d="M19 3l.5 1.5H21l-1.2 1 .5 1.5-1.3-1-1.3 1 .5-1.5L17 4.5h1.5z" fill="currentColor" stroke="none" />
        {/* Small star */}
        <path d="M5 11l.3.9h1l-.8.6.3.9-.8-.6-.8.6.3-.9-.8-.6h1z" fill="currentColor" stroke="none" />
    </svg>
);

export const TrainingIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M18.6 13.9l-2.6-5.2a2 2 0 0 0-3.6 0l-2.6 5.2" />
        <path d="M8 17h8" />
        <path d="M5 21v-8" />
        <path d="M19 21v-8" />
        <circle cx="12" cy="6" r="2" />
    </svg>
);
