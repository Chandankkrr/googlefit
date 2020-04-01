import React from "react";
import { View, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const data = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      data: [8, 7, 7, 6.5, 9, 6, 6.5]
    }
  ]
};

const SleepChart = () => {
  return (
    <View>
      <BarChart
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
        yAxisSuffix=""
        data={data}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundColor: "#1f2026",
          backgroundGradientFrom: "#1f2026",
          backgroundGradientTo: "#1f2026",
          fillShadowGradient: "#7262f8",
          fillShadowGradientOpacity: 1,
          color: (opacity = 1) => `rgba(${112}, ${98}, ${247}, ${opacity})`,
          labelColor: () => "#4c4e53",
          style: {
            borderRadius: 16
          },
          barPercentage: 0.5,
          barRadius: 10
        }}
        showBarTops={false}
        fromZero
      />
    </View>
  );
};

export default SleepChart;
