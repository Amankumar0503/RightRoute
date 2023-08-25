import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Forminput = (props) => {
  const { placeholder, label, error } = props;
  return (
    <>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
        <Text style={styles.input2}>{label}</Text>
        {error ? (<Text style={styles.input1}>{error}</Text>) : null}
      </View>

      <TextInput
        {...props}
        placeholder={placeholder}
        style={styles.input}
      ></TextInput>
    </>
  );
};

export default Forminput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#1b1b33",
    borderRadius: 8,
    height: 35,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
  input1: { color: 'red', fontSize: 16 },
  input2: { marginBottom: 10, fontWeight: "bold" },
});
