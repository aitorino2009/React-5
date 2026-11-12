import React from 'react';
import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';

export default function SearchBar({ value, onChangeText, onClear, totalCount }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Ionicons
          name="search"
          size={18}
          color={theme.colors.textMuted}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Buscar títulos, estudios o sagas..."
          placeholderTextColor={theme.colors.textMuted}
          value={value}
          onChangeText={onChangeText}
          autoCorrect={false}
          clearButtonMode="never"
        />
        {value.length > 0 && (
          <Pressable onPress={onClear} hitSlop={10} style={styles.clearBtn}>
            <Ionicons name="close-circle" size={18} color={theme.colors.textSecondary} />
          </Pressable>
        )}
      </View>
      <View style={styles.countBadge}>
        <Text style={styles.countText}>{totalCount} títulos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.sm + 4,
    height: 44,
  },
  searchIcon: {
    marginRight: theme.spacing.xs + 2,
  },
  input: {
    flex: 1,
    color: theme.colors.textPrimary,
    fontSize: 14,
    height: '100%',
    padding: 0,
  },
  clearBtn: {
    padding: 4,
  },
  countBadge: {
    backgroundColor: theme.colors.surfaceElevated,
    paddingHorizontal: theme.spacing.sm + 2,
    paddingVertical: theme.spacing.xs + 4,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  countText: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
  },
});

