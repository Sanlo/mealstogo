import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // storage of favourites
  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourite", jsonValue);
    } catch (e) {
      console.log("Error Saving: ", e);
    }
  };
  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@favourite");
      if (jsonValue) {
        setFavourites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log("Error Loading: ", e);
    }
  };
  useEffect(() => {
    loadFavourites();
  }, []);
  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavourites = favourites.filter((i) => i.placeId !== restaurant.placeId);

    setFavourites(newFavourites);
  };
  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
