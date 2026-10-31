---
name: NOVA FOODS ARGENTINA SA
description: Institutional one-page for a white-label food plant. Manual monochrome plus workwear blue, condensed display type, the wavy badge plate as the signature form.
colors:
  brand-black: "#000000"
  brand-ink: "#2D2B2C"
  brand-gray: "#58595A"
  brand-white: "#FFFFFF"
  workwear-blue: "#1F4FA3"
  workwear-blue-deep: "#163B7D"
  workwear-blue-ink: "#0E2756"
  workwear-blue-tint: "#C9D8F3"
  workwear-blue-light: "#6F9BE8"
  error: "#B42318"
  error-on-dark: "#FF9A8F"
  minimal-paper: "#FFFFFF"
  minimal-paper-soft: "#F4F4F3"
  minimal-text: "#141414"
  minimal-line: "#E2E2E0"
  minimal-line-strong: "#C9C9C7"
  graphite-ground: "#0D0D0E"
  graphite-raise: "#161517"
  graphite-text: "#F2F2F1"
  graphite-text-muted: "#A9AAAB"
  graphite-text-dim: "#7D7E80"
  blocks-text: "#0A0A0A"
  blocks-text-muted: "#4A4B4C"
  blocks-gray-block: "#EDEDED"
  blocks-field: "#F2F2F2"
  bento-ground: "#E9E9E7"
  bento-tile-gray: "#D9D9D6"
  bento-tile-black: "#121112"
  bento-text-muted: "#555657"
  bento-field: "#F3F3F1"
typography:
  display:
    fontFamily: "Abolition, Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(3.4rem, 8.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "normal"
  headline:
    fontFamily: "Abolition, Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 4.4rem)"
    fontWeight: 800
    lineHeight: 0.92
  title:
    fontFamily: "Abolition, Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 0.92
  lead:
    fontFamily: "Lexend Deca, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)"
    fontWeight: 300
    lineHeight: 1.55
  body:
    fontFamily: "Lexend Deca, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.65
  label:
    fontFamily: "Lexend Deca, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  graphite-field: "10px"
  graphite-sm: "12px"
  graphite-chip: "14px"
  graphite: "20px"
  bento-field: "12px"
  bento-sm: "14px"
  bento-nav: "18px"
  bento: "clamp(18px, 2vw, 28px)"
  pill: "999px"
spacing:
  space-1: "0.5rem"
  space-2: "1rem"
  space-3: "1.5rem"
  space-4: "2rem"
  space-5: "3rem"
  space-6: "4.5rem"
  space-7: "clamp(5rem, 11vw, 9.5rem)"
  gutter: "clamp(1rem, 4vw, 3rem)"
  max: "1240px"
  bento-gap: "clamp(0.6rem, 1.1vw, 0.9rem)"
  bento-pad: "clamp(1.25rem, 2.6vw, 2.25rem)"
components:
  button-plate:
    backgroundColor: "{colors.brand-black}"
    textColor: "{colors.brand-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "1.15em 2em"
  button-plate-hover:
    backgroundColor: "{colors.workwear-blue}"
    textColor: "{colors.brand-white}"
  button-plate-small:
    padding: "0.95em 1.4em"
  button-plate-disabled:
    backgroundColor: "{colors.brand-gray}"
  button-plate-graphite:
    backgroundColor: "{colors.brand-white}"
    textColor: "{colors.graphite-ground}"
    padding: "1.15em 2em"
  button-plate-blocks:
    backgroundColor: "{colors.workwear-blue}"
    textColor: "{colors.brand-white}"
    padding: "1.2em 2.1em"
  button-plate-blocks-hover:
    backgroundColor: "{colors.brand-black}"
    textColor: "{colors.brand-white}"
  button-plate-blocks-light:
    backgroundColor: "{colors.brand-white}"
    textColor: "{colors.workwear-blue}"
  input-minimal:
    backgroundColor: "transparent"
    textColor: "{colors.minimal-text}"
    rounded: "{rounded.none}"
    padding: "0.7rem 0"
  input-graphite:
    backgroundColor: "rgb(0 0 0 / 0.3)"
    textColor: "{colors.brand-white}"
    rounded: "{rounded.graphite-field}"
    padding: "0.85rem 1rem"
  input-blocks:
    backgroundColor: "{colors.blocks-field}"
    textColor: "{colors.blocks-text}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1rem"
  input-bento:
    backgroundColor: "{colors.bento-field}"
    textColor: "{colors.bento-tile-black}"
    rounded: "{rounded.bento-field}"
    padding: "0.9rem 1rem"
  tile-bento:
    backgroundColor: "{colors.brand-white}"
    rounded: "{rounded.bento}"
    padding: "{spacing.bento-pad}"
  card-glass:
    backgroundColor: "rgb(255 255 255 / 0.05)"
    rounded: "{rounded.graphite}"
    padding: "{spacing.space-4}"
