import { useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Platform, View } from 'react-native';
import { SystemBars } from 'react-native-edge-to-edge';

type Props = { hidden?: boolean; backgroundColor?: string };

export const FocusAwareStatusBar = ({
  hidden = false,
  backgroundColor = '#16A34A',
}: Props) => {
  const isFocused = useIsFocused();
  const { colorScheme } = useColorScheme();
  console.log('colorScheme', colorScheme);

  if (Platform.OS === 'web') return null;

  return isFocused ? (
    <>
      <StatusBar
        backgroundColor={backgroundColor}
        style={colorScheme === 'dark' ? 'light' : 'dark'} // ✅ Fixed
        hidden={hidden}
      />
      {/* Ensure background color is applied on Android */}
      {Platform.OS === 'android' && (
        <View
          style={{
            backgroundColor,
          }}
        />
      )}
      <SystemBars style={colorScheme} hidden={hidden} />
    </>
  ) : null;
};
