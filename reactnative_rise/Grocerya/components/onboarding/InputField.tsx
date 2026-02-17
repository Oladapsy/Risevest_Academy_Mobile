import { View, StyleSheet, TextInput, Text } from "react-native";

interface InputTextProp {
  placeholder: string;
  keyboardType?: any;
}
const InputField = ({ placeholder, keyboardType }: InputTextProp) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType || "default"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F3',
    flex: 1,
    borderRadius: 8,
  },
  input: {
    borderRadius: '8px',
    color: '#777777',
    fontSize: 14,
    padding: 5,
    marginVertical: 10,
  },
});
export default InputField;
