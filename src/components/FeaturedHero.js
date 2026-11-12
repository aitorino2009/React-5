import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';

export default function FeaturedHero({ car, onSelect }) {
  if (!car) return null;

  return (
    <View style={styles.container}>
      <Pressable style={styles.card} onPress={() => onSelect(car)}>
        <Image
          source={{ uri: car.backdrop || car.image }}
          style={styles.backdropImage}
          resizeMode="cover"
        />
        <View style={styles.overlay} />

        <View style={styles.content}>
          <View style={styles.topRow}>
            <View style={styles.highlightPill}>
              <Ionicons name="flash" size={13} color="#EF4444" />
              <Text style={styles.highlightText}>ICONO DE CIRCUITO</Text>
            </View>
            <View style={styles.scorePill}>
              <Ionicons name="star" size={13} color="#F59E0B" />
              <Text style={styles.scoreText}>{car.rating} pts</Text>
            </View>
          </View>

          <Text style={styles.brandTitle}>{car.brand.toUpperCase()}</Text>
          <Text style={styles.title} numberOfLines={1}>{car.model}</Text>

          <Text style={styles.tagline} numberOfLines={2}>
            "{car.tagline}"
          </Text>

          <View style={styles.specsRow}>
            <View style={styles.specBox}>
              <Text style={styles.specLabel}>POTENCIA</Text>
              <Text style={styles.specValue}>{car.horsepower} CV</Text>
            </View>
            <View style={styles.specBox}>
              <Text style={styles.specLabel}>0-100 KM/H</Text>
              <Text style={styles.specValue}>{car.acceleration}</Text>
            </View>
            <View style={styles.specBox}>
              <Text style={styles.specLabel}>VEL. MÁX</Text>
              <Text style={styles.specValue}>{car.topSpeed}</Text>
            </View>
          </View>

          <View style={styles.bottomRow}>
            <Text style={styles.priceText}>{car.price}</Text>

            <View style={styles.actionBtn}>
              <Text style={styles.actionText}>Ficha técnica</Text>
              <Ionicons name="arrow-forward" size={14} color="#FFFFFF" />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.md,
  },
  card: {
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.borderHighlight,
    position: 'relative',
    minHeight: 240,
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.surface,
  },
  backdropImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(8, 12, 20, 0.82)',
  },
  content: {
    padding: theme.spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  highlightPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(239, 68, 68, 0.25)',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 3,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.45)',
  },
  highlightText: {
    color: '#FCA5A5',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  scorePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.full,
  },
  scoreText: {
    color: '#FBBF24',
    fontSize: 11,
    fontWeight: '700',
  },
  brandTitle: {
    color: theme.colors.primaryLight,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 4,
  },
  tagline: {
    color: '#CBD5E1',
    fontSize: 12,
    fontStyle: 'italic',
    lineHeight: 17,
    marginBottom: theme.spacing.sm,
  },
  specsRow: {
    flexDirection: 'row',
    gap: theme.spacing.xs + 2,
    marginBottom: theme.spacing.md,
  },
  specBox: {
    flex: 1,
    backgroundColor: 'rgba(17, 24, 39, 0.75)',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },
  specLabel: {
    fontSize: 9,
    color: theme.colors.textMuted,
    fontWeight: '700',
  },
  specValue: {
    fontSize: 12,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 1,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#F8FAFC',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: theme.colors.racingRed,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs + 3,
    borderRadius: theme.borderRadius.sm,
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
