import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Text } from "react-native";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { SafeArea } from "../../components/utility/safe-area.component";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen name="Restaurants" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => (
          <SafeArea>
            <Text>RestaurantDetail</Text>
          </SafeArea>
        )}
      />
    </RestaurantStack.Navigator>
  );
};
