import React from "react";
import { Text, View } from "react-native";

interface FitExerciseStatProps {
  quantity: string;
  type: string;
}

const FitExerciseStat = (props: FitExerciseStatProps) => {
  const { quantity, type } = props;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center"
      }}
    >
      <Text style={{ color: "#e9eaee", fontSize: 25, fontWeight: "500" }}>
        {quantity}
      </Text>
      <Text style={{ color: "#9fa0a5", fontSize: 20 }}>{type}</Text>
    </View>
  );
};

export default FitExerciseStat;
