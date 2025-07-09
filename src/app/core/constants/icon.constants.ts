// Icon system using Unicode emojis (extracted from design)
export const ICONS = {
  // Navigation
  DASHBOARD: '📊',
  ACCOUNTS: '👥',
  BROKERS: '🏢',
  SUBMISSIONS: '📋',
  ORGANIZATIONS: '🏛️',
  GOALS: '🎯',
  ADMIN: '⚙️',

  // UI Elements
  SEARCH: '🔍',
  INFO: 'ℹ️',

  // Status & Actions
  CHECK: '✅',
  WARNING: '⚠️',
  ERROR: '❌',

  // Trends & Analytics
  ARROW_UP: '↗️',
  ARROW_DOWN: '↘️',
  CHART: '📈',

  // Documents & Files
  FOLDER: '📁',
  DOCUMENT: '📄',
  ATTACHMENT: '📎',

  // Technology & AI
  AI: '🧠',
  ROBOT: '🤖',

  // Business & Finance
  MONEY: '💰',
  BANK: '🏦',
  CALENDAR: '📅',

  // Communication
  EMAIL: '📧',
  PHONE: '📞',
  MESSAGE: '💬',
} as const;

export type IconType = (typeof ICONS)[keyof typeof ICONS];
