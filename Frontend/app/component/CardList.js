import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Card from './Card'; // Import the Card component you created
import Detail from '../screens/Detail';
import { useNavigation } from '@react-navigation/native';

const CardList = ({ navigation }) => {
  const data = [
    {
      id: '1',
      title: 'Card 1 Title',
      description: 'Description for Card 1',
    },
    {
      id: '2',
      title: 'Card 2 Title',
      description: 'Description for Card 2',
    },
    {
      id: '3',
      title: 'Card 3 Title',
      description: 'Description for Card 3',
    },
    {
      id: '4',
      title: 'Card 4 Title',
      description: 'Description for Card 4',
    },
  ];

  const handleCardPress = (item) => {
    // Navigate to another screen on card press
    navigation.navigate('', { cardInfo: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            onPress={() => handleCardPress(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});

export default CardList;
