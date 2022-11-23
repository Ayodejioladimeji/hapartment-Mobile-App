import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import ProfileScreen from "./screens/ProfileScreen";
// import SettingsScreen from "./screens/SettingsScreen";
import Onboarding from "./screens/Onboarding";
import RootHome from "./components/RootHome";
import EditProfileScreen from "./screens/EditProfileScreen";
import DetailsScreen from "./screens/DetailsScreen";
import LandlordProfileScreen from "./screens/LandlordProfileScreen";
import AgentDetailsScreen from "./screens/AgentDetailsScreen";
import WhoAreYou from "./screens/WhoAreYou";
// import WhoAreYou from "./screens/WhoAreYou";

const Stack = createStackNavigator();

//

function App() {
  const [showOnboard, setShowOnboard] = useState(false);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  //

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="WhoAreYou" component={WhoAreYou} />

        <Stack.Screen name="RootHome" component={RootHome} />

        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />

        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen
          name="AgentDetailsScreen"
          component={AgentDetailsScreen}
        />
        <Stack.Screen
          name="LandlordProfileScreen"
          component={LandlordProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
