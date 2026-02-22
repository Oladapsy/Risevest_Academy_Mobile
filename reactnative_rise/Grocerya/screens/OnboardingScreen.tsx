import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { useRouter } from "expo-router";
import { slides } from "@/assets/constants/slides";

const { width } = Dimensions.get("window");


const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.push("/login")
    }
  };

  const handleSkip = () => {
    flatListRef.current?.scrollToIndex({ index: slides.length - 1 });
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.slide}>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );

  // This function is used to track the current index of the slide
  const onViewRef = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  // get what length the slides are
  // console.log(slides.length);
  // console.log(currentIndex !== slides.length - 1);
  // testing

  return (
    <View style={styles.container}>
      {/* Top Slider - Progress bars */}
      <View style={styles.progressContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressBar,
              index === currentIndex && styles.activeProgress,
            ]}
          />
        ))}
      </View>

      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
      {/* The buttons at the bottom */}
      <View style={styles.buttonConatiner}>
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
          <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
            <Text style={styles.nextText}>Getting Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  progressContainer: {
    flexDirection: "row",
    marginTop: 70,
    marginHorizontal: 20,
  },

  progressBar: {
    flex: 1,
    height: 3,
    borderRadius: 100,
    backgroundColor: "#F2F2F3",
    marginHorizontal: 4,
  },

  activeProgress: {
    backgroundColor: "#0D0D0D",
  },

  slide: {
    width: width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
    marginBottom: 80,
  },

  image: {
    width: width * 0.53,
    height: width * 0.5,
    marginBottom: 20,
    resizeMode: "contain",
  },

  title: {
    fontFamily: "Poppins_600SemiBold",
    color: "#0D0D0D",
    fontWeight: "600",
    fontSize: 19,
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontFamily: "Poppins_400Regular",
    color: "#777777",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 38,
  },

  buttonConatiner: {
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
    paddingHorizontal: 20,
  },

  skipBtn: {
    flex: 1,
    backgroundColor: "#F2F2F3",
    paddingVertical: 14,
    borderRadius: 100,
    alignItems: "center",
    marginRight: 20,
  },

  skipText: {
    color: "#0D0D0D",
    fontWeight: "500",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  nextBtn: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    paddingVertical: 14,
    borderRadius: 100,
    alignItems: "center",
  },

  nextText: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
});

export default OnboardingScreen;
