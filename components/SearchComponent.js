import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import { Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

//

const SearchComponent = () => {
  const navigation = useNavigation();

  //
  return (
    <View style={styles.searchWrapper}>
      <View style={styles.inputWrapper}>
        <Feather
          style={styles.searchIcon}
          name="search"
          size={18}
          color="black"
        />
        <Text style={styles.searchInput}>Apartment in my location</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.searchFilter}
        onPress={() => navigation.navigate("FilterScreen")}
      >
        <FontAwesome name="sliders" size={22} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;

// styles
const styles = StyleSheet.create({
  // search wrappaer section ===========
  searchWrapper: {
    height: 80,
    width: "100%",
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  inputWrapper: {
    flexDirection: "row",
    width: "78%",
    borderWidth: 0.5,
    borderColor: colors.primary,
    alignItems: "center",
    paddingLeft: 10,
    color: colors.primary,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    height: Platform.OS === "ios" ? 50 : 45,
  },
  searchIcon: {
    marginRight: 10,
    color: colors.textDark,
  },
  searchInput: {
    fontSize: Platform.OS === "ios" ? 15 : 14,
    color: colors.primary,
  },
  searchFilter: {
    width: "20%",
    height: Platform.OS === "ios" ? 50 : 45,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: colors.primary,
  },
});
