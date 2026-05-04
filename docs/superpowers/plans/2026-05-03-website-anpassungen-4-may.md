# Website Anpassungen 4. Mai — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement all 51 spec rows from `anpsassungen 4 may/Website.xlsx` against the live ARL.PARK Next.js site, with full verification matrix at the end.

**Architecture:** Two new shared components (`EarlyBirdBlock` reused across 8 activity pages, `WeitereAngeboteSection` reused across 10 activity pages) keep the change DRY. All other edits are in-place text/image swaps in existing page files. Five new images are converted to WebP and dropped into `public/images/anpassungen/` (per the WebP-only HARD RULE in `CLAUDE.md`). End-of-plan: per-spec-row verification phase that boots dev server and walks every page.

**Tech Stack:** Next.js 16 (webpack flag — Turbopack crashes on non-ASCII paths), React 19, TypeScript, Tailwind CSS 4, `next/image`, `cwebp` from `/opt/homebrew/bin/`. No test framework in repo, so verification = grep + dev-server + manual page walk-through.

**Working directory:** `/Users/nilswesch/Desktop/claude_projects/work/websites/gohl/existing-code/Gohl/arlpark-website`

---

## Open Client Questions (NOT IN SCOPE — flag separately)

These were pulled out of the spec because they need client decisions before implementation. Do NOT guess them in this plan:

1. EarlyBird-Block visual style (subtle stripe vs. card with CTA?)
2. Sportsbar "More than just Food" — overlay entfernen ODER neu formatieren?
3. Kids Play "Direkter Zugang zum Café" — bullet removed (in scope), but the rest of the Café mention status awaits client.
4. Welches Bild für Mietanlagen-Block-Breite Startseite?
5. Mietanlagen "Hüpfburg Dschungel" image: client says new file is `Boulderblock_Hüpfburg.png` — applied as-is below; flag if client wanted that file under the existing Boulder card instead.

---

## File Structure

```
src/
  components/
    EarlyBirdBlock.tsx                 NEW (shared CTA card)
    WeitereAngeboteSection.tsx         NEW (shared cross-link section)
    ActivitiesSection.tsx              MODIFY (5 spec rows)
    EventsSection.tsx                  MODIFY (1 spec row — Kurse-Bilder)
  data/
    events.ts                          MODIFY (add optional image field)
  app/
    page.tsx                           MODIFY (Startseite, 8 spec rows)
    angebote/
      trampolin/page.tsx               MODIFY (6 spec rows)
      klettern/page.tsx                MODIFY (3 spec rows)
      bowling/page.tsx                 MODIFY (3 spec rows)
      squash/page.tsx                  MODIFY (2 spec rows)
      tennis/page.tsx                  MODIFY (3 spec rows)
      tischtennis/page.tsx             MODIFY (2 spec rows)
      pickleball/page.tsx              MODIFY (2 spec rows)
      kids-play/page.tsx               MODIFY (4 spec rows)
    sportsbar/page.tsx                 MODIFY (4 spec rows)
    geburtstage/page.tsx               MODIFY (2 spec rows)
    mietanlagen/page.tsx               MODIFY (3 spec rows)
    gruppen-schulen/page.tsx           MODIFY (1 spec row)

public/
  images/
    anpassungen/
      Klettern_Outdoor.webp            NEW
      Boulderblock_Huepfburg.webp      NEW
      geburtstag_1.webp                NEW
      geburtstag_2.webp                NEW
      geburtstag_3.webp                NEW
```

---

## Phase 0 — Setup

### Task 0: Verify dev server boots cleanly

**Files:** none

- [ ] **Step 0.1: Boot dev server with webpack flag**

```bash
cd "/Users/nilswesch/Desktop/claude_projects/work/websites/gohl/existing-code/Gohl/arlpark-website"
node node_modules/.bin/next dev --webpack -p 3000
```

Expected: `- Local: http://localhost:3000` within ~10s, no error overlay on `/`.

- [ ] **Step 0.2: Open Chrome and confirm baseline renders**

```bash
open -a "Google Chrome" http://localhost:3000
```

Expected: Hero video, six tiles, Welcome+Öffnungszeiten section, Events, Kids Play, Mietanlagen, FAQ all visible without console errors. Leave server running for the rest of the plan.

- [ ] **Step 0.3: No commit (just baseline confirmation)**

---

## Phase 1 — Asset Preparation

### Task 1: Convert 5 client-supplied images to WebP and stage them

**Files:**
- Source: `/Users/nilswesch/Desktop/claude_projects/work/websites/gohl/anpsassungen 4 may/website/*.{png,jpg}`
- Create: `public/images/anpassungen/{Klettern_Outdoor,Boulderblock_Huepfburg,geburtstag_1,geburtstag_2,geburtstag_3}.webp`

NOTE: the source filename `Boulderblock_H<U+FFFD>pfburg.png` contains a Unicode replacement character (broken during transfer from spec folder). Use a glob pattern to match it.

- [ ] **Step 1.1: Create target dir**

```bash
mkdir -p "/Users/nilswesch/Desktop/claude_projects/work/websites/gohl/existing-code/Gohl/arlpark-website/public/images/anpassungen"
```

- [ ] **Step 1.2: Convert all five images to WebP**

```bash
SRC="/Users/nilswesch/Desktop/claude_projects/work/websites/gohl/anpsassungen 4 may/website"
DST="/Users/nilswesch/Desktop/claude_projects/work/websites/gohl/existing-code/Gohl/arlpark-website/public/images/anpassungen"
CWEBP=/opt/homebrew/bin/cwebp

"$CWEBP" -q 80 "$SRC/Klettern_Outdoor.png"        -o "$DST/Klettern_Outdoor.webp"
"$CWEBP" -q 80 "$SRC"/Boulderblock_H*pfburg.png   -o "$DST/Boulderblock_Huepfburg.webp"
"$CWEBP" -q 80 "$SRC/geburtstag_1.png"            -o "$DST/geburtstag_1.webp"
"$CWEBP" -q 80 "$SRC/geburtstag_2.jpg"            -o "$DST/geburtstag_2.webp"
"$CWEBP" -q 80 "$SRC/geburtstag_3.jpg"            -o "$DST/geburtstag_3.webp"
```

- [ ] **Step 1.3: Verify all five WebPs exist and are non-empty**

```bash
ls -la "/Users/nilswesch/Desktop/claude_projects/work/websites/gohl/existing-code/Gohl/arlpark-website/public/images/anpassungen/"
```

Expected: 5 `.webp` files, each ≥ 5 KB.

- [ ] **Step 1.4: Commit**

```bash
git add public/images/anpassungen
git commit -m "chore(assets): add 5 client images for 4 May anpassungen (WebP)"
```

---

## Phase 2 — Shared Components

### Task 2: Create the `<EarlyBirdBlock />` component

**Files:**
- Create: `src/components/EarlyBirdBlock.tsx`

The block is reused on Trampolin, Klettern, Bowling, Squash, Tennis, Tischtennis, Pickleball, Kidsplay (8 pages). Style chosen for consistency: amber-tinted info card, matching the existing `bg-amber-50 border border-amber-200 rounded-2xl p-6` pattern already used elsewhere on the site (e.g. `src/app/angebote/trampolin/page.tsx:98`).

- [ ] **Step 2.1: Create the file**

```tsx
// src/components/EarlyBirdBlock.tsx
import Link from "next/link";

export default function EarlyBirdBlock() {
    return (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start">
            <span className="text-2xl" aria-hidden="true">🐦</span>
            <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-1">EarlyBird Tickets</h3>
                <p className="text-sm text-slate-600 mb-3">
                    Früher buchen lohnt sich. <strong>−20 %</strong> für Buchungen
                    mindestens eine Woche im Voraus.
                </p>
                <Link
                    href="https://v5.bookandplay.com/p_pro_arlpark.php"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-amber-700 font-bold text-sm hover:underline"
                >
                    Jetzt buchen
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
```

- [ ] **Step 2.2: Verify import compiles (no consumer yet)**

```bash
npx tsc --noEmit -p . 2>&1 | grep -E "EarlyBirdBlock" || echo "OK no errors"
```

Expected: `OK no errors`.

- [ ] **Step 2.3: Commit**

```bash
git add src/components/EarlyBirdBlock.tsx
git commit -m "feat(component): add reusable EarlyBirdBlock CTA"
```

---

### Task 3: Create the `<WeitereAngeboteSection />` component

**Files:**
- Create: `src/components/WeitereAngeboteSection.tsx`

Mirrors the cross-link section already shipped on Klettern (`src/app/angebote/klettern/page.tsx:366-388`). Component takes a `currentHref` prop so the active page is filtered out of the chip list automatically.

- [ ] **Step 3.1: Create the file**

```tsx
// src/components/WeitereAngeboteSection.tsx
import Link from "next/link";

const ALL_LINKS = [
    { href: "/angebote/trampolin",    label: "Trampolin" },
    { href: "/angebote/klettern",     label: "Klettern" },
    { href: "/angebote/bowling",      label: "9-Pin Bowling" },
    { href: "/angebote/squash",       label: "Squash" },
    { href: "/angebote/tennis",       label: "Tennis" },
    { href: "/angebote/tischtennis",  label: "Tischtennis" },
    { href: "/angebote/pickleball",   label: "Pickleball" },
    { href: "/angebote/kids-play",    label: "Kids Play" },
    { href: "/sportsbar",             label: "Sportsbar" },
    { href: "/mietanlagen",           label: "Mietanlagen" },
    { href: "/geburtstage",           label: "Geburtstage" },
    { href: "/gruppen-schulen",       label: "Gruppen & Vereine" },
];

export default function WeitereAngeboteSection({ currentHref }: { currentHref: string }) {
    const links = ALL_LINKS.filter((l) => l.href !== currentHref);
    return (
        <section className="py-12 px-4 md:px-6 bg-slate-50 border-t border-slate-100">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                    Weitere Angebote im arl.park
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-medium text-sm hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
```

