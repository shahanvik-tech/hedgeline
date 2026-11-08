# Hedgeline design system

The interface borrows the rhythm of a risk committee report: firm navigation, restrained section rules, tabular figures, and tables that let a treasury user read the exposure before the market. The landing page demonstrates the register with synthetic figures; the desk remains a familiar operational application.

## Palette

- Ground: `#F7F8F4`
- Ink: `#1A2520`
- Primary green: `#123F2C`
- Muted text: `#59685E`
- Rules: `#CCD5CC`
- Selected ground: `#E7EEE8`
- White data surfaces: `#FFFFFF`

Green marks navigation, primary action, selected state, and current coverage. Amber is reserved for unhedgeable demand. Snapshot and paper states are always labeled in text as well as color.

## Type

Inter carries UI text and headings. IBM Plex Mono carries notional, premium, percentages, dates in compact data contexts, and status numerals. Headings use tight but legible tracking (about `-0.035em`); figures stay tabular and right aligned in tables.

## Layout and components

- Desktop desk: 222px dark green rail, 76px white company bar, off-white working area.
- Dashboard: one horizontal measures strip, then a full-width register and a compact coverage-gap panel.
- Tables: hairline row rules, tinted header, right-aligned numeric columns, horizontal overflow when needed.
- Buttons, inputs, selects, cards, and badges: square to 2px radii; no decorative shadow in the desk.
- Landing: direct statement and synthetic preview of the register; the preview uses the same rules and type as the product.
- Mobile: horizontal scroll navigation and stacked measures; data tables retain horizontal scrolling instead of compressing figures.

## Interaction and states

A green focus outline marks keyboard focus. Hover is a subtle fill change. Errors explain recovery, loading uses neutral skeletons, and empty states name the next action. Paper and snapshot status remain visible in the dashboard, markets, and memo.

## Source

Product constraints and content come from `PRODUCT.md` and the original Hedgeline brief. Impeccable direction seed `seed:60cff2b8ddceafd5` was used for the operating-screen redesign; no user data was sent to the direction service.
