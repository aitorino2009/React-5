import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import SectionCard from './SectionCard';
import { theme } from '../styles/theme';

export default function InitSection() {
  const [selectedTool, setSelectedTool] = useState('expo');

  return (
    <SectionCard
      number="1"
      title="Creación e Inicialización del Proyecto (npx)"
      timestamp="Minuto 23:03"
    >
      <Text style={styles.paragraph}>
        El comando <Text style={styles.inlineCode}>npx</Text> (Node Package Execute) permite ejecutar directamente paquetes y scripts de Node.js sin necesidad de instalarlos globalmente en el sistema operativo.
      </Text>

      <View style={styles.highlightBox}>
        <Text style={styles.highlightTitle}>Ventajas de usar npx:</Text>
        <Text style={styles.bulletItem}>• <Text style={styles.bold}>Sin instalación global:</Text> No ocupa espacio persistente innecesario en el disco.</Text>
        <Text style={styles.bulletItem}>• <Text style={styles.bold}>Siempre actualizado:</Text> Descarga y ejecuta la última versión disponible del paquete creador.</Text>
        <Text style={styles.bulletItem}>• <Text style={styles.bold}>Evita conflictos:</Text> Previene incompatibilidades de versiones entre proyectos diferentes.</Text>
      </View>

      <Text style={styles.subHeading}>Comparativa de Plantillas y CLI:</Text>

      <View style={styles.tabContainer}>
        <Pressable
          style={[styles.tabButton, selectedTool === 'expo' && styles.tabButtonActive]}
          onPress={() => setSelectedTool('expo')}
        >
          <Text style={[styles.tabText, selectedTool === 'expo' && styles.tabTextActive]}>
            Expo CLI (Recomendado)
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tabButton, selectedTool === 'bare' && styles.tabButtonActive]}
          onPress={() => setSelectedTool('bare')}
        >
          <Text style={[styles.tabText, selectedTool === 'bare' && styles.tabTextActive]}>
            React Native CLI (Bare)
          </Text>
        </Pressable>
      </View>

      {selectedTool === 'expo' ? (
        <View style={styles.cardDetail}>
          <Text style={styles.commandText}>npx create-expo-app mi-proyecto --template blank</Text>
          <Text style={styles.detailDesc}>
            Crea un proyecto estructurado y listo para funcionar con el ecosistema Expo. La plantilla limpia (*blank*) incluye sólo lo esencial para comenzar a codificar sin código pregenerado sobrante.
          </Text>
        </View>
      ) : (
        <View style={styles.cardDetail}>
          <Text style={styles.commandText}>npx react-native init MiProyecto</Text>
          <Text style={styles.detailDesc}>
            Crea un proyecto nativo clásico (*bare workflow*) con carpetas `android/` e `ios/` manuales. Requiere configurar obligatoriamente Android Studio / Xcode y SDKs nativos desde el primer minuto.
          </Text>
        </View>
      )}
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 21,
    marginBottom: theme.spacing.md,
  },
  inlineCode: {
    fontFamily: 'monospace',
    backgroundColor: theme.colors.surfaceSubtle,
    color: theme.colors.primary,
    fontWeight: '700',
    paddingHorizontal: 4,
  },
  highlightBox: {
    backgroundColor: theme.colors.primaryLight,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.md,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary,
  },
  highlightTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.primaryDark,
    marginBottom: theme.spacing.xs,
  },
  bulletItem: {
    fontSize: 13,
    color: theme.colors.textPrimary,
    lineHeight: 20,
    marginBottom: 2,
  },
  bold: {
    fontWeight: '700',
  },
  subHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: theme.spacing.sm,
    gap: theme.spacing.xs,
  },
  tabButton: {
    flex: 1,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.surfaceSubtle,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  tabButtonActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  tabText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  tabTextActive: {
    color: theme.colors.textInverted,
  },
  cardDetail: {
    backgroundColor: theme.colors.codeBg,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
  },
  commandText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: theme.colors.codeText,
    marginBottom: theme.spacing.xs,
  },
  detailDesc: {
    fontSize: 12,
    color: '#94A3B8',
    lineHeight: 18,
  },
});

