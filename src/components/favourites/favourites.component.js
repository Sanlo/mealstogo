import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 9;
`;

export const Favourites = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);

  const isFavourite = favourites.find((i) => i.placeId === restaurant.placeId);

  console.log(favourites.length);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={36}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
