import React, { FC, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Container, Header, Body, Title, Content, Icon } from "native-base";
import { useStyles } from "../../hooks/useStyles";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../store";
import { saveTokens } from "../../store/spotify.store/spotify.actions";
import { getAccessToken } from "../../apis/spotifyAPI";

export const LoginView: FC<NavigationStackScreenProps> = ({
  navigation,
  ...props
}) => {
  const commonStyles = useStyles();
  const spotifyApi = useSelector((state: IState) => {
    return state.spotifyApi;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(getAccessToken(spotifyApi));
  }, [spotifyApi]);

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
          onPress={() => dispatch(saveTokens(spotifyApi))}>
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
    alignSelf: "flex-start",
  },
  whiteText: {
    color: "white",
    width: "100%",

    paddingHorizontal: "10%",
  },
});
