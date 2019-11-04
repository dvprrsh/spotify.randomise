import { createStackNavigator } from "react-navigation-stack";
import { LoginView } from "./Login.view";

import { createAppContainer } from "react-navigation";

export const MainNavigation = createAppContainer(
  createStackNavigator(
    {
      Login: LoginView,
    },
    {
      initialRouteName: "Login",
      headerMode: "none",
    },
  ),
);
