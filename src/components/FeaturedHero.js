import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScoreBadge from './ScoreBadge';
import { theme } from '../styles/theme';

export default function FeaturedHero({ game, onSelect }) {
  if (!game) return null;

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.card}
        onPress={() => onSelect(game)}
      >
        <Image
          source={{ uri: game.backdrop || game.image }}
          style={styles.backdropImage}
          resizeMode="cover"
        />
        <View style={styles.overlay} />

        <View style={styles.content}>
          <View style={styles.topRow}>
            <View style={styles.highlightPill}>
              <Ionicons name="flame" size={14} color="#F59E0B" />
              <Text style={styles.highlightText}>TOP CRÍTICA 2024</Text>
            </View>
            <ScoreBadge score={game.score} size="medium" />
          </View>

          <Text style={styles.title} numberOfLines={2}>
            {game.title}
          </Text>

          <Text style={styles.meta}>
            {game.developer} • {game.genre} • {game.releaseYear}
          </Text>

          <Text style={styles.quote} numberOfLines={2}>
            "{game.reviewQuote}"
          </Text>

          <View style={styles.bottomRow}>
            <View style={styles.platformsRow}>
              {game.platforms.map((p) => (
                <View key={p} style={styles.platformBadge}>
                  <Text style={styles.platformText}>{p}</Text>
                </View>
              ))}
            </View>

            <View style={styles.actionBtn}>
              <Text style={styles.actionText}>Ver análisis</Text>
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
    minHeight: 220,
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
    backgroundColor: 'rgba(11, 15, 25, 0.82)',
  },
  content: {
    padding: theme.spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs + 2,
  },
  highlightPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 3,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.4)',
  },
  highlightText: {
    color: '#FBBF24',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },
  meta: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    fontWeight: '500',
    marginBottom: theme.spacing.xs + 2,
  },
  quote: {
    color: '#CBD5E1',
    fontSize: 13,
    fontStyle: 'italic',
    lineHeight: 18,
    marginBottom: theme.spacing.md,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  platformsRow: {
    flexDirection: 'row',
    gap: 4,
    flexWrap: 'wrap',
  },
  platformBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  platformText: {
    color: '#E2E8F0',
    fontSize: 11,
    fontWeight: '600',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: theme.colors.primary,
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

