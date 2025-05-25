import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const VerificationScreen = () => {
  const [idImage, setIdImage] = useState(null);
  const [selfie, setSelfie] = useState(null);
  const [selectedIdType, setSelectedIdType] = useState("");
  const [step, setStep] = useState(0);

  const [showIdError, setShowIdError] = useState(false);

  const pickImage = async (type: "id" | "selfie") => {
    if (type === "id" && !selectedIdType) {
      setShowIdError(true);
      return;
    }
    setShowIdError(false);

    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission to access camera is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      if (type === "id") {
        setIdImage(result.assets[0].uri);
      } else {
        setSelfie(result.assets[0].uri);
      }
    }
  };

  const handleVerification = () => {
    router.push({
      pathname: "/(onboarding)/interests",
    });
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text className="text-gray-500" style={styles.title}>
          Verify Identity
        </Text>

        <View style={styles.tabContainer}>
          <View style={step === 0 ? styles.activeTab : styles.inactiveTab}>
            <Text
              style={step === 0 ? styles.activeTabText : styles.inactiveTabText}
            >
              ID Upload
            </Text>
          </View>
          <View style={step === 1 ? styles.activeTab : styles.inactiveTab}>
            <Text
              style={step === 1 ? styles.activeTabText : styles.inactiveTabText}
            >
              Selfie
            </Text>
          </View>
          <View style={step === 2 ? styles.activeTab : styles.inactiveTab}>
            <Text
              style={step === 2 ? styles.activeTabText : styles.inactiveTabText}
            >
              Review
            </Text>
          </View>
        </View>

        {step === 0 && (
          <>
            <Text style={styles.label}>Upload a Government ID</Text>
            <RNPickerSelect
              onValueChange={(value) => setSelectedIdType(value)}
              items={[
                { label: "Passport", value: "passport" },
                { label: "Driver's License", value: "license" },
                { label: "Aadhar Card", value: "aadhar" },
              ]}
              placeholder={{ label: "CHOOSE ID TYPE", value: null }}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              Icon={() => (
                <Ionicons
                  className="m-3"
                  name="chevron-down"
                  size={20}
                  color="#07b07a"
                />
              )}
            />

            {showIdError && (
              <Text style={{ color: "red", marginBottom: 10 }}>
                Please select ID type before uploading
              </Text>
            )}

            <TouchableOpacity
              onPress={() => pickImage("id")}
              style={styles.uploadBox}
            >
              {idImage ? (
                <Image source={{ uri: idImage }} style={styles.uploadedImage} />
              ) : (
                <>
                  <Ionicons
                    name="cloud-upload-outline"
                    size={36}
                    color="#07b07a"
                  />
                  <Text style={styles.uploadText}>
                    Tap to Upload / Capture Photo{"\n"}(JPG, PNG, or PDF)
                  </Text>
                  <View style={styles.chooseFileBtn}>
                    <Text style={styles.chooseFileText}>Choose File</Text>
                  </View>
                </>
              )}
            </TouchableOpacity>
          </>
        )}

        {step === 1 && (
          <>
            <Text style={styles.label}>Take a Selfie</Text>
            <TouchableOpacity
              onPress={() => pickImage("selfie")}
              style={styles.selfieBox}
            >
              {selfie ? (
                <Image source={{ uri: selfie }} style={styles.selfieImage} />
              ) : (
                <>
                  <Ionicons name="camera-outline" size={36} color="#07b07a" />
                  <Text style={styles.selfieText}>Capture Selfie</Text>
                  <Text style={styles.selfieNote}>
                    Ensure good lighting and match your ID photo
                  </Text>
                </>
              )}
            </TouchableOpacity>
          </>
        )}

        {step === 2 && (
          <>
            <Text style={styles.label}>Reviewing Your Submission</Text>
            <Text style={{ color: "#07b07a", marginBottom: 10 }}>
              Selected ID Type: {selectedIdType || "None"}
            </Text>
            {idImage && (
              <Image source={{ uri: idImage }} style={styles.uploadedImage} />
            )}
            {selfie && (
              <Image
                source={{ uri: selfie }}
                style={[
                  styles.selfieImage,
                  { alignSelf: "center", marginTop: 20 },
                ]}
              />
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={handleVerification}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </>
        )}

        {step < 2 && (
          <TouchableOpacity
            style={[
              styles.nextButton,
              {
                backgroundColor:
                  (step === 0 && (!selectedIdType || !idImage)) ||
                  (step === 1 && !selfie)
                    ? "gray"
                    : "#07b07a",
              },
            ]}
            onPress={() => setStep(step + 1)}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        )}

        {step > 0 && step < 3 && (
          <TouchableOpacity
            style={[styles.nextButton, { backgroundColor: "#374151" }]}
            onPress={() => setStep(step - 1)}
          >
            <Text style={styles.nextButtonText}>Back</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.footer}>
          Your data is encrypted and securely stored for verification purposes
          only.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 4,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  activeTab: {
    flex: 1,
    padding: 10,
    backgroundColor: "#07b07a",
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: "center",
  },
  inactiveTab: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#07b07a",
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: "center",
  },
  activeTabText: {
    color: "white",
    fontWeight: "600",
  },
  inactiveTabText: {
    color: "#07b07a",
    fontWeight: "600",
  },
  label: {
    color: "#07b07a",
    fontSize: 16,
    marginBottom: 8,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: "#07b07a",
    borderStyle: "dashed",
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  uploadText: {
    color: "#07b07a",
    textAlign: "center",
    marginTop: 10,
  },
  chooseFileBtn: {
    marginTop: 10,
    backgroundColor: "#07b07a",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  chooseFileText: {
    color: "white",
    fontWeight: "bold",
  },
  uploadedImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    resizeMode: "contain",
    marginBottom: 10,
  },
  selfieBox: {
    marginTop: 10,
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
    borderColor: "#07b07a",
    borderWidth: 2,
    width: 150,
    height: 150,
    alignSelf: "center",
    justifyContent: "center",
  },
  selfieImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    resizeMode: "cover",
  },
  selfieText: {
    color: "#07b07a",
    marginTop: 10,
    fontWeight: "600",
  },
  selfieNote: {
    color: "#07b07a",
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
  footer: {
    textAlign: "center",
    color: "#07b07a",
    fontSize: 12,
    marginTop: 30,
  },
  nextButton: {
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  nextButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#07b07a",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 29,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#07b07a",
    borderRadius: 8,
    color: "#07b07a",
    paddingRight: 30,
    backgroundColor: "black",
    marginBottom: 20,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#07b07a",
    borderRadius: 8,
    color: "#07b07a",
    paddingRight: 30,
    backgroundColor: "white",
    marginBottom: 20,
  },
});
