import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const CrimeDetailsScreen = ({ route }) => {
  
  const { crimeDetails } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crime Details</Text>
      <Text style={styles.text}>Name: {crimeDetails.Name}</Text>
      {/* <Text style={styles.text}>ID: {crimeDetails._id}</Text> */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>IPC:</Text>
        {crimeDetails.IPC.map((ipc, index) => (
          <Text key={index} style={styles.text}>{ipc}</Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Penalty:</Text>
        <View style={styles.penaltyContainer}>
          <View style={styles.penaltyRow}>
            {crimeDetails.Penalty.map((penalty, index) => (
              <View key={index} style={styles.penaltyCard}>
                <Text style={styles.penaltyNumber}>{index + 1}.</Text>
                <Text style={styles.penaltyText}>{penalty}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      {/* Display other crime details as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft:15
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  penaltyContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width:300


  },
  penaltyRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // Change this to your desired alignment
  },
  penaltyCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10, // Add some spacing between cards
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft:-26
  },
  penaltyNumber: {
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: 18,
  },
  penaltyText: {
    fontSize: 18,
    width:300
  },
});

export default CrimeDetailsScreen;
