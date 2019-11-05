import React from "react";
import { Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { NavigationMaterialBottomTabScreenComponent } from "react-navigation-material-bottom-tabs";
import { SafeAreaView } from "react-navigation";
import { List, Button } from "react-native-paper";

export const HomeView: NavigationMaterialBottomTabScreenComponent = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.content}>
      <List.Section title="Select a Playlist...." style={styles.list}>
        <List.Accordion title="test">
          <Button
            mode="contained"
            icon={() => (
              <Icon
                style={styles.shuffleIcon}
                type="MaterialCommunityIcons"
                name="shuffle-variant"
              />
            )}
            style={styles.button}>
            <Text>Shuffle</Text>
          </Button>
        </List.Accordion>
      </List.Section>
    </SafeAreaView>
  );
};

HomeView.navigationOptions = () => ({
  title: "Home",
  tabBarIcon: (
    <Icon type="MaterialCommunityIcons" name="shuffle" style={styles.tabIcon} />
  ),
});

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 16,
  },
  content: {
    flex: 1,
    flexDirection: "row",

    justifyContent: "center",
  },
  list: {
    flex: 1,
  },
  shuffleIcon: {
    fontSize: 18,
    color: "white",
  },
  tabIcon: {
    color: "white",
  },
});
