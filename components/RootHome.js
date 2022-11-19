import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Order from "../screens/HomeScreen";
import Account from "../screens/HomeScreen";
import colors from "../assets/colors/colors";
import { MaterialIcons } from "@expo/vector-icons";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Messages") {
            iconName = "chat";
          } else if (route.name === "Account") {
            iconName = "account-circle";
          } else if (route.name === "Settings") {
            iconName = "settings";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={25} color={color} />;
        },
        headerStyle: {
          height: 0,
        },
        tabBarStyle: {
          position: "absolute",
          backgroundColor: colors.white,
          height: Platform.OS === "ios" ? 100 : 70,
        },
        tabBarLabelStyle: {
          marginBottom: 10,
        },

        tabBarIconStyle: {
          marginTop: 10,
        },

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textDark,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        // options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen name="Search" component={HomeScreen} />
      <Tab.Screen name="Messages" component={Order} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Settings" component={Account} />
    </Tab.Navigator>
  );
};

export default RootHome;
