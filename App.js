import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, StatusBar, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>

        <View style={styles.mealList}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  search: {
    padding: 16,
    backgroundColor: "green",
  },
  mealList: {
    flex: 1,
    padding: 16,
    flexGrow: 1,
    backgroundColor: "blue",
  },
});
