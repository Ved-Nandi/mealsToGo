import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { ResaurantInfoCard } from "../componets/restaurants-info-cared.componets";

export const RestaurantsScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <ResaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  search: {
    padding: 16,
  },
  list: {
    padding: 16,
    flex: 1,
  },
});
