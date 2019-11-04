import React from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import { useEffect, useState } from "react";
import { MainNavigation } from "./src/app/views";

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    console.log("HERE");
    const loadFont = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
      setIsReady(true);
    };
    loadFont();
  }, []);

  if (isReady) {
    return <MainNavigation />;
  } else {
    return <AppLoading />;
  }
};
export default App;
