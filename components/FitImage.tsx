import React from "react";
import { StyleSheet, View, Image, Dimensions, Text } from "react-native";

const { width, height } = Dimensions.get("screen");

const FitImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fitHeartPointsContainer0}>
      <View style={styles.fitHeartPointsContainer1}>
      <View
              style={{
                position: "absolute",
                top: 20,
                right: 30,
                width: 25,
                height: 25,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#03daae",
              }}
            >
              <Text style={{fontSize: 18, transform: [{ rotate: '45deg'}]}}>
                >>
              </Text>
            </View>
        <View style={styles.fitMoveMinsContainer0}>
          <View style={styles.fitMoveMinsContainer1}>
            <View
              style={{
                position: "absolute",
                bottom: 10,
                right: 15,
                width: 25,
                height: 25,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#008cfd",
               // marginRight: 10,
              }}
            >
              <Text style={{fontSize: 18, transform: [{ rotate: '120deg'}]}}>
                >
              </Text>
            </View>
            <Image
              source={require("../images/swat.png")}
              style={styles.image}
            />
          </View>
        </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fitHeartPointsContainer0: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.75,
    height: height * 0.35,
    borderRadius: width * 0.5,
    borderWidth: 4,
    borderStyle: "dotted",
    borderColor: "#19473e"
  },
  fitHeartPointsContainer1: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.75,
    height: height * 0.35,
    borderRadius: width * 0.5,
    //borderStyle: "dotted",
    borderColor: "#03daae",
    borderWidth: 10,
    //borderStyle: "dotted",
    position: "absolute",
    borderLeftColor: "transparent",
    borderRightColor: 'transparent',
    borderBottomColor: "transparent",
  },
  fitMoveMinsContainer0: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.55,
    height: height * 0.25,
    borderRadius: width * 0.5,
    borderWidth: 4,
    borderStyle: "dotted",
    borderColor: "#153858"
  },
  fitMoveMinsContainer1: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.55,
    height: height * 0.25,
    borderRadius: width * 0.5,
    //borderStyle: "dotted",
    borderColor: "#008cfd",
    borderWidth: 10,
    //borderStyle: "dotted",
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    top: -5
  },
  image: {
    width: width * 0.35,
    height: height * 0.15,
    borderRadius: width * 0.5
  }
});

export default FitImage;