- [ ] **Step 3.2: Verify type-check**

```bash
npx tsc --noEmit -p . 2>&1 | grep -E "WeitereAngeboteSection" || echo "OK no errors"
```

Expected: `OK no errors`.

- [ ] **Step 3.3: Commit**

```bash
git add src/components/WeitereAngeboteSection.tsx
git commit -m "feat(component): add reusable WeitereAngeboteSection cross-link list"
```

---

### Task 3b: Refactor Klettern's inline cross-link block to use the new component

**Files:**
- Modify: `src/app/angebote/klettern/page.tsx:365-388`

DRY — Klettern was the original template for this block; now it reuses the new component too.

- [ ] **Step 3b.1: Add the import**

In `src/app/angebote/klettern/page.tsx` after line 6 (`import { KletternIcon } from "@/components/Icons";`), add:

```tsx
import WeitereAngeboteSection from "@/components/WeitereAngeboteSection";
```

- [ ] **Step 3b.2: Replace the inline section**

Delete `src/app/angebote/klettern/page.tsx` lines 365–388 (the entire `{/* Cross-Links to other activities */} ... </section>` block) and replace with:

```tsx
            <WeitereAngeboteSection currentHref="/angebote/klettern" />
```

- [ ] **Step 3b.3: Verify Klettern still renders correctly**

Visit `http://localhost:3000/angebote/klettern` — chip row at the bottom should show 11 links (everything except Klettern itself).

- [ ] **Step 3b.4: Commit**

```bash
git add src/app/angebote/klettern/page.tsx
git commit -m "refactor(klettern): use shared WeitereAngeboteSection"
```

---

## Phase 3 — Startseite (`src/app/page.tsx`)

### Task 4: Replace "Info zu Reservierungen" block with "Preise & Tickets" block

Spec rows: `Startseite | Preise & Tickets | ersetzt Block Info zu Reservierungen` AND `Startseite | Info zu Reservierung | gesamter Block löschen`. Net result: the left column of section 2 shows the welcome paragraph followed by the Preise & Tickets card (the one currently below at lines 207–218). The standalone "Preise & Tickets" link block at lines 207–218 is removed since it's now in the left column.

**Files:**
- Modify: `src/app/page.tsx:142-164` (delete Info-zu-Reservierungen card)
- Modify: `src/app/page.tsx:207-218` (delete the bottom Preise & Tickets link)
- Modify: insert Preise & Tickets card in left column at the position freed by the deletion

- [ ] **Step 4.1: Delete the "Info zu Reservierungen" card**

In `src/app/page.tsx`, delete lines 142–164 (from `{/* Reservation Info Box */}` through the closing `</div>` of that card — visible in current file as the `<div className="bg-sky-50 rounded-3xl p-8 border border-sky-100">` block).

- [ ] **Step 4.2: Delete the bottom-of-section Preise & Tickets link block (lines 207–218)**

Remove the entire `{/* Preise Link — full width below Öffnungszeiten (#13 länglich) */}` block.

- [ ] **Step 4.3: Insert Preise & Tickets card where Info-zu-Reservierungen used to be**

After the welcome `<p>` paragraph (currently ending at line 140 `</p>`), insert:

```tsx
                        {/* Preise & Tickets Card */}
                        <Link
                            href="/preise"
                            className="block bg-sky-50 hover:bg-sky-100 border border-sky-100 rounded-3xl p-8 transition-colors group"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center text-white text-lg" aria-hidden="true">💶</div>
                                <h3 className="text-xl font-black text-slate-900">Preise &amp; Tickets</h3>
                            </div>
                            <p className="text-slate-600 mb-5">
                                Alle Preise für sämtliche Aktivitäten auf einen Blick.
                            </p>
                            <span className="inline-flex items-center gap-2 text-sky-700 font-bold text-sm group-hover:underline">
                                Zur Preisübersicht
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </Link>
```

- [ ] **Step 4.4: Verify on /**

Reload `http://localhost:3000/`. Expected: left column shows welcome paragraph then a sky-tinted "Preise & Tickets" card (no more "Info zu Reservierungen" anywhere on the homepage). The bottom long preise-bar is gone.

- [ ] **Step 4.5: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(home): replace Info-zu-Reservierungen with Preise & Tickets card"
```

---

### Task 5: Update Öffnungszeiten labels — Tennis | Pickleball, add Tischtennis to Klettern row

**Files:**
- Modify: `src/app/page.tsx:107` (klettern label)
- Modify: `src/app/page.tsx:115` (tennis label + remove "mit Reservierung" suffix)

- [ ] **Step 5.1: Update Klettern row label**

Find line 107: `id: "klettern", label: "Klettern | Bouldern | Squash"`
Change to: `id: "klettern", label: "Klettern | Bouldern | Squash | Tischtennis"`

- [ ] **Step 5.2: Update Tennis row label**

Find line 115: `id: "tennis", label: "Tennis – mit Reservierung"`
Change to: `id: "tennis", label: "Tennis | Pickleball"`

- [ ] **Step 5.3: Verify on /**

Reload `/`, click each Öffnungszeiten accordion row. Top three labels and the Tennis row should now read as above.

- [ ] **Step 5.4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(home): update opening-hours labels (Pickleball + Tischtennis)"
```

---

### Task 6: Add reservation hint to klettern Öffnungszeiten row

Spec row: `Klettern | Bouldern | Squash → Info Zeile ergänzen: Reservierung erforderlich für Squash & Tischtennis - online buchbar`.

**Files:**
- Modify: `src/app/page.tsx:106-113` (klettern schedule object — add `note` field)

- [ ] **Step 6.1: Add note property**

Inside the `klettern` schedule object (line 106 starts), insert a new line right after `icon: "🧗",`:

```tsx
    note: "Reservierung erforderlich für Squash & Tischtennis – online buchbar.",
```

(The existing `note` rendering at lines 190–191 will pick it up automatically.)

- [ ] **Step 6.2: Verify on /**

Reload `/`. Open "Klettern | Bouldern | Squash | Tischtennis" accordion. Note line should appear above the day/time rows.

- [ ] **Step 6.3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(home): add reservation note to klettern schedule (Squash + Tischtennis)"
```

---

### Task 7: Add reservation hint to Sportsbar | 9Pin-Bowling row

Spec row: `Sportsbar | 9Pin-Bowling → Info Zeile ergänzen: Reservierung erforderlich für 9 Pin-Bowling - online buchbar`.

**Files:**
- Modify: `src/app/page.tsx:94-105` (sportsbar-bowling schedule object — add `note` field)

- [ ] **Step 7.1: Add note property**

Inside the `sportsbar-bowling` schedule object (line 94 starts), insert right after `icon: "🎳",`:

```tsx
    note: "Reservierung erforderlich für 9-Pin Bowling – online buchbar.",
```

- [ ] **Step 7.2: Verify and commit**

Reload `/`. Open Sportsbar accordion → note line visible.

```bash
git add src/app/page.tsx
git commit -m "feat(home): add reservation note to sportsbar-bowling schedule"
```

---

### Task 8: Update Öffnungszeiten heading + add small Ferien/Feiertage hint

Spec rows:
- `Öffnungszeiten | Wann wir für euch da sind → Ferien und Feiertage ab 9 Uhr geöffnet (Schrift klein)`
- `Öffnungszeiten | Öffnungszeiten → Große Überschrift`

The right-column heading already reads "Wann wir für dich da sind" (line 170). Spec wants the eyebrow label "Öffnungszeiten" to become the main large heading and the existing heading to remain as a sub-line, plus a small Ferien/Feiertage line.

**Files:**
- Modify: `src/app/page.tsx:169-171`

- [ ] **Step 8.1: Replace the heading block**

Find lines 169–171:

```tsx
              <span className="inline-block text-slate-400 font-bold tracking-wider uppercase text-xs mb-3">Öffnungszeiten</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">Wann wir für dich da sind</h2>
```

Replace with:

```tsx
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 leading-tight">Öffnungszeiten</h2>
              <p className="text-slate-500 text-base mb-2">Wann wir für dich da sind</p>
              <p className="text-slate-400 text-xs mb-6">Ferien und Feiertage ab 9 Uhr geöffnet</p>
```

- [ ] **Step 8.2: Verify and commit**

Reload `/`. Right column shows large "Öffnungszeiten" heading, sub-line "Wann wir für dich da sind", small "Ferien und Feiertage ab 9 Uhr geöffnet".

```bash
git add src/app/page.tsx
git commit -m "feat(home): promote Öffnungszeiten heading + add Ferien-Feiertage hint"
```

---

### Task 9: Show course image in "Aktuelles im arl.park" tiles

Spec: `Aktuelles im arl.park | Kurse → Bei tatsächlichen Kursen sollte in der Übersicht ein Bild angezeigt werden.`

Plan: extend the `Event` interface with an optional `image?: string` field. If present, render the image as the top of the tile (replacing the solid colour band). If absent, keep current colour-band behaviour. Today none of the three seeded events have images, so visually nothing changes until images are filled in (matches "Bei tatsächlichen Kursen" — i.e. when the client adds a real image).

**Files:**
- Modify: `src/data/events.ts:1-15` (interface)
- Modify: `src/components/EventsSection.tsx:46-66` (tile top area)

- [ ] **Step 9.1: Add `image?` to the `Event` interface**

In `src/data/events.ts`, after line 14 (`colorTheme: "blue" | "green";`), add:

```ts
    image?: string;
```

- [ ] **Step 9.2: Render image when present**

In `src/components/EventsSection.tsx`, replace lines 41–66 (from `const isBlue = ...` through the closing `</div>` of the `h-32 md:h-44` block) with:

```tsx
                        const isBlue = event.colorTheme === "blue";
                        const bgClass = isBlue ? "bg-sky-400" : "bg-emerald-400";
                        const hasImage = Boolean(event.image);

                        return (
                            <article key={event.id} className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
                                <div className={`relative h-32 md:h-44 ${hasImage ? "bg-slate-200" : bgClass} p-4 md:p-6 flex flex-col justify-between`}>
                                    {hasImage && (
                                        <Image
                                            src={event.image!}
                                            alt={event.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 50vw, 33vw"
                                        />
                                    )}
                                    {!hasImage && (
                                        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700" />
                                    )}
                                    {hasImage && <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />}

                                    <div className="self-start relative z-10">
                                        <span className="inline-block px-3 py-1 md:px-5 md:py-2 rounded-full font-bold text-xs md:text-lg bg-white/25 text-white backdrop-blur-md shadow-sm border border-white/10">
                                            {event.dateBadge}
                                        </span>
                                    </div>

                                    <div className="relative z-10 text-white mt-auto">
                                        <h3 className="text-sm md:text-2xl font-bold leading-tight mb-1 drop-shadow-sm">
                                            {event.title}
                                        </h3>
                                        <p className="font-medium text-white/90 text-xs md:text-lg hidden md:block">
                                            {event.subtitle}
                                        </p>
                                    </div>
                                </div>
```

- [ ] **Step 9.3: Add `Image` import in EventsSection**

Add at the top of `src/components/EventsSection.tsx` after the `import Link from "next/link";` line:

```tsx
import Image from "next/image";
```

- [ ] **Step 9.4: Verify**

Reload `/`. Aktuelles section: tiles still render (no image yet → coloured band fallback unchanged). Then temporarily append `image: "/images/activities/Climbing/DSC2839-scaled.jpg"` to the first event in `src/data/events.ts`, save, reload — that tile should now show the image with overlay. Remove the temp line again.

- [ ] **Step 9.5: Commit**

```bash
git add src/data/events.ts src/components/EventsSection.tsx
git commit -m "feat(events): support optional image on course tiles"
```

---

### Task 10: Mietanlagen-Block on Startseite — image über ganze Block-Breite

Spec: `Mietanlagen | Icon → Bild über ganze Block-Breite`. Currently the `RentalSection` component (`src/app/page.tsx:261-296`) shows a 3-card icon grid (lines 272–284). Replace those three icon cards with a single full-width image. Until the client confirms which photo (open question #4 above), use `/images/mietanlagen/Mobiler_Bolderblock.jpg` as a placeholder — TODO comment marks it for client swap.

**Files:**
- Modify: `src/app/page.tsx:272-284`

- [ ] **Step 10.1: Replace the 3-card grid with full-width image**

Find lines 272–284 (the `<div className="grid md:grid-cols-3 gap-8 mb-12">` block) and replace with:

```tsx
        {/* TODO(client): replace with final hero image once Andy/Chiara confirms */}
        <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-xl">
            <Image
                src="/images/mietanlagen/Mobiler_Bolderblock.jpg"
                alt="Mietanlagen — mobiler Boulderblock und mehr"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
            />
        </div>
