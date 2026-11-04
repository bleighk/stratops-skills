import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

// ── Design tokens ─────────────────────────────────────────────────────────────
export const design: DesignSystem = {
  palette: {
    bg: '#ffffff',
    text: '#1a1a1a',
    accent: '#29ba74', // consulting bright green — single accent for focal point
  },
  fonts: {
    display: 'system-ui, -apple-system, sans-serif',
    body:    'system-ui, -apple-system, sans-serif',
  },
  typeScale: { hero: 64, body: 36 },
  radius: 0,
};

// Extra colors outside the DesignSystem shape
const muted   = '#6c757d'; // secondary text / markers
const divider = '#dee2e6'; // horizontal rule

// ── Page ──────────────────────────────────────────────────────────────────────
// Detail: evidence & supporting context, top-aligned, left-aligned.
// Hierarchy: slide title (64px) → divider rule → structured forces (36px)
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
      Three forces driving the platform shift
    </h1>

    {/* ── Horizontal divider line under title ── */}
    <div
      style={{
        width: '100%',
        height: 2,
        backgroundColor: divider,
        marginTop: 32,
        marginBottom: 64,
      }}
    />

    {/* ── Tier 2: Supporting evidence — structural forces ── */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        width: '100%',
      }}
    >
      {/* Force 1 — quantitative catalyst with accent emphasis */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          fontSize: 'var(--osd-size-body)', // 36px
          lineHeight: 1.5,
          color: 'var(--osd-text)',
        }}
      >
        <span
          style={{
            color: 'var(--osd-accent)',
            fontWeight: 700,
            marginRight: 24,
            userSelect: 'none',
          }}
        >
          •
        </span>
        <span>
          Cost of integration has dropped{' '}
          <span style={{ color: 'var(--osd-accent)', fontWeight: 700 }}>
            10×
          </span>
        </span>
      </div>

      {/* Force 2 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          fontSize: 'var(--osd-size-body)', // 36px
          lineHeight: 1.5,
          color: 'var(--osd-text)',
        }}
      >
        <span
          style={{
            color: muted,
            fontWeight: 700,
            marginRight: 24,
            userSelect: 'none',
          }}
        >
          •
        </span>
        <span>Developer ecosystems compound faster than product teams</span>
      </div>

      {/* Force 3 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          fontSize: 'var(--osd-size-body)', // 36px
          lineHeight: 1.5,
          color: 'var(--osd-text)',
        }}
      >
        <span
          style={{
            color: muted,
            fontWeight: 700,
            marginRight: 24,
            userSelect: 'none',
          }}
        >
          •
        </span>
        <span>Enterprise buyers now expect API-first</span>
      </div>
    </div>
  </div>
);

export const meta: SlideMeta = {
  title: 'Three Forces Driving the Platform Shift',
  createdAt: '2026-09-20T00:20:00.000Z',
};

export default [Detail] satisfies Page[];
