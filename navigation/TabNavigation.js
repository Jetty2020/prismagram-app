 import React from "react";
 import { createStackNavigator } from "react-navigation-stack";
 import { createBottomTabNavigator } from "react-navigation-tabs";
 import Home from "../screens/Tabs/Home";
 import Search from "../screens/Tabs/Search";
 import Notifications from "../screens/Tabs/Notifications";
 import Profile from "../screens/Tabs/Profile";
 import MessagesLink from "../components/MessagesLink";
 import { View } from "react-native";

 export default createBottomTabNavigator({
  Home: {
    screen: createStackNavigator({
      Home: {
        screen: Home,
        navigationOptions: {
          headerRight: () => <MessagesLink />
        }
      }
    })
  },
  Search: createStackNavigator({ Search }),
  Add: {
   screen: View,
   navigationOptions: {
     tabBarOnPress: ({ navigation }) => navigation.navigate("PhotoNavigation")
   }
 },
 Notifications: createStackNavigator({ Notifications }),
 Profile: createStackNavigator({ Profile })
});