import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

//

const HomepageHeader = () => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerLeft}>
        <Image
          source={require("../assets/images/profile.png")}
          style={styles.headerImage}
        />
        <View style={styles.headerBox}>
          <Text style={styles.headerName}>Hi, Ayodeji</Text>
          <Text style={styles.headerLocation}>Lagos State</Text>
        </View>
      </View>

      <View style={styles.headerRight}>
        <MaterialCommunityIcons name="bell-outline" size={27} color="black" />
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
    // backgroundColor: colors.primary,
    marginTop: 20,
    marginHorizontal: 15,
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    width: 250,
  },
  headerImage: {
    borderRadius: 50,
    height: 60,
    width: 60,
    marginRight: 10,
    borderWidth: 2,
    borderColor: colors.primary,
  },

  headerName: {
    fontSize: 18,
    color: colors.textDark,
    fontWeight: "600",
  },

  headerRight: {
    backgrouColor: colors.white,
  },
});
