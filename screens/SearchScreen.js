import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Search from "../components/Search";
import data from "../constants/data";
import SearchCard from "../common/SearchCard";
import colors from "../assets/colors/colors";
import fontsize from "../assets/fontsize/fontsize";
import MyStatusBar from "../common/MyStatusBar";

//

const SearchScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.searchScreen}>
        <MaterialIcons name="arrow-back" size={27} color={colors.white} />
        <Text style={styles.searchText}>Search for apartments</Text>
      </View>
      <Search />

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.searchScroll}>
          {data.map((item) => {
            const {} = item;
            return <SearchCard item={item} key={item.id} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchScreen: {
    flexDirection: "row",
    paddingHorizontal: 5,
    backgroundColor: colors.white,
    height: 60,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: colors.primary,
  },
  searchScroll: {
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 80,
  },
  searchText: {
    marginLeft: 15,
    fontWeight: "700",
    fontSize: fontsize.six,
    color: colors.white,
    fontFamily: "Lobster-Regular",
  },
});
