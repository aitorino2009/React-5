import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.brandRow}>
        <View style={styles.logoBadge}>
          <Ionicons name="game-controller" size={20} color="#FFFFFF" />
        </View>
        <View style={styles.brandTextCol}>
          <View style={styles.titleRow}>
            <Text style={styles.brandName}>GameScore</Text>
            <View style={styles.liveTag}>
              <Text style={styles.liveTagText}>2024</Text>
            </View>
          </View>
          <Text style={styles.brandSub}>Catálogo de Crítica y Metacritic</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.xs,
    backgroundColor: theme.colors.background,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm + 2,
  },
  logoBadge: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandTextCol: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandName: {
    color: theme.colors.textPrimary,
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  liveTag: {
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.35)',
  },
  liveTagText: {
    color: theme.colors.primaryLight,
    fontSize: 10,
    fontWeight: '800',
  },
  brandSub: {
    color: theme.colors.textMuted,
    fontSize: 12,
    fontWeight: '500',
  },
});
