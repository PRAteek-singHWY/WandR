// finish_registering.tsx

import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const FinishRegistering = () => {
  // In your component
  //   const [Dob, setDob] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (_event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      const day = selectedDate.getDate().toString().padStart(2, "0");
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
      const year = selectedDate.getFullYear();
      setDob(`${day}/${month}/${year}`);
    }
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");

  const isFormValid = firstName && lastName && dob && email;
  const handleregister = () => {
    router.push({
      pathname: "/(onboarding)/verification",
    });
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" /> */}

        <Text className="text-gray-500" style={styles.heading}>
          Finish signing up
        </Text>

        {/* Legal Name */}
        <Text className="text-[#07b07a]" style={styles.label}>
          Legal name
        </Text>
        <TextInput
          className="text-gray-500"
          style={styles.input}
          placeholder="First name on ID"
          placeholderTextColor="#aaa"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          className="text-gray-500"
          style={styles.input}
          placeholder="Surname on ID"
          placeholderTextColor="#aaa"
          value={lastName}
          onChangeText={setLastName}
        />
        <Text className="text-gray-600" style={styles.helper}>
          Make sure this matches the name on your government-issued ID.
          {/* <Text style={styles.link}> Preferred first name</Text> */}
        </Text>

        {/* Date of Birth */}
        <Text className="text-[#07b07a]" style={styles.label}>
          Date of birth
        </Text>
        <TouchableOpacity onPress={() => setShowPicker(true)}>
          <View style={styles.input}>
            <Text
              // className="text-gray-500"
              style={{ color: dob ? "gray" : "gray" }}
            >
              {dob || "Select your date of birth"}
            </Text>
          </View>
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={handleDateChange}
            maximumDate={new Date()} // to prevent selecting a future date
          />
        )}

        <Text className="text-gray-600" style={styles.helper}>
          To sign up, you need to be at least 18. Other people won’t see your
          date of birth.
        </Text>

        {/* Email */}
        <Text className="text-[#07b07a]" style={styles.label}>
          Email
        </Text>
        <TextInput
          className="text-gray-500"
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text className="text-gray-600" style={styles.helper}>
          We’ll email you a reservation confirmation.
        </Text>

        {/* Terms and Policy */}
        <Text className="text-gray-600 " style={styles.terms}>
          By selecting{" "}
          <Text className="text-[#07b07a]" style={styles.bold}>
            Agree and continue
          </Text>
          , I agree to wandr’s <Text style={styles.link}>Terms of Service</Text>
          , <Text style={styles.link}>Payments Terms of Service</Text>,{" "}
          <Text style={styles.link}>Anti-Discrimination Policy</Text>, and
          acknowledge the <Text style={styles.link}>Privacy Policy</Text>.
        </Text>

        {/* Submit Button */}
        <TouchableOpacity
          onPress={handleregister}
          style={[styles.button, { opacity: isFormValid ? 1 : 0.4 }]}
          // disabled={!isFormValid}
        >
          <Text className="text-gray-600" style={styles.buttonText}>
            Agree and continue
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FinishRegistering;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderColor: "#07b07a",
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 8,
  },
  helper: {
    fontSize: 13,
    marginBottom: 8,
  },
  link: {
    color: "#07b07a",
    textDecorationLine: "underline",
  },
  terms: {
    fontSize: 13,
    marginTop: 90,
    marginBottom: 12,
  },
  bold: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#07b07a",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
