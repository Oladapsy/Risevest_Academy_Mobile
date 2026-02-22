import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CategorySelectorProps {
  categories: string[];
  onselect: (category: string) => void;
}
const CategorySelector = ({ categories, onselect }: CategorySelectorProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handlePress = (category: string) => {
    let updated = [...selectedCategories];

    if (updated.includes(category)) {
      // remove if already selected
      updated = updated.filter((item) => item !== category);
    } else {
      // add if not selected
      updated.push(category);
    }

    setSelectedCategories(updated);
    onselect(category);
  };

  return (
    <View style={styles.container}>
      {categories.map((cat, index) => {
        const isSelected = selectedCategories.includes(cat);

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.category,
              isSelected && styles.selectedCategory
            ]}
            onPress={() => handlePress(cat)}
          >
            <Text
              style={[
                styles.text,
                isSelected && styles.selectedText
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 13,
  },
  category: {
    borderRadius: 100,
  },
  selectedCategory: {
    borderWidth: 1.5,
    borderColor: "#2DB217",
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
  selectedText: {
    backgroundColor: "#1ED7001A",
  },
});


export default CategorySelector;
