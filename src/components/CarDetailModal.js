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
import { theme } from '../styles/theme';

export default function CarDetailModal({
  car,
  visible,
  onClose,
  isFavorite,
  onToggleFavorite,
}) {
  if (!car) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.sheetContainer}>
          {/* Cabecera con imagen grande */}
          <View style={styles.imageHeader}>
            <Image
              source={{ uri: car.backdrop || car.image }}
              style={styles.headerImage}
              resizeMode="cover"
            />
            <View style={styles.imageOverlay} />

            <Pressable style={styles.closeButton} onPress={onClose} hitSlop={10}>
              <Ionicons name="close" size={20} color="#FFFFFF" />
            </Pressable>

            <View style={styles.floatingPrice}>
              <Text style={styles.floatingPriceText}>{car.price}</Text>
            </View>
          </View>

          <ScrollView style={styles.scrollBody} showsVerticalScrollIndicator={false}>
            {/* Título y Marca */}
            <View style={styles.titleSection}>
              <View style={styles.categoryTag}>
                <Text style={styles.categoryTagText}>{car.category}</Text>
              </View>
              <Text style={styles.brand}>{car.brand.toUpperCase()}</Text>
              <Text style={styles.model}>{car.model}</Text>
              <Text style={styles.tagline}>"{car.tagline}"</Text>
            </View>

            {/* Grid de Prestaciones Principales */}
            <View style={styles.performanceGrid}>
              <View style={styles.perfItem}>
                <Ionicons name="speedometer" size={18} color={theme.colors.racingRed} />
                <Text style={styles.perfLabel}>POTENCIA</Text>
                <Text style={styles.perfValue}>{car.horsepower} CV</Text>
              </View>

              <View style={styles.perfItem}>
                <Ionicons name="stopwatch" size={18} color={theme.colors.amberGold} />
                <Text style={styles.perfLabel}>0 - 100 KM/H</Text>
                <Text style={styles.perfValue}>{car.acceleration}</Text>
              </View>

              <View style={styles.perfItem}>
                <Ionicons name="navigate" size={18} color={theme.colors.turboGreen} />
                <Text style={styles.perfLabel}>VEL. MÁXIMA</Text>
                <Text style={styles.perfValue}>{car.topSpeed}</Text>
              </View>

              <View style={styles.perfItem}>
                <Ionicons name="trophy" size={18} color={theme.colors.sportBlue} />
                <Text style={styles.perfLabel}>VALORACIÓN</Text>
                <Text style={styles.perfValue}>{car.rating} / 100</Text>
              </View>
            </View>

            {/* Ficha de Ingeniería */}
            <View style={styles.specSheet}>
              <Text style={styles.specSheetTitle}>Ficha Técnica de Ingeniería</Text>

              <View style={styles.specRow}>
                <Text style={styles.specRowLabel}>Motor:</Text>
                <Text style={styles.specRowValue}>{car.engine}</Text>
              </View>

              <View style={styles.specRow}>
                <Text style={styles.specRowLabel}>Transmisión:</Text>
                <Text style={styles.specRowValue}>{car.transmission}</Text>
              </View>

              <View style={styles.specRow}>
                <Text style={styles.specRowLabel}>Año Modelo:</Text>
                <Text style={styles.specRowValue}>{car.year}</Text>
              </View>

              <View style={[styles.specRow, { borderBottomWidth: 0 }]}>
                <Text style={styles.specRowLabel}>Categoría:</Text>
                <Text style={styles.specRowValue}>{car.category}</Text>
              </View>
            </View>

            {/* Descripción y Filosofía */}
            <View style={styles.sectionBlock}>
              <Text style={styles.sectionHeader}>Análisis del Vehículo</Text>
              <Text style={styles.descriptionText}>{car.description}</Text>
            </View>

            {/* Opinión de la Crítica */}
            <View style={styles.quoteCard}>
              <Ionicons name="newspaper-outline" size={20} color={theme.colors.primaryLight} style={styles.quoteIcon} />
              <Text style={styles.quoteText}>"{car.reviewQuote}"</Text>
              <Text style={styles.quoteAuthor}>{car.reviewer}</Text>
            </View>

            {/* Botón Guardar en Garaje */}
            <View style={styles.actionButtons}>
              <Pressable
                style={[
                  styles.garageBtn,
                  isFavorite && styles.garageBtnActive,
                ]}
                onPress={() => onToggleFavorite(car.id)}
              >
                <Ionicons
                  name={isFavorite ? 'bookmark' : 'bookmark-outline'}
                  size={18}
                  color="#FFFFFF"
                />
                <Text style={styles.garageBtnText}>
                  {isFavorite ? 'Guardado en Mi Garaje' : 'Añadir a Mi Garaje'}
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
    backgroundColor: 'rgba(8, 12, 20, 0.45)',
  },
  closeButton: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(8, 12, 20, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  floatingPrice: {
    position: 'absolute',
    bottom: 12,
    left: 16,
    backgroundColor: 'rgba(8, 12, 20, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.borderHighlight,
  },
  floatingPriceText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  scrollBody: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
  },
  titleSection: {
    marginBottom: theme.spacing.md,
  },
  categoryTag: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.35)',
    marginBottom: 6,
  },
  categoryTagText: {
    color: theme.colors.primaryLight,
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  brand: {
    color: theme.colors.primaryLight,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
  },
  model: {
    fontSize: 22,
    fontWeight: '900',
    color: theme.colors.textPrimary,
    marginBottom: 4,
  },
  tagline: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#CBD5E1',
    lineHeight: 18,
  },
  performanceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: theme.spacing.md,
  },
  perfItem: {
    flex: 1,
    minWidth: '46%',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.sm + 4,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    gap: 2,
  },
  perfLabel: {
    fontSize: 10,
    color: theme.colors.textMuted,
    fontWeight: '700',
    marginTop: 2,
  },
  perfValue: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  specSheet: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  specSheetTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  specRowLabel: {
    fontSize: 12,
    color: theme.colors.textMuted,
  },
  specRowValue: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    flex: 1,
    textAlign: 'right',
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
  descriptionText: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  quoteCard: {
    backgroundColor: 'rgba(239, 68, 68, 0.08)',
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.25)',
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  quoteIcon: {
    marginBottom: 4,
  },
  quoteText: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#FEE2E2',
    lineHeight: 19,
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
  garageBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: theme.colors.racingRed,
    paddingVertical: 14,
    borderRadius: theme.borderRadius.md,
  },
  garageBtnActive: {
    backgroundColor: '#059669', // Verde cuando ya está guardado
  },
  garageBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});