```

(`Image` is already imported at the top of `page.tsx` — line 4.)

- [ ] **Step 10.2: Verify and commit**

Reload `/`. Mietanlagen section: full-width image, then existing CTA button below.

```bash
git add src/app/page.tsx
git commit -m "feat(home): full-bleed Mietanlagen image (placeholder pending client photo)"
```

---

## Phase 4 — Angebote / `ActivitiesSection.tsx`

### Task 11: "Kletterwand" → "Kletterhalle"

**Files:**
- Modify: `src/components/ActivitiesSection.tsx:26`

- [ ] **Step 11.1: Edit title**

Find line 26: `title: "Kletterwand",`
Change to: `title: "Kletterhalle",`

- [ ] **Step 11.2: Verify and commit**

Reload `/angebote`. Klettern tile heading reads "Kletterhalle".

```bash
git add src/components/ActivitiesSection.tsx
git commit -m "feat(angebote): rename Kletterwand → Kletterhalle"
```

---

### Task 12: Kids Play feature "4er Trampolin Anlage" → "Kletterwand"

**Files:**
- Modify: `src/components/ActivitiesSection.tsx:109`

- [ ] **Step 12.1: Edit feature**

Find line 109: `features: ["Hüpfburg", "4er Trampolin Anlage", "Mini Airbag", "Für Kleinkinder"],`
Change to: `features: ["Hüpfburg", "Kletterwand", "Mini Airbag", "Für Kleinkinder"],`

- [ ] **Step 12.2: Verify and commit**

Reload `/angebote`. Kids Play features list shows "Kletterwand" instead of "4er Trampolin Anlage".

```bash
git add src/components/ActivitiesSection.tsx
git commit -m "feat(angebote): swap Kids Play feature 4er Trampolin → Kletterwand"
```

---

### Task 13: Vereinstraining description rewrite

**Files:**
- Modify: `src/components/ActivitiesSection.tsx:154`

- [ ] **Step 13.1: Edit description**

Find line 154:

```tsx
        description: "Professionelle Trainingsmöglichkeiten für Vereine. Klettern, Kondition und Technik.",
```

Change to:

```tsx
        description: "Arl X – der Verein für alle, die sich bewegen wollen: mit Trampolin, Klettern, Tanzen und jeder Menge Spaß an Sport und Gemeinschaft!",
```

- [ ] **Step 13.2: Verify and commit**

Reload `/angebote`, scroll to "arl.x Vereinstraining" tile — new description visible.

```bash
git add src/components/ActivitiesSection.tsx
git commit -m "feat(angebote): rewrite Vereinstraining description (arl.x positioning)"
```

---

### Task 14: Bowling feature "Disco-Kugel mit Moonlight" → "Kinderbahn mit Bande"

**Files:**
- Modify: `src/components/ActivitiesSection.tsx:45`

- [ ] **Step 14.1: Edit feature**

Find line 45: `features: ["4 Bahnen", "Bis zu 8 Personen/Bahn", "Eigene Kinderkugeln", "Disco-Kugel mit Moonlight"],`
Change to: `features: ["4 Bahnen", "Bis zu 8 Personen/Bahn", "Eigene Kinderkugeln", "Kinderbahn mit Bande"],`

- [ ] **Step 14.2: Verify and commit**

Reload `/angebote`. Bowling features list reads "Kinderbahn mit Bande".

```bash
git add src/components/ActivitiesSection.tsx
git commit -m "feat(angebote): swap Bowling Disco-Kugel feature → Kinderbahn mit Bande"
```

---

### Task 15: Gruppen feature "Sonderkonditionen" → "Junggesellenabschied"

**Files:**
- Modify: `src/components/ActivitiesSection.tsx:181`

- [ ] **Step 15.1: Edit feature**

Find line 181: `features: ["Schulklassen", "Firmenfeiern", "Teambuilding", "Sonderkonditionen"],`
Change to: `features: ["Schulklassen", "Firmenfeiern", "Teambuilding", "Junggesellenabschied"],`

- [ ] **Step 15.2: Verify and commit**

Reload `/angebote`. Gruppen tile shows "Junggesellenabschied".

```bash
git add src/components/ActivitiesSection.tsx
git commit -m "feat(angebote): swap Gruppen Sonderkonditionen → Junggesellenabschied"
```

---

### Task 15b: Add "Gepäckdepot & Duschen" as new ACTIVITY_DATA entry

Spec: `unter Gruppen & Vereine → neues Angebot erstellen → Gepäckdepot & Duschen: Gepäckdepot pro Tag 3 €; Dusche inkl. Handtuch 5 €`. Read literally as a new tile on the /angebote page.

**Files:**
- Modify: `src/components/ActivitiesSection.tsx:175-188` (insert new entry after gruppen)
- Modify: `src/components/ActivitiesSection.tsx:190-203` (add tab entry)

- [ ] **Step 15b.1: Append new ACTIVITY_DATA entry**

After the closing `}` of the `gruppen` entry on line 187 (just before the closing `]` on line 188), insert:

```tsx
    ,{
        id: "gepaeckdepot",
        title: "Gepäckdepot & Duschen",
        badge: "Service für unterwegs",
        badgeColor: "bg-slate-700",
        description: "Praktischer Service für Gäste auf der Durchreise — Gepäck sicher verstauen und frisch in den nächsten Programmpunkt starten.",
        features: ["Gepäckdepot 3 € pro Tag", "Dusche inkl. Handtuch 5 €", "Direkt am Bahnhof", "Ohne Voranmeldung"],
        buttonLink: "/kontakt",
        images: [
            "/images/activities/Sportsbar/DSC2065-scaled.jpg"
        ]
    }
```

- [ ] **Step 15b.2: Add tab entry**

Append to `TABS` array (line 202 ends with `{ id: "gruppen", label: "Gruppen & Vereine" }`):

```tsx
    ,{ id: "gepaeckdepot", label: "Gepäckdepot & Duschen" }
