import { View, Text, StyleSheet } from "react-native";
import HeaderText from "@/components/onboarding/HeaderText";
import InputField from "@/components/onboarding/InputField";
import PrimaryButton from "@/components/onboarding/PrimaryButton";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* navigation icon at the top */}
      <View></View>

      {/* Text and subtitle */}
      <HeaderText
        title="Get started"
        subtitle="You can log in or make an account if you're new"
      />

      {/* text and input */}
      <Text style={styles.text}>Enter your phone number</Text>
      <View style={styles.phoneRow}>
        <View style={styles.countryConatiner}>
          <Text style={styles.flag}>🇮🇩</Text>
          <Text style={styles.code}>+62</Text>
        </View>
        <InputField placeholder="Phone Number" keyboardType="phone-pad" />
      </View>

      <PrimaryButton
        text="Continue"
        onPress={() => console.log("Continue pressed")}
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
  text: {
    color: "#0D0D0D",
    fontSize: 13,
    fontFamily: "Poppins_500Medium",
  },
  phoneRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  countryConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F3',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginRight: 8,
  },
  flag: {
    fontSize: 14,
  },
  code: {
    fontFamily: "Poppins_500Medium",
    color: '#0D0D0D',
    fontSize: 14,
  },
});

export default LoginScreen;
