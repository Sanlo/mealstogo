import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountContainer,
  AuthButton,
  Title,
  BackgroundCover,
  BackgroundImage,
} from "../components/account.style";

export const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundImage>
      <BackgroundCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          LOGIN
        </AuthButton>
        <Spacer size="large">
          <AuthButton icon="email" mode="contained" onPress={() => navigation.navigate("Register")}>
            REGISTER
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </BackgroundImage>
  );
};
