import { TextInput, StyleSheet, View, Button } from "react-native";
import React from "react";

const GoalEnteringTextInput = ({
  placeholder,
  onChangeText,
  value,
  onPress,
  title,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.TextInput}
      />
      <Button title={title} onPress={onPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  TextInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default GoalEnteringTextInput;
