import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

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
    paddingTop: Platform.OS === "ios" ? 20 : 50,
    paddingHorizontal: 10,
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
    fontSize: 16,
    color: colors.white,
    fontWeight: "600",
  },

  headerRight: {
    backgroudColor: colors.white,
  },

  headerLocation: {
    color: colors.white,
  },
});
