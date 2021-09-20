import React from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { Spacer } from "../../../componets/spacer/spacer";
import { SafeArea } from "../../../componets/utilitis/safeariaview";

const Searchontainer = styled(View)`
  padding: 16px;
`;

import { ResaurantInfoCard } from "../componets/restaurants-info-cared.componets";

export const RestaurantsScreen = (props) => {
  return (
    <SafeArea>
      <Searchontainer>
        <Searchbar />
      </Searchontainer>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => (
          <Spacer posi={"bottom"} size={"xxl"}>
            <ResaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ marginHorizontal: 16 }}
      />
    </SafeArea>
  );
};
