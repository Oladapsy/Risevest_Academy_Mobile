import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Welcome to Grocerya",
    image: require("../../assets/images/onboarding/Full_Trolley.png"),
    subtitle:
      "Get your grocery needs at your service within a minute. fast, efficient, and convenient.",
  },
  {
    id: "2",
    title: "Get any packages delivered",
    image: require("../../assets/images/onboarding/Delivery_Truck.png"),
    subtitle:
      "Get all your items conveniently, ensuring everything you need arrive without any hassle.",
  },
  {
    id: "3",
    title: "Protected package delivery",
    image: require("../../assets/images/onboarding/Big_Box.png"),
    subtitle:
      "Your groceries are carefully packed to ensure they arrive safely and in perfect condition.",
  },
  {
    id: "4",
    title: "Best price guaranteed",
    image: require("../../assets/images/onboarding/Cash_Register.png"),
    subtitle:
      "Allowing you to stock up on your favorite items while staying within your budget.",
  },
];

export const OnboardingScreen = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
      });
    } else {
      router.replace("/login");
    }
  };

  const handleSkip = () => {
    flatListRef.current?.scrollToIndex({
      index: slides.length - 1,
    });
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );

  const onViewRef = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  return (
    <View style={styles.container}>
      {/* Top Progress Bars */}
      <View style={styles.progressContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressBar,
              currentIndex === index && styles.activeProgress,
            ]}
          />
        ))}
      </View>

      {/* Slides */}
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />

      {/* Bottom Buttons */}
      <View style={styles.buttonContainer}>
        {currentIndex !== slides.length - 1 ? (
          <>
            <TouchableOpacity style={styles.skipBtn} onPress={handleSkip}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={[styles.nextBtn, { flex: 1 }]}
            onPress={handleNext}
          >
            <Text style={styles.nextText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  progressContainer: {
    flexDirection: "row",
    marginTop: 60,
    marginHorizontal: 20,
  },

  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 4,
    borderRadius: 4,
  },

  activeProgress: {
    backgroundColor: "#000",
  },

  slide: {
    width: width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  image: {
    width: width * 0.8,
    height: height * 0.4,
    marginBottom: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#777",
  },

  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
  },

  skipBtn: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginRight: 10,
  },

  skipText: {
    color: "#000",
    fontWeight: "500",
  },

  nextBtn: {
    flex: 1,
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },

  nextText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
