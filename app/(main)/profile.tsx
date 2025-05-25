import { getCurrentUser, logout } from "@/lib/appwrite";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  // Fetch current user on mount
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null); // Clear user info from state
  };

  const handleLoginRedirect = () => {
    router.push("/(auth)/register");
  };

  return (
    <ScrollView className="flex-1 bg-white px-4 py-6">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-2xl font-bold">Profile</Text>
        <View className="relative">
          <View className="w-10 h-10 bg-gray-200 rounded-full items-center justify-center">
            <Text className="text-xl">🔔</Text>
          </View>
          <View className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </View>
      </View>

      {/* If user is logged in */}
      {user ? (
        <>
          {/* User Info */}
          <View className="items-center mb-6">
            {user?.avatar ? (
              <Image
                source={{ uri: user.avatar }}
                className="w-24 h-24 rounded-full mb-2"
                resizeMode="cover"
              />
            ) : (
              <View className="w-24 h-24 rounded-full bg-[#07b07a] items-center justify-center mb-2">
                <Text className="text-white text-3xl font-bold">
                  {user?.name?.charAt(0) || "U"}
                </Text>
              </View>
            )}
            <Text className="text-xl font-semibold">{user?.name}</Text>
            <Text className="text-gray-500">{user?.email}</Text>
          </View>

          {/* Action Cards */}
          <View className="flex-row justify-between mb-6">
            <Card title="Past Trips" icon="🧳" badge="NEW" />
            <Card title="Connections" icon="🧑🏾‍🤝‍🧑🏼" badge="NEW" />
          </View>

          {/* Settings Options */}
          <OptionRow title="Account settings" />
          <OptionRow title="Get help" />
          <OptionRow title="View profile" />

          {/* Logout Button */}
          <Pressable
            onPress={handleLogout}
            className="mt-8 bg-[#07b07a] py-3 rounded-xl items-center"
          >
            <Text className="text-white text-base font-semibold">Log Out</Text>
          </Pressable>
        </>
      ) : (
        // Show login button when user is not logged in
        <View className="items-center mt-20">
          <Text className="text-lg mb-4 text-gray-500">
            You're not logged in.
          </Text>
          <Pressable
            onPress={handleLoginRedirect}
            className="bg-[#07b07a] py-3 px-6 rounded-xl"
          >
            <Text className="text-white font-semibold text-base">Log In</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

function Card({
  title,
  icon,
  badge,
}: {
  title: string;
  icon: string;
  badge: string;
}) {
  return (
    <View className="bg-gray-50 rounded-2xl p-4 w-[48%] shadow">
      <Text className="text-3xl mb-2">{icon}</Text>
      <Text className="font-semibold">{title}</Text>
      <Text className="text-xs text-white bg-[#07b07a] rounded-full px-2 py-0.5 mt-1 w-fit">
        {badge}
      </Text>
    </View>
  );
}

function OptionRow({ title }: { title: string }) {
  return (
    <View className="flex-row justify-between items-center mt-4">
      <View className="flex-row items-center space-x-2">
        <Text className="text-xl">⚙️</Text>
        <Text className="text-sm">{title}</Text>
      </View>
      <Text className="text-xl">›</Text>
    </View>
  );
}
