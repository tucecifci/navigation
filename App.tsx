import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainTabNavigator from "./MainTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
     <MainTabNavigator />
    </NavigationContainer>
  );
}
