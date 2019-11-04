import React, { FC } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Button,
  Icon,
} from "native-base";
import { useStyles } from "../../hooks/useStyles";
import { useLogin } from "../../hooks/useLogin";

export const LoginView: FC<NavigationStackScreenProps> = ({
  navigation,
  ...props
}) => {
  const commonStyles = useStyles();
  return (
    <Container>
      <Header>
        <Body>
          <Title>Spotify.Randomise</Title>
        </Body>
      </Header>
      <Content contentContainerStyle={styles.content} padder>
        <TouchableOpacity
          style={commonStyles.spotifyLogin}
          onPress={() => useLogin()}>
          <Icon
            type="MaterialCommunityIcons"
            name="spotify"
            style={styles.spotifyIcon}
          />
          <Text style={styles.whiteText}>Login with Spotify</Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  spotifyIcon: {
    color: "white",
  },
  whiteText: {
    color: "white",
  },
});
