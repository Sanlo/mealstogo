import styled from "styled-components/native";

export const BackgroundWrapper = styled.View`
  flex: 1;
`;

export const BackgroundImage = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
