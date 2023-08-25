import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const ImageSlider = () => {
  const imageUrls = [
    require('../images/violent.jpg'),
    require('../images/property.jpg'),
    require('../images/white_collar.jpg'),
    require('../images/cyber.jpg'),
    require('../images/drug.jpg'),
    require('../images/sexual.jpg'),
  ];

  const windowWidth = 300; // Adjust this based on your design
  const intervalDuration = 3000; // Automatic scroll interval in milliseconds

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % imageUrls.length;
      scrollViewRef.current.scrollTo({
        x: nextIndex * windowWidth,
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / windowWidth);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll} // Listen for scroll events
      >
        {imageUrls.map((imageUrl, index) => (
          <Image key={index} source={imageUrl} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {imageUrls.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentIndex && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your style definitions here
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    //marginLeft: 40,
    marginHorizontal: 10,
    //borderColor: '#000',
    //borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: '2%',
    marginLeft: -16,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
    marginBottom: 4,
  },
  activeIndicator: {
    backgroundColor: 'blue', // Change to your preferred active color
  },
});

export default ImageSlider;
