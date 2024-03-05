import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { FlatList, View } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({ contentContainerStyle: { padding: 16 } })``;

export const RestaurantsScreen = () => {
  const [query, setQuery] = useState("");
  const restaurantContext = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" onChangeText={setQuery} value={query} />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext.restaurants}
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
