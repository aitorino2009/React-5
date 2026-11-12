import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';

export default function CarCard({ car, onSelect, isFavorite, onToggleFavorite }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={() => onSelect(car)}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: car.image }}
          style={styles.carImage}
          resizeMode="cover"
        />
        <View style={styles.categoryPill}>
          <Text style={styles.categoryText}>{car.category}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <View style={styles.titleCol}>
            <Text style={styles.brand}>{car.brand.toUpperCase()}</Text>
            <Text style={styles.model} numberOfLines={1}>{car.model}</Text>
          </View>
          <Pressable
            hitSlop={8}
            onPress={(e) => {
              e.stopPropagation?.();
              onToggleFavorite(car.id);
            }}
            style={styles.heartBtn}
          >
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={22}
              color={isFavorite ? theme.colors.racingRed : theme.colors.textMuted}
            />
          </Pressable>
        </View>

        <Text style={styles.engineText} numberOfLines={1}>
          {car.engine}
        </Text>

        <View style={styles.specsRow}>
          <View style={styles.specItem}>
            <Ionicons name="speedometer-outline" size={13} color={theme.colors.sportBlue} />
            <Text style={styles.specValue}>{car.horsepower} CV</Text>
          </View>

          <View style={styles.specDivider} />

          <View style={styles.specItem}>
            <Ionicons name="stopwatch-outline" size={13} color={theme.colors.amberGold} />
            <Text style={styles.specValue}>{car.acceleration}</Text>
          </View>

          <View style={styles.specDivider} />

          <View style={styles.specItem}>
            <Ionicons name="navigate-outline" size={13} color={theme.colors.turboGreen} />
            <Text style={styles.specValue}>{car.topSpeed}</Text>
          </View>
        </View>

        <View style={styles.footerRow}>
          <Text style={styles.price}>{car.price}</Text>
          <View style={styles.detailLink}>
            <Text style={styles.detailText}>Ver detalles</Text>
            <Ionicons name="chevron-forward" size={12} color={theme.colors.primaryLight} />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.md,
    overflow: 'hidden',
  },
  cardPressed: {
    backgroundColor: theme.colors.surfaceElevated,
    borderColor: theme.colors.borderHighlight,
    transform: [{ scale: 0.995 }],
  },
  imageContainer: {
    width: '100%',
    height: 160,
    backgroundColor: theme.colors.surfaceSubtle,
    position: 'relative',
  },
  carImage: {
    width: '100%',
    height: '100%',
  },
  categoryPill: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(8, 12, 20, 0.85)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  categoryText: {
    color: '#E2E8F0',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  content: {
    padding: theme.spacing.md,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  titleCol: {
    flex: 1,
    marginRight: 8,
  },
  brand: {
    color: theme.colors.primaryLight,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  model: {
    color: theme.colors.textPrimary,
    fontSize: 17,
    fontWeight: '800',
    marginTop: 1,
  },
  heartBtn: {
    padding: 2,
  },
  engineText: {
    color: theme.colors.textMuted,
    fontSize: 12,
    marginBottom: 10,
  },
  specsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surfaceSubtle,
    borderRadius: theme.borderRadius.sm,
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  specItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  specValue: {
    color: theme.colors.textPrimary,
    fontSize: 11,
    fontWeight: '700',
  },
  specDivider: {
    width: 1,
    height: 14,
    backgroundColor: theme.colors.border,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  detailLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  detailText: {
    color: theme.colors.primaryLight,
    fontSize: 12,
    fontWeight: '700',
  },
});

