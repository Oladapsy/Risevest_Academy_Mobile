import HeaderText from "@/components/onboarding/HeaderText";
import { View, Text, StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <View>

        <HeaderText
        title="Get started"
        subtitle="You can log in or make an account if you&apos;re new"/>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LoginScreen;
