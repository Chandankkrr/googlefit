import React from "react";
import { Text, View } from "react-native";

interface ExerciseStatProps {
  quantity: string;
  type: string;
}

const ExerciseStat = (props: ExerciseStatProps) => {
  const { quantity, type } = props;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center"
      }}
    >
      <Text style={{ color: "#ffffff", fontSize: 30, fontWeight: "500" }}>
        {quantity}
      </Text>
      <Text style={{ color: "#707277", fontSize: 20 }}>{type}</Text>
    </View>
  );
};

export default ExerciseStat;
