

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Linking } from 'react-native';

const CallScreen = () => {
  const handleCallOptionPress = (phoneNumber) => {
    const phoneNumberUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneNumberUrl);
  };

  return (
   
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.callOption}
          onPress={() => handleCallOptionPress('100')}
        >
          <Text style={styles.callOptionText}>Police (100)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.callOption}
          onPress={() => handleCallOptionPress('101')}
        >
          <Text style={styles.callOptionText}>Fire Brigade (101)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.callOption}
          onPress={() => handleCallOptionPress('102')}
        >
          <Text style={styles.callOptionText}>Ambulance (102)</Text>
        </TouchableOpacity>
      </View>

  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  },
  callOption: {
    backgroundColor: '#3498db', // Blue color
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2980b9', // Darker blue color
  },
  callOptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White text color
  },
});

export default CallScreen;

