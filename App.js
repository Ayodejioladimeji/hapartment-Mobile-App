import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "./screens/HomeScreen";
import NotificationsScreen from "./screens/NotificationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Onboarding from "./screens/Onboarding";

const Stack = createStackNavigator();

function App() {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  //
  return (
    <>
      {showOnboard ? (
        <Onboarding handleDone={handleOnboardFinish} />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />

            <Stack.Screen
              name="Notifications"
              component={NotificationsScreen}
            />

            <Stack.Screen name="Profile" component={ProfileScreen} />

            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
