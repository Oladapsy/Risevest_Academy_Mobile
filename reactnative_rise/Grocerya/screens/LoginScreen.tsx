import { View, StyleSheet } from "react-native";
import HeaderText from "@/components/onboarding/HeaderText";

const LoginScreen = () => {
  return (
    <View>
      <HeaderText
        title="Get started"
        subtitle="You can log in or make an account if you're new"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LoginScreen;
