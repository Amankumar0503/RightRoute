import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Card } from "react-native-paper"; // Import Card component from react-native-paper
import ImageSlider from "../component/ImgSlider";
import CardList from "../component/CardList";
import { useNavigation } from "@react-navigation/native";
import VIOLENT_CRIMES from "./VIOLENT_CRIMES";
import PROPERTY_CRIMES from "./PROPERTY_CRIMES";
import WHITE_COLLAR_CRIMES from "./WHITE_COLLAR_CRIMES";
import CYBER_CRIMES from "./CYBER_CRIMES";
import DRUG_RELATED_CRIMES from "./DRUG_RELATED_CRIMES";
import SEXUAL_OFFENSES from "./SEXUAL_OFFENSES";
import client from "../api/client";
import { createStackNavigator } from "@react-navigation/stack";
import SectionScreen from "./Detail";
//import crime_2 from "./crime_2";
import CategoryScreen from "./crime_2";
import SubCategoryScreen from "./crime_3";
import SubSubCategoryScreen from "./crime_4";
import CrimeDetailsScreen from "./Detail";

const Stack = createStackNavigator();

const Home = () => {
  const navigation = useNavigation();

  // const handleBoxPress = (screenname) => {
  //   navigation.navigate(screenname);
  // };

  const handleBoxPress = async (screenname) => {
    if (screenname === "Home") {
      // Do nothing if screenname is "Home"
      return;
    }

    try {
      // Make a request to the backend's searchCrimes endpoint
      const response = await client.get(`/search-users?query=${screenname}`);

      // Process the response data as needed
      const searchData = response.data;

      // Navigate to the appropriate screen with the search data
      navigation.navigate("CategoryScreen", { searchData });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const crimeCategories = [
    {
      name: "VIOLENT_CRIMES",description: "In a violent crime, a victim is harmed by or threatened with violence. Violent crimes include rape and sexual assault, robbery, assault and murder." /* image: require("../images/voilent.jpg")*/},
    { name: "PROPERTY_CRIMES", description: "Property crimes are criminal offenses that involve the unlawful interference with or theft of another person's property or belongings." },
    { name: "WHITE_COLLAR_CRIMES", description: "White-collar crimes are non-violent criminal offenses typically committed in a business or professional setting for financial gain through deceit or fraud." },
    { name: "CYBER_CRIMES", description: "Cybercrimes are criminal activities that are carried out through digital means, often involving computers, networks, and the internet. These crimes encompass a wide range of unlawful activities, including hacking, identity theft, and online fraud." },
    { name: "DRUG_RELATED_CRIMES", description: "Drug-related crimes are offenses involving the illegal possession, distribution, trafficking, or manufacturing of controlled substances or narcotics." },
    { name: "SEXUAL_OFFENSES", description: "Sexual offenses encompass a range of criminal activities involving non-consensual sexual acts or behaviors. These offenses are considered serious violations of personal boundaries and consent." },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
        <Image source={require("../images/logo3.jpg")} style={styles.logo} />
        <Text style={styles.headerText}>RIGHTS ROUTE</Text>
      </View>
      <View style={styles.Imageslider}>
        <ImageSlider />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CRIMES</Text>

        <View style={styles.cardContainer}>
          {crimeCategories.map((category, index) => (
            <Card
              key={index}
              style={styles.card}
              onPress={() => handleBoxPress(category.name)}
            >
              <Image style={styles.cardImage} />
              <Card.Content>
                <Text style={styles.boxTitle}>{category.name}</Text>
                <Text style={styles.boxDescription}>
                  {category.description}
                </Text>
              </Card.Content>
            </Card>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 40,
  },
  cardContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginHorizontal: -10,
  },
  card: {
    flex: 1,
    backgroundColor: "rgba(27, 27, 51, 0.98)", // Blue background color for the cards
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 8,
    elevation: 5,
    margin: 5,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#FFFFFF",
    justifyContent: "right",
    textAlign: "center",
  },
  boxDescription: {
    fontSize: 13,
    textAlign: "center",
    color: "#ffff",
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginHorizontal: -15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginHorizontal: 20,
  },
  logo: {
    height: 45,
    width: 45,
    borderRadius: 8,
  },
  Imageslider: {
    width: "100%",
    height: 220,
    justifyContent: "center",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 5,
  },
  headerText: {
    fontFamily: "custom",
    fontSize: 35,
    fontWeight: "bold",
    color: "#00008B", // Dark blue color
    marginLeft: 10,
    textShadowColor: "#FFF", // Add a subtle white text shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  head: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 40,
  },
  cardImage: {
    width: "10%",
    aspectRatio: 6 / 2, // Adjust the aspect ratio as needed
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="crime_2" component={crime_2} /> */}
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="SubCategoryScreen" component={SubCategoryScreen} />
      <Stack.Screen name="SubSubCategoryScreen" component={SubSubCategoryScreen} />
      <Stack.Screen name="CrimeDetailsScreen" component={CrimeDetailsScreen} />
      {/* <Stack.Screen name="VIOLENT_CRIMES" component={VIOLENT_CRIMES} />
        <Stack.Screen name="PROPERTY_CRIMES" component={PROPERTY_CRIMES} />
        <Stack.Screen name="WHITE_COLLAR_CRIMES" component={WHITE_COLLAR_CRIMES} />
        <Stack.Screen name="CYBER_CRIMES" component={CYBER_CRIMES} />
        <Stack.Screen name="DRUG_RELATED_CRIMES" component={DRUG_RELATED_CRIMES} />
        <Stack.Screen name="SEXUAL_OFFENSES" component={SEXUAL_OFFENSES} /> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
