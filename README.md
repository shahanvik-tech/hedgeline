# Hedgeline

A local, paper-only corporate event-risk hedging desk. It registers operational exposures, ranks public event contracts, sizes indicative hedges, tracks a simulated portfolio, and produces printable decision memos. No trading or order placement is implemented.

## Run

Requires Node.js 20.9+ and npm. From this directory:

```bash
npm install && npm run dev
```

Open http://127.0.0.1:3000. For a production build, run `npm run build` and `npm start`. Tests: `npm test`.

Data persists in `data/hedgeline.db`, created on first request. Delete that file to reset to the seeded demo state. Three seeded companies are Gulf Coast Logistics, Prairie Grain Cooperative, and Meridian Hospitality Group; each starts with two exposures. The landing page is `/`, the application is `/desk`.

## Architecture

- Next.js App Router, TypeScript, Tailwind CSS, and Recharts for the responsive interface.
- `better-sqlite3` with WAL mode for local persistence. API route handlers validate and write companies, risks, and hedges.
- `lib/logic.ts` contains deterministic exposure parsing, contract ranking, basis-risk notes, and sizing math. Unit tests cover the financial calculations and relevance ordering.
- `lib/markets.ts` proxies public Kalshi and Polymarket endpoints from the server, caches responses for five minutes per server process, and includes clearly labeled reference contracts from `data/markets-snapshot.json` for relevant seeded examples. If neither source responds, the feed itself is labeled snapshot data. The UI also labels partially live data.
- Each hedge stores its entry market terms, price, contract count, and premium. The dashboard marks it to the latest available indicative market price, falling back to entry price if absent.

## Data sources and assumptions

Kalshi: public open-markets endpoint, up to three pages of 1,000 results each. Yes ask is the indicative cost; last price then yes bid is used if ask is absent. Polymarket: public Gamma active markets endpoint (500 results); `outcomePrices` supplies the Yes price. Volume is shown as source-reported volume. These are public market indicators, not executable quotes. Venue eligibility and contract rules must be checked independently.

Matching is rule-based and scores keyword overlap, event and geography mentions, date-window proximity, and settlement clarity. It is a discovery aid, not an assertion that a contract perfectly hedges a loss. The original exposure, structured fields, and basis-risk notes remain visible. A risk without a booked paper hedge appears as unhedgeable demand. An optional LLM parser was omitted deliberately to keep the prototype deterministic and usable without credentials.

One Yes contract pays $1 if the specified event resolves Yes. Contracts are `ceil(loss × target coverage)`, premium is contracts × indicative Yes price, and the loss-scenario P&L is `−loss + payout − premium`. In a no-loss scenario, the illustration assumes the event resolves No and the premium is lost. Actual outcomes can differ: the business loss and contract resolution are separate events. The payoff chart is a two-scenario illustration, not a probability distribution. Existing paper hedges remain open in this prototype even after the displayed settlement date; settlement processing is a future step.

Event-linked contracts usually do not qualify for US GAAP hedge accounting. Fair-value changes and the underlying business loss can hit different reporting periods. The memo highlights this timing issue and requires accounting review.

## Next steps

Add authenticated multi-user access and company permissions, deeper market pagination and contract-rule normalization, historical market data, liquidity/limit checks, actual settlement lifecycle, exposure editing, and accounting/export integrations before any production use. A real trading workflow would require separate legal, compliance, and venue integration work.
