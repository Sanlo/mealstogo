import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const FavouritesScreen = () => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <FavouritesList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <Spacer position="top" size="large">
              <RestaurantsInfoCard restaurant={item} />
            </Spacer>
          );
        }}
      ></FavouritesList>
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No Favourite Yet!</Text>
    </NoFavouritesArea>
  );
};
