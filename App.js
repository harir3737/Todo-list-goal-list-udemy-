import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [enteredTextGoal, setEnteredTextGoal] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);

  const goalnputHandler = (enteredText) => {
    setEnteredTextGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoal((currentGoal) => [...courseGoal, enteredTextGoal]);
  };
  return (
    <View style={styles.View}>
      <View style={styles.InputContainer}>
        <TextInput
          placeholder="enter here"
          style={styles.TextInput}
          onChangeText={goalnputHandler}
          value={enteredTextGoal}
        />
        <Button title="add" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoal.map((goal) => (
          <Text>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    padding: 50,
  },
  InputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TextInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: 220,
  },
  CourseGoalContainer: {
    flexDirection: "column",
  },
});
