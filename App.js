import React, { useState } from "react";
import { StyleSheet, View, FlatList, StatusBar } from "react-native";
import GoalItemContainer from "./components/GoalItemContainer";
import GoalEnteringTextInput from "./components/GoalEnteringTextInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  return (
    <View style={styles.screen}>
      <StatusBar hidden />
      <GoalEnteringTextInput onGoalHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItemContainer
            label={itemData.item.value}
            onDelete={removeGoalHandler}
            id={itemData.item.id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
