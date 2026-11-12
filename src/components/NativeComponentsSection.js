import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import SectionCard from './SectionCard';
import { theme } from '../styles/theme';

export default function NativeComponentsSection() {
  const [direction, setDirection] = useState('column'); // 'column' (default RN) vs 'row' (default Web)
  const [imageType, setImageType] = useState('local');

  return (
    <SectionCard
      number="4"
      title="Componentes Nativos de React Native"
      timestamp="Minutos 41:50 - 44:05"
    >
      <Text style={styles.paragraph}>
        En React Native <Text style={styles.bold}>no utilizamos etiquetas HTML tradicionales</Text> (<Text style={styles.inlineCode}>&lt;div&gt;</Text>, <Text style={styles.inlineCode}>&lt;p&gt;</Text>, <Text style={styles.inlineCode}>&lt;img&gt;</Text>), sino componentes nativos equivalentes que se transforman en vistas nativas de Android e iOS:
      </Text>

      {/* Tabla comparativa */}
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.cell, styles.cellHeader, { flex: 1.2 }]}>React Native</Text>
          <Text style={[styles.cell, styles.cellHeader, { flex: 1 }]}>HTML</Text>
          <Text style={[styles.cell, styles.cellHeader, { flex: 2.5 }]}>Descripción y Uso</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={[styles.cell, styles.cellCode, { flex: 1.2 }]}>&lt;View&gt;</Text>
          <Text style={[styles.cell, styles.cellHtml, { flex: 1 }]}>&lt;div&gt;</Text>
          <Text style={[styles.cell, { flex: 2.5 }]}>
            Contenedor Flexbox (<Text style={styles.bold}>columna por defecto</Text>).
          </Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={[styles.cell, styles.cellCode, { flex: 1.2 }]}>&lt;Text&gt;</Text>
          <Text style={[styles.cell, styles.cellHtml, { flex: 1 }]}>&lt;p&gt; / &lt;span&gt;</Text>
          <Text style={[styles.cell, { flex: 2.5 }]}>
            Obligatorio para cualquier texto. No se admite texto libre en &lt;View&gt;.
          </Text>
        </View>

        <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
          <Text style={[styles.cell, styles.cellCode, { flex: 1.2 }]}>&lt;Image&gt;</Text>
          <Text style={[styles.cell, styles.cellHtml, { flex: 1 }]}>&lt;img&gt;</Text>
          <Text style={[styles.cell, { flex: 2.5 }]}>
            Imágenes locales con <Text style={styles.bold}>require()</Text> o remotas vía <Text style={styles.bold}>URI</Text>.
          </Text>
        </View>
      </View>

      {/* Demostración Flexbox */}
      <View style={styles.demoBox}>
        <Text style={styles.demoTitle}>1. Demostración Flexbox: Column vs Row</Text>
        <Text style={styles.demoSub}>
          En CSS Web la dirección por defecto es <Text style={styles.bold}>row</Text>, pero en React Native es <Text style={styles.bold}>column</Text> para adaptarse naturalmente al diseño vertical móvil.
        </Text>

        <View style={styles.toggleRow}>
          <Pressable
            style={[styles.toggleBtn, direction === 'column' && styles.toggleBtnActive]}
            onPress={() => setDirection('column')}
          >
            <Text style={[styles.toggleText, direction === 'column' && styles.toggleTextActive]}>
              flexDirection: 'column' (Por defecto en RN)
            </Text>
          </Pressable>

          <Pressable
            style={[styles.toggleBtn, direction === 'row' && styles.toggleBtnActive]}
            onPress={() => setDirection('row')}
          >
            <Text style={[styles.toggleText, direction === 'row' && styles.toggleTextActive]}>
              flexDirection: 'row' (Web Clásico)
            </Text>
          </Pressable>
        </View>

        <View style={[styles.boxContainer, { flexDirection: direction }]}>
          <View style={[styles.boxItem, { backgroundColor: '#4F46E5' }]}>
            <Text style={styles.boxText}>Elemento A</Text>
          </View>
          <View style={[styles.boxItem, { backgroundColor: '#06B6D4' }]}>
            <Text style={styles.boxText}>Elemento B</Text>
          </View>
          <View style={[styles.boxItem, { backgroundColor: '#10B981' }]}>
            <Text style={styles.boxText}>Elemento C</Text>
          </View>
        </View>
      </View>

      {/* Demostración Carga de Imágenes */}
      <View style={styles.demoBox}>
        <Text style={styles.demoTitle}>2. Demostración &lt;Image&gt;: Local vs Remota</Text>
        <Text style={styles.demoSub}>
          React Native distingue claramente entre recursos compilados estáticamente y recursos descargados por red vía URI.
        </Text>

        <View style={styles.toggleRow}>
          <Pressable
            style={[styles.toggleBtn, imageType === 'local' && styles.toggleBtnActive]}
            onPress={() => setImageType('local')}
          >
            <Text style={[styles.toggleText, imageType === 'local' && styles.toggleTextActive]}>
              Local: require('./ruta')
            </Text>
          </Pressable>

          <Pressable
            style={[styles.toggleBtn, imageType === 'remote' && styles.toggleBtnActive]}
            onPress={() => setImageType('remote')}
          >
            <Text style={[styles.toggleText, imageType === 'remote' && styles.toggleTextActive]}>
              Remota: uri: 'https://...'
            </Text>
          </Pressable>
        </View>

        <View style={styles.imageShowcase}>
          {imageType === 'local' ? (
            <View style={styles.imageCard}>
              <Image
                source={require('../../assets/icon.png')}
                style={styles.sampleImage}
                resizeMode="contain"
              />
              <View style={styles.imageInfo}>
                <Text style={styles.imageInfoTitle}>Imagen Local</Text>
                <Text style={styles.imageInfoCode}>source={'require("./assets/icon.png")'}</Text>
                <Text style={styles.imageInfoDesc}>
                  Se empaqueta en el bundle. Se conoce su tamaño en tiempo de compilación.
                </Text>
              </View>
            </View>
          ) : (
            <View style={styles.imageCard}>
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/pwa/manifest-icon-512.png',
                }}
                style={styles.sampleImage}
                resizeMode="contain"
              />
              <View style={styles.imageInfo}>
                <Text style={styles.imageInfoTitle}>Imagen Remota (URI)</Text>
                <Text style={styles.imageInfoCode}>source={'{{ uri: "https://..." }}'}</Text>
                <Text style={styles.imageInfoDesc}>
                  Descarga por red. <Text style={styles.bold}>Obligatorio definir width y height</Text> en el estilo para que se renderice.
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>

      {/* Regla estricta de Text */}
      <View style={styles.warningCard}>
        <Text style={styles.warningTitle}>⚠️ Regla Estricta para Texto:</Text>
        <Text style={styles.warningDesc}>
          En React Native, escribir <Text style={styles.inlineCode}>&lt;View&gt;Hola Mundo&lt;/View&gt;</Text> provoca un error en tiempo de ejecución.
          Cualquier cadena de caracteres debe estar obligatoriamente encapsulada en <Text style={styles.inlineCode}>&lt;Text&gt;Hola Mundo&lt;/Text&gt;</Text>.
        </Text>
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
  inlineCode: {
    fontFamily: 'monospace',
    backgroundColor: theme.colors.surfaceSubtle,
    color: theme.colors.primary,
    fontWeight: '700',
    paddingHorizontal: 4,
    fontSize: 12,
  },
  table: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.md,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    paddingVertical: theme.spacing.xs + 2,
    paddingHorizontal: theme.spacing.sm,
    alignItems: 'center',
  },
  tableHeader: {
    backgroundColor: '#F8FAFC',
  },
  cell: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  cellHeader: {
    fontWeight: '700',
    color: theme.colors.textPrimary,
    fontSize: 12,
  },
  cellCode: {
    fontFamily: 'monospace',
    color: theme.colors.primary,
    fontWeight: '700',
  },
  cellHtml: {
    fontFamily: 'monospace',
    color: '#D97706',
    fontWeight: '600',
  },
  demoBox: {
    backgroundColor: theme.colors.surfaceSubtle,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  demoTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: 2,
  },
  demoSub: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
    lineHeight: 17,
  },
  toggleRow: {
    flexDirection: 'row',
    gap: theme.spacing.xs,
    marginBottom: theme.spacing.sm,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: theme.spacing.xs + 2,
    paddingHorizontal: theme.spacing.xs,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.sm,
    alignItems: 'center',
  },
  toggleBtnActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  toggleText: {
    fontSize: 11,
    fontWeight: '600',
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  toggleTextActive: {
    color: '#FFFFFF',
  },
  boxContainer: {
    backgroundColor: '#FFFFFF',
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    gap: theme.spacing.xs,
    alignItems: 'stretch',
  },
  boxItem: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
  imageShowcase: {
    backgroundColor: '#FFFFFF',
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  imageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  sampleImage: {
    width: 60,
    height: 60,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: '#F1F5F9',
  },
  imageInfo: {
    flex: 1,
  },
  imageInfoTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: 2,
  },
  imageInfoCode: {
    fontFamily: 'monospace',
    fontSize: 11,
    color: theme.colors.primary,
    marginBottom: 4,
  },
  imageInfoDesc: {
    fontSize: 11,
    color: theme.colors.textSecondary,
    lineHeight: 16,
  },
  warningCard: {
    backgroundColor: '#FFFBEB',
    borderWidth: 1,
    borderColor: '#FDE68A',
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
  },
  warningTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#92400E',
    marginBottom: 2,
  },
  warningDesc: {
    fontSize: 12,
    color: '#78350F',
    lineHeight: 18,
  },
});

