import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";

interface PrimaryButtonProp {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
}

const PrimaryButton = ({
  onPress,
  text,
}: PrimaryButtonProp) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0D0D0D", 
    borderRadius: 100,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF", 
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
});

export default PrimaryButton;
