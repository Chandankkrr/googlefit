import React from "react";
import { StyleSheet, View, Image } from "react-native";

const GoogleFit = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("./images/swat.png")} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 240,
    height: 240,
    borderRadius: 150,
    borderWidth: 4,
    borderStyle: "dotted",
    borderColor: "#29323a"
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 150
  }
});

export default GoogleFit;
