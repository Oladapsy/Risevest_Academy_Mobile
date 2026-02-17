import { View, StyleSheet, TextInput, TextInputProps } from "react-native";

interface InputTextProp extends TextInputProps {
  placeholder: string;
  keyboardType?: any;
  value?: string;  
  onChangeText?: (text: string) => void;    
  onFocus?: () => void;   // ← added so LoginScreen can close dropdown on tap
}

const InputField = ({ placeholder, keyboardType, value, onChangeText, onFocus }: InputTextProp) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#A0A0A8"
        keyboardType={keyboardType || "default"}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F3",
    flex: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    borderRadius: 8,
    color: "#0D0D0D",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    padding: 5,
    marginVertical: 10,
  },
});

export default InputField;