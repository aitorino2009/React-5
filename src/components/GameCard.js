import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScoreBadge from './ScoreBadge';
import { theme } from '../styles/theme';

export default function GameCard({ game, onSelect, isFavorite, onToggleFavorite }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={() => onSelect(game)}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: game.image }}
          style={styles.coverImage}
          resizeMode="cover"
        />
        <View style={styles.scoreOverlay}>
          <ScoreBadge score={game.score} size="medium" />
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.headerRow}>
          <View style={styles.genrePill}>
            <Text style={styles.genreText}>{game.genre}</Text>
          </View>
          <Pressable
            hitSlop={8}
            onPress={(e) => {
              e.stopPropagation?.();
              onToggleFavorite(game.id);
            }}
            style={styles.favButton}
          >
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={20}
              color={isFavorite ? theme.colors.accentPink : theme.colors.textMuted}
            />
          </Pressable>
        </View>

        <Text style={styles.title} numberOfLines={1}>
          {game.title}
        </Text>

        <Text style={styles.developer} numberOfLines={1}>
          {game.developer} • {game.releaseYear}
        </Text>

        <Text style={styles.description} numberOfLines={2}>
          {game.description}
        </Text>

        <View style={styles.footerRow}>
          <View style={styles.platformsRow}>
            {game.platforms.slice(0, 2).map((platform) => (
              <View key={platform} style={styles.platformChip}>
                <Text style={styles.platformChipText}>{platform}</Text>
              </View>
            ))}
            {game.platforms.length > 2 && (
              <View style={styles.platformChip}>
                <Text style={styles.platformChipText}>+{game.platforms.length - 2}</Text>
              </View>
            )}
          </View>

          <View style={styles.userScoreContainer}>
            <Ionicons name="star" size={13} color="#FBBF24" />
            <Text style={styles.userScoreText}>{game.userScore}</Text>
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
    padding: theme.spacing.sm + 4,
    marginBottom: theme.spacing.sm + 4,
    flexDirection: 'row',
    gap: theme.spacing.md,
    alignItems: 'center',
  },
  cardPressed: {
    backgroundColor: theme.colors.surfaceElevated,
    borderColor: theme.colors.borderHighlight,
    transform: [{ scale: 0.99 }],
  },
  imageContainer: {
    width: 90,
    height: 120,
    borderRadius: theme.borderRadius.sm,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: theme.colors.surfaceSubtle,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  scoreOverlay: {
    position: 'absolute',
    bottom: 6,
    right: 6,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  genrePill: {
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.3)',
  },
  genreText: {
    color: theme.colors.primaryLight,
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  favButton: {
    padding: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: 2,
  },
  developer: {
    fontSize: 12,
    color: theme.colors.textMuted,
    marginBottom: 6,
  },
  description: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    lineHeight: 16,
    marginBottom: 8,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  platformsRow: {
    flexDirection: 'row',
    gap: 4,
  },
  platformChip: {
    backgroundColor: theme.colors.surfaceElevated,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  platformChipText: {
    color: theme.colors.textSecondary,
    fontSize: 10,
    fontWeight: '600',
  },
  userScoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(251, 191, 36, 0.12)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  userScoreText: {
    color: '#FBBF24',
    fontSize: 11,
    fontWeight: '700',
  },
});

