import { Link } from 'expo-router';
import React from 'react';

import { FocusAwareStatusBar, Pressable, Text, View } from '@/components/ui';

export default function IndexScreen() {
  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />
      {/* make an butto link  */}
      <Link href="/feed">View Feed</Link>
      <Link href="/user">View user</Link>
      <Link href="/user" asChild>
        <Pressable>
          <Text className="px-3 text-primary-300">Inícios</Text>
        </Pressable>
      </Link>
      {/* <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        estimatedItemSize={300}
      /> */}
    </View>
  );
}
