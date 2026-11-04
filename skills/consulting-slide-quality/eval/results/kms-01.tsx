import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

// ── Design tokens ─────────────────────────────────────────────────────────────
export const design: DesignSystem = {
  palette: {
    bg: '#ffffff',
    text: '#1a1a1a',
    accent: '#29ba74', // consulting green — single accent, one focal point
  },
  fonts: {
    display: 'system-ui, -apple-system, sans-serif',
    body:    'system-ui, -apple-system, sans-serif',
  },
  typeScale: { hero: 200, body: 40 },
  radius: 0,
};

// Extra colors outside the DesignSystem shape
const muted    = '#6c757d'; // subtitle — third-tier, quietest
const titlePx  = 72;        // explains the stat — second-tier

// ── Page ──────────────────────────────────────────────────────────────────────
// KMS: single point, content vertically centered, all elements center-aligned.
// Hierarchy: hero stat (200px accent) → title label (72px) → context (40px muted)
const KMS: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      fontFamily: 'var(--osd-font-display)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',  // vertical center — KMS rule
      alignItems: 'center',      // horizontal center — KMS rule
      padding: '0 160px',
      textAlign: 'center',
    }}
  >
    {/* ── Tier 1: Hero stat — dominant focal point ── */}
    <div
      style={{
        fontSize: 'var(--osd-size-hero)', // 200px
        fontWeight: 900,
        lineHeight: 1.0,
        color: 'var(--osd-accent)',       // single accent — draws eye first
        letterSpacing: '-0.02em',
      }}
    >
      40%
    </div>

    {/* ── Tier 2: Title — explains the stat ── */}
    <div
      style={{
        fontSize: titlePx,
        fontWeight: 700,
        lineHeight: 1.2,
        color: 'var(--osd-text)',
        marginTop: 40,
      }}
    >
      Revenue grew year-over-year
    </div>

    {/* ── Tier 3: Supporting context — quietest ── */}
    <div
      style={{
        fontSize: 'var(--osd-size-body)', // 40px
        fontWeight: 400,
        lineHeight: 1.5,
        color: muted,
        marginTop: 24,
        maxWidth: 1200,
      }}
    >
      Driven by enterprise segment expansion
    </div>
  </div>
);

export const meta: SlideMeta = {
  title: 'Revenue grew 40% YoY',
  createdAt: '2026-09-20T00:13:53.422Z',
};

export default [KMS] satisfies Page[];
