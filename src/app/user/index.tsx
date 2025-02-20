import Constants from 'expo-constants';
import { Stack } from 'expo-router';
import * as React from 'react';

import { useUsers } from '@/api/users/use-users';
import { FocusAwareStatusBar, ScrollView, Text, View } from '@/components/ui';

export default function UserScreen() {
  console.log('User Screen');
  const {
    data: users,
    // isPending: isPendingUsers,
    error: isErrorUsers,
  } = useUsers();
  // const renderItem = React.useCallback(
  //   ({ item }: { item: Post }) => <Card {...item} />,
  //   []
  // );
  if (isErrorUsers) {
    return (
      <View>
        <Text> Error Loading data </Text>
      </View>
    );
  }
  return (
    <>
      <FocusAwareStatusBar />

      <Stack.Screen
        options={{
          title: 'Usuários',
          headerBackTitle: 'Home',
        }}
      />
      <View
        style={{
          height: Constants.statusBarHeight,
          backgroundColor: '#DCDCDC',
        }}
      />

      <ScrollView className="size-full flex-1 bg-[#DCDCDC] px-4">
        {/*  stringfy users */}

        <Text>{JSON.stringify(users, null, 2)}</Text>
      </ScrollView>
    </>
  );
}
