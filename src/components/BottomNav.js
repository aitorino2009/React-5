import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';

export default function BottomNav({ activeTab, onSelectTab, favoritesCount }) {
  const tabs = [
    {
      id: 'explore',
      label: 'Catálogo',
      icon: 'car-sport',
      outlineIcon: 'car-sport-outline',
    },
    {
      id: 'garage',
      label: 'Mi Garaje',
      icon: 'bookmark',
      outlineIcon: 'bookmark-outline',
      badge: favoritesCount,
    },
    {
      id: 'guide',
      label: 'Guía Técnica',
      icon: 'book',
      outlineIcon: 'book-outline',
    },
  ];

  return (
    <View style={styles.navContainer}>
      <View style={styles.navRow}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <Pressable
              key={tab.id}
              style={styles.tabButton}
              onPress={() => onSelectTab(tab.id)}
            >
              <View style={styles.iconWrapper}>
                <Ionicons
                  name={isActive ? tab.icon : tab.outlineIcon}
                  size={22}
                  color={isActive ? theme.colors.racingRed : theme.colors.textMuted}
                />
                {tab.badge > 0 && (
                  <View style={styles.badgePill}>
                    <Text style={styles.badgeText}>{tab.badge}</Text>
                  </View>
                )}
              </View>
              <Text
                style={[
                  styles.tabLabel,
                  isActive && styles.tabLabelActive,
                ]}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: theme.colors.surface,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingBottom: theme.spacing.sm,
    paddingTop: theme.spacing.xs + 2,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: 600,
    width: '100%',
    alignSelf: 'center',
  },
  tabButton: {
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: theme.spacing.md,
  },
  iconWrapper: {
    position: 'relative',
  },
  badgePill: {
    position: 'absolute',
    top: -4,
    right: -10,
    backgroundColor: theme.colors.racingRed,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },
  tabLabel: {
    fontSize: 11,
    color: theme.colors.textMuted,
    fontWeight: '600',
    marginTop: 3,
  },
  tabLabelActive: {
    color: theme.colors.primaryLight,
    fontWeight: '700',
  },
});
