import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useCallback } from "react";
import colors from "../assets/colors/colors";
import MyStatusBar from "../common/MyStatusBar";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
//

const WhoAreYou = () => {
  const navigation = useNavigation();
  //

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

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/brandlogo.png")}
          style={styles.brandImage}
        />
      </View>

      <View style={styles.containerWrapper}>
        <Text style={styles.subHeading}>
          To get started, let us know what brings you to Hapartment
        </Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterAgent")}
          style={styles.containerButton}
        >
          <Text style={styles.text}>I want to publish an apartment</Text>
          <Text style={styles.subText}>Landlord / Agent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterTenant")}
          style={styles.containerButton}
        >
          <Text style={styles.text}>I'm looking for an apartment to rent</Text>
          <Text style={styles.subText}>Tenant</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.registeredWrapper}>
        <Text style={styles.registeredText}>
          Already registered ?{" "}
          <Text
            style={styles.colored}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default WhoAreYou;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
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
    flex: 1,
    marginHorizontal: 20,
  },
  mainheading: {
    // fontFamily: "AlfaSlabOne-Regular",
    fontSize: "25",
    color: colors.primary,
  },
  subHeading: {
    fontFamily: "NunitoSans-Bold",
    fontSize: Platform.OS === "ios" ? 17 : 15,
    color: colors.secondary,
    marginTop: 10,
    textAlign: "center",
  },

  container: {
    flex: 2,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  containerButton: {
    height: 60,
    backgroundColor: colors.primary,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: Platform.OS === "ios" ? 15 : 14,
    fontFamily: "NunitoSans-Bold",
  },
  subText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "NunitoSans-Regular",
  },
  registeredWrapper: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  registeredText: {
    fontFamily: "NunitoSans-Bold",
    fontSize: Platform.OS === "ios" ? 15 : 14,
    color: colors.secondary,
    marginTop: 10,
    alignSelf: "center",
  },
  colored: {
    color: colors.primary,
  },
});
