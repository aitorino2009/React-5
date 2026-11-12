import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { theme } from '../styles/theme';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.schoolText}>CC Sant Josep Obrer I — Curs 2026-2027</Text>
      <Text style={styles.courseText}>Desenvolupament d'Aplicacions Web / Multiplataforma (APOF)</Text>
      <Text style={styles.copyText}>Pràctica 5: Introducció a React Native seguint la guia docent</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.lg,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
    marginTop: theme.spacing.lg,
  },
  schoolText: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: 2,
  },
  courseText: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    marginBottom: 4,
    textAlign: 'center',
  },
  copyText: {
    fontSize: 11,
    color: theme.colors.textMuted,
    textAlign: 'center',
  },
});

