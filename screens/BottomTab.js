import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './Home';
import {
  HomeIcon,
  ShoppingCartIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Cart from './Cart';

import User from '../components/User';


const BottomTab = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#008080",
        tabBarInactiveTintColor: "#008080",
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
              color="#008080"
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
              color="#008080"
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ focused }) => (
            <UserIcon
              name="userIcon"
              size={focused ? 35 : 25}
              color="#008080"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab