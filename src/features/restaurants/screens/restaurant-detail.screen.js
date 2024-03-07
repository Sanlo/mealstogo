import React, { useState } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpand, setBreakfastExpand] = useState(false);
  const [lunchExpand, setLunchExpand] = useState(false);
  const [dinnerExpand, setDinnerExpand] = useState(false);
  const [drinkExpand, setDrinkExpand] = useState(false);
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpand}
          onPress={() => setBreakfastExpand(!breakfastExpand)}
        >
          <List.Item title="Drink" />
          <List.Item title="Seoced" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food-drumstick" />}
          expanded={lunchExpand}
          onPress={() => setLunchExpand(!lunchExpand)}
        >
          <List.Item title="Noddle" />
          <List.Item title="Rice" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-steak" />}
          expanded={dinnerExpand}
          onPress={() => setDinnerExpand(!dinnerExpand)}
        >
          <List.Item title="Fiest" />
          <List.Item title="Seoced" />
        </List.Accordion>
        <List.Accordion
          title="Drink"
          left={(props) => <List.Icon {...props} icon="food-fork-drink" />}
          expanded={drinkExpand}
          onPress={() => setDrinkExpand(!drinkExpand)}
        >
          <List.Item title="Fiest" />
          <List.Item title="Seoced" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
