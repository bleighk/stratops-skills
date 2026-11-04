#!/usr/bin/env node
/**
 * generate-wireframe.js
 * Generates a valid .excalidraw JSON file from a structured slide description.
 * Applies consulting-slide-quality layout principles (KMS vs Detail taxonomy,
 * no-fly zones, hierarchy, alignment, whitespace).
 *
 * Usage (pipe JSON):
 *   echo '{"type":"kms","title":"Revenue grew 40%","insight":"40%","subtitle":"Enterprise-led"}' | node generate-wireframe.js
 *   echo '{"type":"detail","title":"Three platform forces","bullets":["Force 1","Force 2","Force 3"]}' | node generate-wireframe.js
 *
 * Input fields:
 *   type      "kms" | "detail"
 *   title     string
 *   insight   string  (hero number/word — KMS only, optional)
 *   subtitle  string  (supporting line — optional)
 *   bullets   string[] (Detail slide content)
 *
 * Output: excalidraw JSON to stdout. Redirect to .excalidraw file.
 */

'use strict';
const fs = require('fs');

// ── Canvas & layout constants (1920×1080, matching open-slide) ──────────────
const CW = 1920, CH = 1080;
const MARGIN = 120;        // no-fly zone / content padding
const GUTTER = 64;         // gap between content blocks
const BULLET_H = 72;       // height per bullet row (36px font × 1.8 line-height + gap)

// ── ID generation ────────────────────────────────────────────────────────────
let _id = 1;
function uid() { return 'el_' + (Date.now() + _id++).toString(36); }

// ── Element factories ────────────────────────────────────────────────────────
function base(type, x, y, width, height, extra = {}) {
  return {
    id: uid(), type,
    x: Math.round(x), y: Math.round(y),
    width: Math.round(width), height: Math.round(height),
    angle: 0,
    strokeColor: '#1e1e1e',
    backgroundColor: 'transparent',
    fillStyle: 'hachure',
    strokeWidth: 1,
    roughness: 1,
    opacity: 100,
    groupIds: [],
    roundness: null,
    isDeleted: false,
    boundElements: null,
    updated: Date.now(),
    link: null,
    locked: false,
    ...extra,
  };
}

function rect(x, y, w, h, opts = {}) {
  return base('rectangle', x, y, w, h, opts);
}

function textEl(x, y, content, fontSize, opts = {}) {
  const charW = fontSize * 0.55;
  const lines = Math.max(1, Math.ceil((content.length * charW) / ((opts.width || CW - MARGIN * 2))));
  const height = Math.ceil(fontSize * 1.4 * lines);
  return base('text', x, y, opts.width || CW - MARGIN * 2, height, {
    text: content,
    originalText: content,
    fontSize,
    fontFamily: 2,            // Normal / sans-serif
    textAlign: opts.textAlign || 'left',
    verticalAlign: 'top',
    baseline: Math.floor(fontSize * 0.85),
    containerId: null,
    strokeColor: opts.strokeColor || '#1e1e1e',
    backgroundColor: 'transparent',
    fillStyle: 'solid',
    roughness: 0,
    ...opts,
    width: opts.width || CW - MARGIN * 2,
    height,
  });
}

function lineEl(x1, y1, x2, y2, opts = {}) {
  return base('line', x1, y1, x2 - x1, Math.abs(y2 - y1) || 1, {
    points: [[0, 0], [x2 - x1, y2 - y1]],
    lastCommittedPoint: null,
    startBinding: null, endBinding: null,
    startArrowhead: null, endArrowhead: null,
    ...opts,
  });
}

// ── Shared slide chrome ──────────────────────────────────────────────────────
function slideBackground() {
  return rect(0, 0, CW, CH, {
    strokeColor: '#868e96', backgroundColor: '#ffffff',
    fillStyle: 'solid', roughness: 0, strokeWidth: 2,
  });
}

function noFlyZone() {
  return rect(MARGIN, MARGIN, CW - MARGIN * 2, CH - MARGIN * 2, {
    strokeColor: '#dee2e6', fillStyle: 'hachure',
    roughness: 0, strokeWidth: 1,
    strokeStyle: 'dashed',
  });
}

function typeLabel(label) {
  return textEl(MARGIN, -40, label, 22, {
    strokeColor: '#868e96', textAlign: 'left',
    width: 500, roughness: 0,
  });
}

function sourceAnnotation() {
  return textEl(MARGIN, CH - MARGIN + 16, 'Source: [add citation]', 24, {
    strokeColor: '#adb5bd', textAlign: 'left',
    width: 800, roughness: 0,
  });
}