---

# Design System: NOVA FOODS ARGENTINA SA

## Overview

**Creative North Star: "The Plant Behind the Label"**

NOVA makes food that ships under somebody else's name, so the system is built like a plant's own workwear: the brand manual's monochrome (black, ink, gray, white) and the workwear blue taken from its cap and jacket. Condensed uppercase display type sets the headlines at poster scale, a light Lexend Deca body carries the plain explanations, and tracked uppercase labels echo the manual's "ARGENTINA SA" lockup. The one shape the brand owns is the wavy-edged badge plate from the logo. It is cut into every call-to-action button and frames the signature hero photo.

The system ships as one shared brand layer plus four named variants, each pinned by the client: **Minimal** (white paper, hairlines), **Graphite** (dark ground, frosted glass panels), **Blocks** (full blue grounds with solid black and white blocks) and **Bento** (rounded asymmetric tiles on a warm gray ground). Palette, type, the plate, motion and the form contract stay the same across all four. Only grounds, surfaces, radii and component treatments change. Any new surface picks one variant and stays inside it.

The page explicitly refuses the generic food-supplier look: no stock food photography, no warm appetite palette, no rows of icon cards. Proof comes from brand mockups only (boxes, shirt, van, truck), with no invented figures.

**Key Characteristics:**
- Manual monochrome plus a single workwear blue accent; nothing warm.
- Condensed uppercase display at 800 weight with tight 0.9 to 0.92 leading; light (300) body.
- Tracked uppercase labels at 0.14em for buttons, facts, address heads and links.
- The wavy badge plate (`--plate`, `--plate-frame`) as the only signature silhouette.
- Word-by-word headline reveal plus bidirectional scroll reveals on one long ease-out curve.
- Four variants sharing one brand layer; variant tokens stay inside their variant.

## Colors

A strict monochrome taken from the brand manual, broken by exactly one hue: workwear blue and the shades derived from it.

### Primary
- **Workwear Blue** (workwear-blue): the brand accent, taken from the cap and jacket in the manual's applications and confirmed by the user. On Minimal, Graphite and Bento it is the hover and focus state of the black or white plate, the link underline, the product-row rule and the selection color. On Blocks it is the ground itself: nav, hero, client band, contact intro, alternating product tiles.
- **Deep Workwear** (workwear-blue-deep): the pressed, scrolled or second-tier blue. Blocks' scrolled nav (at 0.96 alpha), the location band and the mobile menu; Bento's CTA-tile hover; Minimal's form success text.
- **Workwear Ink** (workwear-blue-ink): the darkest blue. Blocks' map placeholder and the outline-button hover.
- **Workwear Tint** (workwear-blue-tint): secondary text on blue grounds (Blocks and Bento blue tiles). Never used as a ground.
- **Workwear Light** (workwear-blue-light): Graphite only. The blue lifted for contrast on near-black: focus ring, icon strokes, product hover, step numerals.

### Neutral
- **Manual Black** (brand-black): the default plate fill on light grounds, footers on Minimal and Blocks, Blocks' product and band sections, and the display color on white.
- **Manual Ink** (brand-ink): lead text and labels on light grounds, plus Bento's line pills.
- **Manual Gray** (brand-gray): muted text on Minimal, and the disabled plate on every variant.
- **Manual White** (brand-white): the plate fill on dark grounds and the text color on blue or black.
- **Variant grounds**: Minimal paper (minimal-paper, minimal-paper-soft for the About band); Graphite ground and raise (graphite-ground, graphite-raise); Blocks white with a gray block (blocks-gray-block); Bento warm gray ground (bento-ground) with white, gray (bento-tile-gray) and near-black (bento-tile-black) tiles. Each variant has its own text and muted-text pair. Do not borrow them across variants.
- **Error** (error on light grounds, error-on-dark on Graphite): field and status errors only.

