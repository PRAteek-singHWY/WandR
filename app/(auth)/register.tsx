import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

const SignIn = () => {
  const { refetch, loading, isLogged } = useGlobalContext();
  if (!loading && isLogged) {
    router.push("/(main)/(cohort)/cohort_searching");
  }

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  const handleCreate = () => {
    router.push({
      pathname: "/(auth)/finish_registering",
    });
  };

  const { mode } = useLocalSearchParams(); //this reads mode params

  // Track whether we're in Sign In or Sign Up mode
  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    if (mode === "signup") {
      setIsSignIn(false);
    } else if (mode === "login") {
      setIsSignIn(true);
    }
  }, [mode]);

  return (
    <SafeAreaView className=" flex-1 px-5 pt-10 h-screen">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          {/* Logo */}
          {/* <View className="items-center mb-7">
            <Ionicons name="leaf" size={48} color="#07b07a" />
          </View> */}

          <View style={{ alignItems: "center", marginBottom: 28 }}>
            <Image
              source={images.favicon}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
                borderRadius: 10, // half of width/height → makes it perfectly round

                tintColor: "#07b07a", // your theme green
                opacity: 0.7,
                backgroundColor: "#fff", // optional: white background behind the image
              }}
            />
          </View>

          {/* Header Text */}
          <Text className="text-black-100 text-2xl font-bold text-center mb-1">
            {isSignIn ? "Welcome back" : "Get Started"}
          </Text>
          <Text className="text-gray-400 text-center mb-7">
            {isSignIn
              ? "Login to your WandR account"
              : "Join WandR and start traveling smarter"}
          </Text>

          {/* Toggle Tabs for Sign In / Sign Up */}
          <View className="flex-row w-full rounded-full  mb-7">
            {/* Sign Up Tab */}
            <TouchableOpacity
              className={`flex-1 py-3 items-center rounded-full ${
                !isSignIn ? "bg-[#07b07a]" : "bg-gray-300"
              }`}
              onPress={() => setIsSignIn(false)}
            >
              <Text
                className={`font-semibold ${
                  !isSignIn ? "text-white" : "text-[#07b07a]"
                }`}
              >
                Sign Up
              </Text>
            </TouchableOpacity>

            {/* Sign In Tab */}
            <TouchableOpacity
              className={`flex-1 py-3 items-center rounded-full ${
                isSignIn ? "bg-[#07b07a]" : "bg-gray-300"
              }`}
              onPress={() => setIsSignIn(true)}
            >
              <Text
                className={`font-semibold ${
                  isSignIn ? "text-white" : "text-[#07b07a]"
                }`}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>

          {/* === SIGN IN FORM === */}
          {isSignIn ? (
            <>
              {/* Email Input */}
              <Text className="text-gray-400 mb-1 font-medium">
                Email or Phone
              </Text>
              <TextInput
                className="border border-[#07b07a] text-gray-400 px-4 py-3 rounded-lg mb-4 font-medium"
                placeholder="Enter your email or phone"
                placeholderTextColor="#7a7a7a"
              />

              {/* Password Input */}
              <Text className="text-gray-400 mb-1 font-medium">Password</Text>
              <TextInput
                className=" border border-[#07b07a] text-gray-400 px-4 py-3 rounded-lg mb-2 font-medium"
                placeholder="Enter your password"
                placeholderTextColor="#7a7a7a"
                secureTextEntry
              />

              {/* Forgot Password Link */}
              <View className="flex-row justify-end mb-7">
                <TouchableOpacity>
                  <Text className="text-[#07b07a] font-medium">
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Login Button */}
              <TouchableOpacity className="bg-[#07b07a] py-3 rounded-lg items-center mb-7">
                <Text className="text-white text-lg font-bold">Login</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {/* === SIGN UP FORM === */}

              {/* Full Name */}
              <Text className="text-gray-400 mb-1 font-medium">Full Name</Text>
              <TextInput
                className="border border-[#07b07a] text-gray-400 px-4 py-3 rounded-lg mb-4 font-medium"
                placeholder="Enter your full name"
                placeholderTextColor="#7a7a7a"
              />

              {/* Email */}
              <Text className="text-gray-400 mb-1 font-medium">Email</Text>
              <TextInput
                className="border border-[#07b07a] text-gray-400 px-4 py-3 rounded-lg mb-4 font-medium"
                placeholder="Enter your email"
                placeholderTextColor="#7a7a7a"
                keyboardType="email-address"
              />

              {/* Phone */}
              <Text className="text-gray-400 mb-1 font-medium">
                Phone Number
              </Text>
              <TextInput
                className="border border-[#07b07a] text-gray-400 px-4 py-3 rounded-lg mb-4 font-medium"
                placeholder="Enter your phone number"
                placeholderTextColor="#7a7a7a"
                keyboardType="phone-pad"
              />

              {/* Password */}
              <Text className="text-gray-400 mb-1 font-medium">Password</Text>
              <TextInput
                className="border border-[#07b07a] text-gray-400 px-4 py-3 rounded-lg mb-4 font-medium"
                placeholder="Create a password"
                placeholderTextColor="#7a7a7a"
                secureTextEntry
              />

              {/* Sign Up Button */}
              <TouchableOpacity
                onPress={handleCreate}
                className="bg-[#07b07a] py-3 rounded-lg items-center mb-7"
              >
                <Text className="text-white text-lg font-bold">
                  Create Account
                </Text>
              </TouchableOpacity>
            </>
          )}

          {/* Divider Line */}
          <View className="flex-row items-center mb-7">
            <View className="flex-1 h-px bg-[#22262e]" />
            <Text className="text-gray-400 mx-3">or continue with</Text>
            <View className="flex-1 h-px bg-[#22262e]" />
          </View>

          {/* Social Buttons (Google + Apple) */}
          <View className="flex-row justify-center space-x-4 mb-7">
            <TouchableOpacity
              onPress={handleLogin}
              className="flex-row items-center bg-[#161b22] px-6 py-3 rounded-lg"
            >
              <Ionicons name="logo-google" size={20} color="white" />
              <Text className="text-white ml-2 font-semibold">Google</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center bg-[#161b22] ml-2 px-6 py-3 rounded-lg">
              <Ionicons name="logo-apple" size={20} color="white" />
              <Text className="text-white ml-2 font-semibold">Apple</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          {isSignIn ? (
            <Text className="text-center text-gray-400">
              New to WandR?{" "}
              <Text
                className="text-[#07b07a] font-semibold"
                onPress={() => setIsSignIn(false)}
              >
                Create an account
              </Text>
            </Text>
          ) : (
            <Text className="text-center text-gray-400">
              Already have an account?{" "}
              <Text
                className="text-[#07b07a] font-semibold"
                onPress={() => setIsSignIn(true)}
              >
                Login
              </Text>
            </Text>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