```

- [ ] **Step 15b.3: Verify and commit**

Reload `/angebote`. New "Gepäckdepot & Duschen" tab + tile appears at the bottom.

```bash
git add src/components/ActivitiesSection.tsx
git commit -m "feat(angebote): add Gepäckdepot & Duschen as new tile"
```

---

## Phase 5 — Trampolin (`src/app/angebote/trampolin/page.tsx`)

### Task 16: Replace "ValoJump" line with "Airbag"

**Files:**
- Modify: `src/app/angebote/trampolin/page.tsx:88`

- [ ] **Step 16.1: Edit list item**

Find line 88: `"ValoJump (Interaktives Trampolin-Videospiel)"`
Change to: `"Airbag"`

- [ ] **Step 16.2: Verify and commit**

Reload `/angebote/trampolin`. Bullet list ends with "Airbag" instead of "ValoJump …".

```bash
git add src/app/angebote/trampolin/page.tsx
git commit -m "feat(trampolin): swap ValoJump bullet → Airbag"
```

---

### Task 17: Add visible chevron-down on the price-type select

The select is already `appearance-none` (line 123), so the native arrow is hidden. Spec wants a visible arrow added.

**Files:**
- Modify: `src/app/angebote/trampolin/page.tsx:117-130`

- [ ] **Step 17.1: Wrap select in a relative container with absolute chevron**

Replace lines 117–130 (the entire `<div className="mb-8">…</div>`) with:

```tsx
                    <div className="mb-8">
                        <label htmlFor="price-select" className="block text-sm font-medium text-slate-700 mb-2">Ticket-Art wählen:</label>
                        <div className="relative">
                            <select
                                id="price-select"
                                value={priceType}
                                onChange={(e) => setPriceType(e.target.value)}
                                className="w-full p-4 pr-12 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer appearance-none"
                            >
                                <option value="einzel">Einzeltickets (Erwachsene/Kinder)</option>
                                <option value="block">10er Block</option>
                                <option value="kundenkarte">Kundenkarte</option>
                                <option value="gruppen">Gruppen & Vereine</option>
                            </select>
                            <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
```

- [ ] **Step 17.2: Verify and commit**

Reload `/angebote/trampolin`. Select shows a chevron on the right edge.

```bash
git add src/app/angebote/trampolin/page.tsx
git commit -m "feat(trampolin): add visible chevron on Ticket-Art select"
```

---

### Task 18: Add EarlyBirdBlock under "Wichtig: Trampolinsocken" block

**Files:**
- Modify: `src/app/angebote/trampolin/page.tsx:6` (import)
- Modify: `src/app/angebote/trampolin/page.tsx:106-107` (insert after closing `</div>` of Trampolinsocken block)

- [ ] **Step 18.1: Add import**

After line 6 (`import { TrampolinIcon } from "@/components/Icons";`), add:

```tsx
import EarlyBirdBlock from "@/components/EarlyBirdBlock";
```

- [ ] **Step 18.2: Insert block**

After the closing `</div>` of the Trampolinsocken block (currently line 106 — the `</div>` that closes `<div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start">`), add a new line right after:

```tsx
                    <div className="mt-6">
                        <EarlyBirdBlock />
                    </div>
```

- [ ] **Step 18.3: Verify and commit**

Reload `/angebote/trampolin`. EarlyBird card appears below Trampolinsocken card.

```bash
git add src/app/angebote/trampolin/page.tsx
git commit -m "feat(trampolin): add EarlyBird block under Trampolinsocken"
```

---

### Task 19: Remove 🧦 icon from Trampolinsocken block

Spec: `Trampolin | Wichtig: Trampolinsocken | Icon → Icon löschen`.

**Files:**
- Modify: `src/app/angebote/trampolin/page.tsx:99`

- [ ] **Step 19.1: Delete the icon span**

Find line 99: `<span className="text-2xl">🧦</span>`
Delete the entire line.

- [ ] **Step 19.2: Verify and commit**

Reload `/angebote/trampolin`. Trampolinsocken block no longer has the 🧦 emoji on the left.

```bash
git add src/app/angebote/trampolin/page.tsx
git commit -m "feat(trampolin): remove socken icon from Trampolinsocken block"
```

---

### Task 20: Add WeitereAngeboteSection at the bottom of the Trampolin page

**Files:**
- Modify: `src/app/angebote/trampolin/page.tsx:6` (already added EarlyBirdBlock import; add WeitereAngebote too)
- Modify: `src/app/angebote/trampolin/page.tsx:227` (insert before closing `</main>`)

- [ ] **Step 20.1: Add import**

After the EarlyBirdBlock import line, add:

```tsx
import WeitereAngeboteSection from "@/components/WeitereAngeboteSection";
```

- [ ] **Step 20.2: Insert section**

Right before the closing `</main>` (line 228 in current file, may shift after edits), add:

```tsx
            <WeitereAngeboteSection currentHref="/angebote/trampolin" />
```

- [ ] **Step 20.3: Verify and commit**

Reload `/angebote/trampolin`. Cross-link chip row appears at the bottom (without "Trampolin" itself).

```bash
git add src/app/angebote/trampolin/page.tsx
git commit -m "feat(trampolin): add WeitereAngeboteSection at bottom"
```

---

### Task 21: Add prev/next arrows to the Impressionen carousel

Spec: `Trampolin | Impessionen → Bildkarusell automatisch und Pfeile zum selber durchklicken`. Auto-rotate already works (lines 22–27); just add nav arrows.

**Files:**
- Modify: `src/app/angebote/trampolin/page.tsx:169-190` (the gallery `<div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">`)

- [ ] **Step 21.1: Add prev/next buttons**

Inside that `<div className="relative ...">` (right after the closing `</Image>` map block, before the dots `<div className="absolute bottom-4 ...">`), insert:

```tsx
                        <button
                            type="button"
                            onClick={() => setCurrentSlide((p) => (p - 1 + galleryImages.length) % galleryImages.length)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-slate-800 hover:bg-white transition-colors shadow"
                            aria-label="Vorheriges Bild"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => setCurrentSlide((p) => (p + 1) % galleryImages.length)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-slate-800 hover:bg-white transition-colors shadow"
                            aria-label="Nächstes Bild"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                        </button>
```

- [ ] **Step 21.2: Verify and commit**

Reload `/angebote/trampolin` and scroll to Impressionen. Auto-rotates every 4s; arrows step manually.

```bash
git add src/app/angebote/trampolin/page.tsx
git commit -m "feat(trampolin): add prev/next arrows to Impressionen carousel"
```

---

## Phase 6 — Klettern (`src/app/angebote/klettern/page.tsx`)

### Task 22: Swap Beschreibung above Kletterzentrum-Imst-Partner card

Currently the layout (read at lines 119–276):
- left col `order-3 lg:order-1`: Partner Kletterzentrum Imst card
- right col `order-1 lg:order-2`: Pricing card → Klettern Info → AV Landeck

Spec wants: Beschreibung (Klettern & Bouldern Info) ABOVE the Kletterzentrum-Imst card.

Plan: move the "Klettern & Bouldern Info" block from the right column into the left column ABOVE the existing Partner card.

**Files:**
- Modify: `src/app/angebote/klettern/page.tsx:120-146` (left column adds Info block above Partner)
- Modify: `src/app/angebote/klettern/page.tsx:245-261` (delete the Info block from right column)

- [ ] **Step 22.1: Cut the Info block from the right column**

Cut lines 245–261 (the `{/* Klettern & Bouldern Info */}` `<div>` … through its closing `</div>`):

```tsx
                    {/* Klettern & Bouldern Info */}
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Klettern &amp; Bouldern im arl.park</h2>
                        <div className="prose prose-lg text-slate-600">
                            <p>
                                Auf 15 Metern Höhe bieten wir eine massive Kletterfläche für alle Schwierigkeitsgrade. Von der sanften Platte bis zum spektakulären Überhang.
                            </p>
                            <ul className="list-none space-y-2 mt-4 pl-0">
                                {["Ca. 130 Routen", "Schwierigkeit 3 bis 8b", "Boulderbereich", "3 Auto-Belay Systeme", "Interaktive CLIFT Kletterwand"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
```

- [ ] **Step 22.2: Paste it as the FIRST child of the left column**

In the left column (`<div className="space-y-8 order-3 lg:order-1">` at line 121), paste the cut block as the first child — i.e. right after that opening `<div>` and before the `{/* Partner Section */}` comment.

- [ ] **Step 22.3: Verify and commit**

Reload `/angebote/klettern`. Left column on desktop now shows Klettern & Bouldern Info above the Partner Kletterzentrum Imst card.

```bash
git add src/app/angebote/klettern/page.tsx
git commit -m "feat(klettern): move Klettern Info block above Partner Imst card"
```

---

### Task 23: Use new Klettern_Outdoor.webp for the Outdoor highlight

The Outdoor highlight currently points to `/images/klettern_highlights/Outdoor_Klettern.png`, but the actual file in repo is named `Outdoor Klettern.png` (with space). The spec ships a fresh source: `Klettern_Outdoor.png`. Use the new WebP from Phase 1.

**Files:**
- Modify: `src/app/angebote/klettern/page.tsx:39`

- [ ] **Step 23.1: Update image path**

Find line 39: `image: "/images/klettern_highlights/Outdoor_Klettern.png",`
Change to: `image: "/images/anpassungen/Klettern_Outdoor.webp",`

- [ ] **Step 23.2: Verify and commit**

Reload `/angebote/klettern`, scroll to Highlights. Open the "Outdoor Klettern" accordion — image renders correctly.

```bash
git add src/app/angebote/klettern/page.tsx
git commit -m "feat(klettern): use new Klettern_Outdoor.webp asset"
```

---

### Task 24: Add EarlyBirdBlock under Klettern description

**Files:**
- Modify: `src/app/angebote/klettern/page.tsx:6` (import)
- Modify: `src/app/angebote/klettern/page.tsx` — paste below the Klettern Info block we moved in Task 22

- [ ] **Step 24.1: Add import**

After line 6 (`import { KletternIcon } from "@/components/Icons";`), add:

```tsx
import EarlyBirdBlock from "@/components/EarlyBirdBlock";
```

- [ ] **Step 24.2: Insert block right under the moved Klettern Info block**

In the left column, after the moved Klettern Info `</div>` (the one that closes the `prose prose-lg` block) and before `{/* Partner Section */}`, add:

