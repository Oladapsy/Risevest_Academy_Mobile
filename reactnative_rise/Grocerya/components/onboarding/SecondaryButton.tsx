import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface SecondaryButtonProp {
  onpress: any;
  text: string;
}

const SecondaryButton = ({
  onpress,
  text,
}: SecondaryButtonProp) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F2F2F3", 
    borderRadius: 100,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    color: "#0D0D0D", 
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
});

export default SecondaryButton;
