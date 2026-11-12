import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import SectionCard from './SectionCard';
import { theme } from '../styles/theme';

export default function ArchitectureSection() {
  const [activeFile, setActiveFile] = useState('App.js');

  const fileData = {
    'App.js': {
      title: 'App.js — Componente Raíz de la Aplicación',
      purpose: 'Punto de entrada visual donde se renderiza la jerarquía principal de componentes de la aplicación. En la plantilla blank, contiene una sola View con un Text y la barra de estado.',
      codeSnippet: "export default function App() {\n  return (\n    <View style={styles.container}>\n      <Text>Hola React Native</Text>\n    </View>\n  );\n}",
    },
    'index.js': {
      title: 'index.js — Registro del Punto de Entrada',
      purpose: 'Archivo de arranque técnico que registra el componente App con AppRegistry de React Native mediante la función registerRootComponent(App) de Expo.',
      codeSnippet: "import { registerRootComponent } from 'expo';\nimport App from './App';\n\nregisterRootComponent(App);",
    },
    'app.json': {
      title: 'app.json — Configuración del Manifiesto de Expo',
      purpose: 'Define metadatos clave: nombre de la app, slug, versión, orientación de pantalla, iconos, splash screen y configuración para empaquetado nativo (Android package e iOS bundleIdentifier).',
      codeSnippet: '{\n  "expo": {\n    "name": "react-5-app",\n    "slug": "react-5-app",\n    "version": "1.0.0",\n    "orientation": "portrait"\n  }\n}',
    },
    'package.json': {
      title: 'package.json — Manifiesto de Dependencias y Scripts',
      purpose: 'Declara las versiones de expo, react y react-native compatibles con el SDK seleccionado, además de los scripts de ejecución (start, android, ios, web).',
      codeSnippet: '"scripts": {\n  "start": "expo start",\n  "web": "expo start --web"\n}',
    },
    'assets/': {
      title: 'assets/ — Recursos Estáticos Multimedia',
      purpose: 'Directorio donde se alojan iconos (icon.png), imágenes de carga (splash-icon.png) y fuentes o imágenes locales requeridas en la aplicación.',
      codeSnippet: "require('./assets/icon.png')",
    },
  };

  const current = fileData[activeFile];

  return (
    <SectionCard
      number="3"
      title="Inicio desde Plantilla Vacía (Blank Template)"
      timestamp="Minuto 37:05"
    >
      <Text style={styles.paragraph}>
        Partir de una <Text style={styles.bold}>plantilla totalmente limpia (*blank*)</Text> evita código pregenerado complejo (como enrutadores preconfigurados o tabs innecesarias) y ayuda al estudiante a comprender con total claridad la función de cada archivo:
      </Text>

      <Text style={styles.fileSelectorLabel}>Explora la función de cada archivo:</Text>
      <View style={styles.fileButtons}>
        {Object.keys(fileData).map((fileName) => (
          <Pressable
            key={fileName}
            style={[
              styles.fileBtn,
              activeFile === fileName && styles.fileBtnActive,
            ]}
            onPress={() => setActiveFile(fileName)}
          >
            <Text
              style={[
                styles.fileBtnText,
                activeFile === fileName && styles.fileBtnTextActive,
              ]}
            >
              📄 {fileName}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.detailCard}>
        <Text style={styles.fileTitle}>{current.title}</Text>
        <Text style={styles.filePurpose}>{current.purpose}</Text>
        <View style={styles.codeContainer}>
          <Text style={styles.codeSnippet}>{current.codeSnippet}</Text>
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
  fileSelectorLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  fileButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.xs,
    marginBottom: theme.spacing.md,
  },
  fileBtn: {
    backgroundColor: theme.colors.surfaceSubtle,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs + 2,
    borderRadius: theme.borderRadius.sm,
  },
  fileBtnActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  fileBtnText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.textSecondary,
  },
  fileBtnTextActive: {
    color: '#FFFFFF',
  },
  detailCard: {
    backgroundColor: theme.colors.surfaceSubtle,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary,
  },
  fileTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  filePurpose: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    lineHeight: 19,
    marginBottom: theme.spacing.sm,
  },
  codeContainer: {
    backgroundColor: theme.colors.codeBg,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm,
  },
  codeSnippet: {
    fontFamily: 'monospace',
    fontSize: 11,
    color: theme.colors.codeText,
    lineHeight: 16,
  },
});

