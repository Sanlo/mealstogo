import React from "react";

import { CompactRestaurantInfo } from "../../../components/restaurant/compact-info.component";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};
