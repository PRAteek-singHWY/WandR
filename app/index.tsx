import images from "@/constants/images";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const imageList = [
  images.afterSplash,
  images.afterSplash2,
  images.afterSplash3,
];
const SignIn = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const handleGetStarted = () => {
    router.push({
      pathname: "/(auth)/register",
      params: { mode: "signup" },
    });
  };

  const handleLogin = () => {
    router.push({
      pathname: "/(auth)/register",
      params: { mode: "signin" },
    });
  };
  return (
    // safe area view becuase it ensures that whatever u r tryihng to show it safely fits within the borders of the screen no matter the screens size
    <SafeAreaView className=" h-full ">
      {/* allowing the user to scroll if thier device height is too small to see the whole thing in one go */}
      {/* <ScrollView contentContainerClassName="h-full"> */}
      <View className="px-10 mt-8">
        <Text className="mt-10 text-center font-rubrik font-extrabold text-[#07b07a] text-4xl">
          Welcome to WandR
        </Text>
        <Text className="text-[19.5px] mt-4 font-rubik-medium text-black-100 text-center ">
          Find travel buddies. {"\n"}
          <Text className="text-black-100">Travel cheaper together.</Text>
        </Text>
        {/* <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Log in to Restate with Google
          </Text> */}

        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          className="w-full h-80 mt-10" // You can tweak height or use h-[400px]
        >
          {imageList.map((img, index) => (
            <Image
              key={index}
              source={img}
              style={{
                width: width - 110,
                height: height * 0.3,
                marginHorizontal: 20,
                borderRadius: 10,
                overflow: "hidden",
              }}
              resizeMode="cover"
            />
          ))}
        </ScrollView>

        <View className="flex flex-row justify-center ">
          {imageList.map((_, i) => (
            <View
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                backgroundColor: activeIndex === i ? "#07b07a" : "#444",
                marginHorizontal: 5,
              }}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={handleGetStarted}
          className="bg-[#07b07a] rounded-full w-full py-5 mt-12  mb-4"
        >
          <Text className="text-xl font-rubik-medium text-white text-center">
            Get Started
          </Text>
          {/* <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View> */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogin}
          className="bg-transparent rounded-full border-2 border-[#07b07a] w-full py-5 mb-16 "
        >
          <Text className="text-xl font-rubik-medium text-[#07b07a] ml-2 text-center">
            Login
          </Text>
          {/* <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View> */}
        </TouchableOpacity>
        <Text
          onPress={() => {}}
          className="text-center text-[15px] text-black-100 font-rubik-medium"
        >
          Terms & Privacy
        </Text>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default SignIn;

// select cate_id, sum(receive_qty*purch_price) from table group by (cate_id);
// aggregate case joins self joins ordering group by
// print instead of update
