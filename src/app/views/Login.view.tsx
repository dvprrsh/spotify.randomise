import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

export const LoginView: FC = () => {
  return (
    <View style={styles.view}>
      <Text>Hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
