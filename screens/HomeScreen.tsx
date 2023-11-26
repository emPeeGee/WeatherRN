import {
  Image,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../constants/theme';
import { CalendarDaysIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

export const HomeScreen = () => {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  const handleLocation = (loc: number): void => {
    console.log('123');
  };

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        className="absolute w-full h-full"
        source={require('../assets/images/bg.png')}
        blurRadius={70}
      />

      <SafeAreaView className="flex flex-1">
        {/* Search bar */}
        <View style={{ height: '7%' }} className="mx-4 relativee z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{
              // TODO: animate search bar appearance
              backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent',
            }}
          >
            {showSearch ? (
              <TextInput
                placeholder="Search city"
                placeholderTextColor="lightgray"
                className="pl-6 h-10 pb-1 flex-1 text-white text-base"
              />
            ) : null}
            <TouchableOpacity
              onPress={() => toggleSearch((prev) => !prev)}
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>
          </View>

          {locations.length > 0 && showSearch ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {locations.map((loc, idx) => {
                const showBorder = idx + 1 !== locations.length;
                const borderClass = showBorder
                  ? 'border-b-2 border-b-gray-400'
                  : '';

                return (
                  <TouchableOpacity
                    onPress={() => handleLocation(loc)}
                    key={idx}
                    className={`flex-row items-center border-0 p-3 px-4 mb-1 ${showBorder}`}
                  >
                    <MapPinIcon size={20} color="gray" />
                    <Text className="text-black text-lg-2 ml-2">
                      London, United Kinddom
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>

        {/* Forecast section  */}
        <View className="mx-4 flex justify-around  flex-1 mb-2">
          <Text className="text-white text-center text-2xl font-bold">
            London,
            <Text className="text-lg font-semibold text-gray-300">
              United Kingdom
            </Text>
          </Text>

          <View className="flex-row justify-center">
            <Image
              source={require('../assets/images/partlycloudy.png')}
              className="w-52 h-52"
            />
          </View>

          <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-5">
              23 &#176;
            </Text>
            <Text className="text-center text-white text-xl tracking-widest">
              Partly cloudy
            </Text>
          </View>

          <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require('../assets/icons/wind.png')}
                className="h-6 w-6"
              />

              <Text className="text-white font-semibold text-base">22km</Text>
            </View>

            <View className="flex-row space-x-2 items-center">
              <Image
                source={require('../assets/icons/drop.png')}
                className="h-6 w-6"
              />

              <Text className="text-white font-semibold text-base">23%</Text>
            </View>

            <View className="flex-row space-x-2 items-center">
              <Image
                source={require('../assets/icons/sun.png')}
                className="h-6 w-6"
              />

              <Text className="text-white font-semibold text-base">
                6:05 AM
              </Text>
            </View>
          </View>
        </View>

        {/* Forecast for next days */}
        <View className="mb-2 space-y-3">
          <View className="flex-row items-center mx-5 space-x-2">
            <CalendarDaysIcon size={22} color="white" />
            <Text className="text-white text-base">Daily forecast</Text>
          </View>

          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
          >
            {new Array(7).fill(0).map((_, idx) => {
              return (
                <View
                  className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                  style={{ backgroundColor: theme.bgWhite(0.15) }}
                >
                  <Image
                    source={require('../assets/images/heavyrain.png')}
                    className="h-11 w-11"
                  />
                  <Text className="text-white ">Monday</Text>
                  <Text className="text-white text-xl font-semibold">
                    23 &#176;
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};
