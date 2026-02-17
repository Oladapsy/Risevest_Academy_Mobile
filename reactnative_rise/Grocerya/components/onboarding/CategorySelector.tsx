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
          <Text>{cat}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  category: {},
  container: {},
});

export default CategorySelector;
