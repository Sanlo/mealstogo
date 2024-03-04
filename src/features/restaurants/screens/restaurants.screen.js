import React, { useState } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, StatusBar, FlatList, View } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({ contentContainerStyle: { padding: 16 } })``;

export const RestaurantsScreen = () => {
  const [query, setQuery] = useState("");

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" onChangeText={setQuery} value={query} />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantsInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
