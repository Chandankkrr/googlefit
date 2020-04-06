import React from "react";
import { Text, View, Dimensions, ScrollView } from "react-native";
import FitImage from "./components/FitImage";
import FitHealthStat from "./components/FitHealthStat";
import FitExerciseStat from "./components/FitExerciseStat";
import FitChart from "./components/FitSleepChart";
import AdditionalStats from "./components/AdditionalStats";

const { width } = Dimensions.get("screen");
const sleepData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      data: [9, 6, 6.5, 8, 6, 7, 9],
      baseline: 8
    }
  ]
};

const stepsData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      data: [10000, 9000, 2000, 3000, 8000, 11000, 10500, 1000],
      baseline: 10000
    }
  ]
};

const GoogleFit = () => {
  return (
    <ScrollView style={{ backgroundColor: "#1f2026" }}>
      <View>
        <FitImage />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginLeft: width * 0.15,
          marginRight: width * 0.15,
          marginBottom: width * 0.05,
          // borderColor: "white",
          // borderWidth: 1,
        }}
      >
        <FitHealthStat
          iconBackgroundColor="#183b57"
          iconColor="#0e8df2"
          actual="75"
          over="/100"
          type="Move Min"
        />
        <FitHealthStat
          iconBackgroundColor="#124b41"
          iconColor="#03ddb3"
          actual="30"
          over="/20"
          type="Heart Pts"
          doubleIcon
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginLeft: width * 0.1,
          marginRight: width * 0.1,
          marginBottom: width * 0.05,
        }}
      >
        <View>
          <FitExerciseStat quantity="8225" type="steps" />
        </View>
        <View>
          <Text style={{ color: "#9a9ba1", fontSize: 40, fontWeight: "100" }}>
            |
          </Text>
        </View>
        <View>
          <FitExerciseStat quantity="6432" type="cal" />
        </View>
        <View>
          <Text style={{ color: "#9a9ba1", fontSize: 40, fontWeight: "100" }}>
            |
          </Text>
        </View>
        <View>
          <FitExerciseStat quantity="5.2" type="km" />
        </View>
      </View>
      <View>
        <FitChart
          title={"Sleep"}
          description={"7h 48m • Yesterday"}
          data={sleepData}
          baseline={8}
        />
        <FitChart
          title={"Take 10,000 steps a day"}
          data={stepsData}
          baseline={10000}
        />
      </View>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <AdditionalStats name="Heart rate" description="No recent data" />
        <AdditionalStats name="Weight" description="69 kg • Mar 14" />
        <AdditionalStats
          name="Blood pressure"
          description="120/70 mmHg • Apr 27, 2019"
        />
      </View>
    </ScrollView>
  );
};

export default GoogleFit;
