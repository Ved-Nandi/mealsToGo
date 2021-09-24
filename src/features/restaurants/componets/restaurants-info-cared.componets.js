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
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://source.unsplash.com/random"],
    address = "som ware",
    isOpenNow = true,
    rating = 4,
    isClosed = false,
  } = resturant;

  const stars = Array.from(new Array(Math.floor(rating))).map((val, i) => (
    <Star xml={star} key={i} />
  ));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Info>
        <Title>{name}</Title>
        <RatingOpenCloseWrapper>
          <Rating>{stars}</Rating>
          <OpenCloseWrapper>
            {!isOpenNow && <ClosedText> Closed </ClosedText>}
            {isOpenNow && <Open xml={open} />}
            <Bed source={{ uri: icon }} />
          </OpenCloseWrapper>
        </RatingOpenCloseWrapper>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
