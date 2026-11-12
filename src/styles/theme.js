export const theme = {
  colors: {
    // Backgrounds
    background: '#0B0F19', // Deep obsidian midnight
    surface: '#131B2E',    // Primary card / container
    surfaceElevated: '#1B2640', // Hover / elevated items
    surfaceSubtle: '#0F1626',   // Inputs / inner wells
    border: '#1F2C47',     // Card borders
    borderHighlight: '#334771', // Focused / hovered borders

    // Text hierarchy
    textPrimary: '#F8FAFC',   // High-contrast clean white
    textSecondary: '#94A3B8', // Soft slate
    textMuted: '#64748B',     // Dimmed labels
    textInverted: '#0B0F19',

    // Accents & Metacritic Rating colors
    scoreGreen: '#10B981',      // 90-100 Universal Acclaim
    scoreGreenBg: 'rgba(16, 185, 129, 0.15)',
    scoreGreenBorder: '#059669',

    scoreYellow: '#F59E0B',     // 75-89 Generally Favorable
    scoreYellowBg: 'rgba(245, 158, 11, 0.15)',
    scoreYellowBorder: '#D97706',

    scoreRed: '#EF4444',        // < 75 Mixed or Average
    scoreRedBg: 'rgba(239, 68, 68, 0.15)',
    scoreRedBorder: '#DC2626',

    primary: '#6366F1',         // Electric Indigo
    primaryLight: '#818CF8',
    primaryGlow: 'rgba(99, 102, 241, 0.25)',

    accentPink: '#EC4899',      // Favorite / Heart
    accentCyan: '#06B6D4',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 14,
    lg: 20,
    xl: 28,
  },
  borderRadius: {
    sm: 8,
    md: 14,
    lg: 20,
    full: 9999,
  },
};
