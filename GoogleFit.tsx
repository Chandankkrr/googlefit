import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import FitImage from "./components/FitImage";
import FitHealthStat from "./components/FitHealthStat";
import FitExerciseStat from "./components/FitExerciseStat";
import FitSleepChart from "./components/FitSleepChart";

const { width } = Dimensions.get("screen");

const GoogleFit = () => {
  return (
    <View style={{flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FitImage />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          marginLeft: width * 0.10,
          marginRight: width * 0.10
        }}
      >
          <FitHealthStat
            iconText=">"
            iconBackgroundColor="#183b57"
            iconColor="#0e8df2"
            actual="75"
            over="/100"
            type="Move Min"
          />
          <FitHealthStat
            iconText=">>"
            iconBackgroundColor="#124b41"
            iconColor="#03ddb3"
            actual="30"
            over="/20"
            type="Heart pts"
          />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: 'flex-start',
          justifyContent: "space-around",
          marginLeft: width * 0.20,
          marginRight: width * 0.20
        }}
      >
        <View>
          <FitExerciseStat quantity="8225" type="steps" />
        </View>
        <View>
          <Text style={{ color: "#707277", fontSize: 40 }}>|</Text>
        </View>
        <View>
          <FitExerciseStat quantity="6432" type="cal" />
        </View>
        <View>
          <Text style={{ color: "#707277", fontSize: 40 }}>|</Text>
        </View>
        <View>
          <FitExerciseStat quantity="5.2" type="km" />
        </View>
      </View>
      <View style={{flex: 1}}>
        <FitSleepChart />
      </View>
    </View>
  );
};

export default GoogleFit;


