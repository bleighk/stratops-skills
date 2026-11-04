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
  typeScale: { hero: 120, body: 44 },
  radius: 0,
};

// Extra colors outside the DesignSystem shape
const muted = '#6c757d'; // supporting copy — quietest tier

// ── Page ──────────────────────────────────────────────────────────────────────
// KMS: single decisive insight, content vertically centered, center-aligned.
// Hierarchy: dominant hero announcement (120px) → supporting context prompt (44px muted)
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
      padding: '0 160px',        // respects no-fly zone (>= 96px)
      textAlign: 'center',
    }}
  >
    {/* ── Tier 1: Hero announcement — dominant focal point ── */}
    <h1
      style={{
        fontSize: 'var(--osd-size-hero)', // 120px
        fontWeight: 800,
        lineHeight: 1.15,
        color: 'var(--osd-text)',
        letterSpacing: '-0.025em',
        maxWidth: 1520,
        margin: 0,
      }}
    >
      We must move to a platform model
    </h1>

    {/* ── Tier 2: Supporting context — prompts not script ── */}
    <p
      style={{
        fontSize: 'var(--osd-size-body)', // 44px
        fontWeight: 400,
        lineHeight: 1.5,
        color: muted,
        marginTop: 48,
        maxWidth: 1200,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
      }}
    >
      Three structural forces make this the right moment
    </p>
  </div>
);

export const meta: SlideMeta = {
  title: 'Platform Model Transition',
  createdAt: '2026-09-20T00:15:00.000Z',
};

export default [KMS] satisfies Page[];
