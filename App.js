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
import GameCard from './src/components/GameCard';
import GameDetailModal from './src/components/GameDetailModal';
import ClassGuideView from './src/components/ClassGuideView';
import BottomNav from './src/components/BottomNav';

import { GAMES_DATA, GENRES } from './src/data/games';
import { theme } from './src/styles/theme';

export default function App() {
  const [activeTab, setActiveTab] = useState('explore'); // 'explore' | 'favorites' | 'guide'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [favorites, setFavorites] = useState(['elden-ring-erdtree', 'baldurs-gate-3']);
  const [selectedGame, setSelectedGame] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Filtrado de juegos según búsqueda y género
  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter((game) => {
      const matchesCategory =
        selectedCategory === 'Todos' || game.genre === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        game.title.toLowerCase().includes(q) ||
        game.developer.toLowerCase().includes(q) ||
        game.genre.toLowerCase().includes(q) ||
        game.platforms.some((p) => p.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  // Lista de favoritos
  const favoriteGames = useMemo(() => {
    return GAMES_DATA.filter((g) => favorites.includes(g.id));
  }, [favorites]);

  // Toggle de favoritos
  const handleToggleFavorite = (gameId) => {
    setFavorites((prev) =>
      prev.includes(gameId)
        ? prev.filter((id) => id !== gameId)
        : [...prev, gameId]
    );
  };

  // Abrir modal de detalles
  const handleSelectGame = (game) => {
    setSelectedGame(game);
    setModalVisible(true);
  };

  // Juego destacado para el banner
  const featuredGame = GAMES_DATA[0];

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
            totalCount={filteredGames.length}
          />

          <CategoryChips
            categories={GENRES}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />

          {/* Banner destacado si no hay filtros activos */}
          {!searchQuery && selectedCategory === 'Todos' && (
            <FeaturedHero
              game={featuredGame}
              onSelect={handleSelectGame}
            />
          )}

          {/* Listado de juegos */}
          <View style={styles.listContainer}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeaderTitle}>
                {searchQuery
                  ? `Resultados para "${searchQuery}"`
                  : selectedCategory !== 'Todos'
                  ? `Juegos de ${selectedCategory}`
                  : 'Novedades y Más Valorados'}
              </Text>
            </View>

            {filteredGames.length === 0 ? (
              <View style={styles.emptyState}>
                <Ionicons
                  name="search-outline"
                  size={48}
                  color={theme.colors.textMuted}
                />
                <Text style={styles.emptyTitle}>No encontramos resultados</Text>
                <Text style={styles.emptySub}>
                  Prueba a buscar por otro término o limpia los filtros.
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
              filteredGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onSelect={handleSelectGame}
                  isFavorite={favorites.includes(game.id)}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))
            )}
          </View>
        </ScrollView>
      )}

      {activeTab === 'favorites' && (
        <ScrollView
          style={styles.mainScroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.favoritesHeader}>
            <Text style={styles.favHeading}>Mis Videojuegos Guardados</Text>
            <Text style={styles.favSub}>
              {favoriteGames.length === 1
                ? '1 título en tu lista personal'
                : `${favoriteGames.length} títulos en tu lista personal`}
            </Text>
          </View>

          <View style={styles.listContainer}>
            {favoriteGames.length === 0 ? (
              <View style={styles.emptyState}>
                <Ionicons
                  name="heart-dislike-outline"
                  size={52}
                  color={theme.colors.textMuted}
                />
                <Text style={styles.emptyTitle}>Tu lista está vacía</Text>
                <Text style={styles.emptySub}>
                  Marca el corazón en los juegos que quieras seguir o jugar próximamente.
                </Text>
                <Pressable
                  style={styles.clearSearchBtn}
                  onPress={() => setActiveTab('explore')}
                >
                  <Text style={styles.clearSearchText}>Explorar Catálogo</Text>
                </Pressable>
              </View>
            ) : (
              favoriteGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onSelect={handleSelectGame}
                  isFavorite={true}
                  onToggleFavorite={handleToggleFavorite}
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
        favoritesCount={favorites.length}
      />

      {/* Modal inmersivo de detalle */}
      <GameDetailModal
        game={selectedGame}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        isFavorite={selectedGame ? favorites.includes(selectedGame.id) : false}
        onToggleFavorite={handleToggleFavorite}
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
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm + 2,
    borderRadius: theme.borderRadius.sm,
  },
  clearSearchText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  favoritesHeader: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xs,
  },
  favHeading: {
    fontSize: 20,
    fontWeight: '800',
    color: theme.colors.textPrimary,
    marginBottom: 2,
  },
  favSub: {
    fontSize: 13,
    color: theme.colors.textSecondary,
  },
});