```tsx
                    <EarlyBirdBlock />
```

- [ ] **Step 24.3: Verify and commit**

Reload `/angebote/klettern`. EarlyBird card visible between Klettern Info and Partner Imst.

```bash
git add src/app/angebote/klettern/page.tsx
git commit -m "feat(klettern): add EarlyBird block under description"
```

---

## Phase 7 — 9-Pin Bowling (`src/app/angebote/bowling/page.tsx`)

### Task 25: Add EarlyBirdBlock under description

**Files:**
- Modify: `src/app/angebote/bowling/page.tsx:6` (import)
- Modify: `src/app/angebote/bowling/page.tsx:69-70` (insert after `</div>` closing the prose block at end of left column)

- [ ] **Step 25.1: Add import**

After line 6 (`import { BowlingIcon } from "@/components/Icons";`), add:

```tsx
import EarlyBirdBlock from "@/components/EarlyBirdBlock";
import WeitereAngeboteSection from "@/components/WeitereAngeboteSection";
```

- [ ] **Step 25.2: Insert EarlyBird block at end of left column**

Find line 69 — the closing `</div>` of the `prose prose-lg` block. After the `</ul></div>` block, before the outer `</div>` of the left column (end of the left grid cell, line 70), add:

```tsx
                    <EarlyBirdBlock />
```

- [ ] **Step 25.3: Verify and commit**

Reload `/angebote/bowling`. EarlyBird visible at end of left column.

```bash
git add src/app/angebote/bowling/page.tsx
git commit -m "feat(bowling): add EarlyBird block under description"
```

---

### Task 26: Remove "Extras" option from price dropdown

Spec: `9-Pin Bowling | Preise (Auswahl) | Extras → Extras löschen`.

**Files:**
- Modify: `src/app/angebote/bowling/page.tsx:11-20` (delete `extras` price array)
- Modify: `src/app/angebote/bowling/page.tsx:86` (delete `<option value="extras">Extras</option>`)

- [ ] **Step 26.1: Delete the `extras` array entry**

Inside `prices` (lines 11–20), delete lines 16–19:

```tsx
        extras: [
            { label: "Eigene Kinderkugeln", price: "inkl." },
            { label: "Disco-Kugel mit Moonlight", price: "inkl." },
        ]
```

Make sure the trailing comma after the `bahn` array is removed too.

- [ ] **Step 26.2: Delete the option element**

Find line 86: `<option value="extras">Extras</option>` — delete it.

- [ ] **Step 26.3: Verify and commit**

Reload `/angebote/bowling`. Dropdown only shows "Preise"; no Extras option.

```bash
git add src/app/angebote/bowling/page.tsx
git commit -m "feat(bowling): remove Extras dropdown option from Preise"
```

---

### Task 27: Add WeitereAngeboteSection at end of Bowling page

**Files:**
- Modify: `src/app/angebote/bowling/page.tsx:130-131` (insert before closing `</main>`)

- [ ] **Step 27.1: Insert section**

Right before the final `</main>` (currently line 131), add:

```tsx
            <WeitereAngeboteSection currentHref="/angebote/bowling" />
```

(The import was added in Task 25.)

- [ ] **Step 27.2: Verify and commit**

Reload `/angebote/bowling`. Cross-link chip row at bottom.

```bash
git add src/app/angebote/bowling/page.tsx
git commit -m "feat(bowling): add WeitereAngeboteSection at bottom"
```

---

## Phase 8 — Squash (`src/app/angebote/squash/page.tsx`)

### Task 28: Add EarlyBirdBlock + WeitereAngeboteSection

**Files:**
- Modify: `src/app/angebote/squash/page.tsx:6-8` (imports)
- Modify: `src/app/angebote/squash/page.tsx:50-51` (insert EarlyBird at end of left column, before its outer `</div>`)
- Modify: `src/app/angebote/squash/page.tsx:80-81` (insert WeitereAngebote before `</main>`)

- [ ] **Step 28.1: Add imports**

After line 6 (`import { SquashIcon } from "@/components/Icons";`), add:

```tsx
import EarlyBirdBlock from "@/components/EarlyBirdBlock";
import WeitereAngeboteSection from "@/components/WeitereAngeboteSection";
```

- [ ] **Step 28.2: Insert EarlyBird at end of left column**

After line 50 (closing `</div>` of the `prose prose-lg` block) and before line 51 (closing `</div>` of left column), add:

```tsx
                    <EarlyBirdBlock />
```

- [ ] **Step 28.3: Insert WeitereAngeboteSection before closing `</main>`**

Right before the final `</main>` (line 81), add:

```tsx
            <WeitereAngeboteSection currentHref="/angebote/squash" />
```

- [ ] **Step 28.4: Verify and commit**

Reload `/angebote/squash`. EarlyBird in left column, cross-link chips at bottom.

```bash
git add src/app/angebote/squash/page.tsx
git commit -m "feat(squash): add EarlyBird + WeitereAngebote sections"
```

---

## Phase 9 — Tennis (`src/app/angebote/tennis/page.tsx`)

### Task 30: "Juli – September" → "Juni – September"

**Files:**
- Modify: `src/app/angebote/tennis/page.tsx:47`

- [ ] **Step 30.1: Edit hint text**

Find line 47: `<p className="text-sm text-amber-800 font-medium">Hinweis: Juli – September kein Tennis verfügbar.</p>`
Change `Juli` to `Juni`.

- [ ] **Step 30.2: Verify and commit**

Reload `/angebote/tennis`. Hinweis box reads "Juni – September".

```bash
git add src/app/angebote/tennis/page.tsx
git commit -m "feat(tennis): correct closure period to Juni – September"
```

---

### Task 31: Add EarlyBirdBlock + WeitereAngeboteSection

**Files:**
- Modify: `src/app/angebote/tennis/page.tsx:6` (imports)
- Modify: `src/app/angebote/tennis/page.tsx` — insert EarlyBird right under the existing Hinweis box (after closing `</div>` of `bg-amber-50` block — currently line 48), and WeitereAngebote before closing `</main>` (line 81)

- [ ] **Step 31.1: Add imports**

After line 6 (`import { TennisIcon } from "@/components/Icons";`), add:

```tsx
import EarlyBirdBlock from "@/components/EarlyBirdBlock";
import WeitereAngeboteSection from "@/components/WeitereAngeboteSection";
```

- [ ] **Step 31.2: Insert EarlyBird below the Hinweis**

After the closing `</div>` of the Hinweis block (line 48), add:

```tsx
                    <div className="mt-6">
                        <EarlyBirdBlock />
                    </div>
```

- [ ] **Step 31.3: Insert WeitereAngeboteSection before `</main>`**

```tsx
            <WeitereAngeboteSection currentHref="/angebote/tennis" />
```

- [ ] **Step 31.4: Verify and commit**

Reload `/angebote/tennis`. New Hinweis text + EarlyBird below + chips at bottom.

```bash
git add src/app/angebote/tennis/page.tsx
git commit -m "feat(tennis): add EarlyBird + WeitereAngebote sections"
```

---

## Phase 10 — Tischtennis (`src/app/angebote/tischtennis/page.tsx`)

### Task 33: Add EarlyBirdBlock + WeitereAngeboteSection

**Files:**
- Modify: `src/app/angebote/tischtennis/page.tsx:6` (imports)
- Modify: end of left column (line 46) and before closing `</main>` (line 74)

- [ ] **Step 33.1: Add imports**

After line 6 (`import { TableTennisIcon } from "@/components/Icons";`), add:

```tsx
import EarlyBirdBlock from "@/components/EarlyBirdBlock";
import WeitereAngeboteSection from "@/components/WeitereAngeboteSection";
```

- [ ] **Step 33.2: Insert EarlyBird at end of left column**

After the closing `</ul>` of the features list (line 45) and before the closing `</div>` of the left column (line 46), add:

```tsx
                    <div className="mt-6">
                        <EarlyBirdBlock />
                    </div>
```

- [ ] **Step 33.3: Insert WeitereAngeboteSection before `</main>`**

```tsx
            <WeitereAngeboteSection currentHref="/angebote/tischtennis" />
```

- [ ] **Step 33.4: Verify and commit**

Reload `/angebote/tischtennis`. EarlyBird visible, chips at bottom.

```bash
git add src/app/angebote/tischtennis/page.tsx
git commit -m "feat(tischtennis): add EarlyBird + WeitereAngebote sections"
```

---

## Phase 11 — Pickleball (`src/app/angebote/pickleball/page.tsx`)

### Task 35: Add EarlyBirdBlock + WeitereAngeboteSection

**Files:**
- Modify: `src/app/angebote/pickleball/page.tsx:6` (imports)
- Modify: end of left column (after line 60 closing `</div>` of the `<div>` wrapping the image) and before closing `</main>` (line 92)

- [ ] **Step 35.1: Add imports**

After line 6 (`import { PickleballIcon } from "@/components/Icons";`), add:

```tsx
import EarlyBirdBlock from "@/components/EarlyBirdBlock";
import WeitereAngeboteSection from "@/components/WeitereAngeboteSection";
```

- [ ] **Step 35.2: Insert EarlyBird at end of left column**

After the closing `</div>` of the inner image wrapper (line 59) and before the closing `</div>` of the left column (line 60), add:

```tsx
                    <div className="mt-6">
                        <EarlyBirdBlock />
                    </div>
```

- [ ] **Step 35.3: Insert WeitereAngeboteSection before `</main>`**

```tsx
            <WeitereAngeboteSection currentHref="/angebote/pickleball" />
```

- [ ] **Step 35.4: Verify and commit**

Reload `/angebote/pickleball`. EarlyBird in left col, chips at bottom.

```bash
git add src/app/angebote/pickleball/page.tsx
git commit -m "feat(pickleball): add EarlyBird + WeitereAngebote sections"
```

