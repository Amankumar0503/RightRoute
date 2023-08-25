import React from 'react';
import { View, Text } from 'react-native';

const DetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detail Screen for {item.text}</Text>
    </View>
  );
};

export default DetailScreen;