### Named Rules
**The One Hue Rule.** Workwear blue and its derived shades are the only hue in the system. Everything else is the manual's monochrome. Graphite's ambient glow is the same blue at 0.10 to 0.18 alpha, not a new color.

**The Accent-Or-Ground Rule.** Blue plays exactly one role per variant. On Minimal, Graphite and Bento it is the accent (hover, focus, rules, one blue tile family). On Blocks it is the ground, and black becomes the hover. Never use both roles in the same variant.

## Typography

**Display Font:** Abolition (via `local()` only), falling back to Big Shoulders Display (Google Fonts, 700/800, plus 900 on Blocks), then Arial Narrow
**Body Font:** Lexend Deca (Google Fonts, 300/400/500/600), with system-ui fallback

**Character:** a narrow industrial poster face over a wide, calm geometric sans, the same pairing as the manual's "NOVA FOODS" over "ARGENTINA SA". Abolition is a commercial font and is not shipped. The `@font-face` only resolves it when it is installed locally, so in practice every visitor sees Big Shoulders Display. Treat Big Shoulders Display at 800 as the rendered display face until a licensed Abolition webfont is added.

### Hierarchy
- **Display** (800, uppercase, 0.92 leading; 0.9 on Blocks): the hero headline only. Minimal uses the frontmatter ramp. Per variant: Graphite `clamp(3.3rem, 7.4vw, 6rem)`, Blocks `clamp(4rem, 10vw, 6rem)`, Bento `clamp(3.2rem, 6.4vw, 5.25rem)`.
- **Headline** (800, uppercase): section h2. Graphite and Bento use `clamp(2.6rem, 5vw, 4.2rem)`, Blocks `clamp(2.8rem, 6vw, 5rem)`.
- **Title** (800, uppercase): h3, the clients heading and block or tile headings. Product names on Minimal scale up to `clamp(2.6rem, 6.5vw, 5.25rem)` with 0.9 leading as a typographic index.
- **Lead** (300, 1.55 leading, 36 to 44ch): the paragraph under a headline.
- **Body** (300, 1rem, 1.65 leading; 1.6 on Bento): running copy, 52 to 56ch maximum. Small body is 0.9375rem.
- **Label** (500, 0.8125rem, 0.14em tracking, uppercase; 600 on Blocks): buttons, hero facts, address heads, underline links, Blocks' field labels. Form labels on the other variants are sentence case with 0.04 to 0.06em tracking.

### Named Rules
**The ARGENTINA SA Rule.** Every uppercase body-font string is tracked at 0.14em (`--track-caps`). Untracked uppercase Lexend never appears.

**The Display Is Display Rule.** The condensed face only appears in uppercase at 700 to 800 weight with leading at or below 0.95: headlines, product names, client placeholders, Blocks' band and values. It is never used for running text.

## Layout

A centered column of `min(100% - 2 * gutter, 1240px)` (1320px on Bento), with a fluid gutter of `clamp(1rem, 4vw, 3rem)` (Bento: `clamp(0.75rem, 3vw, 2rem)`). Spacing follows a shared seven-step scale (0.5, 1, 1.5, 2, 3, 4.5rem, then a fluid section step). Section padding uses the fluid `space-7` (Minimal tops out at 9.5rem, Graphite and Blocks at 8.5rem). Bento instead uses top-only `clamp(4rem, 9vw, 7.5rem)` so the tile gaps carry the rhythm.

Composition is asymmetric two-column throughout: 7fr/5fr or 6fr/5fr hero and section heads, 5fr/7fr contact. Minimal and Graphite bottom-align the hero (`align-items: end`), Graphite centers it. Blocks runs sections edge to edge as color bands, with full-bleed location and contact splits. Bento sits on a 12-column grid with `--gap` between tiles; the hero spans 6+6, then 2+2+2 tiles.

Breakpoints are shared: 960px (Bento 1100px) collapses the two-column grids to one, and 760px switches to the mobile nav (44px toggle, a dropdown panel under the nav), single-column forms and a stacked footer. The sticky nav is 76px and shrinks to 64px on scroll and on mobile.

## Elevation & Depth

Depth belongs to the variant. Minimal and Blocks are flat and use tonal bands (paper vs. paper-soft, blue vs. black vs. white). The only shadow there is Blocks' scrolled-nav drop shadow. Graphite layers frosted glass over a fixed ambient blue and gray radial wash that drifts slightly with scroll progress. Bento lifts its tiles with a soft two-part ambient shadow that deepens on hover.

