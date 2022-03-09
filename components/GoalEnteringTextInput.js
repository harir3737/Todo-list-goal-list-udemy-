import { TextInput, StyleSheet } from "react-native";
import React from "react";

const GoalEnteringTextInput = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={styles.TextInput}
    />
  );
};
const styles = StyleSheet.create({
  TextInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalEnteringTextInput;
