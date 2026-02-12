import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Login Screen
      </Text>

      <TouchableOpacity
        onPress={() => router.replace("/home")}
        style={{
          backgroundColor: "black",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}>Go To Home</Text>
      </TouchableOpacity>
    </View>
  );
}
