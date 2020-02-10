import { createAppContainer } from "react-navigation";
 import { createStackNavigator } from "react-navigation-stack";

 import Signup from "../screens/Auth/Signup";
 import Confirm from "../screens/Auth/Confirm";
 import Login from "../screens/Auth/Login";
 import AuthHome from "../screens/Auth/AuthHome";

 const AuthNavigation = createStackNavigator(
   {
     Login,
     AuthHome,
     Signup,
     Confirm
   },
   {
     
     headerMode: "none"
   }
 );

 export default createAppContainer(AuthNavigation);