import React, { useCallback, useContext, useState } from "react";
import { List, Avatar } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/anthentication/authentication.context";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const AvatarContainer = styled.View`
  align-items: center;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    console.log(`obj:${photoUri}, Len:${Object.keys(photoUri).length}`);
    if (Object.keys(photoUri).length !== 0) {
      setPhoto(photoUri);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && <Avatar.Icon size={100} icon="human" />}
          {photo && <Avatar.Image size={100} source={{ uri: photo }} />}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <Spacer position="top" size="large">
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={(props) => <List.Icon {...props} color="black" icon="heart" />}
            onPress={() => navigation.navigate("Favourites")}
          />
        </Spacer>
        <Spacer position="top" size="large">
          <SettingsItem
            title="Logout"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={onLogout}
          />
        </Spacer>
      </List.Section>
    </SafeArea>
  );
};
