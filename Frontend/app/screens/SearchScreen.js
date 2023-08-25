import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import client from "../api/client";
import SearchBar from "../component/SearchBar";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await client.get('./api-search');
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default SearchScreen;
