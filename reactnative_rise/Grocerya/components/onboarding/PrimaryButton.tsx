import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface PrimaryButtonProp {
  onpress: any;
  text: "string";
}

const PrimaryButton = ({
  onpress,
  text,
}: PrimaryButtonProp) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0D0D0D", 
    borderRadius: "100px",
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
