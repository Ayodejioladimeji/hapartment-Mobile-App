import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
// import fontsize from "../assets/fontsize/fontsize";

//

const HomepageHeader = () => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerLeft}>
        <Image
          source={require("../assets/images/profile.jpeg")}
          style={styles.headerImage}
        />
        <View style={styles.headerBox}>
          <Text style={styles.headerName}>Hi, Ayodeji</Text>
          <Text style={styles.headerLocation}>Lagos State</Text>
        </View>
      </View>

      <View style={styles.headerRight}>
        <MaterialCommunityIcons
          name="bell-outline"
          size={22}
          color={colors.white}
        />
      </View>
    </View>
  );
};

export default HomepageHeader;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: colors.primary,
    paddingVertical: 10,
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    width: 250,
  },
  headerImage: {
    borderRadius: 50,
    height: 50,
    width: 50,
    marginRight: 10,
    borderWidth: 2,
    borderColor: colors.white,
    resizeMode: "contain",
  },

  headerName: {
    // fontSize: fontsize.four,
    color: colors.white,
    fontWeight: "600",
    fontFamily: "AlfaSlabOne-Regular",
  },

  headerRight: {
    backgroudColor: colors.white,
  },

  headerLocation: {
    color: colors.white,
    fontFamily: "Lobster-Regular",
    // fontSize: fontsize.four,
  },
});
