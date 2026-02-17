import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";

interface InputFieldProps extends TextInputProps {}

const InputField = ({ style, ...rest }: InputFieldProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor="#999"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F3",
    borderRadius: 16,
    paddingHorizontal: 12,
  },
  input: {
    color: "#777777",
    fontSize: 14,
    paddingVertical: 14,
  },
});

export default InputField;
