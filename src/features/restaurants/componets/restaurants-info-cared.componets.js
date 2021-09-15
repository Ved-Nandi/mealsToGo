import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 10px;
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
    <Card style={styles.card} elevation={5}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 15,
    paddingBottom: 3,
    marginBottom: 0,
    backgroundColor: "white",
  },
});
