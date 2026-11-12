import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';

export default function ClassGuideView() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Tarjeta de autor y proyecto */}
      <View style={styles.authorCard}>
        <View style={styles.authorRow}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.authorAvatar}
            resizeMode="contain"
          />
          <View style={styles.authorInfo}>
            <Text style={styles.authorName}>Práctica 5: React Native (AutoVault)</Text>
            <Text style={styles.courseName}>2º SMX / DAM • CC Sant Josep Obrer</Text>
            <Text style={styles.authorSub}>Desarrollado siguiendo la guía docente y Midudev</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionHeading}>
        Memoria Técnica y Buenas Prácticas Aplicadas
      </Text>

      {/* Punto 1 */}
      <View style={styles.pointCard}>
        <View style={styles.pointHeader}>
          <View style={styles.pointBadge}>
            <Text style={styles.pointNumber}>1</Text>
          </View>
          <View style={styles.pointTitleBox}>
            <Text style={styles.pointTitle}>Creación del Proyecto con npx</Text>
            <Text style={styles.timestamp}>Minuto 23:03 del vídeo</Text>
          </View>
        </View>
        <Text style={styles.pointText}>
          En lugar de instalar herramientas globales pesadas con <Text style={styles.code}>npm install -g</Text>, inicialicé este catálogo de coches con <Text style={styles.code}>npx create-expo-app</Text>. Esto garantiza que se ejecute la versión más reciente del instalador de Expo sin ocupar espacio persistente en el sistema ni causar conflictos de permisos en los ordenadores del aula.
        </Text>
      </View>

      {/* Punto 2 */}
      <View style={styles.pointCard}>
        <View style={styles.pointHeader}>
          <View style={styles.pointBadge}>
            <Text style={styles.pointNumber}>2</Text>
          </View>
          <View style={styles.pointTitleBox}>
            <Text style={styles.pointTitle}>Estrategia de Desarrollo Web</Text>
            <Text style={styles.timestamp}>Minutos 26:50 - 28:20 del vídeo</Text>
          </View>
        </View>
        <Text style={styles.pointText}>
          Para diseñar el diseño de las tarjetas de los vehículos, los filtros y el modal de detalles, utilicé <Text style={styles.code}>npm run web</Text>. Desarrollar en el navegador web acelera el flujo de trabajo gracias a la recarga instantánea (<Text style={styles.bold}>Fast Refresh</Text>) y al uso de Chrome DevTools, consumiendo apenas una fracción de la memoria RAM que requeriría un emulador de Android.
        </Text>
      </View>

      {/* Punto 3 */}
      <View style={styles.pointCard}>
        <View style={styles.pointHeader}>
          <View style={styles.pointBadge}>
            <Text style={styles.pointNumber}>3</Text>
          </View>
          <View style={styles.pointTitleBox}>
            <Text style={styles.pointTitle}>Arquitectura Limpia (Blank Template)</Text>
            <Text style={styles.timestamp}>Minuto 37:05 del vídeo</Text>
          </View>
        </View>
        <Text style={styles.pointText}>
          Elegí deliberadamente la plantilla <Text style={styles.bold}>blank</Text> para tener control absoluto de cada fichero sin código pregenerado sobrante:
        </Text>
        <View style={styles.fileList}>
          <Text style={styles.fileItem}>• <Text style={styles.bold}>App.js:</Text> Componente principal que orquesta el catálogo, búsqueda en tiempo real, favoritos y el modal de ficha técnica.</Text>
          <Text style={styles.fileItem}>• <Text style={styles.bold}>src/data/cars.js:</Text> Colección de datos técnicos reales (caballos, aceleración, motor, precio).</Text>
          <Text style={styles.fileItem}>• <Text style={styles.bold}>src/components/:</Text> Componentes desacoplados (CarCard, CarDetailModal, FeaturedHero, SearchBar...).</Text>
          <Text style={styles.fileItem}>• <Text style={styles.bold}>app.json & package.json:</Text> Manifiesto de Expo y gestión de dependencias limpias.</Text>
        </View>
      </View>

      {/* Punto 4 */}
      <View style={styles.pointCard}>
        <View style={styles.pointHeader}>
          <View style={styles.pointBadge}>
            <Text style={styles.pointNumber}>4</Text>
          </View>
          <View style={styles.pointTitleBox}>
            <Text style={styles.pointTitle}>Componentes Nativos y Flexbox</Text>
            <Text style={styles.timestamp}>Minutos 41:50 - 44:05 del vídeo</Text>
          </View>
        </View>
        <Text style={styles.pointText}>
          En React Native no usamos etiquetas HTML del navegador:
        </Text>
        <View style={styles.nativeGrid}>
          <View style={styles.nativeCol}>
            <Text style={styles.nativeColHeader}>Componente</Text>
            <Text style={styles.nativeRow}>&lt;View&gt;</Text>
            <Text style={styles.nativeRow}>&lt;Text&gt;</Text>
            <Text style={styles.nativeRow}>&lt;Image&gt;</Text>
          </View>
          <View style={styles.nativeCol}>
            <Text style={styles.nativeColHeader}>Equiv. Web</Text>
            <Text style={styles.nativeRow}>&lt;div&gt;</Text>
            <Text style={styles.nativeRow}>&lt;p&gt; / &lt;span&gt;</Text>
            <Text style={styles.nativeRow}>&lt;img&gt;</Text>
          </View>
          <View style={[styles.nativeCol, { flex: 2 }]}>
            <Text style={styles.nativeColHeader}>Regla Clave</Text>
            <Text style={styles.nativeRow}>flexDirection: 'column' por defecto (orientación vertical móvil).</Text>
            <Text style={styles.nativeRow}>Obligatorio para cualquier texto plano (no admite texto suelto en View).</Text>
            <Text style={styles.nativeRow}>Carga local con require() y remota con uri (requiere tamaño explícito).</Text>
          </View>
        </View>
      </View>

      {/* Punto 5 */}
      <View style={styles.pointCard}>
        <View style={styles.pointHeader}>
          <View style={styles.pointBadge}>
            <Text style={styles.pointNumber}>5</Text>
          </View>
          <View style={styles.pointTitleBox}>
            <Text style={styles.pointTitle}>Entorno: ¿Es obligatorio Android Studio o Xcode?</Text>
            <Text style={styles.timestamp}>Minuto 53:20 del vídeo</Text>
          </View>
        </View>
        <View style={styles.noBox}>
          <Ionicons name="checkmark-circle" size={20} color={theme.colors.turboGreen} />
          <Text style={styles.noText}>
            <Text style={styles.bold}>No es necesario en absoluto.</Text> No hace falta instalar los 15+ GB de Android Studio ni configurar emuladores pesados que saturan los PCs del aula.
          </Text>
        </View>
        <Text style={styles.pointText}>
          Utilizando la aplicación gratuita <Text style={styles.bold}>Expo Go</Text> en el móvil físico (escaneando el código QR con la cámara) y el entorno web, se programa y depura de forma cómoda y ligera.
        </Text>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.sm,
  },
  authorCard: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.borderHighlight,
    marginBottom: theme.spacing.md,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  authorAvatar: {
    width: 48,
    height: 48,
    borderRadius: theme.borderRadius.sm,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontWeight: '800',
  },
  courseName: {
    color: theme.colors.primaryLight,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 1,
  },
  authorSub: {
    color: theme.colors.textMuted,
    fontSize: 11,
    marginTop: 2,
  },
  sectionHeading: {
    fontSize: 15,
    fontWeight: '800',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.xs,
  },
  pointCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  pointHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm + 2,
    marginBottom: theme.spacing.sm,
  },
  pointBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: theme.colors.racingRed,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointNumber: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 13,
  },
  pointTitleBox: {
    flex: 1,
  },
  pointTitle: {
    color: theme.colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },
  timestamp: {
    color: theme.colors.primaryLight,
    fontSize: 11,
    fontWeight: '600',
  },
  pointText: {
    color: theme.colors.textSecondary,
    fontSize: 13,
    lineHeight: 20,
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: theme.colors.surfaceSubtle,
    color: theme.colors.sportBlue,
    paddingHorizontal: 4,
  },
  bold: {
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  fileList: {
    marginTop: theme.spacing.xs + 4,
    backgroundColor: theme.colors.surfaceSubtle,
    padding: theme.spacing.sm + 2,
    borderRadius: theme.borderRadius.sm,
    gap: 4,
  },
  fileItem: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    lineHeight: 18,
  },
  nativeGrid: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.sm,
    marginTop: theme.spacing.sm,
    overflow: 'hidden',
  },
  nativeCol: {
    flex: 1,
    padding: 6,
    borderRightWidth: 1,
    borderRightColor: theme.colors.border,
  },
  nativeColHeader: {
    color: theme.colors.textPrimary,
    fontSize: 11,
    fontWeight: '800',
    marginBottom: 4,
  },
  nativeRow: {
    color: theme.colors.textSecondary,
    fontSize: 11,
    lineHeight: 16,
    marginBottom: 4,
  },
  noBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.turboGreen,
    marginBottom: theme.spacing.sm,
  },
  noText: {
    color: '#D1FAE5',
    fontSize: 12,
    lineHeight: 18,
    flex: 1,
  },
});
