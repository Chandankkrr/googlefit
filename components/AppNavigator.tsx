import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import GoogleFit from "../GoogleFit";
import { Journal, Profile } from "../screens/Index";

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#93b8e9"
      inactiveColor="#a0a1a6"
      barStyle={{ backgroundColor: "#35373b",  height: 80 }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={"md-home"} size={30} color={color} />
          ),
        }}
        name="Home"
        component={GoogleFit}
      />
      <Tab.Screen
        name="Journal"
        component={Journal}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={"md-journal"} size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={"md-person"} size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;