import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './src/components/Header';
import InitSection from './src/components/InitSection';
import WebStrategySection from './src/components/WebStrategySection';
import ArchitectureSection from './src/components/ArchitectureSection';
import NativeComponentsSection from './src/components/NativeComponentsSection';
import EnvironmentSection from './src/components/EnvironmentSection';
import Footer from './src/components/Footer';
import { theme } from './src/styles/theme';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'Todos' },
    { id: '1', label: '1. npx' },
    { id: '2', label: '2. Web' },
    { id: '3', label: '3. Blank' },
    { id: '4', label: '4. Nativos' },
    { id: '5', label: '5. Entorno' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header />

        {/* Barra de Filtro de Secciones */}
        <View style={styles.filterBar}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterScroll}
          >
            {filterTabs.map((tab) => (
              <Pressable
                key={tab.id}
                style={[
                  styles.filterPill,
                  activeFilter === tab.id && styles.filterPillActive,
                ]}
                onPress={() => setActiveFilter(tab.id)}
              >
                <Text
                  style={[
                    styles.filterText,
                    activeFilter === tab.id && styles.filterTextActive,
                  ]}
                >
                  {tab.label}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Contenido principal según filtro */}
        <View style={styles.sectionsContainer}>
          {(activeFilter === 'all' || activeFilter === '1') && <InitSection />}
          {(activeFilter === 'all' || activeFilter === '2') && <WebStrategySection />}
          {(activeFilter === 'all' || activeFilter === '3') && <ArchitectureSection />}
          {(activeFilter === 'all' || activeFilter === '4') && <NativeComponentsSection />}
          {(activeFilter === 'all' || activeFilter === '5') && <EnvironmentSection />}
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  filterBar: {
    backgroundColor: theme.colors.surface,
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  filterScroll: {
    paddingHorizontal: theme.spacing.md,
    gap: theme.spacing.xs,
  },
  filterPill: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs + 2,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.surfaceSubtle,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  filterPillActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  filterText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.textSecondary,
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  sectionsContainer: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
    maxWidth: 720,
    width: '100%',
    alignSelf: 'center',
  },
});
