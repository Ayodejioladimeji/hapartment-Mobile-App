import React, { useCallback } from "react";
import {
  Button,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

import colors from "../assets/colors/colors";
import MyStatusBar from "../common/MyStatusBar";
import AroundYou from "../components/AroundYou";
import HomepageHeader from "../components/HomepageHeader";
import LagosListings from "../components/LagosListings";
import NewListings from "../components/NewListings";
import SearchComponent from "../components/SearchComponent";

//

const HomeScreen = () => {
  // initialize font family
  const [fontsLoaded] = useFonts({
    "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
    "AlfaSlabOne-Regular": require("../assets/fonts/AlfaSlabOne-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  //
  return (
    <View style={styles.homeScreenWrapper} onLayout={onLayoutRootView}>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <HomepageHeader />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <SearchComponent />
        <AroundYou />
        <NewListings />
        <LagosListings />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenWrapper: {
    backgroundColor: colors.white,
  },
});