---

## Phase 12 — Kids Play (`src/app/angebote/kids-play/page.tsx`)

### Task 37: Remove "Direkter Zugang zum Café" bullet

**Files:**
- Modify: `src/app/angebote/kids-play/page.tsx:54`

- [ ] **Step 37.1: Delete the bullet**

Find line 54: `"Direkter Zugang zum Café"`
Delete the entire line. Make sure the previous line still ends with a comma so the array stays valid.

- [ ] **Step 37.2: Verify and commit**

Reload `/angebote/kids-play`. Features list no longer contains "Direkter Zugang zum Café".

```bash
git add src/app/angebote/kids-play/page.tsx
git commit -m "feat(kids-play): remove Direkter-Zugang-zum-Café bullet"
```

---

### Task 38: Add EarlyBirdBlock under description

**Files:**
- Modify: `src/app/angebote/kids-play/page.tsx:5` (imports)
- Modify: `src/app/angebote/kids-play/page.tsx:62-63` (after closing `</div>` of prose block, before closing `</div>` of left column)

- [ ] **Step 38.1: Add imports**

After line 5 (`import { KidsPlayIcon } from "@/components/Icons";`), add:

```tsx
import EarlyBirdBlock from "@/components/EarlyBirdBlock";
import WeitereAngeboteSection from "@/components/WeitereAngeboteSection";
```

- [ ] **Step 38.2: Insert block**

After the closing `</div>` of the `prose prose-lg` block (currently line 62) and before the closing `</div>` of the left column (line 63), add:

```tsx
                    <EarlyBirdBlock />
```

- [ ] **Step 38.3: Verify and commit**

Reload `/angebote/kids-play`. EarlyBird visible.

```bash
git add src/app/angebote/kids-play/page.tsx
git commit -m "feat(kids-play): add EarlyBird block under description"
```

---

### Task 39: Add WeitereAngeboteSection at bottom

**Files:**
- Modify: `src/app/angebote/kids-play/page.tsx:118-119` (before closing `</main>`)

- [ ] **Step 39.1: Insert section**

```tsx
            <WeitereAngeboteSection currentHref="/angebote/kids-play" />
```

- [ ] **Step 39.2: Verify and commit**

Reload `/angebote/kids-play`. Chip row at bottom.

```bash
git add src/app/angebote/kids-play/page.tsx
git commit -m "feat(kids-play): add WeitereAngeboteSection at bottom"
```

---

### Task 40: Convert Kids Play image gallery to auto-rotating carousel

Spec: `Ein in unser Kids World | Bilder Galarie | … Bildkarusell automatisch und Pfeile zum selber durchklicken (wie bei Trampolin)`. Current implementation (lines 102–118) is a static 3-column grid of all gallery images. Replace with the same auto+arrows pattern used on Trampolin.

**Files:**
- Modify: `src/app/angebote/kids-play/page.tsx:1-3` (already `"use client"` — but need `useState` + `useEffect`)
- Modify: `src/app/angebote/kids-play/page.tsx:102-118` (replace gallery)

- [ ] **Step 40.1: Add hooks import**

Find line 3 (`import Image from "next/image";`) and just before/after it ensure React hooks are imported:

```tsx
import { useState, useEffect } from "react";
```

- [ ] **Step 40.2: Add carousel state inside component**

After `export default function KidsPlayPage() {` (line 16), add:

```tsx
    const [kidsSlide, setKidsSlide] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setKidsSlide((p) => (p + 1) % galleryImages.length), 4000);
        return () => clearInterval(t);
    }, []);
```

- [ ] **Step 40.3: Replace gallery markup**

Replace lines 102–118 (the entire `{/* Image Gallery */}` section) with:

```tsx
            {/* Image Gallery — auto-rotating carousel */}
            <section className="pb-20 px-4 md:px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-black text-slate-900 mb-8">Einblicke in unsere Kids World</h2>
                <div className="relative h-72 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
                    {galleryImages.map((img, i) => (
                        <Image
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            fill
                            className={`object-cover transition-opacity duration-700 ${i === kidsSlide ? "opacity-100" : "opacity-0"}`}
                            loading={i === 0 ? "eager" : "lazy"}
                            sizes="(max-width: 768px) 100vw, 80vw"
                        />
                    ))}
                    <button
                        type="button"
                        onClick={() => setKidsSlide((p) => (p - 1 + galleryImages.length) % galleryImages.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-slate-800 hover:bg-white transition-colors shadow"
                        aria-label="Vorheriges Bild"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        type="button"
                        onClick={() => setKidsSlide((p) => (p + 1) % galleryImages.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-slate-800 hover:bg-white transition-colors shadow"
                        aria-label="Nächstes Bild"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {galleryImages.map((_, i) => (
                            <button key={i} type="button" onClick={() => setKidsSlide(i)} className={`w-2 h-2 rounded-full transition-all ${i === kidsSlide ? "bg-white w-6" : "bg-white/50"}`} aria-label={`Bild ${i + 1}`} />
                        ))}
                    </div>
                </div>
            </section>
```

- [ ] **Step 40.4: Verify and commit**

Reload `/angebote/kids-play`. Gallery now auto-rotates and supports arrows + dots.

```bash
git add src/app/angebote/kids-play/page.tsx
git commit -m "feat(kids-play): replace static gallery with auto-rotating carousel"
```

---

## Phase 13 — Sportsbar (`src/app/sportsbar/page.tsx`)

### Task 41: Convert Highlights box to bullet list (matches other pages)

Spec: `Sportsbar | Highlights | Highlightbox → als Aufzählung (wie bei den anderen Bereichen)`. Other pages (e.g. `bowling/page.tsx:55-67`) use `list-none space-y-2 mt-4 pl-0` with `w-6 h-6 rounded-full bg-…-100 …` checkmark spans.

**Files:**
- Modify: `src/app/sportsbar/page.tsx:96-104`

- [ ] **Step 41.1: Replace the `<div className="bg-amber-50 …">` Highlights box with a checkmark list**

Replace lines 96–104:

```tsx
                        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 mb-6">
                            <h3 className="font-bold text-slate-900 mb-3">Highlights</h3>
                            <ul className="text-sm text-slate-600 space-y-1">
                                <li>Biertender</li>
                                <li>Catering auf Anfrage</li>
                                <li>Junggesellen- und Firmenabende</li>
                                <li>Gruppenveranstaltungen</li>
                            </ul>
                        </div>
```

with:

```tsx
                        <div className="mb-6">
                            <h3 className="font-bold text-slate-900 mb-3">Highlights</h3>
                            <ul className="list-none space-y-2 mt-4 pl-0">
                                {["Biertender", "Catering auf Anfrage", "Junggesellen- und Firmenabende", "Gruppenveranstaltungen"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm font-bold">✓</span>
                                        <span className="text-slate-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
```

- [ ] **Step 41.2: Verify and commit**

Reload `/sportsbar`. Highlights now use the checkmark-bullet pattern.

```bash
git add src/app/sportsbar/page.tsx
git commit -m "feat(sportsbar): convert Highlights box to bullet list (matches other pages)"
```

---

### Task 42: Remove hover/click effect from Billard/Darts/etc grid

Spec: `Sportsbar | More than just Food | Button (Billard, Darts, Tischfußball, Boxautomat, Kickautomat) → overlay effekt entfernen oder anders Format sodass nicht geklickt wird.`

Currently `src/app/sportsbar/page.tsx:118-130` renders the items as clickable-looking cards with hover state. Change to plain non-interactive labels.

**Files:**
- Modify: `src/app/sportsbar/page.tsx:118-130`

- [ ] **Step 42.1: Replace markup**

Replace the `<div className="grid grid-cols-2 gap-3 mt-6">…</div>` block with:

```tsx
                        <ul className="grid grid-cols-2 gap-3 mt-6 list-none p-0">
                            {[
                                "Billard",
                                "Darts",
                                "Tischfußball",
                                "Boxautomat",
                                "Kickautomat",
                            ].map((name) => (
                                <li
                                    key={name}
                                    className="flex items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-100"
                                >
                                    <span className="font-bold text-slate-700 text-sm">{name}</span>
                                </li>
                            ))}
                        </ul>
```

- [ ] **Step 42.2: Verify and commit**

Reload `/sportsbar`. Game labels no longer change on hover; cursor stays default.

```bash
git add src/app/sportsbar/page.tsx
git commit -m "feat(sportsbar): remove hover/click feel from game-list grid"
```

---

### Task 43: Remove pizza icon from "Durchgehend warme Küche" badge

**Files:**
- Modify: `src/app/sportsbar/page.tsx:84`

- [ ] **Step 43.1: Edit badge content**

Find line 83–85:

```tsx
                        <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-bold text-sm mb-6">
                            🍕 Durchgehend warme Küche
                        </div>
```

Change line 84 to remove the `🍕 ` prefix (keep the rest):

```tsx
                            Durchgehend warme Küche
```

- [ ] **Step 43.2: Verify and commit**

Reload `/sportsbar`. Pill badge no longer shows pizza emoji.

```bash
git add src/app/sportsbar/page.tsx
git commit -m "feat(sportsbar): remove pizza icon from durchgehend-warme-küche badge"
```

---

### Task 44: Add WeitereAngeboteSection at bottom of Sportsbar page

**Files:**
- Modify: `src/app/sportsbar/page.tsx:1-7` (imports)
- Modify: `src/app/sportsbar/page.tsx:135-139` (insert before final `</main>`)

- [ ] **Step 44.1: Add import**

After line 7 (`import PremiumMenuViewer from "@/components/PremiumMenuViewer";`), add:

```tsx
import WeitereAngeboteSection from "@/components/WeitereAngeboteSection";
```

