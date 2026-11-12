import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import SectionCard from './SectionCard';
import { theme } from '../styles/theme';

export default function WebStrategySection() {
  const [counter, setCounter] = useState(0);
  const [accentColor, setAccentColor] = useState(theme.colors.primary);

  const colors = [theme.colors.primary, theme.colors.accent, '#EC4899', '#8B5CF6'];

  return (
    <SectionCard
      number="2"
      title="Estrategia de Desarrollo Web y Enrutado"
      timestamp="Minutos 26:50 - 28:20"
    >
      <Text style={styles.paragraph}>
        Desarrollar y probar inicialmente en el navegador web resulta <Text style={styles.bold}>sustancialmente más rápido</Text> que compilar continuamente en emuladores de Android o iOS.
      </Text>

      <View style={styles.compareGrid}>
        <View style={styles.compareCol}>
          <Text style={styles.compareColTitle}>🌐 Entorno Web</Text>
          <Text style={styles.compareItem}>✓ Arranque en segundos (<Text style={styles.code}>npm run web</Text>)</Text>
          <Text style={styles.compareItem}>✓ Fast Refresh instantáneo en milisegundos</Text>
          <Text style={styles.compareItem}>✓ Inspección directa con Chrome DevTools</Text>
          <Text style={styles.compareItem}>✓ Consume muy poca memoria RAM</Text>
        </View>

        <View style={[styles.compareCol, styles.compareColEmul]}>
          <Text style={styles.compareColTitle}>📱 Emulador Pesado</Text>
          <Text style={styles.compareItem}>✗ Consume 4-8 GB de RAM sólo el AVD</Text>
          <Text style={styles.compareItem}>✗ Tiempos largos de compilación Gradle/Xcode</Text>
          <Text style={styles.compareItem}>✗ Ralentiza ordenadores de aulas o portátiles</Text>
          <Text style={styles.compareItem}>✗ Configuración compleja de virtualización VT-x</Text>
        </View>
      </View>

      <View style={styles.interactiveBox}>
        <Text style={styles.interactiveLabel}>Demostración interactiva de estado:</Text>
        <Text style={styles.interactiveSub}>
          React Native actualiza este componente de forma reactiva manteniendo el estado en pantalla:
        </Text>

        <View style={styles.counterRow}>
          <View style={[styles.counterBadge, { backgroundColor: accentColor }]}>
            <Text style={styles.counterValue}>{counter}</Text>
          </View>
          <View style={styles.actionButtons}>
            <Pressable
              style={styles.btnSmall}
              onPress={() => setCounter((c) => c + 1)}
            >
              <Text style={styles.btnText}>+ Sumar 1</Text>
            </Pressable>
            <Pressable
              style={[styles.btnSmall, styles.btnReset]}
              onPress={() => setCounter(0)}
            >
              <Text style={styles.btnTextReset}>Reiniciar</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.colorPalette}>
          <Text style={styles.colorText}>Color dinámico:</Text>
          <View style={styles.paletteRow}>
            {colors.map((c, idx) => (
              <Pressable
                key={idx}
                onPress={() => setAccentColor(c)}
                style={[
                  styles.colorDot,
                  { backgroundColor: c },
                  accentColor === c && styles.colorDotActive,
                ]}
              />
            ))}
          </View>
        </View>
      </View>
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
  bold: {
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: theme.colors.surfaceSubtle,
    paddingHorizontal: 4,
    fontSize: 12,
  },
  compareGrid: {
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  compareCol: {
    backgroundColor: '#F0FDF4',
    borderWidth: 1,
    borderColor: '#BBF7D0',
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm + 2,
  },
  compareColEmul: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FECACA',
  },
  compareColTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  compareItem: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    lineHeight: 18,
    marginBottom: 2,
  },
  interactiveBox: {
    backgroundColor: theme.colors.surfaceSubtle,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  interactiveLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: 2,
  },
  interactiveSub: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  counterBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterValue: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: theme.spacing.xs,
  },
  btnSmall: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
  },
  btnReset: {
    backgroundColor: '#E2E8F0',
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
  },
  btnTextReset: {
    color: theme.colors.textSecondary,
    fontWeight: '600',
    fontSize: 12,
  },
  colorPalette: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xs,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  colorText: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  paletteRow: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  colorDot: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  colorDotActive: {
    borderWidth: 2,
    borderColor: '#0F172A',
  },
});

