import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import GoBack from "../common/GoBack";
import Loading from "../common/Loading";
import FilterSearch from "../components/FilterSearch";

SplashScreen.preventAutoHideAsync();

//

const FilterScreen = () => {
  const navigation = useNavigation();

  //

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GoBack navigation={navigation} title="Filter" />
      <FilterSearch />
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  logoContainer: {
    height: 100,
    marginVertical: 10,
  },
  brandImage: {
    height: 100,
    width: "35%",
    marginHorizontal: 10,
    resizeMode: "contain",
    alignSelf: "center",
  },

  containerWrapper: {
    marginHorizontal: 20,
  },
  mainheading: {
    // fontFamily: "//AlfaSlabOne-Regular",
    fontSize: "25",
    color: colors.primary,
  },
  subHeading: {
    // fontFamily: "//NunitoSans-Bold",
    fontSize: Platform.OS === "ios" ? 17 : 15,
    color: colors.secondary,
    marginVertical: 40,
    marginBottom: 100,
  },

  container: {
    marginHorizontal: 20,
    justifyContent: "center",
  },
  containerButton: {
    backgroundColor: colors.white,
    marginBottom: 30,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 0.4,
    BorderColor: colors.textLighter,
  },
  containerButtonActive: {
    backgroundColor: colors.white,
    marginBottom: 30,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 2.5,
    borderColor: colors.primary,
  },
  buttonIcon: {
    color: colors.primary,
    fontSize: 34,
    marginRight: 20,
  },
  text: {
    color: colors.primary,
    fontSize: Platform.OS === "ios" ? 15 : 14,
    // fontFamily: "//NunitoSans-Bold",
  },
  subText: {
    color: colors.secondary,
    fontSize: 14,
    // fontFamily: "//NunitoSans-Regular",
  },
  registeredWrapper: {
    marginHorizontal: 20,
    justifyContent: "center",
  },
  registeredText: {
    // fontFamily: "//NunitoSans-Bold",
    fontSize: Platform.OS === "ios" ? 15 : 14,
    color: colors.secondary,
    marginTop: 10,
    alignSelf: "center",
  },
  colored: {
    color: colors.primary,
  },
  continue: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginBottom: 15,
  },
  continueText: {
    // fontFamily: "//NunitoSans-Bold",
    fontSize: 18,
    color: colors.white,
  },
});