### Shadow Vocabulary
- **Glass** (`box-shadow: 0 24px 60px -24px rgb(0 0 0 / 0.7), 0 2px 6px rgb(0 0 0 / 0.3), inset 0 1px 0 rgb(255 255 255 / 0.06)`, with `backdrop-filter: blur(18px) saturate(1.3)`): Graphite panels, the form, the locate card and chips.
- **Tile rest** (`box-shadow: 0 1px 2px rgb(18 17 18 / 0.05), 0 12px 32px -18px rgb(18 17 18 / 0.25)`): every Bento tile.
- **Tile hover** (`box-shadow: 0 2px 4px rgb(18 17 18 / 0.06), 0 28px 50px -22px rgb(18 17 18 / 0.4)`): Bento tile hover (with a -4px lift) and the mobile menu panel.
- **Blocks nav** (`box-shadow: 0 10px 30px -14px rgb(0 0 0 / 0.4)`): Blocks' scrolled nav only.

### Named Rules
**The Frost-Only-In-Graphite Rule.** Backdrop blur is a Graphite material. Other variants use it only for their scrolled nav bar (Minimal and Bento at 10 to 12px). It never becomes a card surface outside Graphite.

## Shapes

The brand's silhouette is the **badge plate**: a rectangle whose top and bottom edges swell into a soft wave, taken from the logo's filled badge. It exists as two SVG masks stretched to the element's box (`preserveAspectRatio='none'`). `--plate` has an 8% wave and sits on the `::before` of every button. `--plate-frame` has a 4% wave and frames the signature hero photo (on Graphite, also the catalog photo). The plate is the system's only curved edge on Minimal and Blocks, which are otherwise square-cornered: zero-radius fields, square photos and blocks, hairline rules.

Graphite softens containers to 20px (panels), 14px (chips, client tiles), 12px (map and photo insets) and 10px (fields), with circular step numerals. Bento rounds tiles to `clamp(18px, 2vw, 28px)` and uses 18px for the floating nav, 14px for client tiles, 12px for fields and pills (999px) for nav links and product-line chips. Even on rounded variants the buttons keep the plate silhouette. Buttons are never rounded.

## Components

### Buttons (the plate)
Square-shouldered, tracked and wavy-edged: the brand's badge cut into a button.
- **Shape:** the `--plate` mask on a `::before` layer (no border-radius), with an inline-flex label and a 1.1em hairline dash after the text that grows to 1.8em on hover.
- **Primary on light grounds (Minimal, Bento):** black plate, white label, padding 1.15em 2em, label type.
- **Primary on Graphite:** white plate with a graphite label. A ghost variant uses white at 0.08 alpha with no dash.
- **Primary on Blocks:** blue plate (600 weight, 2px dash, padding 1.2em 2.1em). The light variant is a white plate with a blue label for use on blue grounds.
- **Hover / Focus:** the plate fills with workwear blue (black on Blocks) and stretches `scaleX(1.03)` (`scale(1.04)` on Blocks) over 0.35s ease-out. The active state compresses to `scaleX(0.98)`.
- **Small:** padding 0.95em 1.4em with no dash, used in the nav.
- **Disabled:** gray plate with a progress cursor ("Enviando…").

