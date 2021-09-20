import React from "react";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  Star,
  Rating,
  RatingOpenCloseWrapper,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Title,
  OpenCloseWrapper,
  ClosedText,
  Open,
  Address,
  Bed,
} from "./resturants-info-cared-styles";

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
