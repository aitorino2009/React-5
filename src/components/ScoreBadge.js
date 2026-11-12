import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { theme } from '../styles/theme';

export default function ScoreBadge({ score, size = 'medium' }) {
  const getScoreColors = (val) => {
    if (val >= 90) {
      return {
        bg: theme.colors.scoreGreenBg,
        text: theme.colors.scoreGreen,
        border: theme.colors.scoreGreenBorder,
      };
    }
    if (val >= 75) {
      return {
        bg: theme.colors.scoreYellowBg,
        text: theme.colors.scoreYellow,
        border: theme.colors.scoreYellowBorder,
      };
    }
    return {
      bg: theme.colors.scoreRedBg,
      text: theme.colors.scoreRed,
      border: theme.colors.scoreRedBorder,
    };
  };

  const colors = getScoreColors(score);
  const isLarge = size === 'large';

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: colors.bg,
          borderColor: colors.border,
          width: isLarge ? 54 : 38,
          height: isLarge ? 54 : 38,
          borderRadius: isLarge ? 12 : 9,
        },
      ]}
    >
      <Text
        style={[
          styles.scoreText,
          {
            color: colors.text,
            fontSize: isLarge ? 22 : 15,
          },
        ]}
      >
        {score}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
  },
  scoreText: {
    fontWeight: '800',
    fontVariant: ['tabular-nums'],
  },
});

