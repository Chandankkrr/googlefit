import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Animated } from "react-native";
import Svg, {
  Circle,
  G,
  Defs,
  Marker,
  Path,
} from "react-native-svg";

const { width, height } = Dimensions.get("screen");

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const AnimatedMarker = Animated.createAnimatedComponent(Marker);

const FitImage = () => {
  const innerCircleRadius = 13;
  const innerCircleFillPercentage = 75;
  const innerCirclePerimeter = 2 * Math.PI * innerCircleRadius;
  const innerCircleStrokeDashOffset =
    innerCirclePerimeter -
    (innerCirclePerimeter * innerCircleFillPercentage) / 100;

  const outerCircleRadius = 18;
  const outerCircleFillPercentage = 35;
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
          viewBox={`0 0 50 50`}
          width={width}
          height={height / 2.5}
          style={{
            transform: [{ rotateZ: "-90deg" }],
          }}
        >
          <Defs>
            <AnimatedMarker
              id="m1"
              viewBox="0 0 10 10"
              refX={10}
              refY={10}
              markerWidth="2"
              markerHeight="2"
            >
              <Path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z"
                strokeWidth="2"
                fill="white"
                transform={{translateX: "-90deg"}}
              />
            </AnimatedMarker>
          </Defs>
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
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Animated.Image
            source={require("../images/swat.png")}
            style={[styles.image, { transform: [{ scale: springValue }] }]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: width * 0.5,
  },
});

export default FitImage;
