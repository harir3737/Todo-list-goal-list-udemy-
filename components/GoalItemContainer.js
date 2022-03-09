import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const GoalItemContainer = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.label}</Text>
      <Button title="delete" onPress={props.onDelete.bind(this, props.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "cyan",
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GoalItemContainer;
