import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, SafeAreaView, StatusBar, Text, View } from "react-native";

import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" onChangeText={setQuery} value={query} />
      </View>

      <View style={styles.list}>
        <RestaurantsInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    flexGrow: 1,
    backgroundColor: "blue",
  },
});
