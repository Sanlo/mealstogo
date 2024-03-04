import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const TopSmall = styled(View)`
  margin-top: 4px;
`;

const TopMedium = styled(View)`
  margin-top: 8px;
`;

const TopLarge = styled(View)`
  margin-top: 16px;
`;

const LeftSmall = styled(View)`
  margin-left: 4px;
`;

const LeftMedium = styled(View)`
  margin-left: 8px;
`;

const LeftLarge = styled(View)`
  margin-left: 16px;
`;

export const Spacer = ({ varient }) => {
  if (varient === "top.medium") {
    return <TopMedium />;
  }

  if (varient === "top.large") {
    return <TopLarge />;
  }
  if (varient === "left.small") {
    return <LeftSmall />;
  }
  if (varient === "left.medium") {
    return <LeftMedium />;
  }
  if (varient === "left.large") {
    return <LeftLarge />;
  }

  return <TopSmall />;
};