### Underline Link
A secondary action next to the plate. Label type with a 1px currentColor underline drawn as a background gradient. On hover the underline shrinks to 40% and the text turns blue (Minimal `link-arrow`, Bento `link-under`; Graphite's `product__link` uses a growing trailing dash instead).

### Cards / Containers
- **Minimal rows:** no container. A top hairline (`minimal-line-strong`) above a 500-weight title and muted body. Product rows carry a blue rule that draws in from the left on hover while the name shifts 0.75rem.
- **Graphite glass:** 20px radius, a 155deg white-alpha gradient, a 1px white-at-0.12 border, the Glass shadow and 2rem padding. Hover lifts by 6px and tints the border blue. The catalog panel has a pointer-tracked blue radial glow.
- **Blocks blocks:** solid black, blue or gray rectangles at 300px minimum height that lift 8px on hover. Product tiles alternate blue and white with a 4px gap, and a black panel slides up from below on hover.
- **Bento tiles:** white, gray, black or blue at the fluid radius with Tile shadows and `--pad` padding. Photo tiles are unpadded and zoom 1.05 on hover.

### Inputs / Fields
- **Minimal:** a bottom hairline only, transparent, zero radius. Focus turns the line blue with a 1px blue shadow beneath.
- **Graphite:** black at 0.3 alpha with a white-alpha 1px border and a 10px radius. Focus gives a blue-light border and a 3px blue-light ring at 0.22 alpha.
- **Blocks:** a #F2F2F2 fill with a 2px transparent border and zero radius. Focus gives a blue border on white. Labels are uppercase tracked at 600.
- **Bento:** a #F3F3F1 fill with a 12px radius. Focus gives a blue border on white and a 4px blue ring at 0.14 alpha.
- **Error:** the error color on the border plus an inline message, toggled by `.is-invalid`. Selects use an inline SVG chevron in the variant's muted color (blue on Blocks).

### Navigation
A sticky bar. The logo PNG has an opaque white plate, so on light grounds it blends with `mix-blend-mode: multiply` and on dark or blue grounds it uses `filter: invert(1)` plus `mix-blend-mode: screen`. On scroll (past 24px) the bar shrinks from 76px to 64px and gains its variant ground: white at 0.9 alpha with blur (Minimal), graphite at 0.6 alpha with blur (Graphite), deep blue at 0.96 alpha with a shadow (Blocks), or a white floating 18px pill with blur (Bento, whose nav sits on an opaque ground at rest so multiply works). Link hover differs per variant: a blue underline drawn in (Minimal), white text (Graphite), a 2px white bar (Blocks), a gray pill (Bento). A scroll-spy sets `aria-current`. On mobile a two-bar toggle opens a dropdown panel.

### Signature: Plate-Framed Hero Photo
One brand mockup (boxes, shirt, van) masked with `--plate-frame`. Minimal shows it grayscale and regains color on hover over 1.2s. Graphite desaturates it to 0.7 saturation and 0.85 brightness. Blocks shows it full color and full height. Bento shows it unpadded and shadowless at 16:10.

### Signature: Reveal System
`script.js` adds `.js` to the root. An IntersectionObserver (threshold 0.12, rootMargin `0px 0px -6% 0px`) adds `.is-in` on entry and removes it when the element leaves below the viewport, so reveals replay when scrolling back up. `[data-reveal]` rises 36 to 40px (or slides ±48px left or right) with a 90ms × `--d` stagger. `[data-split]` headlines are split into per-word masks that slide up 105% with a 70ms stagger per word. All motion uses `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` at 0.9 to 1s. Variant accents: Graphite adds a 6px blur-in plus a `scale` reveal, Blocks opens images with `clip-path` from the right, Bento adds a 0.97 scale and a 150ms headline delay. `prefers-reduced-motion` shows everything statically and turns the marquee into a grid.

### Quote Form (contract)
`name="cotizacion"`, `method="POST"`, `data-netlify="true"`, `netlify-honeypot="bot-field"` with a hidden `bot-field`, and `novalidate`. Fields: Nombre y apellido, Empresa, Rubro (select), Teléfono, Email, Volumen estimado. The script validates inline, then POSTs urlencoded data to `/`. On localhost it simulates the send and logs the payload instead. Status messages render below the submit plate in the variant's success or error color.

## Do's and Don'ts

### Do:
- **Do** put every call to action on the `--plate` mask with tracked uppercase 0.8125rem/500 labels and a blue hover fill (black on Blocks).
- **Do** frame the one signature brand photo with `--plate-frame`.
- **Do** pick one variant per surface and use only its ground, surface and radius tokens.
- **Do** blend the logo with multiply on light grounds and invert(1) plus screen on dark or blue grounds, since `logo.png` carries an opaque white background.
- **Do** run every reveal on `cubic-bezier(0.16, 1, 0.3, 1)` and keep reveals bidirectional, with a reduced-motion fallback.
- **Do** keep the Netlify form contract intact: name, honeypot, field set, urlencoded POST to `/`.

### Don't:
- **Don't** introduce any hue besides workwear blue and its derived shades; no warm food tones.
- **Don't** use stock food photography; the proof is the brand mockups.
- **Don't** build rows of icon-headed feature cards.
- **Don't** round the buttons; the plate is their shape on every variant.
- **Don't** set uppercase Lexend without 0.14em tracking, or the condensed display face in lowercase or as body text.
- **Don't** invent figures, certifications or client logos; client slots stay visibly generic placeholders.
