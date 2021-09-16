import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Searchontainer = styled(View)`
  padding: 16px;
`;

const ResturantListContainer = styled(View)`
  padding: 16px;
  flex: 1;
`;

import { ResaurantInfoCard } from "../componets/restaurants-info-cared.componets";

export const RestaurantsScreen = (props) => {
  return (
    <SafeArea>
      <Searchontainer>
        <Searchbar />
      </Searchontainer>
      <ResturantListContainer>
        <ResaurantInfoCard />
      </ResturantListContainer>
    </SafeArea>
  );
};
