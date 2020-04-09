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
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#8eb6e6", fontSize: 23, fontWeight: "500" }}>
        {quantity}
      </Text>
      <Text style={{ color: "#9a9ba1", fontSize: 20 }}>{type}</Text>
    </View>
  );
};

export default FitExerciseStat;
