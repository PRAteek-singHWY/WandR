import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "../global.css";

// loading all our fonts
import GlobalProvider from "@/lib/global-provider";
import { useFonts } from "expo-font";
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  // for spalsh screen
  useEffect(() => {
    // if fonts loaded we can hide the splash screen
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }} />;
    </GlobalProvider>
  );
}
// 37:34
