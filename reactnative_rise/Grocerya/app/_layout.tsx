import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { Stack } from 'expo-router';
import { StatusBar } from "expo-status-bar";



export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) return null;


  return (
    <>
      <StatusBar backgroundColor="red" style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
