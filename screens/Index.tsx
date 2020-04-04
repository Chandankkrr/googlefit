import React from "react";
import { View, Text } from "react-native";

export const Journal = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1f2026",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#ffffff", fontSize: 36 }}>Journal!</Text>
    </View>
  );
};

export const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1f2026",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#ffffff", fontSize: 36 }}>Profile!</Text>
    </View>
  );
};
