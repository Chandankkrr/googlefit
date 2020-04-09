import React from "react";
import { View, Dimensions, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";

interface FitDataSets {
  data: number[];
}

interface FitChartData {
  labels: string[];
  datasets: FitDataSets[];
}

interface FitChartProps {
  data: FitChartData;
  title: string;
  description?: string;
  baseline: number;
}

const FitChart = (props: FitChartProps) => {
  const { data, title, description, baseline } = props;
  
  return (
    <View style={{ flex: 1, marginBottom: 30 }}>
      <View style={{ paddingLeft: 20 }}>
        <Text
          style={{
            color: "#e6e7ec",
            fontSize: 20,
            fontWeight: "500",
            marginBottom: 5,
          }}
        >
          {title}
        </Text>
        {description && (
          <Text style={{ color: "#9a9ba1", fontSize: 15, marginBottom: 20 }}>
            {description}
          </Text>
        )}
      </View>
      <View>
        <BarChart
          style={{
            marginVertical: 8,
            borderRadius: 16,
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
            color: (opacity = 1) => `rgba(${154}, ${155}, ${161}, ${opacity})`,
            labelColor: (opacity = 1) =>
              `rgba(${154}, ${155}, ${161}, ${opacity})`,
            style: {
              borderRadius: 16,
              right: 0,
              paddingRight: 64,
            },
            barPercentage: 0.5,
            decimalPlaces: 0,
            baseline: baseline,
          }}
          showBarTops={false}
          fromZero
        />
      </View>
    </View>
  );
};

export default FitChart;
