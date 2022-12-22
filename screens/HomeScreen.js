import React, { useCallback, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
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
import SearchCard from "../common/SearchCard";
import UserApi from "../api/UserApi";
import { myListings } from "../redux/actions/listingAction";
import { useDispatch, useSelector } from "react-redux";

//

const HomeScreen = ({ navigation }) => {
  const { all_listings } = useSelector((state) => state.property);
  const { alllistingloading } = useSelector((state) => state.loading);
  // initialize font family
  const [fontsLoaded] = useFonts({
    "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
    "AlfaSlabOne-Regular": require("../assets/fonts/AlfaSlabOne-Regular.ttf"),
    "NunitoSans-Regular": require("../assets/fonts/NunitoSans-Regular.ttf"),
    "NunitoSans-Black": require("../assets/fonts/NunitoSans-Black.ttf"),
    "NunitoSans-Bold": require("../assets/fonts/NunitoSans-Bold.ttf"),
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

  //
  return (
    <View style={styles.homeScreenWrapper} onLayout={onLayoutRootView}>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <HomepageHeader />
      <UserApi />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <SearchComponent />

        <>
          <AroundYou navigation={navigation} />
          <NewListings />
          <LagosListings />

          {alllistingloading ? (
            <ActivityIndicator size="small" color={colors.primary} />
          ) : (
            <View style={styles.explore}>
              <Text style={styles.exploreText}>Explore more</Text>

              {all_listings.map((item) => (
                <SearchCard item={item} key={item._id} />
              ))}
            </View>
          )}
        </>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenWrapper: {
    backgroundColor: colors.white,
    flex: 1,
  },
  activityloading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    height: "100%",
  },
  explore: {
    marginHorizontal: 15,
    marginBottom: 100,
  },
  exploreText: {
    marginBottom: 10,
    fontSize: 15,
    // fontFamily: "//NunitoSans-Bold",
    color: colors.primary,
    fontWeight: "500",
  },
});
