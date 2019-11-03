import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { LoginView } from "./Login.view";
import { HomeView } from "./Home.view";

export const MainNavigation = createAppContainer(
  createStackNavigator(
    {
      Login: LoginView,
      Home: HomeView,
    },
    {
      initialRouteName: "Login",
      headerMode: "none",
    },
  ),
);
