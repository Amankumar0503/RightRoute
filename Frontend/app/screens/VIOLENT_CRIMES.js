// // import React from "react";
// // import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// // import { Card } from "react-native-paper"; // Import Card component from react-native-paper
// // import ImageSlider from "../component/ImgSlider";
// // import CardList from "../component/CardList";
// // import { useNavigation } from "@react-navigation/native";
// // import Homicide from './Homicide';
// // import Assault from './Assault';

// // import client from '../api/client';
// // import { createStackNavigator } from '@react-navigation/stack';

// // const Stack = createStackNavigator();
// // // const VOILENT_CRIMES = () => {
// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>Box 1 Screen</Text>
// // //       {/* Add your content for Box 1 screen here */}
// // //     </View>
// // //   );
// // // };

// // const VIOLENT_CRIMES = () => {
// //   const navigation = useNavigation();

// //   // const handleBoxPress = (screenname) => {
// //   //   navigation.navigate(screenname);
// //   // };

// //   const handleBoxPress = async (screenname) => {
// //     if (screenname === "VIOLENT_CRIMES") {
// //       // Do nothing if screenname is "Home"
// //       return;
// //     }

// //     try {
// //       // Make a request to the backend's searchCrimes endpoint
// //       const response = await client.get(`/search-users/violent?query=${screenname}`);

// //       // Process the response data as needed
// //       const searchData = response.data;

// //       // Navigate to the appropriate screen with the search data
// //       navigation.navigate(screenname, { searchData });
// //     } catch (error) {
// //       console.error("Error fetching search results:", error);
// //     }
// //   };




// //   const crimeCategories = [
// //     { name: "Homicide", description: "Description_1"  },
// //     { name: "Assault", description: "Description for Box 2" },
    
// //   ];

// //   return (
 
// //     <ScrollView style={styles.container}>
// //       <View style={styles.head}>
        
// //         <Text style={styles.headerText}>VIOLENT_CRIMES</Text>
// //       </View>
     
// //       <View style={styles.section}>
        

       

// // <View style={styles.cardContainer}>
// //   {crimeCategories.map((category, index) => (
// //     <Card
// //       key={index}
// //       style={styles.card}
// //       onPress={() => handleBoxPress(category.name)}
// //     >
// //       <Image  style={styles.cardImage} />
// //       <Card.Content>
// //         <Text style={styles.boxTitle}>{category.name}</Text>
// //         <Text style={styles.boxDescription}>{category.description}</Text>
// //       </Card.Content>
// //     </Card>
// //   ))}
// // </View>

// //       </View>
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     width: "100%",
// //     marginTop: 40,
// //   },
// //   cardContainer: {
// //     paddingHorizontal: 20,
// //     marginTop: 10,
// //     marginHorizontal: -10,

// //   },
// //   card: {
// //     flex: 1,
// //     backgroundColor: "rgba(27, 27, 51, 0.98)", // Blue background color for the cards
// //     alignItems: "center",
// //     justifyContent: "center",
// //     padding: 10,
// //     borderRadius: 8,
// //     elevation: 5,
// //     margin: 5,
// //   },
// //   boxTitle: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     marginBottom: 5,
// //     color:'#FFFFFF',
// //     justifyContent:'right'
// //   },
// //   boxDescription: {
// //     fontSize: 12,
// //     textAlign: "center",
// //     color:'#ffff'
// //   },
// //   section: {
// //     marginTop: 20,
// //     paddingHorizontal: 20,
// //     marginHorizontal: -15,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     marginBottom: 5,
// //     marginHorizontal: 0,
// //   },
// //   logo: {
// //     height: 45,
// //     width: 45,
// //     borderRadius:8
// //   },
// //   Imageslider: {
// //     width: "100%",
// //     height: 220,
// //     justifyContent: "center",
// //     marginLeft: 20,
// //     marginTop: 20,
// //     marginBottom: 5,
// //   },
// //   headerText: {
// //     fontFamily: "custom",
// //     fontSize: 30,
// //     fontWeight: "bold",
// //     color: "#00008B", // Dark blue color
// //     marginLeft: 10,
// //     textShadowColor: "#FFF", // Add a subtle white text shadow
// //     textShadowOffset: { width: 1, height: 1 },
// //     textShadowRadius: 2,
// //   },
// //   head: {
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     flexDirection: "row",
// //     marginHorizontal: 40,
// //   },
// //   cardImage: {
// //     width: "10%",
// //     aspectRatio: 6 / 2, // Adjust the aspect ratio as needed
// //     resizeMode: "cover",
// //     borderTopLeftRadius: 8,
// //     borderTopRightRadius: 8,
// //   },
// // });


// // const MainNavigator = () => {
// //   return (
// //       <Stack.Navigator >
// //         <Stack.Screen
// //           name="VIOLENT_CRIMES"
// //           component={VIOLENT_CRIMES}
// //           options={{ headerShown: false }}
// //         />
// //         <Stack.Screen name="Homicide" component={Homicide} />
// //         <Stack.Screen name="Assault" component={Assault} />
        
// //       </Stack.Navigator>
// //   );
// // };

// // export default MainNavigator;


// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import axios from "axios";

// const SectionScreen = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("/get-sections"); // Replace with your API endpoint
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const renderContent = (contents) => {
//     return contents.map((content, index) => (
//         <View key={index} style={styles.contentContainer}>
//         <Text style={styles.contentText}>ID: {content.id}</Text>
//         <Text style={styles.contentText}>Name: {content.Name}</Text>
//         <Text style={styles.contentText}>IPC: {content.IPC}</Text>
//         <Text style={styles.contentText}>Penalty: {content.penalty}</Text>
//       </View>
//     ));
//   };

//   const renderSubsections = (subsections) => {
//     return subsections.map((subsection, index) => (
//       <View key={index} style={styles.subsectionContainer}>
//         <Text style={styles.subsectionTitle}>{subsection.title}</Text>
//         {renderContent(subsection.content)}
//         {renderSubsections(subsection.subsections)}
//       </View>
//     ));
//   };

//   return (
//     <View style={styles.container}>
//       {data.map((section, index) => (
//         <View key={index} style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>{section.title}</Text>
//           {renderSubsections(section.subsections)}
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   sectionContainer: {
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   subsectionContainer: {
//     marginLeft: 16,
//     marginBottom: 10,
//   },
//   subsectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   contentText: {
//     fontSize: 16,
//   },
// });

// export default SectionScreen;
