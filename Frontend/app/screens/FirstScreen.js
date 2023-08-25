import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
  { id: 4, text: 'Item 4' },
  { id: 5, text: 'Item 5' },
];

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {data.map(item => (
        <TouchableOpacity
          key={item.id}
          style={styles.box}
          onPress={() => navigation.navigate('Detail', { item })}
        >
          <Text>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 330,
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default FirstScreen;
