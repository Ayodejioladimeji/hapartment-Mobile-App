import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { useSelector } from "react-redux";

//

const HomepageHeader = () => {
  const { user, token } = useSelector((state) => state.auth);
  const { userloading } = useSelector((state) => state.alert);

  //
  return (
    <View style={styles.headerWrapper}>
      {token !== "" ? (
        <>
          {(!userloading && !user) || userloading ? (
            <ActivityIndicator color={colors.white} size="small" />
          ) : (
            <View style={styles.headerLeft}>
              {!user.image ? (
                <Image
                  source={require("../assets/images/user.jpg")}
                  style={styles.headerImage}
                />
              ) : (
                <Image
                  source={{ uri: user.image }}
                  style={styles.headerImage}
                />
              )}
              <View style={styles.headerBox}>
                <Text style={styles.headerName}>Hi, {user.username}</Text>
                <Text style={styles.headerLocation}>{user.userType}</Text>
              </View>
            </View>
          )}
        </>
      ) : (
        <View style={styles.headerLeft}>
          <Image
            source={require("../assets/icons.png")}
            style={styles.headerImages}
          />
          <View style={styles.headerBox}>
            <Text style={styles.headerName}>Hapartment</Text>
            <Text style={styles.headerLocation}>Welcome</Text>
          </View>
        </View>
      )}

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
  headerImages: {
    borderRadius: 50,
    height: 50,
    width: 50,
    marginRight: 10,
    resizeMode: "contain",
  },

  headerName: {
    // fontSize: fontsize.four,
    color: colors.white,
    fontWeight: "600",
    fontFamily: "//AlfaSlabOne-Regular",
    textTransform: "capitalize",
  },

  headerRight: {
    backgroudColor: colors.white,
  },

  headerLocation: {
    color: colors.white,
    // fontFamily: "//Lobster-Regular",
    textTransform: "capitalize",
    fontSize: 15,
  },
});
