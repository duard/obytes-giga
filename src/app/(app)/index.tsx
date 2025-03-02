/* eslint-disable max-lines-per-function */
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView } from 'react-native';

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

      <View className="size-full bg-white ">
        <ScrollView>
          {/* categories */}
          <View className="mt-5 w-full px-5">
            <View className="w-full flex-row items-center justify-between">
              <Text className="flex-1 py-2 font-extrabold uppercase">
                Módulos
              </Text>

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

          {/* products */}

          {/* sản phẩm nổi bật */}
          <View className="w-full p-5">
            <View className="w-full flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="emoji-events" size={24} color="gold" />
                <Text
                  className="py-2 uppercase"
                  style={{ fontFamily: 'HelvetIns' }}
                >
                  Goiabada sistematica
                </Text>
              </View>
              <TouchableOpacity>
                <View className="flex-row items-center justify-between">
                  <Text className="text-sm text-gray-500"></Text>
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>

            <View className="mt-4 w-full">
              <ScrollView
                className="w-full"
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View className="flex-row gap-5">
                  <TouchableOpacity className="h-[250px] w-[200px]">
                    <View className="size-full rounded-md border border-gray-200/100 bg-white">
                      <View className="relative w-full rounded-md">
                        <TouchableOpacity className="absolute right-2 top-2 z-10 size-6 flex-col items-center justify-center rounded-full bg-gray-100">
                          <MaterialIcons
                            name="favorite"
                            size={15}
                            color="black"
                          />
                        </TouchableOpacity>
                        <Image
                          source={require('../../../assets/images/th.jpg')}
                          className="h-[120] w-full rounded-md"
                          resizeMode="cover"
                        />
                      </View>
                      <View className="mt-2 w-full px-3 pb-4">
                        <Text className="w-full text-xl font-bold">
                          VinFast VF3
                        </Text>
                        <Text className="pt-2 text-sm text-gray-700">
                          Mẫu xe điện cỡ nhỏ của VinFast, giá bán từ 240 triệu
                          đồng
                        </Text>
                        <View className="mt-2 w-full flex-row items-center gap-2">
                          <Text>5.0</Text>
                          <View className="flex-row items-center">
                            <Entypo name="star" size={15} color="orange" />
                            <Entypo name="star" size={15} color="orange" />
                            <Entypo name="star" size={15} color="orange" />
                            <Entypo name="star" size={15} color="orange" />
                            <Entypo name="star" size={15} color="orange" />
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity className="h-[250px] w-[200px]">
                    <View className="size-full rounded-md border border-gray-200/100 bg-white">
                      <View className="relative w-full rounded-md">
                        <TouchableOpacity className="absolute right-2 top-2 z-10 size-6 flex-col items-center justify-center rounded-full bg-gray-100">
                          <MaterialIcons
                            name="favorite"
                            size={15}
                            color="black"
                          />
                        </TouchableOpacity>
                        <Image
                          source={require('../../../assets/images/th2.jpg')}
                          className="h-[120] w-full rounded-md"
                          resizeMode="cover"
                        />
                      </View>
                      <View className="mt-2 w-full px-3 pb-4">
                        <Text className="w-full text-xl font-bold">
                          VinFast VF5
                        </Text>
                        <Text className="pt-2 text-sm text-gray-700">
                          SUV điện cỡ nhỏ với giá bán từ 479 triệu đồng.
                        </Text>
                        <View className="mt-2 w-full flex-row items-center gap-2">
                          <Text>5.0</Text>
                          <View className="flex-row items-center">
                            <Entypo name="star" size={15} color="orange" />
                            <Entypo name="star" size={15} color="orange" />
                            <Entypo name="star" size={15} color="orange" />
                            <Entypo name="star" size={15} color="orange" />
                            <Entypo name="star" size={15} color="orange" />
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity className="h-[250px] w-[200px]">
                    <View className="size-full rounded-md border border-gray-200/100 bg-white">
                      <View className="relative w-full rounded-md">
                        <TouchableOpacity className="absolute right-2 top-2 z-10 size-6 flex-col items-center justify-center rounded-full bg-gray-100">
                          <MaterialIcons
                            name="favorite"
                            size={15}
                            color="black"
                          />
                        </TouchableOpacity>
                        <Image
                          source={require('../../../assets/images/th3.jpg')}
                          className="h-[120] w-full rounded-md"
                          resizeMode="cover"
                        />
                      </View>
                      <View className="mt-2 w-full px-3 pb-4">
                        <Text className="w-full text-xl font-bold">
                          Ford Ranger
                        </Text>
                        <Text className="pt-2 text-sm text-gray-700">
                          Bán tải cỡ trung, giá từ 669 triệu đồng
                        </Text>
                        <View className="mt-2 w-full flex-row items-center gap-2">
                          <Text>5.0</Text>
                          <View className="flex-row items-center">
                            <Entypo name="star" size={15} color="orange" />
                            <Entypo name="star" size={15} color="orange" />
                            <Entypo name="star" size={15} color="orange" />
                            <Entypo name="star" size={15} color="orange" />
                            <Entypo name="star" size={15} color="orange" />
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
          {/* end sản phẩn nổi bật */}
          {/* sản phẩm mới nhất */}
          <View className="mb-8 w-full px-5">
            <View className="w-full flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <FontAwesome name="star" size={24} color="gold" />
                <Text
                  className=" py-2 uppercase"
                  style={{ fontFamily: 'HelvetIns' }}
                >
                  Sản phẩm mới nhất
                </Text>
              </View>
              <TouchableOpacity>
                <View className="flex-row items-center justify-between">
                  <Text className="text-sm text-gray-500"></Text>
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>
            <View className="mt-4 flex-col gap-5">
              <TouchableOpacity className="w-full">
                <View className="flex-row items-center justify-between rounded-md border border-gray-100/50 bg-white shadow-sm">
                  <View className="flex-1 pl-5">
                    <Text className="py-2 text-[16px]">
                      Xe Moto 2025 moi nhat
                    </Text>
                    <View>
                      <View className="flex-row items-center">
                        <Entypo name="star" size={15} color="orange" />
                        <Entypo name="star" size={15} color="orange" />
                        <Entypo name="star" size={15} color="orange" />
                        <Entypo name="star" size={15} color="orange" />
                        <Entypo name="star" size={15} color="orange" />
                      </View>
                      <Text className="mt-2 text-[20px] font-bold text-red-500">
                        200 $
                      </Text>
                      <TouchableOpacity className="mt-2">
                        <View className="w-[120px] flex-row items-center justify-center gap-1 rounded-full bg-orange-500 p-2">
                          <Entypo
                            name="shopping-cart"
                            size={15}
                            color="white"
                          />
                          <Text className="rounded-md text-sm text-white">
                            Add to cart
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View className="w-[150px]">
                    <Image
                      source={require('../../../assets/images/02.jpg')}
                      className="h-40 w-full rounded-md"
                      resizeMode="cover"
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="w-full">
                <View className="flex-row items-center justify-between rounded-md border border-gray-100/50 bg-white shadow-sm">
                  <View className="flex-1 pl-5">
                    <Text className="py-2 text-[16px]">
                      Xe Moto 2025 moi nhat
                    </Text>
                    <View>
                      <View className="flex-row items-center">
                        <Entypo name="star" size={15} color="orange" />
                        <Entypo name="star" size={15} color="orange" />
                        <Entypo name="star" size={15} color="orange" />
                        <Entypo name="star" size={15} color="orange" />
                        <Entypo name="star" size={15} color="orange" />
                      </View>
                      <Text className="mt-2 text-[20px] font-bold text-red-500">
                        200 $
                      </Text>
                      <TouchableOpacity className="mt-2">
                        <View className="w-[120px] flex-row items-center justify-center gap-1 rounded-full bg-orange-500 p-2">
                          <Entypo
                            name="shopping-cart"
                            size={15}
                            color="white"
                          />
                          <Text className="rounded-md text-sm text-white">
                            Add to cart
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View className="w-[150px]">
                    <Image
                      source={require('../../../assets/images/05.jpg')}
                      className="h-40 w-full rounded-md"
                      resizeMode="cover"
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="w-full">
                <View className="flex-row items-center justify-between rounded-md border border-gray-100/50 bg-white shadow-sm">
                  <View className="flex-1 pl-5">
                    <Text className="py-2 text-[16px]">
                      Xe Moto 2025 moi nhat
                    </Text>
                    <View>
                      <View className="flex-row items-center">
                        <Entypo name="star" size={15} color="orange" />
                        <Entypo name="star" size={15} color="orange" />
                        <Entypo name="star" size={15} color="orange" />
                        <Entypo name="star" size={15} color="orange" />
                        <Entypo name="star" size={15} color="orange" />
                      </View>
                      <Text className="mt-2 text-[20px] font-bold text-red-500">
                        200 $
                      </Text>
                      <TouchableOpacity className="mt-2">
                        <View className="w-[120px] flex-row items-center justify-center gap-1 rounded-full bg-orange-500 p-2">
                          <Entypo
                            name="shopping-cart"
                            size={15}
                            color="white"
                          />
                          <Text className="rounded-md text-sm text-white">
                            Add to cart
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View className="w-[150px]">
                    <Image
                      source={require('../../../assets/images/03.png')}
                      className="h-40 w-full rounded-md"
                      resizeMode="cover"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
