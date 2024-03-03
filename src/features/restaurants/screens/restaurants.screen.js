import React, { useState } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantsScreen = () => {
  const [query, setQuery] = useState("");

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" onChangeText={setQuery} value={query} />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantsInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
