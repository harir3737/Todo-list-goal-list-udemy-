import { TextInput, StyleSheet, View, Button } from "react-native";
import React, { useState } from "react";

const GoalEnteringTextInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="enter goal"
        onChangeText={goalInputHandler}
        value={enteredGoal}
        style={styles.TextInput}
      />
      <Button
        title="add"
        onPress={props.onGoalHandler.bind(this, enteredGoal)}
      />
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
