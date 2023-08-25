import { StyleSheet, Text, View, Animated } from "react-native";
import React from "react";

const Formheader = ({
  leftHeading,
  rightHeading,
  subHeading,
  subHeading1,
  LeftHeaderTranslateX = 40,
  RightHeaderOpacity = 0,
  RightHeaderTranslateY = -20,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.heading,
            { transform: [{ translateX: LeftHeaderTranslateX }] },
          ]}
        >
          {leftHeading}{" "}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.heading,
            {
              opacity: RightHeaderOpacity,
              transform: [{ translateY: RightHeaderTranslateY }],
            },
          ]}
        >
          {rightHeading}
        </Animated.Text>
      </View>
      
      <Text style={styles.subHeading1}>{subHeading1}</Text>
      <Text style={styles.subHeading}>{subHeading}</Text>
    </>
  );
};

export default Formheader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: { fontSize: 30, fontWeight: "bold", color: "#1b1b33" },
  subHeading: { fontSize: 18, color: "#1b1b33", textAlign: "center" },
  subHeading1: { fontSize: 18, color: "#1b1b33", textAlign: "center" },
});
