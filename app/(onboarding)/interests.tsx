import images from "@/constants/images";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const INTERESTS = [
  { id: "1", title: "Adventure", image: images.adventure },
  { id: "2", title: "Beaches", image: images.beaches },
  { id: "3", title: "Culture", image: images.culture },
  { id: "4", title: "Food", image: images.food },
  { id: "5", title: "Nature", image: images.nature },
  { id: "6", title: "Nightlife", image: images.nightlife },
  { id: "7", title: "Mountains", image: images.mountains },
  { id: "8", title: "Road Trips", image: images.roadtrips },
];

const InterestsScreen = ({ navigation }: any) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.cardWrapper}
      onPress={() => toggleSelect(item.id)}
    >
      <ImageBackground
        source={item.image}
        style={styles.cardImage}
        imageStyle={{ borderRadius: 12 }}
      >
        <View
          style={[
            styles.overlay,
            selected.includes(item.id) && styles.overlaySelected,
          ]}
        />
        <Text style={styles.cardText}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text className="text-gray-500" style={styles.heading}>
          Choose Your Interests
        </Text>
        <Text style={styles.subheading}>Select all that apply</Text>

        <FlatList
          data={INTERESTS}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => router.push("/(main)/(cohort)/cohort_searching")}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(main)/(cohort)/cohort_searching")}
          >
            <Text style={styles.skip}>Skip for now</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>
            You can update your interests anytime from settings
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20, // slightly reduced from 50 for smaller screens
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 4,
  },
  subheading: {
    fontSize: 14,
    color: "#07b07a",
    marginBottom: 16,
  },
  row: {
    justifyContent: "space-between",
  },
  list: {
    paddingBottom: 20,
    flexGrow: 1, // makes sure the list fills space and pushes footer down
  },
  cardWrapper: {
    width: (width - 60) / 2,
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  cardImage: {
    height: 120,
    justifyContent: "flex-end",
    padding: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderRadius: 12,
  },
  overlaySelected: {
    backgroundColor: "rgba(7,176,122,0.4)",
  },
  cardText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonContainer: {
    paddingBottom: 20, // reserve space for bottom
  },
  nextButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#07b07a",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  skip: {
    textAlign: "center",
    marginTop: 12,
    color: "#07b07a",
    textDecorationLine: "underline",
  },
  footer: {
    textAlign: "center",
    marginTop: 6,
    color: "#07b07a",
    fontSize: 12,
  },
});

export default InterestsScreen;
