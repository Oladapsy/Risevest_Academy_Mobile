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
  category: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'},
  container: {
    backgroundColor: "#F2F2F3",
    borderRadius: "100px",
    padding: 10,
    margin: 5,
  },
  text: { fontSize: 16, color: "#0D0D0D" },
});

export default CategorySelector;
