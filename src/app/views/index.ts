import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { LoginView } from "./Login.view";
import { HomeView } from "./Home.view";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { SplashScreen } from "./SplashScreen";

export const MainNavigation = createAppContainer(
  createStackNavigator(
    {
      SplashScreen: SplashScreen,
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
      initialRouteName: "SplashScreen",
      headerMode: "none",
    }
  )
);
