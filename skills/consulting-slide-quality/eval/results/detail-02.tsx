import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

// ── Design tokens ─────────────────────────────────────────────────────────────
export const design: DesignSystem = {
  palette: {
    bg: '#ffffff',
    text: '#1a1a1a',
    accent: '#29ba74', // consulting green — single accent for the focal strategy
  },
  fonts: {
    display: 'system-ui, -apple-system, sans-serif',
    body:    'system-ui, -apple-system, sans-serif',
  },
  typeScale: { hero: 64, body: 32 },
  radius: 0,
};

// Neutral palette outside DesignSystem shape
const muted   = '#6c757d'; // secondary text, column headers, source line
const divider = '#dee2e6'; // horizontal dividing lines

// ── Comparison Data ───────────────────────────────────────────────────────────
interface DimensionScore {
  name: string;
  reach: string;
  cost: string;
  speed: string;
  scalability: string;
  brandControl: string;
  isFocal?: boolean;
}

const strategies: DimensionScore[] = [
  {
    name: 'Direct Sales',
    reach: 'Low',
    cost: 'High',
    speed: 'Low',
    scalability: 'Low',
    brandControl: 'High',
  },
  {
    name: 'Channel Partner',
    reach: 'High',
    cost: 'Medium',
    speed: 'Medium',
    scalability: 'High',
    brandControl: 'Medium',
  },
  {
    name: 'Product-Led Growth',
    reach: 'High',
    cost: 'Low',
    speed: 'Fastest',
    scalability: 'High',
    brandControl: 'Low',
    isFocal: true, // single focal point / outlier per Section 3 & 7
  },
  {
    name: 'OEM Licensing',
    reach: 'High',
    cost: 'Lowest',
    speed: 'Medium',
    scalability: 'Highest',
    brandControl: 'Lowest',
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────
// Detail slide: evidence & comparison matrix, top-aligned, left-aligned.
// Hierarchy: Slide title (64px) -> Divider -> Matrix headers (28px) -> Rows (32px) -> Source (28px)
const Detail: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      fontFamily: 'var(--osd-font-display)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start', // top-aligned — Detail slide rule
      alignItems: 'flex-start',     // left-aligned — Detail slide rule
      padding: 120,                 // respects no-fly zone (>= 96px)
      boxSizing: 'border-box',
      textAlign: 'left',
    }}
  >
    {/* ── Tier 1: Title — concise, descriptive headline ── */}
    <h1
      style={{
        fontSize: 'var(--osd-size-hero)', // 64px
        fontWeight: 700,
        lineHeight: 1.2,
        color: 'var(--osd-text)',
        letterSpacing: '-0.02em',
        margin: 0,
      }}
    >
      Four go-to-market strategies compared
    </h1>

    {/* ── Horizontal divider under title ── */}
    <div
      style={{
        width: '100%',
        height: 2,
        backgroundColor: divider,
        marginTop: 28,
        marginBottom: 44,
      }}
    />

    {/* ── Tier 2: Comparison Matrix ── */}
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Table Header */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          fontSize: 28,
          fontWeight: 600,
          color: muted,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}
      >
        <div style={{ width: 380 }}>Strategy</div>
        <div style={{ width: 260 }}>Reach</div>
        <div style={{ width: 240 }}>Cost</div>
        <div style={{ width: 240 }}>Speed</div>
        <div style={{ width: 280 }}>Scalability</div>
        <div style={{ width: 280 }}>Brand Control</div>
      </div>

      {/* Header boundary line */}
      <div
        style={{
          width: '100%',
          height: 1,
          backgroundColor: divider,
          marginBottom: 12,
        }}
      />

      {/* Table Rows */}
      {strategies.map((strategy) => (
        <div
          key={strategy.name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              minHeight: 74,
              fontSize: 'var(--osd-size-body)', // 32px
              lineHeight: 1.4,
              color: 'var(--osd-text)',
            }}
          >
            {/* Strategy Name Column */}
            <div
              style={{
                width: 380,
                display: 'flex',
                alignItems: 'center',
                fontWeight: strategy.isFocal ? 700 : 600,
                color: strategy.isFocal ? 'var(--osd-accent)' : 'var(--osd-text)',
              }}
            >
              <span
                style={{
                  color: strategy.isFocal ? 'var(--osd-accent)' : muted,
                  fontWeight: 700,
                  marginRight: 16,
                  userSelect: 'none',
                }}
              >
                •
              </span>
              <span>{strategy.name}</span>
            </div>

            {/* Reach */}
            <div
              style={{
                width: 260,
                color: strategy.isFocal ? 'var(--osd-text)' : muted,
                fontWeight: strategy.isFocal ? 600 : 400,
              }}
            >
              {strategy.reach}
            </div>

            {/* Cost */}
            <div
              style={{
                width: 240,
                color: strategy.isFocal ? 'var(--osd-text)' : muted,
                fontWeight: strategy.isFocal ? 600 : 400,
              }}
            >
              {strategy.cost}
            </div>

            {/* Speed (Focal outlier highlighted) */}
            <div
              style={{
                width: 240,
                color: strategy.isFocal ? 'var(--osd-accent)' : muted,
                fontWeight: strategy.isFocal ? 700 : 400,
              }}
            >
              {strategy.speed}
            </div>

            {/* Scalability */}
            <div
              style={{
                width: 280,
                color: strategy.isFocal ? 'var(--osd-text)' : muted,
                fontWeight: strategy.isFocal ? 600 : 400,
              }}
            >
              {strategy.scalability}
            </div>

            {/* Brand Control */}
            <div
              style={{
                width: 280,
                color: strategy.isFocal ? 'var(--osd-text)' : muted,
                fontWeight: strategy.isFocal ? 600 : 400,
              }}
            >
              {strategy.brandControl}
            </div>
          </div>

          {/* Row divider */}
          <div
            style={{
              width: '100%',
              height: 1,
              backgroundColor: divider,
            }}
          />
        </div>
      ))}
    </div>

    {/* ── Tier 3: Source Citation (quietest tier) ── */}
    <div
      style={{
        marginTop: 48,
        fontSize: 28,
        lineHeight: 1.4,
        color: muted,
      }}
    >
      Source: Go-to-market strategy archetypes and channel efficiency benchmarks
    </div>
  </div>
);

export const meta: SlideMeta = {
  title: 'Four Go-to-Market Strategies Compared',
  createdAt: '2026-09-20T00:25:00.000Z',
};

export default [Detail] satisfies Page[];
