import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import {
  HomeIcon,
  ShoppingCartIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Cart from "./Cart";

import User from "../components/User";

const BottomTab = ({ setAppState }) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#008080",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              name="homeIcon"
              size={focused ? 35 : 25}
              color={focused ? "#008080" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <ShoppingCartIcon
              name="cartIcon"
              size={focused ? 35 : 25}
              color={focused ? "#008080" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        options={{
          tabBarIcon: ({ focused }) => (
            <UserIcon
              name="userIcon"
              size={focused ? 35 : 25}
              color={focused ? "#008080" : "black"}
            />
          ),
        }}
      >
        {(props) => <User {...props} setAppState={setAppState} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTab;
