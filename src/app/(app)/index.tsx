/* eslint-disable max-lines-per-function */
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

import {
  FocusAwareStatusBar,
  Text,
  TouchableOpacity,
  View,
} from '@/components/ui';

export default function IndexScreen() {
  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />
      {/* make an butto link  */}

      {/* <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        estimatedItemSize={300}
      /> */}

      {/* categories */}
      <View className="mt-5 w-full px-5">
        <View className="w-full flex-row items-center justify-between">
          <Text className="flex-1 py-2 font-extrabold uppercase">Módulos</Text>

          <TouchableOpacity>
            <View className="flex-row items-center justify-between">
              <Text className="text-sm text-gray-500"></Text>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-2 w-full flex-row flex-wrap items-center">
          <TouchableOpacity className="h-[110px] w-1/3 flex-col items-center justify-center p-1">
            <View className="size-full flex-col items-center justify-center rounded-md bg-orange-100 p-2 py-5">
              <FontAwesome5 name="tools" size={24} color="orange" />
              <Text
                className="py-2 text-center text-sm"
                style={{ fontFamily: 'Montserrat' }}
              >
                Bảo dưỡng định kỳ{' '}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-[110px] w-1/3 flex-col items-center justify-center p-1">
            <View className="size-full flex-col items-center justify-center rounded-md bg-green-100 p-2 py-5">
              <FontAwesome5 name="cogs" size={24} color="green" />
              <Text
                className="py-2 text-center text-sm"
                style={{ fontFamily: 'Montserrat' }}
              >
                Sửa chữa động cơ{' '}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-[110px] w-1/3 flex-col items-center justify-center p-1">
            <View className="size-full flex-col items-center justify-center rounded-md bg-red-100 p-2 py-5">
              <FontAwesome5 name="car-crash" size={24} color="red" />
              <Text
                className="py-2 text-center text-sm"
                style={{ fontFamily: 'Montserrat' }}
              >
                Sửa chữa hộp số
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-[110px] w-1/3 flex-col items-center justify-center p-1">
            <View className="size-full flex-col items-center justify-center rounded-md bg-blue-100 p-2 py-5">
              <FontAwesome5 name="oil-can" size={24} color="blue" />
              <Text
                className="py-2 text-center text-sm"
                style={{ fontFamily: 'Montserrat' }}
              >
                Kiểm tra và thay dầu nhớt
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-[110px] w-1/3 flex-col items-center justify-center p-1">
            <View className="size-full flex-col items-center justify-center rounded-md bg-yellow-100 p-2 py-5">
              <FontAwesome5 name="align-center" size={24} color="black" />
              <Text
                className="py-2 text-center text-sm"
                style={{ fontFamily: 'Montserrat' }}
              >
                Cân chỉnh bánh xe
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-[110px] w-1/3 flex-col items-center justify-center p-1">
            <View className="size-full flex-col items-center justify-center rounded-md bg-gray-100 p-2 py-5">
              <FontAwesome5 name="car-side" size={24} color="orange" />
              <Text
                className="py-2 text-center text-sm"
                style={{ fontFamily: 'Montserrat' }}
              >
                Thay lốp & vá lốp
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
