import { View } from "react-native";
import styled from "styled-components/native";
const marginType = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const sizeType = {
  small: "5px",
  mid: "8px",
  large: "10px",
  xl: "12px",
  xxl: "18px",
};

const marginTypes = (margin, size) => {
  return `${marginType[margin]}: ${sizeType[size] ?? size}`;
};

export const Spacer = styled(View)`
  ${({ posi, size }) => marginTypes(posi, size)}
`;

Spacer.defaultProps = {
  posi: "left",
  size: "small",
};
