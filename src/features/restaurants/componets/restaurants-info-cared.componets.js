import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.button};
  font-family: ${(props) => props.theme.fonts.body};
`;
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const ResaurantInfoCard = ({ resturant = {} }) => {
  const {
    name = "some resturant",
    icon,
    photos = ["https://source.unsplash.com/random"],
    address = "som ware",
    isOpen = "true",
    rating = 4,
    isClosedTemporarily,
  } = resturant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
