import React from "react";

interface IconProps {
    className?: string;
    size?: number;
}

// Trampolin - Person springt auf Trampolin
export const TrampolinIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        {/* Person jumping */}
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <path d="M9 8l3 3 3-3" />
        {/* Trampoline surface */}
        <ellipse cx="12" cy="19" rx="8" ry="2" />
        {/* Legs of trampoline */}
        <path d="M5 19l-1 3M19 19l1 3" />
        {/* Spring lines */}
        <path d="M8 17v2M12 16v3M16 17v2" strokeDasharray="1 1" />
    </svg>
);

// Klettern - Person an Kletterwand mit Griffen
export const KletternIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        {/* Mountain/Wall */}
        <path d="M3 21L12 3l9 18H3z" />
        {/* Climbing holds */}
        <circle cx="9" cy="15" r="1" fill="currentColor" />
        <circle cx="12" cy="11" r="1" fill="currentColor" />
        <circle cx="15" cy="14" r="1" fill="currentColor" />
        <circle cx="11" cy="17" r="1" fill="currentColor" />
        <circle cx="14" cy="8" r="1" fill="currentColor" />
    </svg>
);

// Bowling - Bowlingkugel und Pins
export const BowlingIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        {/* Bowling ball */}
        <circle cx="9" cy="15" r="6" />
        <circle cx="7" cy="13" r="1" fill="currentColor" />
        <circle cx="10" cy="12" r="1" fill="currentColor" />
        <circle cx="7" cy="16" r="1" fill="currentColor" />
        {/* Bowling pin */}
        <path d="M18 21c-1 0-2-1-2-3s1-4 2-4 2 2 2 4-1 3-2 3z" />
        <ellipse cx="18" cy="10" rx="1.5" ry="2" />
        <path d="M18 12v2" />
    </svg>
);

// Squash - Schläger mit Ball
export const SquashIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        {/* Racket head */}
        <ellipse cx="10" cy="8" rx="6" ry="7" />
        {/* Racket strings */}
        <path d="M7 5v6M10 4v8M13 5v6" />
        <path d="M5 8h10" />
        {/* Handle */}
        <path d="M10 15l4 7" strokeWidth="3" />
        {/* Ball */}
        <circle cx="19" cy="5" r="2" fill="currentColor" />
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
        strokeWidth="2"
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

// Geburtstag - Torte mit Kerze
export const GeburtstagIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        {/* Cake base */}
        <rect x="3" y="14" width="18" height="7" rx="2" />
        {/* Cake middle */}
        <rect x="5" y="10" width="14" height="4" rx="1" />
        {/* Candle */}
        <rect x="11" y="5" width="2" height="5" />
        {/* Flame */}
        <path d="M12 5c0-1.5-.5-2.5-.5-2.5S12 3 12 5z" fill="currentColor" />
        <ellipse cx="12" cy="3" rx="1" ry="1.5" fill="currentColor" />
        {/* Frosting decoration */}
        <path d="M5 14c1-1 2-1 3 0s2 1 3 0 2-1 3 0 2 1 3 0 2-1 3 0" />
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
        strokeWidth="2"
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
        strokeWidth="2"
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
        strokeWidth="2"
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
        strokeWidth="2"
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
        strokeWidth="2"
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
        strokeWidth="2"
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
        strokeWidth="2"
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
        strokeWidth="2"
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
        strokeWidth="2"
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
        strokeWidth="2"
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
        strokeWidth="2"
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
