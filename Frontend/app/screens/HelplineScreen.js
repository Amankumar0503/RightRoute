// // // HelplineScreen.js
// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // const HelplineScreen = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Helpline Numbers Screen</Text>
// //       {/* Add your helpline numbers and UI here */}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// // });

// // export default HelplineScreen;

// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { Linking } from 'react-native';

// const HelplineScreen = () => {
//   const stateHelplineNumbers = [
//     { state: 'Andhra Pradesh', helpline: '0866-2410978' },
//     { state: 'Arunachal Pradesh', helpline: '9436055743' },
//     { state: 'Assam', helpline: '6913347770' },
//     { state: 'Bihar', helpline: '104' },
//     { state: 'Chhattisgarh', helpline: '104' },
//     { state: 'Delhi', helpline: '011-22307145' },
//     { state: 'Goa', helpline: '104' },
//     { state: 'Gujarat', helpline: '104' },
//     { state: 'Haryana', helpline: '8558893911' },
//     { state: 'Himachal Pradesh', helpline: '104' },
//     { state: 'Jammu & Kashmir', helpline: '01912520982' },
//     { state: 'Jharkhand', helpline: '104' },
//     { state: 'Karnataka', helpline: '104' },
//     { state: 'Kerala', helpline: '0471-2552056' },
//     { state: 'Madhya Pradesh', helpline: '104' },
//     { state: 'Maharashtra', helpline: '020-26127394' },
//     { state: 'Manipur', helpline: '3852411668' },
//     { state: 'Meghalaya', helpline: '108' },
//     { state: 'Mizoram', helpline: '102' },
//     { state: 'Nagaland', helpline: '7005539653' },
//     { state: 'Odisha', helpline: '104' },
//     { state: 'Punjab', helpline: '104' },
//     { state: 'Rajasthan', helpline: '0141-2225624' },
//     { state: 'Sikkim', helpline: '104' },
//     { state: 'Tamil Nadu', helpline: '044-29510500' },
//     { state: 'Telangana', helpline: '104' },
//     { state: 'Tripura', helpline: '0381-2315879' },
//     { state: 'Uttar Pradesh', helpline: '18001805145' },
//     { state: 'Uttarakhand', helpline: '104' },
//     { state: 'West Bengal', helpline: '1800313444222' },
//     // Add more state helpline numbers here
//     // ...
//   ];

//   const handleCallOptionPress = (phoneNumber) => {
//     const phoneNumberUrl = `tel:${phoneNumber}`;
//     Linking.openURL(phoneNumberUrl);
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {stateHelplineNumbers.map((entry, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.callOption}
//             onPress={() => handleCallOptionPress(entry.helpline)}
//           >
//             <Text style={styles.callOptionText}>{entry.state}</Text>
//             <Text>{entry.helpline}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // Take up full screen
//     backgroundColor: '#fff', // Set the background color as needed
//   },
//   scrollContent: {
//     padding: 20,
//     paddingTop: 40, // Add top padding for some spacing
//   },
//   callOption: {
//     backgroundColor: 'lightblue',
//     padding: 20,
//     marginBottom: 20,
//     borderRadius: 8,
//   },
//   callOptionText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default HelplineScreen;


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Linking } from 'react-native';

const HelplineScreen = () => {
  const stateHelplineNumbers = [
        { state: 'Andhra Pradesh', helpline: '0866-2410978' },
    { state: 'Arunachal Pradesh', helpline: '9436055743' },
    { state: 'Assam', helpline: '6913347770' },
    { state: 'Bihar', helpline: '104' },
    { state: 'Chhattisgarh', helpline: '104' },
    { state: 'Delhi', helpline: '011-22307145' },
    { state: 'Goa', helpline: '104' },
    { state: 'Gujarat', helpline: '104' },
    { state: 'Haryana', helpline: '8558893911' },
    { state: 'Himachal Pradesh', helpline: '104' },
    { state: 'Jammu & Kashmir', helpline: '01912520982' },
    { state: 'Jharkhand', helpline: '104' },
    { state: 'Karnataka', helpline: '104' },
    { state: 'Kerala', helpline: '0471-2552056' },
    { state: 'Madhya Pradesh', helpline: '104' },
    { state: 'Maharashtra', helpline: '020-26127394' },
    { state: 'Manipur', helpline: '3852411668' },
    { state: 'Meghalaya', helpline: '108' },
    { state: 'Mizoram', helpline: '102' },
    { state: 'Nagaland', helpline: '7005539653' },
    { state: 'Odisha', helpline: '104' },
    { state: 'Punjab', helpline: '104' },
    { state: 'Rajasthan', helpline: '0141-2225624' },
    { state: 'Sikkim', helpline: '104' },
    { state: 'Tamil Nadu', helpline: '044-29510500' },
    { state: 'Telangana', helpline: '104' },
    { state: 'Tripura', helpline: '0381-2315879' },
    { state: 'Uttar Pradesh', helpline: '18001805145' },
    { state: 'Uttarakhand', helpline: '104' },
    { state: 'West Bengal', helpline: '1800313444222' },
    // ... (the rest of the state helpline numbers)
  ];

  const handleCallOptionPress = (phoneNumber) => {
    const phoneNumberUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneNumberUrl);
  };

  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {stateHelplineNumbers.map((entry, index) => (
          <TouchableOpacity
            key={index}
            style={styles.callOption}
            onPress={() => handleCallOptionPress(entry.helpline)}
          >
            <Text style={styles.callOptionText}>{entry.state}</Text>
            <Text>{entry.helpline}</Text>
            <TouchableOpacity style={styles.callButton} onPress={() => handleCallOptionPress(entry.helpline)}>
              <Text style={styles.callButtonText}>Call</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:25
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 10,
  },
  callOption: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  callOptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  callButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  callButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HelplineScreen;