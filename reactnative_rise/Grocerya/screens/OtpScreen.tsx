import { useRouter } from "expo-router";
import HeaderText from '@/components/onboarding/HeaderText';
import OtpInput from '@/components/onboarding/OTPInput';
import PrimaryButton from '@/components/onboarding/PrimaryButton';
import ScreenHeader from '@/components/onboarding/ScreenHeader';
import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Text, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


interface OtpScreenProps {
  phone: string;
}

const OtpScreen = ({ phone }: OtpScreenProps) => {
  const router = useRouter();

  const handleContinue = () => {
    console.log("You're in, you made it!!!");
    router.push('/category');
  };


  return (
    <SafeAreaView style={styles.safeArea}>

      <KeyboardAvoidingView
        style={styles.safeArea}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>

          {/* ── Help and back icon ───*/}
          <ScreenHeader showHelp={true} showBack={true} />


          <View style={styles.mainText}>
            {/* Header Text */}
            <HeaderText
              title="Enter your OTP number"
              subtitle="We&apos;ve sent the OTP number via sms to"
            />

            {/* Phone label */}
            <Text style={styles.label}>{phone}</Text>

            <OtpInput
              length={5}
              onComplete={(code) => console.log("OTP:", code)}
            />
          </View>

          <PrimaryButton text="Continue" onPress={handleContinue} />
          <Text style={styles.termText}>By clicking, I accept the
            <Text style={styles.innerTermText}> Terms and Conditions </Text>
            &
            <Text style={styles.innerTermText}> Privacy Policy</Text></Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },

  // Label
  label: {
    color: "#0D0D0D",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 0,
    marginBottom: 8,
    fontFamily: "Poppins_500Medium",
  },

  termText: {
    fontFamily: "Poppins_500Medium",
    color: "#777777",
    fontSize: 11,
  }
  ,
  innerTermText: {
    color: "#0D0D0D",
  },
  mainText: {
    flex: 1,
    marginTop: 40,
  },
})

export default OtpScreen;