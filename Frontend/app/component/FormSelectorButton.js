import { StyleSheet, Text, View, TouchableWithoutFeedback,Animated } from "react-native";
import React from "react";

const FormSelectorButton = ({ title, backgroundColor ,style, onPress}) => {
  return (
    <TouchableWithoutFeedback  onPress={onPress}>
      <Animated.View style={[styles.conatainer,style,{backgroundColor}]}>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default FormSelectorButton;

const styles = StyleSheet.create({
  conatainer: {
    height: 45,
    width: "50%",
    backgroundColor: "#1b1b33",
    justifyContent: "center",
    alignItems: "center",
  },
  title: { color: "white", fontSize: 16 }
  

});
