import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import images from "@/constants/images";

const locationData = [
  {
    id: "1",
    name: "Bali, Indonesia 🇮🇩",
    image: images.bali, // ✅ attach the actual image here
    season: "Summer Season",
    tags: ["Beaches", "Hiking", "Nightlife"],
    match: "98% Match",
    price: "$1,299",
    weather: "Warm",
    groupMax: 5,
    continent: "Asia",
    timeZone: "GMT+8",
  },
  {
    id: "2",
    name: "Santorini, Greece 🇬🇷",
    image: images.santoriniSailing,
    season: "Spring Season",
    tags: ["Sightseeing", "Cuisine", "Culture"],
    match: "95% Match",
    price: "$2,199",
    weather: "Mild",
    groupMax: 3,
    continent: "Europe",
    timeZone: "GMT+2",
  },
  {
    id: "3",
    name: "Costa Rica 🇨🇷",
    image: images.costaricaYoga,
    season: "Green Season",
    tags: ["Adventure", "Surfing", "Nature"],
    match: "92% Match",
    price: "$1,599",
    weather: "Warm",
    groupMax: 7,
    continent: "North America",
    timeZone: "GMT-6",
  },
  {
    id: "4",
    name: "Kyoto, Japan 🇯🇵",
    image: images.kyoto,
    season: "Autumn Season",
    tags: ["Temples", "Cherry Blossoms", "Culture"],
    match: "90% Match",
    price: "$1,899",
    weather: "Mild",
    groupMax: 4,
    continent: "Asia",
    timeZone: "GMT+9",
  },

  {
    id: "5",
    name: "India 🇮🇳",
    image: images.india,
    season: "Winter Season",
    tags: ["Taj Mahal", "Spirituality", "Festivals"],
    match: "88% Match",
    price: "$1,499",
    weather: "Pleasant",
    groupMax: 6,
    continent: "Asia",
    timeZone: "GMT+5:30",
  },
];

const weatherOptions = ["Warm", "Cold", "Mild", "Tropical"];
const groupSizes = [3, 5, 7];
const continents = [
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Africa",
  "Oceania",
];
const timeZones = ["GMT+8", "GMT+2", "GMT-6", "GMT-5", "GMT+0"];

// ✅ Define types

interface Location {
  id: string;
  name: string;
  image: any; // ✅ holds the imported image
  season: string;
  tags: string[];
  match: string;
  price: string;
  weather: string;
  groupMax: number;
  continent: string;
  timeZone: string;
}

interface LocationCardProps {
  location: Location;
}

