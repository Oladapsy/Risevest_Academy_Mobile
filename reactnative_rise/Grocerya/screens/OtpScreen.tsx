import HeaderText from '@/components/onboarding/HeaderText'
import React from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native'



interface OtpScreenProps {
  phone: string;
}
const OtpScreen = ({ phone }: OtpScreenProps) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={styles.container}>

        {/* Header Text */}
        <HeaderText
          title="Enter your OTP number"
          subtitle="We&apos;ve sent the OTP number via sms to"
        />

        {/* Phone label */}
        <Text style={styles.label}>{phone}</Text>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
})

export default OtpScreen;