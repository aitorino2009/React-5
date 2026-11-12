import React, { useState, useMemo } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';
import CategoryChips from './src/components/CategoryChips';
import FeaturedHero from './src/components/FeaturedHero';
import CarCard from './src/components/CarCard';
import CarDetailModal from './src/components/CarDetailModal';
import ClassGuideView from './src/components/ClassGuideView';
import BottomNav from './src/components/BottomNav';

import { CARS_DATA, CATEGORIES } from './src/data/cars';
import { theme } from './src/styles/theme';

export default function App() {
  const [activeTab, setActiveTab] = useState('explore'); // 'explore' | 'garage' | 'guide'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [garageList, setGarageList] = useState(['porsche-911-gt3-rs', 'bmw-m3-competition']);
  const [selectedCar, setSelectedCar] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Filtrado de coches según búsqueda y categoría
  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      const matchesCategory =
        selectedCategory === 'Todos' || car.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        car.brand.toLowerCase().includes(q) ||
        car.model.toLowerCase().includes(q) ||
        car.engine.toLowerCase().includes(q) ||
        car.category.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  // Lista de coches guardados en el garaje personal
  const savedCars = useMemo(() => {
    return CARS_DATA.filter((c) => garageList.includes(c.id));
  }, [garageList]);

  // Toggle de garaje/favoritos
  const handleToggleGarage = (carId) => {
    setGarageList((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    );
  };

  // Abrir ficha técnica completa
  const handleSelectCar = (car) => {
    setSelectedCar(car);
    setModalVisible(true);
  };

  const featuredCar = CARS_DATA[0]; // Porsche 911 GT3 RS

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" backgroundColor={theme.colors.background} />

      <Header />

      {/* Vista según pestaña activa */}
      {activeTab === 'explore' && (
        <ScrollView
          style={styles.mainScroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            onClear={() => setSearchQuery('')}
            totalCount={filteredCars.length}
          />

          <CategoryChips
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />

          {/* Banner del coche estrella si no hay filtros activos */}
          {!searchQuery && selectedCategory === 'Todos' && (
            <FeaturedHero
              car={featuredCar}
              onSelect={handleSelectCar}
            />
          )}

          {/* Listado de vehículos */}
          <View style={styles.listContainer}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeaderTitle}>
                {searchQuery
                  ? `Resultados para "${searchQuery}"`
                  : selectedCategory !== 'Todos'
                  ? `Vehículos: ${selectedCategory}`
                  : 'Gama de Altas Prestaciones'}
              </Text>
            </View>

            {filteredCars.length === 0 ? (
              <View style={styles.emptyState}>
                <Ionicons
                  name="car-outline"
                  size={48}
                  color={theme.colors.textMuted}
                />
                <Text style={styles.emptyTitle}>No hay vehículos con ese criterio</Text>
                <Text style={styles.emptySub}>
                  Prueba a buscar por marca (Porsche, Ferrari, BMW...) o cambia de categoría.
                </Text>
                <Pressable
                  style={styles.clearSearchBtn}
                  onPress={() => {
                    setSearchQuery('');
                    setSelectedCategory('Todos');
                  }}
                >
                  <Text style={styles.clearSearchText}>Ver todo el catálogo</Text>
                </Pressable>
              </View>
            ) : (
              filteredCars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onSelect={handleSelectCar}
                  isFavorite={garageList.includes(car.id)}
                  onToggleFavorite={handleToggleGarage}
                />
              ))
            )}
          </View>
        </ScrollView>
      )}

      {activeTab === 'garage' && (
        <ScrollView
          style={styles.mainScroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.garageHeader}>
            <Text style={styles.garageHeading}>Mi Garaje de Ensueño</Text>
            <Text style={styles.garageSub}>
              {savedCars.length === 1
                ? '1 vehículo guardado en tu garaje'
                : `${savedCars.length} vehículos guardados en tu garaje`}
            </Text>
          </View>

          <View style={styles.listContainer}>
            {savedCars.length === 0 ? (
              <View style={styles.emptyState}>
                <Ionicons
                  name="key-outline"
                  size={52}
                  color={theme.colors.textMuted}
                />
                <Text style={styles.emptyTitle}>Tu garaje está vacío</Text>
                <Text style={styles.emptySub}>
                  Guarda tus superdeportivos y coches favoritos pulsando el icono del corazón.
                </Text>
                <Pressable
                  style={styles.clearSearchBtn}
                  onPress={() => setActiveTab('explore')}
                >
                  <Text style={styles.clearSearchText}>Explorar Catálogo</Text>
                </Pressable>
              </View>
            ) : (
              savedCars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onSelect={handleSelectCar}
                  isFavorite={true}
                  onToggleFavorite={handleToggleGarage}
                />
              ))
            )}
          </View>
        </ScrollView>
      )}

      {activeTab === 'guide' && <ClassGuideView />}

      {/* Barra de navegación inferior */}
      <BottomNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        favoritesCount={garageList.length}
      />

      {/* Modal inmersivo de ficha técnica */}
      <CarDetailModal
        car={selectedCar}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        isFavorite={selectedCar ? garageList.includes(selectedCar.id) : false}
        onToggleFavorite={handleToggleGarage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  mainScroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: theme.spacing.lg,
  },
  listContainer: {
    paddingHorizontal: theme.spacing.md,
    maxWidth: 720,
    width: '100%',
    alignSelf: 'center',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm + 4,
    marginTop: theme.spacing.xs,
  },
  sectionHeaderTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: theme.colors.textPrimary,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xl * 1.5,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginTop: theme.spacing.md,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginTop: theme.spacing.sm,
    marginBottom: 4,
  },
  emptySub: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: theme.spacing.md,
  },
  clearSearchBtn: {
    backgroundColor: theme.colors.racingRed,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm + 2,
    borderRadius: theme.borderRadius.sm,
  },
  clearSearchText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  garageHeader: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xs,
  },
  garageHeading: {
    fontSize: 20,
    fontWeight: '800',
    color: theme.colors.textPrimary,
    marginBottom: 2,
  },
  garageSub: {
    fontSize: 13,
    color: theme.colors.textSecondary,
  },
});
