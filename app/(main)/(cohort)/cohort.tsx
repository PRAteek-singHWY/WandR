import images from "@/constants/images";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Expanded demo cohorts
const allCohortsData = [
  // Indonesia
  {
    id: "1",
    title: "Bali Adventure Squad",
    location: "Indonesia",
    tags: ["Hiking", "Surfing", "Photography"],
    members: 3,
    capacity: 6,
    daysLeft: 5,
    image: images.baliAdventure,
  },
  {
    id: "2",
    title: "Jakarta City Explorers",
    location: "Indonesia",
    tags: ["Food", "Culture", "Nightlife"],
    members: 4,
    capacity: 8,
    daysLeft: 3,
    image: images.jakarta,
  },
  {
    id: "3",
    title: "Lombok Surf Tribe",
    location: "Indonesia",
    tags: ["Surfing", "Beaches", "Adventure"],
    members: 2,
    capacity: 5,
    daysLeft: 6,
    image: images.lombok,
  },
  {
    id: "4",
    title: "Ubud Wellness Retreat",
    location: "Indonesia",
    tags: ["Yoga", "Wellness", "Detox"],
    members: 5,
    capacity: 7,
    daysLeft: 4,
    image: images.ubud,
  },

  // Japan
  {
    id: "5",
    title: "Tokyo Tech Nomads",
    location: "Japan",
    tags: ["Coworking", "Tech", "Nightlife"],
    members: 3,
    capacity: 6,
    daysLeft: 7,
    image: images.tokyoTech,
  },
  {
    id: "6",
    title: "Kyoto Temple Walkers",
    location: "Japan",
    tags: ["Culture", "Temples", "History"],
    members: 4,
    capacity: 8,
    daysLeft: 2,
    image: images.kyoto,
  },
  {
    id: "7",
    title: "Osaka Foodies",
    location: "Japan",
    tags: ["Cuisine", "Street Food", "Markets"],
    members: 2,
    capacity: 5,
    daysLeft: 5,
    image: images.osaka,
  },
  {
    id: "8",
    title: "Hokkaido Snow Seekers",
    location: "Japan",
    tags: ["Skiing", "Snowboarding", "Adventure"],
    members: 3,
    capacity: 7,
    daysLeft: 6,
    image: images.hokkaido,
  },

  // Santorini (Greece)
  {
    id: "9",
    title: "Santorini Sunset Chasers",
    location: "Greece",
    tags: ["Romance", "Photography", "Wine Tasting"],
    members: 4,
    capacity: 8,
    daysLeft: 2,
    image: images.santoriniSunset,
  },
  {
    id: "10",
    title: "Santorini Sailors",
    location: "Greece",
    tags: ["Sailing", "Adventure", "Sea"],
    members: 3,
    capacity: 6,
    daysLeft: 5,
    image: images.santoriniSailing,
  },
  {
    id: "11",
    title: "Santorini Food Lovers",
    location: "Greece",
    tags: ["Cuisine", "Cooking", "Culture"],
    members: 2,
    capacity: 5,
    daysLeft: 4,
    image: images.santoriniFood,
  },

  // Costa Rica
  {
    id: "12",
    title: "Costa Rica Eco Explorers",
    location: "Costa Rica",
    tags: ["Wildlife", "Hiking", "Surfing"],
    members: 2,
    capacity: 5,
    daysLeft: 4,
    image: images.costaricaEco,
  },
  {
    id: "13",
    title: "Costa Rica Surf Camp",
    location: "Costa Rica",
    tags: ["Surfing", "Beaches", "Adventure"],
    members: 5,
    capacity: 8,
    daysLeft: 6,
    image: images.costaricaSurf,
  },
  {
    id: "14",
    title: "Costa Rica Nature Photographers",
    location: "Costa Rica",
    tags: ["Photography", "Rainforest", "Wildlife"],
    members: 3,
    capacity: 7,
    daysLeft: 3,
    image: images.costaricaPhoto,
  },
  {
    id: "15",
    title: "Costa Rica Yoga Retreat",
    location: "Costa Rica",
    tags: ["Yoga", "Wellness", "Nature"],
    members: 4,
    capacity: 6,
    daysLeft: 5,
    image: images.costaricaYoga,
  },
  {
    id: "16",
    title: "Goa Beach Escape",
    location: "Goa India",
    tags: ["Beaches", "Parties", "Relaxation"],
    members: 3,
    capacity: 6,
    daysLeft: 7,
    image: images.goaBeach,
  },

  {
    id: "17",
    title: "Chikmagalur Coffee Retreat",
    location: "Chikmagalur India",
    tags: ["Coffee Plantations", "Trekking", "Nature"],
    members: 2,
    capacity: 5,
    daysLeft: 10,
    image: images.chikmagalurRetreat,
  },

  {
    id: "18",
    title: "Manali Mountain Adventure",
    location: "Manali India",
    tags: ["Mountains", "Adventure", "Snow"],
    members: 4,
    capacity: 8,
    daysLeft: 6,
    image: images.manaliAdventure,
  },
];

const CohortsScreen = () => {
  const { locationName } = useLocalSearchParams(); // Get the passed location name

  // Filter cohorts by location (case-insensitive)
  const filteredCohorts = allCohortsData.filter((cohort) =>
    cohort.location
      .toLowerCase()
      .includes(locationName?.toString().toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Discover Cohorts in {locationName}</Text>

      {filteredCohorts.length === 0 ? (
        <Text style={styles.noResults}>
          No cohorts found for {locationName}. Check back soon!
        </Text>
      ) : (
        filteredCohorts.map((cohort, index) => (
          <View key={index} style={styles.card}>
            <Image source={cohort.image} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{cohort.title}</Text>
              <Text style={styles.subtitle}>{cohort.location}</Text>
              <View style={styles.tags}>
                {cohort.tags.map((tag) => (
                  <Text key={tag} style={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </View>
              <Text style={styles.members}>
                {cohort.members}/{cohort.capacity} joined
              </Text>
              <Text style={styles.daysLeft}>
                {cohort.daysLeft} days left to unlock travel!
              </Text>
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/(main)/(cohort)/cohort-details",
                    params: { id: cohort.id },
                  })
                }
                style={styles.button}
              >
                <Text style={styles.buttonText}>Insights</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}

      <Text style={styles.footer}>
        Discover your perfect travel buddies and bond before you travel!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    color: "#07b07a",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  noResults: {
    color: "#555555",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    marginBottom: 24,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  image: {
    width: "100%",
    height: 160,
  },
  cardContent: {
    padding: 12,
  },
  title: {
    color: "#222222",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#555555",
    fontSize: 14,
    marginBottom: 6,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 8,
  },
  tag: {
    backgroundColor: "#e6f7f2",
    color: "#07b07a",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    fontSize: 12,
    borderColor: "#07b07a",
    borderWidth: 1,
  },
  members: {
    color: "#07b07a",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 4,
  },
  daysLeft: {
    color: "#07b07a",
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#07b07a",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 15,
  },
  footer: {
    textAlign: "center",
    color: "#888888",
    fontSize: 13,
    marginTop: 20,
    marginBottom: 40,
  },
});

export default CohortsScreen;
