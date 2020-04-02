import React from "react";
import { View, Dimensions, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";

const data = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      data: [9, 6, 6.5, 8, 6, 7, 9]
    }
  ]
};

const FitSleepChart = () => {
  return (
    <View>
      <View style={{ paddingLeft: 20 }}>
        <Text style={{ color: "#e6e7ec", fontSize: 25, fontWeight: "500", marginBottom: 5 }}>
          Sleep
        </Text>
        <Text style={{ color: "#707277", fontSize: 15 }}>
          7h 48m • Yesterday
        </Text>
      </View>
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
            labelColor: (opacity = 1) =>
              `rgba(${76}, ${78}, ${83}, ${opacity})`,
            style: {
              borderRadius: 16,
              right: 0,
              paddingRight: 64
            },
            barPercentage: 0.5,
            barRadius: 10
          }}
          showBarTops={false}
          fromZero
        />
      </View>
    </View>
  );
};

export default FitSleepChart;
