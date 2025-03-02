/* eslint-disable max-lines-per-function */
/* eslint-disable react/no-unstable-nested-components */
import { Ionicons } from '@expo/vector-icons';
import { Redirect, SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';
import {
  Feed as FeedIcon,
  Settings as SettingsIcon,
  Style as StyleIcon,
} from '@/components/ui/icons';
import { useAuth, useIsFirstTime } from '@/lib';

export default function TabLayout() {
  const status = useAuth.use.status();
  const [isFirstTime] = useIsFirstTime();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  if (isFirstTime) {
    return <Redirect href="/onboarding" />;
  }
  if (status === 'signOut') {
    return <Redirect href="/login" />;
  }
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        // title: '',
        tabBarActiveTintColor: '#16A34A',
        // tabBarInactiveTintColor: '#fff',

        headerStyle: {
          backgroundColor: '#16A34A',
        },
        // headerShadowVisible: false,
        // headerTintColor: '#fff',
        // tabBarStyle: {
        //   // backgroundColor: '#027DFC',
        // },
        // tabBarIconStyle: {
        //   width: 30,
        //   height: 30,
        // },
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FeedIcon color={color} />,
          // headerRight: () => <CreateNewPostLink />,
          // tabBarButtonTestID: 'feed-tab',
          headerLeft: () => (
            <View className="flex flex-row items-center justify-between">
              <View className="px-4">
                <View className="flex-row items-center gap-2">
                  {/* <TouchableOpacity>
                    <MaterialIcons name="menu-open" size={28} color="white" />
                  </TouchableOpacity> */}
                  <Text className="text-2xl font-bold text-white">
                    Gigantão
                  </Text>
                </View>
              </View>
            </View>
          ),
          headerRight: () => (
            <View className="px-4">
              <View className="flex w-full flex-row items-center gap-4">
                <TouchableOpacity>
                  <View className="relative">
                    <View className="absolute -right-2 -top-2 z-10 size-5 flex-col items-center justify-center rounded-full bg-red-500">
                      <Text className="text-sm font-bold text-white">10</Text>
                    </View>
                    <Ionicons
                      name="notifications-outline"
                      size={24}
                      color="white"
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="relative">
                    <View className="absolute -right-2 -top-2  z-10 size-5 flex-col items-center justify-center rounded-full bg-red-500">
                      <Text className="text-sm font-bold text-white">1</Text>
                    </View>
                    <Ionicons name="cart-outline" size={24} color="white" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="vehicles"
        options={{
          title: 'Veículos',
          headerShown: true,
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
          tabBarButtonTestID: 'vehicles-tab',
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: 'Usuários',
          headerShown: true,
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
          tabBarButtonTestID: 'users-tab',
        }}
      />
      <Tabs.Screen
        name="style"
        options={{
          title: 'Style',
          headerShown: false,
          tabBarIcon: ({ color }) => <StyleIcon color={color} />,
          tabBarButtonTestID: 'style-tab',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: true,
          title: 'Settings',

          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
          tabBarButtonTestID: 'settings-tab',
        }}
      />
    </Tabs>
  );
}

// const CreateNewPostLink = () => {
//   return (
//     <Link href="/feed/add-post" asChild>
//       <Pressable>
//         <Text className="px-3 text-primary-300">Create</Text>
//       </Pressable>
//     </Link>
//   );
// };
