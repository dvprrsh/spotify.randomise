import React, { FC } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Icon } from "native-base";
import { useStyles } from "../../hooks/useStyles";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../store";
import { SafeAreaView } from "react-navigation";

import { saveCredentials } from "../../store/credentials.store/credentials.actions";

export const LoginView: FC<NavigationStackScreenProps> = ({ navigation }) => {
  const commonStyles = useStyles();
  const credentials = useSelector((state: IState) => state.credentials);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={commonStyles.content}>
      <Text style={styles.titleText}>Spotify Randomise</Text>
      <TouchableOpacity
        style={commonStyles.spotifyLogin}
        onPress={() => dispatch(saveCredentials(credentials.refresh_token))}
      >
        <Icon
          type="MaterialCommunityIcons"
          name="spotify"
          style={styles.spotifyIcon}
        />
        <Text style={styles.whiteText}>Login with Spotify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  spotifyIcon: {
    color: "white",
    alignSelf: "flex-start",
  },
  whiteText: {
    color: "white",
    width: "100%",
    textAlign: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});
