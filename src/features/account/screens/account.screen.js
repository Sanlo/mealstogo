import React from "react";
import LottieView from "lottie-react-native";

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
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 30,
          width: "100%",
          height: "40%",
        }}
        source={require("../../../../assets/watermelon.json")}
      />
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
