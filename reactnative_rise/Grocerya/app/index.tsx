import { OnboardingScreen } from "@/components/onboarding/OnboardingScreen";
import SimpleOnboarding from "@/components/onboarding/SimpleOnboarding";
import SplashScreenView from "@/SplashScreenView";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

const index = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Make SplashScreen show for 3 seconds
  // useeffect stops it from re-rendering - since no dependency array
  // the code only runs on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{showSplash ? <SplashScreenView /> : <SimpleOnboarding />}</>;
};

export default index;