- [ ] **Step 44.2: Insert section**

After `<PremiumMenuViewer />` (line 136) and before the final `</main>` (line 137), add:

```tsx
            <WeitereAngeboteSection currentHref="/sportsbar" />
```

- [ ] **Step 44.3: Verify and commit**

Reload `/sportsbar`. Cross-link chip row at bottom.

```bash
git add src/app/sportsbar/page.tsx
git commit -m "feat(sportsbar): add WeitereAngeboteSection at bottom"
```

---

## Phase 14 — Geburtstage (`src/app/geburtstage/page.tsx`)

### Task 45: Remove "Trampolinsocken inkl." from all party-package includes

Spec: `Party Pakete | Trampolinsocken inkl. → löschen`. Three packages contain it (lines 12, 19, 26).

**Files:**
- Modify: `src/app/geburtstage/page.tsx:12`, `19`, `26`

- [ ] **Step 45.1: Strip the entry from each `includes` array**

Edit line 12: change `includes: ["2 Stunden Trampolin", "Trampolinsocken inkl.", "Eigener Partybereich"]`
to `includes: ["2 Stunden Trampolin", "Eigener Partybereich"]`

Edit line 19: change `includes: ["2 Stunden Trampolin", "1 Stunde 9-Pin Bowling", "Trampolinsocken inkl."]`
to `includes: ["2 Stunden Trampolin", "1 Stunde 9-Pin Bowling"]`

Edit line 26: change `includes: ["2 Stunden Trampolin", "Kletter-Tageskarte", "Kletterverleih inkl.", "Trampolinsocken inkl."]`
to `includes: ["2 Stunden Trampolin", "Kletter-Tageskarte", "Kletterverleih inkl."]`

- [ ] **Step 45.2: Verify and commit**

Reload `/geburtstage`. None of the four party-package cards mention Trampolinsocken anymore.

```bash
git add src/app/geburtstage/page.tsx
git commit -m "feat(geburtstage): remove Trampolinsocken-inkl from party packages"
```

---

### Task 46: Add image carousel under "Leckeres für die Party"

Spec: `unter Leckeres für die Party → Bildkarusell automatisch und Pfeile zum selber durchklicken (wie bei Trampolin) Bilder: geburtstag_1; geburtstag_2; geburtstag_3`.

**Files:**
- Modify: `src/app/geburtstage/page.tsx:1-5` (imports)
- Modify: `src/app/geburtstage/page.tsx:182-184` (insert section after Catering section, before Erwachsenen-Geburtstag link section)

- [ ] **Step 46.1: Add `useState`/`useEffect`/`Image` imports**

Top of file currently:
```tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { GeburtstagIcon, TrampolinIcon, BowlingIcon, KletternIcon, CheckIcon, FoodIcon } from "@/components/Icons";
```

Add right after the `Image` import:

```tsx
import { useState, useEffect } from "react";
```

- [ ] **Step 46.2: Build a small inline `<PartyGalleryCarousel />` helper at the top of the file (right above `const birthdayPackages = [...]` on line 7)**

```tsx
const partyImages = [
    { src: "/images/anpassungen/geburtstag_1.webp", alt: "Geburtstagsparty Impression 1" },
    { src: "/images/anpassungen/geburtstag_2.webp", alt: "Geburtstagsparty Impression 2" },
    { src: "/images/anpassungen/geburtstag_3.webp", alt: "Geburtstagsparty Impression 3" },
];

function PartyGalleryCarousel() {
    const [slide, setSlide] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setSlide((p) => (p + 1) % partyImages.length), 4000);
        return () => clearInterval(t);
    }, []);
    return (
        <section className="py-12 px-4 md:px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="relative h-72 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
                    {partyImages.map((img, i) => (
                        <Image
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            fill
                            className={`object-cover transition-opacity duration-700 ${i === slide ? "opacity-100" : "opacity-0"}`}
                            loading={i === 0 ? "eager" : "lazy"}
                            sizes="(max-width: 768px) 100vw, 80vw"
                        />
                    ))}
                    <button type="button" onClick={() => setSlide((p) => (p - 1 + partyImages.length) % partyImages.length)} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-slate-800 hover:bg-white transition-colors shadow" aria-label="Vorheriges Bild">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button type="button" onClick={() => setSlide((p) => (p + 1) % partyImages.length)} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-slate-800 hover:bg-white transition-colors shadow" aria-label="Nächstes Bild">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {partyImages.map((_, i) => (
                            <button key={i} type="button" onClick={() => setSlide(i)} className={`w-2 h-2 rounded-full transition-all ${i === slide ? "bg-white w-6" : "bg-white/50"}`} aria-label={`Bild ${i + 1}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
```

- [ ] **Step 46.3: Render it after the Catering section**

In `GeburtstagePage` (line 76+), find the closing `</section>` of the Catering block (currently around line 182). After that closing `</section>` and before the next `{/* Erwachsenen Geburtstag Link */}` section, insert:

```tsx
            <PartyGalleryCarousel />
```

- [ ] **Step 46.4: Verify and commit**

Reload `/geburtstage`. New carousel between Catering and Erwachsenen-Geburtstag link, auto-rotates with arrows.

```bash
git add src/app/geburtstage/page.tsx
git commit -m "feat(geburtstage): add party-photo carousel under Leckeres-für-die-Party"
```

---

## Phase 15 — Mietanlagen (`src/app/mietanlagen/page.tsx`)

### Task 47: Delete "1 Mobiles Trampolin" entry

**Files:**
- Modify: `src/app/mietanlagen/page.tsx:16-22`

- [ ] **Step 47.1: Delete the entry**

Remove the entire object (lines 16–22, including trailing comma):

```tsx
        {
            title: "1 Mobiles Trampolin",
            description: "Schnell aufgebaut — der perfekte Hingucker für jedes Event.",
            price: "Auf Anfrage",
            features: ["Schneller Aufbau", "Mobil einsetzbar", "Für alle Altersgruppen"],
            image: "/images/mietanlagen/Bunge Trampolin.png"
        },
```

- [ ] **Step 47.2: Verify and commit**

Reload `/mietanlagen`. Card list no longer contains "1 Mobiles Trampolin".

```bash
git add src/app/mietanlagen/page.tsx
git commit -m "feat(mietanlagen): remove non-existent 1-Mobiles-Trampolin entry"
```

---

### Task 48: Update Hüpfburg Dschungel image to new Boulderblock_Huepfburg.webp

**Files:**
- Modify: `src/app/mietanlagen/page.tsx:63`

- [ ] **Step 48.1: Replace image path**

Find line 63: `image: "/images/mietanlagen/Dschungel Tiere.jpg"`
Change to: `image: "/images/anpassungen/Boulderblock_Huepfburg.webp"`

- [ ] **Step 48.2: Verify and commit**

Reload `/mietanlagen`. Hüpfburg-Dschungel card displays the new image.

```bash
git add src/app/mietanlagen/page.tsx
git commit -m "feat(mietanlagen): swap Hüpfburg image to Boulderblock_Huepfburg.webp"
```

---

### Task 49: Add WeitereAngeboteSection at bottom of Mietanlagen page

**Files:**
- Modify: `src/app/mietanlagen/page.tsx:1-5` (imports)
- Modify: `src/app/mietanlagen/page.tsx:135-138` (before final `</main>`)

- [ ] **Step 49.1: Add import**

After line 5 (`import { CheckIcon } from "@/components/Icons";`), add:

```tsx
import WeitereAngeboteSection from "@/components/WeitereAngeboteSection";
```

- [ ] **Step 49.2: Insert section**

Right before the final `</main>`, add:

```tsx
            <WeitereAngeboteSection currentHref="/mietanlagen" />
```

- [ ] **Step 49.3: Verify and commit**

Reload `/mietanlagen`. Cross-link chip row at bottom.

```bash
git add src/app/mietanlagen/page.tsx
git commit -m "feat(mietanlagen): add WeitereAngeboteSection at bottom"
```

---

## Phase 16 — Gruppen & Vereine (`src/app/gruppen-schulen/page.tsx`)

### Task 50: Add WeitereAngeboteSection at bottom

**Files:**
- Modify: `src/app/gruppen-schulen/page.tsx:1-5` (imports)
- Modify: `src/app/gruppen-schulen/page.tsx:215-217` (before final `</main>`)

- [ ] **Step 50.1: Add import**

After line 5 (`import { SchuleIcon, FirmaIcon, CheckIcon, GeburtstagIcon } from "@/components/Icons";`), add:

```tsx
import WeitereAngeboteSection from "@/components/WeitereAngeboteSection";
```

- [ ] **Step 50.2: Insert section before `</main>`**

```tsx
            <WeitereAngeboteSection currentHref="/gruppen-schulen" />
