// import images from "@/constants/images";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import React, { useState } from "react";
// import {
//   Button,
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const cohortMap = {
//   "1": {
//     name: "Bali Adventure Squad",
//     image: images.baliAdventure,
//     travelDates: "July 5 - July 12, 2025",
//     offer: "Group discount available",
//     sharedInterests: ["Hiking", "Surfing", "Photography"],
//     itinerary: [
//       "Day 1: Beach Games",
//       "Day 2: Temple Run",
//       "Day 3: Surfing Lessons",
//     ],
//     members: [
//       { name: "Emma", location: "Australia" },
//       { name: "Sophie", location: "Netherlands" },
//       { name: "Arjun", location: "India" },
//     ],
//     perks: ["Free guided tours", "Welcome drinks"],
//   },
//   "2": {
//     name: "Jakarta City Explorers",
//     image: images.jakarta,
//     travelDates: "July 10 - July 17, 2025",
//     offer: "Early bird discount",
//     sharedInterests: ["Food", "Culture", "Nightlife"],
//     itinerary: [
//       "Day 1: Street Food Tour",
//       "Day 2: Museum Visit",
//       "Day 3: Night Market",
//     ],
//     members: [
//       { name: "Dina", location: "Indonesia" },
//       { name: "Mark", location: "USA" },
//       { name: "Yuki", location: "Japan" },
//       { name: "Leo", location: "Brazil" },
//     ],
//     perks: ["Free metro card", "Discounted museum tickets"],
//   },
//   "3": {
//     name: "Lombok Surf Tribe",
//     image: images.lombok,
//     travelDates: "August 1 - August 7, 2025",
//     offer: "Free surfboard rental",
//     sharedInterests: ["Surfing", "Beaches", "Adventure"],
//     itinerary: [
//       "Day 1: Surf Camp",
//       "Day 2: Island Hopping",
//       "Day 3: Sunset Cruise",
//     ],
//     members: [
//       { name: "Maya", location: "Australia" },
//       { name: "Jack", location: "USA" },
//     ],
//     perks: ["Free surf lessons", "Beach bonfire party"],
//   },
//   "4": {
//     name: "Ubud Wellness Retreat",
//     image: images.ubud,
//     travelDates: "September 15 - September 22, 2025",
//     offer: "Spa voucher included",
//     sharedInterests: ["Yoga", "Wellness", "Detox"],
//     itinerary: [
//       "Day 1: Yoga Workshop",
//       "Day 2: Meditation Walk",
//       "Day 3: Spa Day",
//     ],
//     members: [
//       { name: "Sara", location: "India" },
//       { name: "Emily", location: "UK" },
//       { name: "Lucas", location: "France" },
//       { name: "Anna", location: "Germany" },
//       { name: "Ben", location: "USA" },
//     ],
//     perks: ["Free massage session", "Daily green juice"],
//   },
//   "5": {
//     name: "Tokyo Tech Nomads",
//     image: images.tokyo,
//     travelDates: "October 10 - October 17, 2025",
//     offer: "Coworking pass included",
//     sharedInterests: ["Coworking", "Tech", "Nightlife"],
//     itinerary: [
//       "Day 1: Startup Tour",
//       "Day 2: Tech Meetups",
//       "Day 3: Karaoke Night",
//     ],
//     members: [
//       { name: "Kenji", location: "Japan" },
//       { name: "Sophia", location: "Canada" },
//       { name: "Raj", location: "India" },
//     ],
//     perks: ["Free coworking access", "Metro pass"],
//   },
//   "6": {
//     name: "Kyoto Temple Walkers",
//     image: images.kyoto,
//     travelDates: "November 5 - November 12, 2025",
//     offer: "Cultural pass included",
//     sharedInterests: ["Culture", "Temples", "History"],
//     itinerary: [
//       "Day 1: Temple Tour",
//       "Day 2: Tea Ceremony",
//       "Day 3: Kimono Experience",
//     ],
//     members: [
//       { name: "Aiko", location: "Japan" },
//       { name: "Liam", location: "UK" },
//       { name: "Chloe", location: "Australia" },
//       { name: "Marco", location: "Italy" },
//     ],
//     perks: ["Discounted entry tickets", "Free kimono rental"],
//   },
//   "7": {
//     name: "Osaka Foodies",
//     image: images.osaka,
//     travelDates: "December 1 - December 8, 2025",
//     offer: "Food tour included",
//     sharedInterests: ["Cuisine", "Street Food", "Markets"],
//     itinerary: [
//       "Day 1: Dotonbori Tour",
//       "Day 2: Cooking Class",
//       "Day 3: Market Visit",
//     ],
//     members: [
//       { name: "Satoshi", location: "Japan" },
//       { name: "Mia", location: "USA" },
//     ],
//     perks: ["Free food samples", "Cooking class voucher"],
//   },
//   "8": {
//     name: "Hokkaido Snow Seekers",
//     image: images.hokkaido,
//     travelDates: "January 15 - January 22, 2026",
//     offer: "Ski pass discount",
//     sharedInterests: ["Skiing", "Snowboarding", "Adventure"],
//     itinerary: [
//       "Day 1: Ski Lessons",
//       "Day 2: Snowboard Park",
//       "Day 3: Hot Springs",
//     ],
//     members: [
//       { name: "Ethan", location: "Canada" },
//       { name: "Hana", location: "Japan" },
//       { name: "Tom", location: "UK" },
//     ],
//     perks: ["Free ski rental", "Discounted lift tickets"],
//   },
//   "9": {
//     name: "Santorini Sunset Chasers",
//     image: images.santoriniSunset,
//     travelDates: "April 10 - April 17, 2026",
//     offer: "Wine tasting included",
//     sharedInterests: ["Romance", "Photography", "Wine Tasting"],
//     itinerary: [
//       "Day 1: Sunset Tour",
//       "Day 2: Wine Tasting",
//       "Day 3: Island Hike",
//     ],
//     members: [
//       { name: "Sophia", location: "Greece" },
//       { name: "Luca", location: "Italy" },
//       { name: "Maya", location: "USA" },
//       { name: "Alex", location: "UK" },
//     ],
//     perks: ["Free wine tour", "Couples’ photoshoot"],
//   },
//   "10": {
//     name: "Santorini Sailors",
//     image: images.santoriniSailing,
//     travelDates: "May 1 - May 8, 2026",
//     offer: "Sailing lessons included",
//     sharedInterests: ["Sailing", "Adventure", "Sea"],
//     itinerary: [
//       "Day 1: Sailing Lessons",
//       "Day 2: Island Hopping",
//       "Day 3: Beach Party",
//     ],
//     members: [
//       { name: "Nikos", location: "Greece" },
//       { name: "Ella", location: "Australia" },
//       { name: "Jake", location: "USA" },
//     ],
//     perks: ["Free sailing gear", "Beach BBQ"],
//   },
//   "11": {
//     name: "Santorini Food Lovers",
//     image: images.santoriniFood,
//     travelDates: "June 1 - June 7, 2026",
//     offer: "Cooking class included",
//     sharedInterests: ["Cuisine", "Cooking", "Culture"],
//     itinerary: [
//       "Day 1: Greek Cooking Class",
//       "Day 2: Market Tour",
//       "Day 3: Food Tasting",
//     ],
//     members: [
//       { name: "Maria", location: "Greece" },
//       { name: "Carlos", location: "Spain" },
//     ],
//     perks: ["Free cookbook", "Restaurant discounts"],
//   },
//   "12": {
//     name: "Costa Rica Eco Explorers",
//     image: images.costaricaEco,
//     travelDates: "July 10 - July 17, 2026",
//     offer: "Eco-lodge discount",
//     sharedInterests: ["Wildlife", "Hiking", "Surfing"],
//     itinerary: [
//       "Day 1: Rainforest Trek",
//       "Day 2: Surfing",
//       "Day 3: Wildlife Safari",
//     ],
//     members: [
//       { name: "Carlos", location: "Costa Rica" },
//       { name: "Maria", location: "Spain" },
//       { name: "Jake", location: "USA" },
//     ],
//     perks: ["Free breakfast", "Eco-lodge discounts"],
//   },
//   "13": {
//     name: "Costa Rica Surf Camp",
//     image: images.costaricaSurf,
//     travelDates: "August 1 - August 8, 2026",
//     offer: "Surfboard rental included",
//     sharedInterests: ["Surfing", "Beaches", "Adventure"],
//     itinerary: ["Day 1: Surf Camp", "Day 2: Beach Games", "Day 3: Sunset Surf"],
//     members: [
//       { name: "Liam", location: "Australia" },
//       { name: "Sofia", location: "Argentina" },
//       { name: "Noah", location: "USA" },
//       { name: "Emma", location: "Canada" },
//       { name: "Lucas", location: "Brazil" },
//     ],
//     perks: ["Free surf lessons", "Beach BBQ"],
//   },
//   "14": {
//     name: "Costa Rica Nature Photographers",
//     image: images.costaricaPhoto,
//     travelDates: "September 5 - September 12, 2026",
//     offer: "Photography workshop included",
//     sharedInterests: ["Photography", "Rainforest", "Wildlife"],
//     itinerary: [
//       "Day 1: Rainforest Shoot",
//       "Day 2: Wildlife Photography",
//       "Day 3: Editing Workshop",
//     ],
//     members: [
//       { name: "Olivia", location: "UK" },
//       { name: "Mateo", location: "Spain" },
//       { name: "Ava", location: "USA" },
//     ],
//     perks: ["Free photo prints", "Editing software trial"],
//   },
//   "15": {
//     name: "Costa Rica Yoga Retreat",
//     image: images.costaricaYoga,
//     travelDates: "October 1 - October 8, 2026",
//     offer: "Wellness package included",
//     sharedInterests: ["Yoga", "Wellness", "Nature"],
//     itinerary: [
//       "Day 1: Yoga Workshop",
//       "Day 2: Meditation Session",
//       "Day 3: Beach Yoga",
//     ],
//     members: [
//       { name: "Isabella", location: "Italy" },
//       { name: "Ethan", location: "USA" },
//       { name: "Mila", location: "Germany" },
//       { name: "Leo", location: "France" },
//     ],
//     perks: ["Free yoga mat", "Daily smoothies"],
//   },
// };

// export default function CohortDetailsScreen() {
//   const { id } = useLocalSearchParams<{ id: string }>();
//   const router = useRouter();
//   const cohort = cohortMap[id || "1"];
//   const [joined, setJoined] = useState(false);

//   const joinCohort = () => {
//     setJoined(true);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Image
//         source={cohort.image}
//         style={styles.coverImage}
//         resizeMode="cover"
//       />

//       <View style={styles.headerSection}>
//         <Text style={styles.mainTitle}>{cohort.name}</Text>
//         <Text style={styles.subTitle}>{cohort.travelDates}</Text>
//         <Text style={styles.offerText}>{cohort.offer}</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Members</Text>
//         {cohort.members.map((member, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.memberCard}
//             onPress={() => router.push(`/user-profile/${member.name}`)}
//           >
//             <Text style={styles.memberName}>{member.name}</Text>
//             <Text style={styles.memberLocation}>{member.location}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {!joined ? (
//         <Button title="Join This Cohort" onPress={joinCohort} color="#07b07a" />
//       ) : (
//         <Text style={styles.joinedText}>✅ You’re part of this cohort!</Text>
//       )}

//       <Button
//         title="Group Chat"
//         onPress={() => router.push(`/chat-room/${id}`)}
//         color="#334155"
//       />

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Shared Interests</Text>
//         <Text style={styles.infoText}>{cohort.sharedInterests.join(", ")}</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Itinerary</Text>
//         {cohort.itinerary.map((item, i) => (
//           <Text key={i} style={styles.infoText}>
//             {item}
//           </Text>
//         ))}
//       </View>

//       <Button
//         title="Vote for Dinner"
//         onPress={() => router.push(`/polls/${id}`)}
//         color="#3b82f6"
//       />

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Perks</Text>
//         <Text style={styles.infoText}>{cohort.perks.join(" • ")}</Text>
//       </View>

//       <Button
//         title="Book Now"
//         onPress={() => router.push(`/booking/${id}`)}
//         color="#10b981"
//       />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#ffffff",
//     padding: 16,
//   },
//   coverImage: {
//     width: "100%",
//     height: 220,
//     borderRadius: 20,
//     marginBottom: 16,
//   },
//   headerSection: {
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   mainTitle: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#07b07a",
//     marginBottom: 4,
//   },
//   subTitle: {
//     fontSize: 16,
//     color: "#374151",
//     marginBottom: 4,
//   },
//   offerText: {
//     fontSize: 14,
//     color: "#10b981",
//     fontStyle: "italic",
//   },
//   section: {
//     marginVertical: 12,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#07b07a",
//     marginBottom: 8,
//   },
//   memberCard: {
//     backgroundColor: "#f0fdf4",
//     padding: 12,
//     borderRadius: 10,
//     marginBottom: 8,
//     borderWidth: 1,
//     borderColor: "#10b981",
//   },
//   memberName: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#047857",
//   },
//   memberLocation: {
//     fontSize: 14,
//     color: "#065f46",
//   },
//   joinedText: {
//     textAlign: "center",
//     color: "#047857",
//     fontSize: 16,
//     fontWeight: "bold",
//     marginVertical: 12,
//   },
//   infoText: {
//     fontSize: 14,
//     color: "#065f46",
//     marginBottom: 4,
//   },
// });
import { useCohortStore } from "../../../store/cohortStore";

import images from "@/constants/images";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "react-native-paper";

const cohortMap = {
  "1": {
    name: "Bali Adventure Squad",
    image: images.baliAdventure,
    travelDates: "July 5 - July 12, 2025",
    offer: "Group discount available",
    sharedInterests: ["Hiking", "Surfing", "Photography"],
    itinerary: [
      "Day 1: Beach Games",
      "Day 2: Temple Run",
      "Day 3: Surfing Lessons",
    ],
    members: [
      { name: "Emma", location: "Australia" },
      { name: "Sophie", location: "Netherlands" },
      { name: "Arjun", location: "India" },
    ],
    perks: ["Free guided tours", "Welcome drinks"],
  },
  "2": {
    name: "Jakarta City Explorers",
    image: images.jakarta,
    travelDates: "July 10 - July 17, 2025",
    offer: "Early bird discount",
    sharedInterests: ["Food", "Culture", "Nightlife"],
    itinerary: [
      "Day 1: Street Food Tour",
      "Day 2: Museum Visit",
      "Day 3: Night Market",
    ],
    members: [
      { name: "Dina", location: "Indonesia" },
      { name: "Mark", location: "USA" },
      { name: "Yuki", location: "Japan" },
      { name: "Leo", location: "Brazil" },
    ],
    perks: ["Free metro card", "Discounted museum tickets"],
  },
  "3": {
    name: "Lombok Surf Tribe",
    image: images.lombok,
    travelDates: "August 1 - August 7, 2025",
    offer: "Free surfboard rental",
    sharedInterests: ["Surfing", "Beaches", "Adventure"],
    itinerary: [
      "Day 1: Surf Camp",
      "Day 2: Island Hopping",
      "Day 3: Sunset Cruise",
    ],
    members: [
      { name: "Maya", location: "Australia" },
      { name: "Jack", location: "USA" },
    ],
    perks: ["Free surf lessons", "Beach bonfire party"],
  },
  "4": {
    name: "Ubud Wellness Retreat",
    image: images.ubud,
    travelDates: "September 15 - September 22, 2025",
    offer: "Spa voucher included",
    sharedInterests: ["Yoga", "Wellness", "Detox"],
    itinerary: [
      "Day 1: Yoga Workshop",
      "Day 2: Meditation Walk",
      "Day 3: Spa Day",
    ],
    members: [
      { name: "Sara", location: "India" },
      { name: "Emily", location: "UK" },
      { name: "Lucas", location: "France" },
      { name: "Anna", location: "Germany" },
      { name: "Ben", location: "USA" },
    ],
    perks: ["Free massage session", "Daily green juice"],
  },
  "5": {
    name: "Tokyo Tech Nomads",
    image: images.tokyoTech,
    travelDates: "October 10 - October 17, 2025",
    offer: "Coworking pass included",
    sharedInterests: ["Coworking", "Tech", "Nightlife"],
    itinerary: [
      "Day 1: Startup Tour",
      "Day 2: Tech Meetups",
      "Day 3: Karaoke Night",
    ],
    members: [
      { name: "Kenji", location: "Japan" },
      { name: "Sophia", location: "Canada" },
      { name: "Raj", location: "India" },
    ],
    perks: ["Free coworking access", "Metro pass"],
  },
  "6": {
    name: "Kyoto Temple Walkers",
    image: images.kyoto,
    travelDates: "November 5 - November 12, 2025",
    offer: "Cultural pass included",
    sharedInterests: ["Culture", "Temples", "History"],
    itinerary: [
      "Day 1: Temple Tour",
      "Day 2: Tea Ceremony",
      "Day 3: Kimono Experience",
    ],
    members: [
      { name: "Aiko", location: "Japan" },
      { name: "Liam", location: "UK" },
      { name: "Chloe", location: "Australia" },
      { name: "Marco", location: "Italy" },
    ],
    perks: ["Discounted entry tickets", "Free kimono rental"],
  },
  "7": {
    name: "Osaka Foodies",
    image: images.osaka,
    travelDates: "December 1 - December 8, 2025",
    offer: "Food tour included",
    sharedInterests: ["Cuisine", "Street Food", "Markets"],
    itinerary: [
      "Day 1: Dotonbori Tour",
      "Day 2: Cooking Class",
      "Day 3: Market Visit",
    ],
    members: [
      { name: "Satoshi", location: "Japan" },
      { name: "Mia", location: "USA" },
    ],
    perks: ["Free food samples", "Cooking class voucher"],
  },
  "8": {
    name: "Hokkaido Snow Seekers",
    image: images.hokkaido,
    travelDates: "January 15 - January 22, 2026",
    offer: "Ski pass discount",
    sharedInterests: ["Skiing", "Snowboarding", "Adventure"],
    itinerary: [
      "Day 1: Ski Lessons",
      "Day 2: Snowboard Park",
      "Day 3: Hot Springs",
    ],
    members: [
      { name: "Ethan", location: "Canada" },
      { name: "Hana", location: "Japan" },
      { name: "Tom", location: "UK" },
    ],
    perks: ["Free ski rental", "Discounted lift tickets"],
  },
  "9": {
    name: "Santorini Sunset Chasers",
    image: images.santoriniSunset,
    travelDates: "April 10 - April 17, 2026",
    offer: "Wine tasting included",
    sharedInterests: ["Romance", "Photography", "Wine Tasting"],
    itinerary: [
      "Day 1: Sunset Tour",
      "Day 2: Wine Tasting",
      "Day 3: Island Hike",
    ],
    members: [
      { name: "Sophia", location: "Greece" },
      { name: "Luca", location: "Italy" },
      { name: "Maya", location: "USA" },
      { name: "Alex", location: "UK" },
    ],
    perks: ["Free wine tour", "Couples’ photoshoot"],
  },
  "10": {
    name: "Santorini Sailors",
    image: images.santoriniSailing,
    travelDates: "May 1 - May 8, 2026",
    offer: "Sailing lessons included",
    sharedInterests: ["Sailing", "Adventure", "Sea"],
    itinerary: [
      "Day 1: Sailing Lessons",
      "Day 2: Island Hopping",
      "Day 3: Beach Party",
    ],
    members: [
      { name: "Nikos", location: "Greece" },
      { name: "Ella", location: "Australia" },
      { name: "Jake", location: "USA" },
    ],
    perks: ["Free sailing gear", "Beach BBQ"],
  },
  "11": {
    name: "Santorini Food Lovers",
    image: images.santoriniFood,
    travelDates: "June 1 - June 7, 2026",
    offer: "Cooking class included",
    sharedInterests: ["Cuisine", "Cooking", "Culture"],
    itinerary: [
      "Day 1: Greek Cooking Class",
      "Day 2: Market Tour",
      "Day 3: Food Tasting",
    ],
    members: [
      { name: "Maria", location: "Greece" },
      { name: "Carlos", location: "Spain" },
    ],
    perks: ["Free cookbook", "Restaurant discounts"],
  },
  "12": {
    name: "Costa Rica Eco Explorers",
    image: images.costaricaEco,
    travelDates: "July 10 - July 17, 2026",
    offer: "Eco-lodge discount",
    sharedInterests: ["Wildlife", "Hiking", "Surfing"],
    itinerary: [
      "Day 1: Rainforest Trek",
      "Day 2: Surfing",
      "Day 3: Wildlife Safari",
    ],
    members: [
      { name: "Carlos", location: "Costa Rica" },
      { name: "Maria", location: "Spain" },
      { name: "Jake", location: "USA" },
    ],
    perks: ["Free breakfast", "Eco-lodge discounts"],
  },
  "13": {
    name: "Costa Rica Surf Camp",
    image: images.costaricaSurf,
    travelDates: "August 1 - August 8, 2026",
    offer: "Surfboard rental included",
    sharedInterests: ["Surfing", "Beaches", "Adventure"],
    itinerary: ["Day 1: Surf Camp", "Day 2: Beach Games", "Day 3: Sunset Surf"],
    members: [
      { name: "Liam", location: "Australia" },
      { name: "Sofia", location: "Argentina" },
      { name: "Noah", location: "USA" },
      { name: "Emma", location: "Canada" },
      { name: "Lucas", location: "Brazil" },
    ],
    perks: ["Free surf lessons", "Beach BBQ"],
  },
  "14": {
    name: "Costa Rica Nature Photographers",
    image: images.costaricaPhoto,
    travelDates: "September 5 - September 12, 2026",
    offer: "Photography workshop included",
    sharedInterests: ["Photography", "Rainforest", "Wildlife"],
    itinerary: [
      "Day 1: Rainforest Shoot",
      "Day 2: Wildlife Photography",
      "Day 3: Editing Workshop",
    ],
    members: [
      { name: "Olivia", location: "UK" },
      { name: "Mateo", location: "Spain" },
      { name: "Ava", location: "USA" },
    ],
    perks: ["Free photo prints", "Editing software trial"],
  },
  "15": {
    name: "Costa Rica Yoga Retreat",
    image: images.costaricaYoga,
    travelDates: "October 1 - October 8, 2026",
    offer: "Wellness package included",
    sharedInterests: ["Yoga", "Wellness", "Nature"],
    itinerary: [
      "Day 1: Yoga Workshop",
      "Day 2: Meditation Session",
      "Day 3: Beach Yoga",
    ],
    members: [
      { name: "Isabella", location: "Italy" },
      { name: "Ethan", location: "USA" },
      { name: "Mila", location: "Germany" },
      { name: "Leo", location: "France" },
    ],
    perks: ["Free yoga mat", "Daily smoothies"],
  },
  "16": {
    name: "Goa Beach Escape",
    image: images.goaBeach,
    travelDates: "December 15 - December 22, 2026",
    offer: "Sunset cruise included",
    sharedInterests: ["Beaches", "Parties", "Relaxation"],
    itinerary: [
      "Day 1: Beachside Welcome Party",
      "Day 2: Dolphin Watching Tour",
      "Day 3: Sunset Cruise & Beach BBQ",
    ],
    members: [
      { name: "Isabella", location: "Italy" },
      { name: "Ethan", location: "USA" },
      { name: "Mila", location: "Germany" },
      { name: "Leo", location: "France" },
    ],
    perks: ["Free yoga mat", "Daily smoothies"],
  },

  "17": {
    name: "Chikmagalur Coffee Retreat",
    image: images.chikmagalurRetreat,
    travelDates: "January 10 - January 16, 2027",
    offer: "Coffee tasting experience included",
    sharedInterests: ["Coffee Plantations", "Trekking", "Nature"],
    itinerary: [
      "Day 1: Coffee Plantation Tour",
      "Day 2: Guided Mountain Trek",
      "Day 3: Bonfire & Local Cuisine Night",
    ],
    members: [
      { name: "Isabella", location: "Italy" },
      { name: "Ethan", location: "USA" },
      { name: "Mila", location: "Germany" },
      { name: "Leo", location: "France" },
    ],
    perks: ["Free yoga mat", "Daily smoothies"],
  },

  "18": {
    name: "Manali Mountain Adventure",
    image: images.manaliAdventure,
    travelDates: "February 5 - February 12, 2027",
    offer: "Ski pass included",
    sharedInterests: ["Mountains", "Adventure", "Snow"],
    itinerary: [
      "Day 1: Snow Trekking Expedition",
      "Day 2: Skiing & Snowboarding",
      "Day 3: Hot Springs Visit & Spa",
    ],
    members: [
      { name: "Isabella", location: "Italy" },
      { name: "Ethan", location: "USA" },
      { name: "Mila", location: "Germany" },
      { name: "Leo", location: "France" },
    ],
    perks: ["Free yoga mat", "Daily smoothies"],
  },
};

export default function CohortDetailsScreen() {
  const { joinedCohorts, joinCohort } = useCohortStore();
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const cohort = cohortMap[id || "1"];

  const isJoined = joinedCohorts.includes(id);

  // const joinCohort = () => setJoined(true);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={cohort.image}
        style={styles.coverImage}
        resizeMode="cover"
      />

      <View style={styles.card}>
        <Text style={styles.mainTitle}>{cohort.name}</Text>
        <Text style={styles.subTitle}>{cohort.travelDates}</Text>
        <Text style={styles.offerText}>{cohort.offer}</Text>

        <View style={styles.buttonRow}>
          <Button
            mode={isJoined ? "contained" : "outlined"}
            icon={isJoined ? "check" : "account-plus"}
            onPress={() => joinCohort(id)}
            style={styles.actionButton}
            buttonColor="#10b981"
          >
            {isJoined ? "Joined" : "Join Cohort"}
          </Button>

          <Button
            mode="outlined"
            icon="chat"
            // onPress={() => router.push(`/chat-room/${id}`)}
            style={styles.actionButton}
          >
            Group Chat
          </Button>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          <Ionicons name="people" size={18} /> Members
        </Text>
        {cohort.members.map((member, index) => (
          <TouchableOpacity
            key={index}
            style={styles.memberCard}
            onPress={() => router.push(`/user-profile/${member.name}`)}
          >
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.memberLocation}>{member.location}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          <MaterialIcons name="interests" size={18} /> Shared Interests
        </Text>
        <Text style={styles.infoText}>{cohort.sharedInterests.join(", ")}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          <FontAwesome5 name="route" size={18} /> Itinerary
        </Text>
        {cohort.itinerary.map((item, i) => (
          <Text key={i} style={styles.infoText}>
            {item}
          </Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          <Ionicons name="gift" size={18} /> Perks
        </Text>
        <Text style={styles.infoText}>{cohort.perks.join(" • ")}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafb",
    padding: 12,
  },
  coverImage: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0f766e",
    textAlign: "center",
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 16,
    color: "#475569",
    textAlign: "center",
    marginBottom: 4,
  },
  offerText: {
    fontSize: 14,
    color: "#10b981",
    fontStyle: "italic",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0f766e",
    marginBottom: 8,
  },
  memberCard: {
    backgroundColor: "#f0fdf4",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#10b981",
  },
  memberName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#047857",
  },
  memberLocation: {
    fontSize: 14,
    color: "#065f46",
  },
  infoText: {
    fontSize: 14,
    color: "#334155",
    marginBottom: 4,
  },
  actionButton: {
    marginHorizontal: 4,
    marginVertical: 4,
  },
  bookButton: {
    marginTop: 16,
    padding: 8,
    borderRadius: 12,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 12,
  },
});
