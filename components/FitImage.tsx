import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Animated, Easing } from "react-native";
import Svg, {
  Circle,
  G,
  Defs,
  Marker,
  Path,
  MarkerUnits,
  SvgXml,
} from "react-native-svg";

const { width } = Dimensions.get("screen");

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const FitImage = () => {
  const innerCircleRadius = 13;
  const innerCircleFillPercentage = 65;
  const innerCirclePerimeter = 2 * Math.PI * innerCircleRadius;
  const innerCircleStrokeDashOffset =
    innerCirclePerimeter -
    (innerCirclePerimeter * innerCircleFillPercentage) / 100;

  const outerCircleRadius = 18;
  const outerCircleFillPercentage = 85;
  const outerCirclePerimeter = 2 * Math.PI * outerCircleRadius;
  const outerCircleStrokeDashOffset =
    outerCirclePerimeter -
    (outerCirclePerimeter * outerCircleFillPercentage) / 100;
  const [springValue] = useState(new Animated.Value(1.3));

  const [innerCircleInitialFill] = useState(
    new Animated.Value(innerCirclePerimeter)
  );
  const [outerCircleInitialFill] = useState(
    new Animated.Value(outerCirclePerimeter)
  );

  React.useEffect(() => {
    Animated.timing(innerCircleInitialFill, {
      toValue: innerCircleStrokeDashOffset,
      duration: 2000,
    }).start();
    Animated.timing(outerCircleInitialFill, {
      toValue: outerCircleStrokeDashOffset,
      duration: 2000,
    }).start();
    Animated.spring(springValue, {
      toValue: 1,
      friction: 1,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Svg
          viewBox="0 0 55 55"
          width={width}
          height={width}
          style={{
            transform: [{ rotateZ: "-90deg" }],
          }}
        >
          <G>
            <Circle
              cx="25"
              cy="25"
              r={outerCircleRadius}
              fill="transparent"
              stroke="#1f4a42"
              strokeDasharray="10, 1"
              strokeDashoffset="30"
              strokeWidth={0.5}
            />
            <AnimatedCircle
              cx="25"
              cy="25"
              r={outerCircleRadius}
              fill="transparent"
              stroke="#02ac8a"
              strokeDasharray={outerCirclePerimeter}
              strokeDashoffset={outerCircleInitialFill}
              markerStart="url(#m1)"
            />
            <Circle
              cx="25"
              cy="25"
              r={innerCircleRadius}
              fill="transparent"
              stroke="#143c5b"
              strokeDasharray="1"
              strokeWidth={0.5}
            />
            <AnimatedCircle
              cx="25"
              cy="25"
              r={innerCircleRadius}
              fill="transparent"
              stroke="#028cfe"
              strokeDasharray={innerCirclePerimeter}
              strokeDashoffset={innerCircleInitialFill}
            />
          </G>
        </Svg>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: width / 3.6,
            top: width / 2.7,
          }}
        >
          <Animated.Image
            source={require("../images/swat.png")}
            style={[styles.image, 
              { transform: [{ scale: springValue }] }]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: width * 0.5,
  },
});

export default FitImage;
