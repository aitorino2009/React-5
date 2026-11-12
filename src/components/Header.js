import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { theme } from '../styles/theme';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.topRow}>
        <Image
          source={require('../../assets/icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>APOF / 2º SMX - DAM</Text>
        </View>
      </View>

      <Text style={styles.mainTitle}>Introducción a React Native</Text>
      <Text style={styles.subtitle}>
        Guía práctica estructurada basada en el curso de Midudev
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Recurso Principal:</Text>
        <Text style={styles.infoValue}>Tutorial en vídeo de Midudev (YouTube)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: theme.borderRadius.sm,
  },
  badgeContainer: {
    backgroundColor: theme.colors.primaryLight,
    paddingHorizontal: theme.spacing.sm + 4,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  badgeText: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: theme.spacing.md,
  },
  infoBox: {
    backgroundColor: theme.colors.surfaceSubtle,
    padding: theme.spacing.sm + 2,
    borderRadius: theme.borderRadius.sm,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary,
  },
  infoLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: theme.colors.textMuted,
    textTransform: 'uppercase',
  },
  infoValue: {
    fontSize: 13,
    color: theme.colors.textPrimary,
    fontWeight: '500',
  },
});

