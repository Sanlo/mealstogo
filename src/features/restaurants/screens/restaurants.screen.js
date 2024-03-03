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
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
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
