import { View, Text, StyleSheet } from "react-native";

interface HeaderTextProps {
  title: string;
  subtitle: string;
}

const HeaderText = ({ title, subtitle }: HeaderTextProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    color: "#0D0D0D",
    fontFamily: "Poppins_600SemiBold",
    fontWeight: "semibold",
    fontSize: 20,
  },
  subtitle: {
    color: "#777777",
    fontSize: 16,
  },
});

export default HeaderText;
