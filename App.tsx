import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./components/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
