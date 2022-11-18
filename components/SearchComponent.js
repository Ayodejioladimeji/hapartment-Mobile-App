import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import { Feather } from "@expo/vector-icons";

//

const SearchComponent = () => {
  return (
    <View style={styles.searchWrapper}>
      <View style={styles.inputWrapper}>
        <Feather
          style={styles.searchIcon}
          name="search"
          size={24}
          color="black"
        />
        <TextInput
          placeholder="What will you eat today?"
          style={styles.searchInput}
          placeholderTextColor={colors.white}
          placeholderStyle={{ color: "red" }}
        />
      </View>

      <View style={styles.searchFilter}>
        <Feather name="filter" size={24} color={colors.white} />
      </View>
    </View>
  );
};

export default SearchComponent;

// styles
const styles = StyleSheet.create({
  // search wrappaer section ===========
  searchWrapper: {
    marginTop: 35,
    height: 50,
    marginHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "space-between",

    flexDirection: "row",
  },
  inputWrapper: {
    flexDirection: "row",
    width: 310,
    backgroundColor: colors.primary,
    height: 50,
    alignItems: "center",
    paddingLeft: 10,
    color: colors.white,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  searchIcon: {
    marginRight: 10,
    color: colors.white,
  },
  searchInput: {
    fontSize: Platform.OS === "ios" ? 17 : 15,
    color: colors.textDark,
  },
  searchFilter: {
    backgroundColor: colors.primary,
    width: 70,
    height: 50,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    color: colors.white,
  },
});
