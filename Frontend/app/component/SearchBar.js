import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";

const SearchBar = ({ onSearch }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={text}
        onChangeText={setText}
        onSubmitEditing={() => onSearch(text)}
        style={styles.input}
      />
      <Image
        source={require('../images/search.png')}
        style={styles.icon}
      />
    </View>
  );
};
const main_color = 'blue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginVertical:'10%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',

  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: '#fff',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: "#ccc",
  },
  input: {
    width: '80%',
    height: 40,
    padding: 10,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: "#ccc",
    backgroundColor: '#fff',
  },
});

export default SearchBar;