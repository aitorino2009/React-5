import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.brandRow}>
        <View style={styles.logoBadge}>
          <Ionicons name="car-sport" size={22} color="#FFFFFF" />
        </View>
        <View style={styles.brandTextCol}>
          <View style={styles.titleRow}>
            <Text style={styles.brandName}>AutoVault</Text>
            <View style={styles.liveTag}>
              <Text style={styles.liveTagText}>2024 ED.</Text>
            </View>
          </View>
          <Text style={styles.brandSub}>Catálogo de Altas Prestaciones & Superdeportivos</Text>
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
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: theme.colors.racingRed,
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
    fontSize: 21,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  liveTag: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.4)',
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
