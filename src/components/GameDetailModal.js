import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  ScrollView,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScoreBadge from './ScoreBadge';
import { theme } from '../styles/theme';

export default function GameDetailModal({
  game,
  visible,
  onClose,
  isFavorite,
  onToggleFavorite,
}) {
  if (!game) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.sheetContainer}>
          {/* Header image con gradiente simulado */}
          <View style={styles.imageHeader}>
            <Image
              source={{ uri: game.backdrop || game.image }}
              style={styles.headerImage}
              resizeMode="cover"
            />
            <View style={styles.imageOverlay} />

            <Pressable style={styles.closeButton} onPress={onClose} hitSlop={10}>
              <Ionicons name="close" size={20} color="#FFFFFF" />
            </Pressable>

            <View style={styles.floatingScore}>
              <ScoreBadge score={game.score} size="large" />
            </View>
          </View>

          <ScrollView style={styles.scrollBody} showsVerticalScrollIndicator={false}>
            {/* Título y metadatos */}
            <View style={styles.titleSection}>
              <View style={styles.genreTag}>
                <Text style={styles.genreTagText}>{game.genre}</Text>
              </View>
              <Text style={styles.title}>{game.title}</Text>
              <Text style={styles.metaSubtitle}>
                Desarrollado por <Text style={styles.boldWhite}>{game.developer}</Text> • {game.releaseYear}
              </Text>
            </View>

            {/* Puntuación dual */}
            <View style={styles.ratingsCard}>
              <View style={styles.ratingCol}>
                <Text style={styles.ratingLabel}>METASCORE</Text>
                <Text style={styles.ratingVerdict}>{game.verdict}</Text>
                <Text style={styles.ratingSub}>Basado en 114 críticas</Text>
              </View>

              <View style={styles.ratingDivider} />

              <View style={styles.ratingCol}>
                <Text style={styles.ratingLabel}>PUNTUACIÓN USUARIOS</Text>
                <View style={styles.userRatingRow}>
                  <Ionicons name="star" size={18} color="#FBBF24" />
                  <Text style={styles.userRatingValue}>{game.userScore} / 10</Text>
                </View>
                <Text style={styles.ratingSub}>Más de 4.200 votos</Text>
              </View>
            </View>

            {/* Ficha técnica rápida */}
            <View style={styles.specsRow}>
              <View style={styles.specBox}>
                <Ionicons name="time-outline" size={16} color={theme.colors.primaryLight} />
                <Text style={styles.specLabel}>Duración</Text>
                <Text style={styles.specValue}>{game.playtime}</Text>
              </View>
              <View style={styles.specBox}>
                <Ionicons name="game-controller-outline" size={16} color={theme.colors.accentCyan} />
                <Text style={styles.specLabel}>Distribuidor</Text>
                <Text style={styles.specValue} numberOfLines={1}>{game.publisher}</Text>
              </View>
            </View>

            {/* Plataformas */}
            <View style={styles.sectionBlock}>
              <Text style={styles.sectionHeader}>Plataformas disponibles</Text>
              <View style={styles.platformsContainer}>
                {game.platforms.map((p) => (
                  <View key={p} style={styles.platformPill}>
                    <Ionicons name="hardware-chip-outline" size={14} color="#CBD5E1" />
                    <Text style={styles.platformPillText}>{p}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Sinopsis */}
            <View style={styles.sectionBlock}>
              <Text style={styles.sectionHeader}>Sinopsis y características</Text>
              <Text style={styles.descriptionText}>{game.description}</Text>
            </View>

            {/* Cita de análisis */}
            <View style={styles.quoteCard}>
              <Ionicons name="chatbubbles-outline" size={20} color={theme.colors.primaryLight} style={styles.quoteIcon} />
              <Text style={styles.quoteText}>"{game.reviewQuote}"</Text>
              <Text style={styles.quoteAuthor}>{game.reviewer}</Text>
            </View>

            {/* Acciones principales */}
            <View style={styles.actionButtons}>
              <Pressable
                style={[
                  styles.favoriteBtn,
                  isFavorite && styles.favoriteBtnActive,
                ]}
                onPress={() => onToggleFavorite(game.id)}
              >
                <Ionicons
                  name={isFavorite ? 'heart' : 'heart-outline'}
                  size={18}
                  color={isFavorite ? '#FFFFFF' : theme.colors.accentPink}
                />
                <Text
                  style={[
                    styles.favoriteBtnText,
                    isFavorite && styles.favoriteBtnTextActive,
                  ]}
                >
                  {isFavorite ? 'Guardado en Mi Lista' : 'Añadir a Deseados'}
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(5, 8, 15, 0.85)',
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: theme.borderRadius.lg,
    borderTopRightRadius: theme.borderRadius.lg,
    maxHeight: '92%',
    borderWidth: 1,
    borderColor: theme.colors.borderHighlight,
    overflow: 'hidden',
  },
  imageHeader: {
    height: 220,
    width: '100%',
    position: 'relative',
    backgroundColor: theme.colors.surfaceSubtle,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(11, 15, 25, 0.45)',
  },
  closeButton: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(11, 15, 25, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  floatingScore: {
    position: 'absolute',
    bottom: -20,
    left: 20,
  },
  scrollBody: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  titleSection: {
    marginBottom: theme.spacing.md,
  },
  genreTag: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    marginBottom: 6,
  },
  genreTagText: {
    color: theme.colors.primaryLight,
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: theme.colors.textPrimary,
    marginBottom: 4,
  },
  metaSubtitle: {
    fontSize: 13,
    color: theme.colors.textSecondary,
  },
  boldWhite: {
    color: theme.colors.textPrimary,
    fontWeight: '700',
  },
  ratingsCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  ratingCol: {
    flex: 1,
    alignItems: 'center',
  },
  ratingLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: theme.colors.textMuted,
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  ratingVerdict: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.scoreGreen,
    marginBottom: 2,
    textAlign: 'center',
  },
  ratingSub: {
    fontSize: 11,
    color: theme.colors.textMuted,
  },
  ratingDivider: {
    width: 1,
    height: 40,
    backgroundColor: theme.colors.border,
    marginHorizontal: theme.spacing.sm,
  },
  userRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 2,
  },
  userRatingValue: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FBBF24',
  },
  specsRow: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  specBox: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.sm + 4,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    gap: 2,
  },
  specLabel: {
    fontSize: 11,
    color: theme.colors.textMuted,
  },
  specValue: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  sectionBlock: {
    marginBottom: theme.spacing.md,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs + 2,
  },
  platformsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  platformPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: theme.colors.surfaceElevated,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  platformPillText: {
    color: '#E2E8F0',
    fontSize: 12,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 22,
  },
  quoteCard: {
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.25)',
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  quoteIcon: {
    marginBottom: 4,
  },
  quoteText: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#E0E7FF',
    lineHeight: 20,
    marginBottom: 6,
  },
  quoteAuthor: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.primaryLight,
  },
  actionButtons: {
    marginBottom: theme.spacing.xl,
  },
  favoriteBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(236, 72, 153, 0.15)',
    paddingVertical: 14,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: 'rgba(236, 72, 153, 0.4)',
  },
  favoriteBtnActive: {
    backgroundColor: theme.colors.accentPink,
    borderColor: theme.colors.accentPink,
  },
  favoriteBtnText: {
    color: theme.colors.accentPink,
    fontSize: 14,
    fontWeight: '700',
  },
  favoriteBtnTextActive: {
    color: '#FFFFFF',
  },
});

