import { Link } from "expo-router";
import { Text, View } from "react-native";
import Chilli from "./component/firstAssignment/Chilli";

export default function Index() {
  return (
    <View className="flex-1 items-center bg-background">
      {Array.from({ length: 12 }).map((_, i) => (
        <Chilli key={i} delay={i * 500} />
      ))}

      <View className="flex-1 items-center justify-center mb-20">
        <Text className="text-sm font-extrabold text-primary font-fuzzy-bold">Welcome to Oladapo&apos;s Assignment Log!</Text>
        <Link href="/firstAssignment" className="rounded-lg font-extralight bg-secondary px-3 py-1 mt-3 text-sm">
          First Assignment
        </Link>
      </View>
    </View>
  );
}
