import React, { FC } from "react";
import { Text, StyleSheet } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Container, Header, Body, Title, Content, Button } from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export const LoginView: FC<NavigationStackScreenProps> = ({
  navigation,
  ...props
}) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Spotify.Randomise</Title>
        </Body>
      </Header>
      <Content padder style={styles.view}>
        <Button iconLeft color="#84bd00">
          <MaterialCommunityIcons name="spotify" />
          <Text>Login with Spotify</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
