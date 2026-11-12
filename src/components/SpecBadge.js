import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';

export default function SpecBadge({ label, value, icon, color = theme.colors.sportBlue }) {
  return (
    <View style={[styles.badge, { borderColor: color, backgroundColor: 'rgba(30, 41, 59, 0.7)' }]}>
      {icon && <Ionicons name={icon} size={12} color={color} style={styles.icon} />}
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    gap: 4,
  },
  icon: {
    marginRight: 1,
  },
  label: {
    color: theme.colors.textMuted,
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 11,
    fontWeight: '800',
  },
});

