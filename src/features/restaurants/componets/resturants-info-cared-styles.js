import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

export const ClosedText = styled(Text)`
  color: red;
  margin-right: 18px;
`;
export const OpenCloseWrapper = styled(View)`
  flex-direction: row;
`;
export const Bed = styled(Image)`
  height: 20px;
  width: 20px;
`;
export const Star = styled(SvgXml)`
  height: 20px;
  width: 20px;
`;
export const Open = styled(SvgXml)`
  margin-right: 18px;
  height: 22px;
  width: 22px;
`;

export const RatingOpenCloseWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const Rating = styled(View)`
  flex-direction: row;
  margin-top: 5px;
`;

export const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;

export const Address = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 12px;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
