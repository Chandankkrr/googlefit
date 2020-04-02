import React from "react";
import { Text, View } from "react-native";

interface HealthStatProps {
  iconText: string;
  iconBackgroundColor: string;
  iconColor: string;
  actual: string;
  over: string;
  type: string;
}

const FitHealthStat = (props: HealthStatProps) => {
  const {
    iconText,
    iconBackgroundColor,
    iconColor,
    actual,
    over,
    type
  } = props;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: iconBackgroundColor,
          marginRight: 10
        }}
      >
        <Text style={{ color: iconColor, fontSize: 20 }}>{iconText}</Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end"
          }}
        >
          <Text style={{ color: "#e9eaee", fontSize: 40, fontWeight: "600" }}>
            {actual}
          </Text>
          <Text style={{ color: "#9fa0a5", fontSize: 20 }}>{over}</Text>
        </View>

        <Text style={{ color: "#9fa0a5", fontSize: 20 }}>{type}</Text>
      </View>
    </View>
  );
};

export default FitHealthStat;
