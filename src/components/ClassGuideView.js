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
            <Text style={styles.authorName}>Práctica 5: React Native</Text>
            <Text style={styles.courseName}>2º SMX / DAM • CC Sant Josep Obrer</Text>
            <Text style={styles.authorSub}>Desarrollado siguiendo el tutorial de Midudev</Text>
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
            <Text style={styles.pointTitle}>Inicialización con npx y Plantilla</Text>
            <Text style={styles.timestamp}>Minuto 23:03 del vídeo</Text>
          </View>
        </View>
        <Text style={styles.pointText}>
          En este proyecto utilicé <Text style={styles.code}>npx create-expo-app</Text> en lugar de instalar paquetes de forma global con <Text style={styles.code}>npm install -g</Text>. Esto evita llenar de dependencias viejas el disco duro del ordenador y garantiza que siempre se descargue la última versión compatible del SDK de Expo (SDK 58).
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
          Para diseñar y maquetar esta interfaz con agilidad, ejecuté primero la versión web mediante <Text style={styles.code}>npm run web</Text>. Desarrollar en el navegador permite aprovechar el <Text style={styles.bold}>Fast Refresh</Text> casi instantáneo e inspeccionar elementos con las DevTools de Chrome sin tener que esperar a que arranque un emulador pesado.
        </Text>
      </View>

      {/* Punto 3 */}
      <View style={styles.pointCard}>
        <View style={styles.pointHeader}>
          <View style={styles.pointBadge}>
            <Text style={styles.pointNumber}>3</Text>
          </View>
          <View style={styles.pointTitleBox}>
            <Text style={styles.pointTitle}>Plantilla Vacía (Blank Template)</Text>
            <Text style={styles.timestamp}>Minuto 37:05 del vídeo</Text>
          </View>
        </View>
        <Text style={styles.pointText}>
          Elegí la plantilla limpia <Text style={styles.bold}>blank</Text> para entender la arquitectura desde los cimientos. A diferencia de las plantillas complejas con código prefabricado, aquí cada archivo tiene una función clara:
        </Text>
        <View style={styles.fileList}>
          <Text style={styles.fileItem}>• <Text style={styles.bold}>App.js:</Text> Componente raíz donde se orquesta el catálogo, estados de búsqueda y navegación.</Text>
          <Text style={styles.fileItem}>• <Text style={styles.bold}>index.js:</Text> Punto de entrada que registra la aplicación nativa.</Text>
          <Text style={styles.fileItem}>• <Text style={styles.bold}>app.json:</Text> Manifiesto con los metadatos de Expo, iconos y pantalla de carga.</Text>
          <Text style={styles.fileItem}>• <Text style={styles.bold}>src/components/:</Text> Componentes modulares propios (tarjetas, buscador, modal, etc.).</Text>
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
          En React Native no existen las etiquetas HTML convencionales:
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
            <Text style={styles.nativeColHeader}>Particularidad</Text>
            <Text style={styles.nativeRow}>flexDirection: 'column' por defecto.</Text>
            <Text style={styles.nativeRow}>Obligatorio para cualquier texto plano.</Text>
            <Text style={styles.nativeRow}>Usa require() en local o uri en remoto.</Text>
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
            <Text style={styles.pointTitle}>Entorno: ¿Hace falta Android Studio o Xcode?</Text>
            <Text style={styles.timestamp}>Minuto 53:20 del vídeo</Text>
          </View>
        </View>
        <View style={styles.noBox}>
          <Ionicons name="checkmark-circle" size={20} color={theme.colors.scoreGreen} />
          <Text style={styles.noText}>
            <Text style={styles.bold}>Rotundamente NO.</Text> No es necesario instalar Android Studio (más de 15 GB) ni emuladores que saturan la memoria RAM del ordenador de clase.
          </Text>
        </View>
        <Text style={styles.pointText}>
          Podemos desarrollar cómodamente en la web y probar directamente en un móvil real escaneando el código QR con la app gratuita <Text style={styles.bold}>Expo Go</Text>.
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
    backgroundColor: theme.colors.primary,
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
    color: theme.colors.accentCyan,
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
    backgroundColor: theme.colors.scoreGreenBg,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.scoreGreenBorder,
    marginBottom: theme.spacing.sm,
  },
  noText: {
    color: '#D1FAE5',
    fontSize: 12,
    lineHeight: 18,
    flex: 1,
  },
});

