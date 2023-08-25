// // import React from "react";
// // import { View, Text, StyleSheet } from "react-native";

// // const WHITE_COLLAR_CRIMES = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Box 1 Screen</Text>
// //       {/* Add your content for Box 1 screen here */}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //   },
// // });

// // export default WHITE_COLLAR_CRIMES;

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