// ✅ Component
const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  const handleCheckCohorts = () => {
    const fullName = location.name;

    const parts = fullName.split(",");
    let country = parts.length > 1 ? parts[1].trim() : parts[0].trim();
    country = country.replace(/[\u{1F1E6}-\u{1F1FF}]/gu, "").trim();

    router.push({
      pathname: "/(main)/(cohort)/cohort",
      params: { locationName: country },
    });
  };

  return (
    <ImageBackground
      source={location.image} // ✅ direct image reference
      style={styles.cardBackground}
      imageStyle={{ borderRadius: 12, opacity: 0.3 }}
    >
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.destinationText}>{location.name}</Text>
          <View style={styles.matchTag}>
            <Text style={styles.matchText}>{location.match}</Text>
          </View>
        </View>

        <Text style={styles.seasonText}>{location.season}</Text>

        <View style={styles.tagContainer}>
          {location.tags.map((tag, i) => (
            <View key={i} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.priceText}>{location.price}</Text>
          <TouchableOpacity
            style={styles.customizeButton}
            onPress={handleCheckCohorts}
          >
            <Text style={styles.customizeText}>Check cohorts</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default function CohortSearchingScreen() {
  const [searchText, setSearchText] = useState("");
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filterWeather, setFilterWeather] = useState(null);
  const [filterGroupSize, setFilterGroupSize] = useState(null);
  const [filterContinents, setFilterContinents] = useState([]);
  const [filterTimeZones, setFilterTimeZones] = useState([]);

  const toggleContinent = (continent) => {
    if (filterContinents.includes(continent)) {
      setFilterContinents(filterContinents.filter((c) => c !== continent));
    } else {
      setFilterContinents([...filterContinents, continent]);
    }
  };

  const toggleTimeZone = (tz) => {
    if (filterTimeZones.includes(tz)) {
      setFilterTimeZones(filterTimeZones.filter((t) => t !== tz));
    } else {
      setFilterTimeZones([...filterTimeZones, tz]);
    }
  };

  const filteredLocations = useMemo(() => {
    return locationData.filter((loc) => {
      const matchSearch = loc.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const matchWeather = filterWeather ? loc.weather === filterWeather : true;
      const matchGroup = filterGroupSize
        ? loc.groupMax <= filterGroupSize
        : true;
      const matchContinent =
        filterContinents.length > 0
          ? filterContinents.includes(loc.continent)
          : true;
      const matchTimeZone =
        filterTimeZones.length > 0
          ? filterTimeZones.includes(loc.timeZone)
          : true;

      return (
        matchSearch &&
        matchWeather &&
        matchGroup &&
        matchContinent &&
        matchTimeZone
      );
    });
  }, [
    searchText,
    filterWeather,
    filterGroupSize,
    filterContinents,
    filterTimeZones,
  ]);

  return (
    <ScrollView style={styles.container1}>
      <SafeAreaView style={styles.container}>
        {/* <Text style={styles.headerText}>Find Your Travel Cohort</Text>
      <Text style={styles.subText}>Tailor your search with filters</Text> */}

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Start Your Search"
            placeholderTextColor="#666"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <TouchableOpacity
          onPress={() => setFilterModalVisible(!filterModalVisible)}
          style={styles.filterButton}
        >
          <Text style={styles.filterButtonText}>
            {filterModalVisible ? "Hide Filters" : "Show Filters"}
          </Text>
        </TouchableOpacity>

        {filterModalVisible && (
          <View style={styles.filterCard}>
            <Text style={styles.sectionTitle}>Weather Preference</Text>
            <View style={styles.filterOptions}>
              {weatherOptions.map((weather) => (
                <TouchableOpacity
                  key={weather}
                  onPress={() =>
                    setFilterWeather(filterWeather === weather ? null : weather)
                  }
                  style={[
                    styles.pillButton,
                    filterWeather === weather && styles.pillButtonSelected,
                  ]}
                >
                  <Text style={styles.pillButtonText}>{weather}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.sectionTitle}>Max Group Size</Text>
            <View style={styles.filterOptions}>
              {groupSizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  onPress={() =>
                    setFilterGroupSize(filterGroupSize === size ? null : size)
                  }
                  style={[
                    styles.pillButton,
                    filterGroupSize === size && styles.pillButtonSelected,
                  ]}
                >
                  <Text style={styles.pillButtonText}>{`≤ ${size}`}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.sectionTitle}>Continents</Text>
            <View style={styles.filterOptions}>
              {continents.map((continent) => (
                <TouchableOpacity
                  key={continent}
                  onPress={() => toggleContinent(continent)}
                  style={[
                    styles.pillButton,
                    filterContinents.includes(continent) &&
                      styles.pillButtonSelected,
                  ]}
                >
                  <Text style={styles.pillButtonText}>{continent}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.sectionTitle}>Time Zones</Text>
            <View style={styles.filterOptions}>
              {timeZones.map((tz) => (
                <TouchableOpacity
                  key={tz}
                  onPress={() => toggleTimeZone(tz)}
                  style={[
                    styles.pillButton,
                    filterTimeZones.includes(tz) && styles.pillButtonSelected,
                  ]}
                >
                  <Text style={styles.pillButtonText}>{tz}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.bottomButtons}>
              <TouchableOpacity
                onPress={() => {
                  setFilterWeather(null);
                  setFilterGroupSize(null);
                  setFilterContinents([]);
                  setFilterTimeZones([]);
                }}
                style={styles.resetButton}
              >
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setFilterModalVisible(false)}
                style={styles.findButton}
              >
                <Text style={styles.findButtonText}>Find Cohort</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))
        ) : (
          <Text style={styles.noResultsText}>
            No matching destinations found.
          </Text>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   // styles as provided
// });

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 6,
    // paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // White background
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  scrollView: {
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111111", // Dark text
  },
  subText: {
    fontSize: 14,
    color: "#666", // Mid-gray
    marginBottom: 16,
  },
  cardBackground: {
    width: "100%", // ✅ stretch full width of parent/container
    height: 200, // ✅ set a fixed height or use minHeight
    borderRadius: 12,
    overflow: "hidden", // ✅ clip corners for rounded effect
    marginBottom: 20,
  },
  card: {
    flex: 1, // ✅ fill inside the ImageBackground
    justifyContent: "space-between", // adjust as needed
    // backgroundColor: "rgba(245, 245, 245, 0.8)", // ✅ slightly transparent background
    padding: 16,
    borderRadius: 12,
    borderColor: "#e0e0e0",
    borderWidth: 1,
  },

  destinationText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111111",
  },
  seasonText: {
    fontSize: 14,
    color: "#07b07a",
    marginVertical: 4,
    fontWeight: "600",
  },
  matchTag: {
    backgroundColor: "#d9f2ea", // Soft green background
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  matchText: {
    color: "#07b07a",
    fontWeight: "600",
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 8,
  },
  tag: {
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: "#333",
    fontSize: 12,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#07b07a",
  },
  customizeButton: {
    backgroundColor: "#07b07a",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  customizeText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 50,
    marginBottom: 12,
    height: 40,
    paddingHorizontal: 12,
    alignSelf: "center",
    width: "90%",
    maxWidth: 500,
  },

  searchInput: {
    flex: 1,
    color: "#111",
    fontSize: 14,
    textAlign: "center",
  },

  filtersPanel: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  filterTitle: {
    color: "#07b07a",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 8,
  },
  filterOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  filterOption: {
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    marginBottom: 8,
  },
  filterOptionSelected: {
    backgroundColor: "#07b07a",
  },
  filterOptionText: {
    color: "#333",
    fontWeight: "600",
    fontSize: 14,
  },
  filterOptionTextSelected: {
    color: "#ffffff",
  },
  noResultsText: {
    color: "#999",
    fontStyle: "italic",
    marginTop: 20,
    textAlign: "center",
  },
  filterButton: {
    backgroundColor: "#07b07a",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 12,
    marginLeft: 3,
  },
  filterButtonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 14,
  },
  filterCard: {
    backgroundColor: "#f5f5f5",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    color: "#111",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  pillButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  pillButtonSelected: {
    backgroundColor: "#07b07a",
  },
  pillButtonText: {
    color: "#111",
    fontWeight: "600",
    marginLeft: 6,
  },
  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: "#111",
    marginBottom: 12,
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  resetButton: {
    flex: 1,
    borderColor: "#07b07a",
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    marginRight: 8,
  },
  resetButtonText: {
    color: "#07b07a",
    fontWeight: "bold",
    fontSize: 16,
  },
  findButton: {
    flex: 1,
    backgroundColor: "#07b07a",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    marginLeft: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  findButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8,
  },
});
