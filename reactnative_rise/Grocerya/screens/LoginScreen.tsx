import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import HeaderText from "@/components/onboarding/HeaderText";
import PrimaryButton from "@/components/onboarding/PrimaryButton";
import { COUNTRIES } from "@/assets/constants/countryData";
import QuestionMark from "@/assets/svg/question.svg";
import InputField from "@/components/onboarding/InputField";
import { useRouter } from "expo-router";


type Country = (typeof COUNTRIES)[number];

const LoginScreen = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState<Country>(COUNTRIES[0]);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
    const router = useRouter();
  

  const handleSelectCountry = (country: Country) => {
    setSelected(country);
    setShowDropdown(false);
  };

  const handleContinue = () => {
  const fullNumber = `${selected.code}${phoneNumber}`;
  console.log("Sending OTP to:", fullNumber);

  router.push(`/Otp?phone=${encodeURIComponent(fullNumber)}`);
};


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setShowDropdown(false); //close dropdown when tapping outside
        }}
      >
        <View style={styles.container}>
          {/* ── Help icon ───*/}
          <TouchableOpacity style={styles.helpIcon} onPress={() => { }}>
            <View style={styles.helpCircle}>
              <QuestionMark style={styles.helpText} />
            </View>
          </TouchableOpacity>

          <View style={{ flex: 1, justifyContent: "center" }}>
            {/* Header Text */}
            <HeaderText
              title="Get started"
              subtitle="You can log in or make an account if you're new"
            />

            {/* Phone label */}
            <Text style={styles.label}>Enter your phone number</Text>

            {/* Phone row */}
            <View style={styles.phoneRow}>
              {/* Country picker trigger */}
              <TouchableOpacity
                style={styles.countryTrigger}
                onPress={() => {
                  Keyboard.dismiss();
                  setShowDropdown((prev) => !prev);
                }}
                activeOpacity={0.75}
              >
                <Text style={styles.flagText}>{selected.flag}</Text>
                <Text style={styles.codeText}>{selected.code}</Text>
              </TouchableOpacity>

              {/* Phone number input */}
              <InputField
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={phoneNumber} 
                onChangeText={setPhoneNumber}
              />
            </View>

            {/* ── Inline dropdown list */}
            {showDropdown && (
              <View style={styles.dropdown}>
                {/* vertical scrollbar track indicator */}
                <View style={styles.scrollTrack} />

                <FlatList
                  data={COUNTRIES}
                  keyExtractor={(item) => item.name}
                  showsVerticalScrollIndicator={false}
                  keyboardShouldPersistTaps="handled"
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      onPress={() => handleSelectCountry(item)}
                      activeOpacity={0.65}
                    >
                      <Text style={styles.itemFlag}>{item.flag}</Text>
                      <Text style={styles.itemName}>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
          </View>

          {/* ── Continue button*/}
          <View style={styles.buttonWrapper}>
            <PrimaryButton text="Continue" onPress={handleContinue} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 10,
    // justifyContent: "space-around",
  },
  // Help icon at the top // still don't get its function
  helpIcon: {
    position: "absolute",
    top: 90,
    right: 20,
    zIndex: 10,
  },
  helpCircle: {
    width: 32,
    height: 32,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#F8F8F8",
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
  },

  helpText: {
    backgroundColor: "transparent",
  },

  // Label
  label: {
    color: "#0D0D0D",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 8,
    fontFamily: "Poppins_500Medium",
  },

  // Phone row
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  countryTrigger: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F3",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    gap: 4,
  },

  flagText: {
    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    color: "#0D0D0D",
  },
  codeText: {
    fontSize: 16,
    color: "#0D0D0D",
    fontFamily: "Poppins_500Medium",
  },

  // Dropdown  style
  dropdown: {
    // Positioned right below the phone row
    marginTop: 4,
    width: 200,
    maxHeight: 200, // shows ~5 rows, scrollable beyond
    backgroundColor: "#F2F2F3",
    borderRadius: 12,
    // Card shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    // Keep above other elements
    zIndex: 999,
    overflow: "hidden",
    paddingRight: 6, // leave room for the scroll track
  },
  // Subtle right-side scroll track indicator)
  scrollTrack: {
    position: "absolute",
    right: 3,
    top: 8,
    bottom: 8,
    width: 3,
    borderRadius: 2,
    backgroundColor: "#E8E8EA",
    zIndex: 1,
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
    paddingHorizontal: 14,
    gap: 10,
  },
  itemFlag: {
    fontSize: 18,
  },
  itemName: {
    fontSize: 17,
    color: "#0D0D0D",
    fontWeight: "500",
    fontFamily: "Poppins_500Medium",
  },

  // Button
  buttonWrapper: {
    paddingBottom: 30,
  },
});

export default LoginScreen;
