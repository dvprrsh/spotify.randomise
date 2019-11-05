import React from "react";
import { Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { NavigationMaterialBottomTabScreenComponent } from "react-navigation-material-bottom-tabs";

import { SafeAreaView } from "react-navigation";

export const HomeView: NavigationMaterialBottomTabScreenComponent = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

HomeView.navigationOptions = () => ({
  title: "Home",
  tabBarIcon: (
    <Icon type="MaterialCommunityIcons" name="home" style={styles.tabIcon} />
  ),
});

const styles = StyleSheet.create({
  tabIcon: {
    color: "white",
  },
});