```

- [ ] **Step 50.3: Verify and commit**

Reload `/gruppen-schulen`. Cross-link chip row at bottom.

```bash
git add src/app/gruppen-schulen/page.tsx
git commit -m "feat(gruppen-schulen): add WeitereAngeboteSection at bottom"
```

---

## Phase 17 — Verification (per spec row, every page)

This is the **mandatory** post-implementation walk-through. The user explicitly requested verification of every spot.

### Task 51: Whole-codebase grep checks

- [ ] **Step 51.1: All EarlyBirdBlock imports resolve**

```bash
cd "/Users/nilswesch/Desktop/claude_projects/work/websites/gohl/existing-code/Gohl/arlpark-website"
grep -rn "EarlyBirdBlock" src
```

Expected: 1 component file + 8 page consumers (Trampolin, Klettern, Bowling, Squash, Tennis, Tischtennis, Pickleball, Kids Play). Total ~10 hits.

- [ ] **Step 51.2: All WeitereAngeboteSection imports resolve**

```bash
grep -rn "WeitereAngeboteSection" src
```

Expected: 1 component + 10 page consumers (Trampolin, Klettern, Bowling, Squash, Tennis, Tischtennis, Pickleball, Kids Play, Sportsbar, Mietanlagen, Gruppen). Total ~12 hits.

- [ ] **Step 51.3: Confirm forbidden strings have all been removed**

```bash
grep -rn "ValoJump\|Disco-Kugel mit Moonlight\|4er Trampolin Anlage\|Direkter Zugang zum Café\|Trampolinsocken inkl\|Sonderkonditionen\|Info zu Reservierungen\|1 Mobiles Trampolin\|Juli – September kein Tennis" src
```

Expected: ZERO matches in `src/`. (If anything remains, it's a missed spec row.)

- [ ] **Step 51.4: Type-check the whole project**

```bash
npx tsc --noEmit -p .
```

Expected: clean exit, no errors.

### Task 52: Per-page browser verification matrix

Boot dev server (`node node_modules/.bin/next dev --webpack -p 3000`) and walk every URL. For each URL list the expected visible changes; tick only after seeing them in Chrome.

- [ ] **Step 52.1: `http://localhost:3000/` (Startseite)**
    - [ ] No "Info zu Reservierungen" card anywhere on the page
    - [ ] Left column shows welcome paragraph then "Preise & Tickets" sky card
    - [ ] No old long Preise-bar below the grid
    - [ ] Right column heading reads "Öffnungszeiten" (large) then "Wann wir für dich da sind" (medium) then "Ferien und Feiertage ab 9 Uhr geöffnet" (small)
    - [ ] Accordion row 1 = Trampolin
    - [ ] Accordion row 2 = "Sportsbar | 9Pin-Bowling" — open it → note line "Reservierung erforderlich für 9-Pin Bowling – online buchbar." visible above day rows
    - [ ] Accordion row 3 label = "Klettern | Bouldern | Squash | Tischtennis" — open it → note line "Reservierung erforderlich für Squash & Tischtennis – online buchbar." visible
    - [ ] Accordion row 4 label = "Tennis | Pickleball"
    - [ ] Aktuelles tiles render (no images yet — colour band fallback OK)
    - [ ] Mietanlagen section shows full-width image (not 3 small icon cards)

- [ ] **Step 52.2: `/angebote`**
    - [ ] Klettern tile heading reads "Kletterhalle" (not "Kletterwand")
    - [ ] Kids Play tile features show "Kletterwand" (not "4er Trampolin Anlage")
    - [ ] Bowling tile features show "Kinderbahn mit Bande" (not "Disco-Kugel mit Moonlight")
    - [ ] Vereinstraining description starts with "Arl X – der Verein für alle…"
    - [ ] Gruppen tile features show "Junggesellenabschied"
    - [ ] New tile "Gepäckdepot & Duschen" appears below Gruppen
    - [ ] Tab bar contains "Gepäckdepot & Duschen"

- [ ] **Step 52.3: `/angebote/trampolin`**
    - [ ] Bullet list ends with "Airbag" (no ValoJump)
    - [ ] Ticket-Art select shows visible chevron
    - [ ] Trampolinsocken card has NO 🧦 emoji
    - [ ] Below Trampolinsocken: EarlyBirdBlock visible
    - [ ] Impressionen carousel: arrows present + auto-rotate every 4s
    - [ ] WeitereAngeboteSection at bottom (11 chips, no Trampolin)

- [ ] **Step 52.4: `/angebote/klettern`**
    - [ ] Left column on desktop: Klettern Info appears ABOVE Partner Kletterzentrum Imst card
    - [ ] EarlyBirdBlock between Klettern Info and Partner card
    - [ ] Highlights → Outdoor Klettern accordion: image renders (Klettern_Outdoor.webp)
    - [ ] WeitereAngeboteSection at bottom (11 chips, no Klettern)

- [ ] **Step 52.5: `/angebote/bowling`**
    - [ ] EarlyBirdBlock at end of left column
    - [ ] Price dropdown only has "Preise" option (no "Extras")
    - [ ] WeitereAngeboteSection at bottom

- [ ] **Step 52.6: `/angebote/squash`**
    - [ ] EarlyBirdBlock visible
    - [ ] WeitereAngeboteSection at bottom

- [ ] **Step 52.7: `/angebote/tennis`**
    - [ ] Hinweis box reads "Juni – September" (not "Juli – September")
    - [ ] EarlyBirdBlock below the Hinweis
    - [ ] WeitereAngeboteSection at bottom

- [ ] **Step 52.8: `/angebote/tischtennis`**
    - [ ] EarlyBirdBlock below features
    - [ ] WeitereAngeboteSection at bottom

- [ ] **Step 52.9: `/angebote/pickleball`**
    - [ ] EarlyBirdBlock below image
    - [ ] WeitereAngeboteSection at bottom

- [ ] **Step 52.10: `/angebote/kids-play`**
    - [ ] Features list does NOT contain "Direkter Zugang zum Café"
    - [ ] EarlyBirdBlock below features
    - [ ] Image gallery is now an auto-rotating carousel with arrows + dots (not a static grid)
    - [ ] WeitereAngeboteSection at bottom

- [ ] **Step 52.11: `/sportsbar`**
    - [ ] "Durchgehend warme Küche" pill has NO 🍕 emoji
    - [ ] Highlights uses checkmark bullet list (not amber box)
    - [ ] Billard/Darts/etc grid: no hover state, looks like plain labels (not buttons)
    - [ ] WeitereAngeboteSection at bottom

- [ ] **Step 52.12: `/geburtstage`**
    - [ ] None of the 4 party-package cards mention "Trampolinsocken inkl."
    - [ ] After "Leckeres für die Party": new auto-rotating carousel with geburtstag_1/2/3 + arrows + dots

- [ ] **Step 52.13: `/mietanlagen`**
    - [ ] No card titled "1 Mobiles Trampolin"
    - [ ] "Hüpfburg 'Dschungel Tiere'" card image is the new Boulderblock_Huepfburg.webp
    - [ ] WeitereAngeboteSection at bottom

- [ ] **Step 52.14: `/gruppen-schulen`**
    - [ ] WeitereAngeboteSection at bottom

### Task 53: Final summary commit

- [ ] **Step 53.1: Commit any leftover dev artefacts (none expected)**

```bash
git status
```

Expected: clean working tree.

- [ ] **Step 53.2: Tag the change set**

```bash
git log --oneline | head -25
```

Expected: ~25 atomic commits, one per task.

- [ ] **Step 53.3: Final report — list any spec rows that could NOT be implemented**

Verify the 7 client questions at the top of this plan still need answers. List them in the handoff message to Nils.

---

## Self-Review (one-time, before execution)

Spec coverage map (each xlsx row → task):
- Startseite Preise & Tickets ersetzt Block Info zu Reservierungen → Task 4
- Startseite Info zu Reservierung gesamter Block löschen → Task 4
- Startseite Tennis label → Task 5
- Startseite Klettern row label → Task 5
- Startseite Klettern note → Task 6
- Startseite Sportsbar note → Task 7
- Startseite Wann wir für euch da sind → Ferien hint + Öffnungszeiten Große Überschrift → Task 8
- Startseite Aktuelles Bild Kurse → Task 9
- Startseite Mietanlagen icon → bild full width → Task 10
- Angebote Kletterwand → Kletterhalle → Task 11
- Angebote Kids Play 4er Trampolin → Kletterwand → Task 12
- Angebote arl.x Vereinstraining text → Task 13
- Angebote 9-Pin Bowling Disco-Kugel → Kinderbahn mit Bande → Task 14
- Angebote Gruppen Sonderkonditionen → Junggesellenabschied → Task 15
- Angebote Gruppen Gepäckdepot & Duschen new entry → Task 15b
- Trampolin ValoJump → Airbag → Task 16
- Trampolin ticket dropdown chevron → Task 17
- Trampolin EarlyBird → Task 18
- Trampolin Trampolinsocken icon delete → Task 19
- Trampolin Weitere Angebote → Task 20
- Trampolin Impressionen arrows → Task 21
- Klettern Beschreibung tauschen → Task 22
- Klettern Outdoor Bild → Task 23
- Klettern EarlyBird → Task 24
- Bowling EarlyBird → Task 25
- Bowling Extras löschen → Task 26
- Bowling Weitere Angebote → Task 27
- Squash EarlyBird → Task 28
- Squash Weitere Angebote → Task 28
- Tennis Juli → Juni → Task 30
- Tennis EarlyBird → Task 31
- Tennis Weitere Angebote → Task 31
- Tischtennis EarlyBird → Task 33
- Tischtennis Weitere Angebote → Task 33
- Pickleball EarlyBird → Task 35
- Pickleball Weitere Angebote → Task 35
- Kidsplay Direkter Zugang zum Café delete → Task 37
- Kidsplay EarlyBird → Task 38
- Kidsplay Weitere Angebote → Task 39
- Kidsplay Bilder Galerie → carousel → Task 40
- Sportsbar Highlights als Aufzählung → Task 41
- Sportsbar More than just Food overlay entfernen → Task 42
- Sportsbar Pizza Icon entfernen → Task 43
- Sportsbar Weitere Angebote → Task 44
- Geburtstage Trampolinsocken inkl löschen → Task 45
- Geburtstage Bildkarussel unter Leckeres → Task 46
- Mietanlagen 1 Mobiles Trampolin löschen → Task 47
- Mietanlagen Hüpfburg Dschungel Bild → Task 48
- Mietanlagen Weitere Angebote → Task 49
- Gruppen & Vereine Weitere Angebote → Task 50

All 51 spec rows mapped (Tasks 29, 32, 34, 36 numbers skipped intentionally — combined-task numbering).

---

**End of plan.**
