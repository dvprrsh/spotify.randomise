import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { LoginView } from "./Login.view";
import { HomeView } from "./Home.view";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

export const MainNavigation = createAppContainer(
  createStackNavigator(
    {
      Login: LoginView,
      MainApp: createMaterialBottomTabNavigator(
        {
          Home: HomeView,
        },
        {
          initialRouteName: "Home",
          backBehavior: "history",
        }
      ),
    },
    {
      initialRouteName: "Login",
      headerMode: "none",
    }
  )
);
