import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HeaderText from "@/components/onboarding/HeaderText";
import InputField from "@/components/onboarding/InputField";
import PrimaryButton from "@/components/onboarding/PrimaryButton";
import { CountryPicker } from "react-native-country-codes-picker";
import { useState } from "react";

const LoginScreen = () => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+62");
  const [flag, setFlag] = useState("🇮🇩");

  return (
    <View style={styles.container}>
      {/* navigation icon at the top */}
      <TouchableOpacity
        style={styles.navIcon}
        onPress={() => console.log("Back pressed")}
      >
        <Text style={styles.navText}>?</Text>
      </TouchableOpacity>

      {/* Title + subtitle */}
      <HeaderText
        title="Get started"
        subtitle="You can log in or make an account if you're new"
      />

      {/* Label */}
      <Text style={styles.text}>Enter your phone number</Text>

      {/* Phone input row */}
      <View style={styles.phoneRow}>
        <TouchableOpacity
          style={styles.countryContainer}
          onPress={() => setShow(true)}
        >
          <Text style={styles.flag}>{flag}</Text>
          <Text style={styles.code}>{countryCode}</Text>
        </TouchableOpacity>
        <InputField placeholder="Phone Number" keyboardType="phone-pad" />
      </View>

      {/* Continue button */}
      <PrimaryButton
        text="Continue"
        onPress={() => console.log("Continue pressed")}
      />

      {/* Country Picker Modal */}
      <CountryPicker
        lang="en"
        show={show}
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setFlag(item.flag);
          setShow(false);
        }}
        onBackdropPress={() => setShow(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  navIcon: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  navText: {
    fontSize: 20,
    color: "#0D0D0D",
  },
  text: {
    color: "#0D0D0D",
    fontSize: 13,
    fontFamily: "Poppins_500Medium",
  },
  phoneRow: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F3",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginRight: 8,
  },
  flag: {
    fontSize: 14,
    marginRight: 4,
  },
  code: {
    fontFamily: "Poppins_500Medium",
    color: "#0D0D0D",
    fontSize: 14,
  },
});

export default LoginScreen;
