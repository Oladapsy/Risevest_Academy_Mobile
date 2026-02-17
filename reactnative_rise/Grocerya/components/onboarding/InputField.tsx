import { View, StyleSheet, TextInput, Text } from "react-native";

interface InputTextProp {
  placeholder: string;
  keyboardType?: any;
}
const InputField = ({ placeholder, keyboardType }: InputTextProp) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType || "default"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: '8px',
    color: '#777777',
    fontSize: 14,
    padding: 5,
    marginVertical: 10,
  },
});
export default InputField;
