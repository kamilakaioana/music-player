import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { theme } from "../../../constants/theme";

export const Container = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border-width: 1px;
  border-color: ${theme.foregorund.lightBlue};
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Ionicons).attrs(() => ({
  name: "ios-pause-sharp",
  size: 40,
  color: theme.foregorund.lightBlue,
}))``;
