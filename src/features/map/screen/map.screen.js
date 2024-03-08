import React, { useContext, useState, useEffect } from "react";
import MapView, { Callout, Marker } from "react-native-maps";

import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import styled from "styled-components";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const { lat, lng, viewport } = location;

  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    setLatDelta(viewport.northeast.lat - viewport.southwest.lat);
  }, [location]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() => navigation.navigate("RestaurantDetail", { restaurant: restaurant })}
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
