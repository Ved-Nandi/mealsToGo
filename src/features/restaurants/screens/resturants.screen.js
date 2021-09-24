import React, { useContext } from "react";
import { View, FlatList, Text } from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { ResturantsContext } from "../../../services/resturants/resturants.context";
import { Spacer } from "../../../componets/spacer/spacer";
import { SafeArea } from "../../../componets/utilitis/safeariaview";

const Searchontainer = styled(View)`
  padding: 16px;
`;

import { ResaurantInfoCard } from "../componets/restaurants-info-cared.componets";

export const RestaurantsScreen = (props) => {
  const { restaurants, isLoading, error } = useContext(ResturantsContext);
  return (
    <SafeArea>
      <Searchontainer>
        <Searchbar />
      </Searchontainer>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color={Colors.blue800}
          size={"large"}
        />
      )}
      <FlatList
        data={restaurants}
        renderItem={(item) => (
          <Spacer posi={"bottom"} size={"xxl"}>
            <ResaurantInfoCard resturant={item.item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ marginHorizontal: 16 }}
      />
    </SafeArea>
  );
};
