import React, { useEffect, FC } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import {
  NavigationStackScreenComponent,
  NavigationStackProp,
} from "react-navigation-stack";
import { useStyles } from "../../hooks/useStyles";
import { useSelector } from "react-redux";

import { IState } from "../../store";

type Props = {
  navigation?: NavigationStackProp<{ userId: string }>;
};
export const SplashScreen: FC<Props> | NavigationStackScreenComponent<Props> = (
  props: Props
) => {
  const commonStyles = useStyles();
  const { credentials } = useSelector((state: IState) => state);

  if (props.navigation) {
    useEffect(() => {
      if (credentials) {
        if (credentials.access_token) {
          props.navigation!.navigate("MainApp");
        } else {
          props.navigation!.navigate("Login");
        }
      }
    }, [credentials]);
  }

  return (
    <SafeAreaView style={commonStyles.content}>
      <Text style={styles.splashText}>Spotify Randomise</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  splashText: {
    fontStyle: "italic",
    fontSize: 20,
  },
});
