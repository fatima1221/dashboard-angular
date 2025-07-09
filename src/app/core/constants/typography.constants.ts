// Typography system extracted from design analysis

export const FONT_SIZES = {
  // Small text - labels, metadata
  XS: '11px',
  SM: '12px',

  // Base text - navigation, body, inputs
  BASE: '14px',

  // Medium text - icons, highlights
  MD: '16px',

  // Large text - section headings
  LG: '18px',
  XL: '20px',

  // Headlines and titles
  XXL: '24px',
  XXXL: '36px',
} as const;

export const FONT_WEIGHTS = {
  NORMAL: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
} as const;

export const LINE_HEIGHTS = {
  TIGHT: 1.2,
  NORMAL: 1.5,
  RELAXED: 1.75,
} as const;

// Font family extracted from design
export const FONT_FAMILY = {
  PRIMARY: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'system-ui', sans-serif`,
} as const;

// Typography utility classes
export const TYPOGRAPHY_CLASSES = {
  // Headlines
  H1: 'text-2xl font-semibold text-white leading-tight',
  H2: 'text-lg font-semibold text-white leading-tight',
  H3: 'text-base font-semibold text-white leading-tight',

  // Body text
  BODY: 'text-sm font-normal text-white leading-normal',
  BODY_SECONDARY: 'text-sm font-normal text-gray-400 leading-normal',

  // Labels and metadata
  LABEL: 'text-xs font-semibold text-gray-400 uppercase tracking-wide',
  METADATA: 'text-xs font-normal text-gray-500',

  // Interactive elements
  BUTTON: 'text-sm font-medium',
  LINK: 'text-sm font-medium text-blue-400 hover:text-blue-300',
} as const;
