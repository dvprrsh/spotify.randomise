import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import { LoginView } from "./src/app/views/Login.view";

const mainNavigation = createStackNavigator(
  {
    Login: LoginView,
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
  },
);

const App = createAppContainer(mainNavigation);

export default App;
