import React from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import { useEffect, useState } from "react";
import { MainNavigation } from "./src/app/views";
import { Store } from "./src/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
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
    const store = Store();
    return (
      <Provider store={store.reduxStore}>
        <PersistGate loading={null} persistor={store.persistor}>
          <MainNavigation />
        </PersistGate>
      </Provider>
    );
  } else {
    return <AppLoading />;
  }
};
export default App;
