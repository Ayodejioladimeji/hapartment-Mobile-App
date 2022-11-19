import { View, Text, TextInput, StyleSheet, Platform } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

//

const SearchComponent = () => {
  return (
    <View style={styles.searchWrapper}>
      <View style={styles.inputWrapper}>
        <Feather
          style={styles.searchIcon}
          name="search"
          size={18}
          color="black"
        />
        <TextInput
          placeholder="Search for apartment"
          style={styles.searchInput}
          placeholderTextColor={colors.textLight}
          placeholderStyle={{ color: "red" }}
        />
      </View>

      <View style={styles.searchFilter}>
        <FontAwesome5 name="sliders-h" size={22} color={colors.textLight} />
      </View>
    </View>
  );
};

export default SearchComponent;

// styles
const styles = StyleSheet.create({
  // search wrappaer section ===========
  searchWrapper: {
    marginTop: 15,
    height: 80,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  inputWrapper: {
    flexDirection: "row",
    width: Platform.OS === "ios" ? 320 : 250,
    borderWidth: 1,
    borderColor: colors.textLighter,
    alignItems: "center",
    paddingLeft: 10,
    color: colors.textDark,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    height: Platform.OS === "ios" ? 50 : 45,
  },
  searchIcon: {
    marginRight: 10,
    color: colors.textDark,
  },
  searchInput: {
    fontSize: Platform.OS === "ios" ? 17 : 15,
    color: colors.textDark,
  },
  searchFilter: {
    width: 70,
    height: Platform.OS === "ios" ? 50 : 45,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.textLighter,
  },
});
