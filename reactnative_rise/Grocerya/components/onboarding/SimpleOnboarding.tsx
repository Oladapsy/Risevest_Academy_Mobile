import React, { useRef, useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

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

const SimpleOnboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
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
    width: width * 0.55,
    height: width * 0.5,
    marginBottom: 20,
    resizeMode: "contain",
  },

  title: {
    fontFamily: "Poppins",
    color: "#0D0D0D",
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontFamily: "Poppins",
    color: "#777777",
    fontSize: 16,
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
    fontFamily: "Poppins",
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
    fontFamily: "Poppins",
    fontSize: 16,
  },
});

export default SimpleOnboarding;