// ── Key Message Slide ────────────────────────────────────────────────────────
function generateKMS({ title = '', insight = '', subtitle = '' }) {
  const els = [slideBackground(), noFlyZone(), typeLabel('KEY MESSAGE SLIDE')];
  const contentW = CW - MARGIN * 2;
  const ACCENT = '#2d6a4f';    // neutral consulting green — agent should adapt per theme

  if (insight) {
    // Insight is the hero — largest element, vertically centred
    const insightSize = 200;
    const insightH = insightSize * 1.3;
    const titleSize = 56;
    const subtitleSize = 36;
    const totalH = insightH
      + (title ? GUTTER + titleSize * 1.4 : 0)
      + (subtitle ? GUTTER / 2 + subtitleSize * 1.4 : 0);
    let curY = (CH - totalH) / 2;

    els.push(textEl(MARGIN, curY, insight, insightSize, {
      strokeColor: ACCENT, textAlign: 'center', width: contentW,
      roughness: 0, fontWeight: 'bold',
    }));
    curY += insightH;

    if (title) {
      curY += GUTTER;
      els.push(textEl(MARGIN, curY, title, titleSize, {
        strokeColor: '#1e1e1e', textAlign: 'center', width: contentW, roughness: 0,
      }));
      curY += titleSize * 1.4;
    }

    if (subtitle) {
      curY += GUTTER / 2;
      els.push(textEl(MARGIN, curY, subtitle, subtitleSize, {
        strokeColor: '#495057', textAlign: 'center', width: contentW, roughness: 0,
      }));
    }
  } else {
    // Title is the hero
    const titleSize = 120;
    const subtitleSize = 44;
    const totalH = titleSize * 1.3 + (subtitle ? GUTTER + subtitleSize * 1.4 : 0);
    let curY = (CH - totalH) / 2;

    els.push(textEl(MARGIN, curY, title, titleSize, {
      strokeColor: '#1e1e1e', textAlign: 'center', width: contentW, roughness: 0,
    }));
    curY += titleSize * 1.3;

    if (subtitle) {
      curY += GUTTER;
      els.push(textEl(MARGIN, curY, subtitle, subtitleSize, {
        strokeColor: '#495057', textAlign: 'center', width: contentW, roughness: 0,
      }));
    }
  }

  // Annotation: focal point indicator
  els.push(textEl(CW - MARGIN - 360, CH - MARGIN - 44, '← single focal point', 22, {
    strokeColor: '#adb5bd', textAlign: 'right', width: 360, roughness: 0,
  }));

  return els;
}

// ── Detail Slide ─────────────────────────────────────────────────────────────
function generateDetail({ title = '', bullets = [], note = '' }) {
  const els = [slideBackground(), noFlyZone(), typeLabel('DETAIL SLIDE'), sourceAnnotation()];
  const contentW = CW - MARGIN * 2;

  // Title — top-left, smaller
  const titleSize = 64;
  els.push(textEl(MARGIN, MARGIN, title, titleSize, {
    strokeColor: '#1e1e1e', textAlign: 'left', width: contentW, roughness: 0,
  }));

  // Divider under title
  const dividerY = MARGIN + titleSize * 1.5;
  els.push(lineEl(MARGIN, dividerY, CW - MARGIN, dividerY, {
    strokeColor: '#adb5bd', strokeWidth: 2, roughness: 0,
  }));

  const contentY = dividerY + GUTTER;

  if (bullets.length > 0) {
    const bulletSize = 36;
    bullets.slice(0, 5).forEach((b, i) => {
      els.push(textEl(MARGIN + 32, contentY + i * BULLET_H, '• ' + b, bulletSize, {
        strokeColor: '#1e1e1e', textAlign: 'left',
        width: contentW - 32, roughness: 0,
      }));
    });
  } else {
    // Content placeholder
    const placeholderH = CH - MARGIN - contentY - GUTTER;
    els.push(rect(MARGIN, contentY, contentW, placeholderH, {
      strokeColor: '#adb5bd', fillStyle: 'hachure', roughness: 1,
    }));
    els.push(textEl(CW / 2 - 160, contentY + placeholderH / 2 - 20, '[content area]', 36, {
      strokeColor: '#adb5bd', textAlign: 'center', width: 320, roughness: 0,
    }));
  }

  if (note) {
    els.push(textEl(MARGIN, CH - MARGIN + 48, 'Note: ' + note, 22, {
      strokeColor: '#adb5bd', textAlign: 'left', width: contentW, roughness: 0,
    }));
  }

  return els;
}

// ── Excalidraw envelope ──────────────────────────────────────────────────────
function wrap(elements) {
  return {
    type: 'excalidraw', version: 2,
    source: 'consulting-slide-quality/scripts/generate-wireframe.js',
    elements,
    appState: { viewBackgroundColor: '#f8f9fa', gridSize: null },
    files: {},
  };
}

// ── Main ─────────────────────────────────────────────────────────────────────
if (process.argv.includes('--help')) {
  process.stdout.write(`
Usage:
  echo '{"type":"kms","title":"Big Insight","insight":"40%","subtitle":"Context"}' | node generate-wireframe.js
  echo '{"type":"detail","title":"Evidence","bullets":["Point 1","Point 2"]}' | node generate-wireframe.js

Fields:
  type      "kms" | "detail"
  title     string
  insight   string  (hero stat/word — KMS only)
  subtitle  string  (optional supporting line)
  bullets   string[] (Detail slide — max 5)
  note      string  (footnote — Detail slide)
`);
  process.exit(0);
}

let raw = '';
try {
  raw = fs.readFileSync('/dev/stdin', 'utf8').trim();
} catch {
  process.stderr.write('Error: pipe JSON input. Use --help for usage.\n');
  process.exit(1);
}

let input;
try {
  input = JSON.parse(raw);
} catch (e) {
  process.stderr.write('Error: invalid JSON: ' + e.message + '\n');
  process.exit(1);
}

const t = (input.type || '').toLowerCase();
let elements;
if (t === 'kms' || t === 'key-message' || t === 'key_message') {
  elements = generateKMS(input);
} else if (t === 'detail') {
  elements = generateDetail(input);
} else {
  process.stderr.write('Error: "type" must be "kms" or "detail". Got: ' + t + '\n');
  process.exit(1);
}

process.stdout.write(JSON.stringify(wrap(elements), null, 2) + '\n');
