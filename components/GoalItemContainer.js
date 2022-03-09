import { View, Text, StyleSheet } from "react-native";
import React from "react";

const GoalItemContainer = ({label}) => {
  return (
    <View style={styles.listItem}>
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "cyan",
    elevation: 5,
  },
});

export default GoalItemContainer;
