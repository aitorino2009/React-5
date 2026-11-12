import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import SectionCard from './SectionCard';
import { theme } from '../styles/theme';

export default function EnvironmentSection() {
  const [activeTab, setActiveTab] = useState('clarification');

  return (
    <SectionCard
      number="5"
      title="Requisitos de Entorno y Dudas Frecuentes"
      timestamp="Minuto 53:20"
    >
      <View style={styles.faqCard}>
        <Text style={styles.question}>
          ❓ Pregunta clave: ¿Es obligatorio instalar Android Studio o Xcode para empezar?
        </Text>
      </View>

      <View style={styles.answerCard}>
        <Text style={styles.answerTitle}>✅ Respuesta rotunda: NO ES NECESARIO.</Text>
        <Text style={styles.answerText}>
          No es necesario instalar Android Studio (más de 15 GB) ni configurar emuladores pesados (que consumen entre 4 y 8 GB de RAM cada uno) en las etapas iniciales de aprendizaje.
        </Text>
      </View>

      <View style={styles.tabContainer}>
        <Pressable
          style={[styles.tabBtn, activeTab === 'clarification' && styles.tabBtnActive]}
          onPress={() => setActiveTab('clarification')}
        >
          <Text style={[styles.tabText, activeTab === 'clarification' && styles.tabTextActive]}>
            Alternativas Ligeras
          </Text>
        </Pressable>

        <Pressable
          style={[styles.tabBtn, activeTab === 'when' && styles.tabBtnActive]}
          onPress={() => setActiveTab('when')}
        >
          <Text style={[styles.tabText, activeTab === 'when' && styles.tabTextActive]}>
            ¿Cuándo se necesita Android Studio?
          </Text>
        </Pressable>
      </View>

      {activeTab === 'clarification' ? (
        <View style={styles.solutionsGrid}>
          <View style={styles.solutionItem}>
            <Text style={styles.solutionTitle}>📱 Opción 1: Expo Go en Móvil Físico (QR)</Text>
            <Text style={styles.solutionDesc}>
              Instalas la app gratuita <Text style={styles.bold}>Expo Go</Text> en tu teléfono Android o iOS. Al ejecutar <Text style={styles.code}>npx expo start</Text>, escaneas el código QR con la cámara o con la app y la aplicación se ejecuta de inmediato en el móvil físico con recarga en tiempo real.
            </Text>
          </View>

          <View style={styles.solutionItem}>
            <Text style={styles.solutionTitle}>🌐 Opción 2: Entorno Web en Navegador</Text>
            <Text style={styles.solutionDesc}>
              Ejecutas <Text style={styles.code}>npm run web</Text> y pruebas toda la UI en Chrome/Firefox. Cero consumo de emulador, lo que evita colapsar los ordenadores del aula.
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.whenCard}>
          <Text style={styles.whenTitle}>Solo será necesario en etapas avanzadas si:</Text>
          <Text style={styles.whenItem}>1. Necesitas enlazar librerías de código nativo C++, Java o Swift muy específicas no soportadas por Expo Go.</Text>
          <Text style={styles.whenItem}>2. Quieres compilar y firmar los binarios APK / AAB / IPA localmente sin usar EAS Cloud Build.</Text>
          <Text style={styles.whenItem}>3. Requieres depuración a bajo nivel del puente nativo de Android o iOS.</Text>
        </View>
      )}
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  faqCard: {
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  question: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E40AF',
    lineHeight: 20,
  },
  answerCard: {
    backgroundColor: '#F0FDF4',
    borderWidth: 1,
    borderColor: '#BBF7D0',
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  answerTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#166534',
    marginBottom: 4,
  },
  answerText: {
    fontSize: 12,
    color: '#14532D',
    lineHeight: 18,
  },
  tabContainer: {
    flexDirection: 'row',
    gap: theme.spacing.xs,
    marginBottom: theme.spacing.sm,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.surfaceSubtle,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
  },
  tabBtnActive: {
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
    color: '#FFFFFF',
  },
  solutionsGrid: {
    gap: theme.spacing.sm,
  },
  solutionItem: {
    backgroundColor: theme.colors.surfaceSubtle,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary,
  },
  solutionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: 4,
  },
  solutionDesc: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    lineHeight: 18,
  },
  bold: {
    fontWeight: '700',
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#E2E8F0',
    fontSize: 11,
    paddingHorizontal: 4,
  },
  whenCard: {
    backgroundColor: theme.colors.surfaceSubtle,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.warning,
  },
  whenTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  whenItem: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    lineHeight: 18,
    marginBottom: 4,
  },
});

