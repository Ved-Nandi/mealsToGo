import React from "react";
import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const ClosedText = styled(Text)`
  color: red;
  margin-right: 18px;
`;
const OpenCloseWrapper = styled(View)`
  flex-direction: row;
`;
const Bed = styled(Image)`
  height: 20px;
  width: 20px;
`;
const Star = styled(SvgXml)`
  height: 20px;
  width: 20px;
`;
const Open = styled(SvgXml)`
  margin-right: 18px;
  height: 22px;
  width: 22px;
`;

const RatingOpenCloseWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const Rating = styled(View)`
  flex-direction: row;
  margin-top: 5px;
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;

const Address = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.caption};
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
    icon = require("../../../../assets/bed-icon.png"),
    photos = ["https://source.unsplash.com/random"],
    address = "som ware",
    isOpen = true,
    rating = 4,
    isClosedTemporarily = false,
  } = resturant;

  const stars = Array.from(new Array(Math.floor(rating))).map((val, i) => (
    <Star xml={star} key={i} />
  ));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <RatingOpenCloseWrapper>
          <Rating>{stars}</Rating>
          <OpenCloseWrapper>
            {isClosedTemporarily && <ClosedText> Closed </ClosedText>}
            {isOpen && <Open xml={open} />}
            <Bed source={icon} />
          </OpenCloseWrapper>
        </RatingOpenCloseWrapper>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
