import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CategorySelectorProps {
  categories: string[];
  onselect: (category: string) => void;
}
const CategorySelector = ({ categories, onselect }: CategorySelectorProps) => {
  return (
    <View style={styles.container}>
      {categories.map((cat, index) => (
        <TouchableOpacity
          key={index}
          style={styles.category}
          onPress={() => onselect(cat)}
        >
          <Text style={styles.text}>{cat}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 13,
  },
  text: {
    fontSize: 16,
    color: "#0D0D0D",
    backgroundColor: "#F2F2F3",
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 100,
    fontFamily: "Poppins_500Medium"
  },
  category: {
  },
});

export default CategorySelector;
