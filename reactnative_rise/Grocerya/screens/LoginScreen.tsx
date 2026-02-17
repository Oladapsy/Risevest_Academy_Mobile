import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import HeaderText from "@/components/onboarding/HeaderText";
import PrimaryButton from "@/components/onboarding/PrimaryButton";
import { COUNTRIES } from "@/assets/constants/countryData";

type Country = (typeof COUNTRIES)[number];

const LoginScreen = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState<Country>(COUNTRIES[0]);
  const [phone, setPhone] = useState("");

  const handleSelectCountry = (country: Country) => {
    setSelected(country);
    setShowDropdown(false);
  };

  const handleContinue = () => {
    console.log("Continue pressed:", selected.code, phone);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setShowDropdown(false);
      }}
    >
      <View style={styles.container}>
        {/* ── Help icon ───*/}
        <TouchableOpacity style={styles.helpIcon} onPress={() => { }}>
          <View style={styles.helpCircle}>
            <Text style={styles.helpText}>?</Text>
          </View>
        </TouchableOpacity>


        {/* Header Text */}
        <HeaderText
          title="Get started"
          subtitle="You can log in or make an account if you're new"
        />

        {/* Phone label */}
        <Text style={styles.label}>Enter your phone number</Text>

        {/* ── Phone row ───*/}
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
            <Text style={styles.chevron}>▾</Text>
          </TouchableOpacity>

          {/* Phone number input */}
          <TextInput
            style={styles.phoneInput}
            placeholder="Phone Number"
            placeholderTextColor="#A0A0A8"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            onFocus={() => setShowDropdown(false)}
          />
        </View>

        {/* ── Inline dropdown list ───────────────────────────────────── */}
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

        {/* ── Continue button ────────────────────────────────────────── */}
        <View style={styles.buttonWrapper}>
          <PrimaryButton text="Continue" onPress={handleContinue} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 80,
    justifyContent: "flex-start",
  },

  // Help icon
  helpIcon: {
    position: "absolute",
    top: 52,
    right: 20,
    zIndex: 10,
  },
  helpCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#C8C8CC",
    alignItems: "center",
    justifyContent: "center",
  },
  helpText: {
    fontSize: 13,
    color: "#777777",
    fontWeight: "500",
  },

  // Label
  label: {
    color: "#0D0D0D",
    fontSize: 13,
    fontWeight: "500",
    marginTop: 24,
    marginBottom: 8,
    // replace with: fontFamily: "Poppins_500Medium"
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
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 14,
    gap: 4,
  },
  flagText: {
    fontSize: 16,
  },
  codeText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0D0D0D",
    // fontFamily: "Poppins_500Medium"
  },
  chevron: {
    fontSize: 10,
    color: "#6B6B72",
    marginLeft: 2,
  },
  phoneInput: {
    flex: 1,
    backgroundColor: "#F2F2F3",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 14,
    color: "#0D0D0D",
    // fontFamily: "Poppins_400Regular"
  },

  // ── Dropdown ─────────────────────────────────────────────────────────────
  dropdown: {
    // Positioned right below the phone row
    marginTop: 4,
    // Only cover the left side (country trigger width area + a bit more)
    // Width matches the Figma card — roughly 160 px or use alignSelf
    width: 200,
    maxHeight: 200,      // shows ~5 rows, scrollable beyond
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    // Card shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    // Keep above other elements
    zIndex: 999,
    overflow: "hidden",
    paddingRight: 6,     // leave room for the scroll track
  },
  // Subtle right-side scroll track indicator (decorative, matches Figma)
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
    fontSize: 14,
    color: "#0D0D0D",
    fontWeight: "400",
    // fontFamily: "Poppins_400Regular"
  },

  // Button
  buttonWrapper: {
    marginTop: 32,
  },
});

export default LoginScreen;