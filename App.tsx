import React from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import Constants from 'expo-constants';
import GoogleFit from "./GoogleFit";

const { height } = Dimensions.get('screen');

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView
      contentContainerStyle={{minHeight: height}}
       style={{flex:1, top: Constants.statusBarHeight}}>
        <GoogleFit />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f2026"
  },
});

export default App;
