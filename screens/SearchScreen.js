import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Search from "../components/Search";
import data from "../constants/data";
import SearchCard from "../common/SearchCard";
import colors from "../assets/colors/colors";
// import fontsize from "../assets/fontsize/fontsize";
import MyStatusBar from "../common/MyStatusBar";
import GoBack from "../common/GoBack";

//

const SearchScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.searchScreen}>
        <GoBack navigation={navigation} title="Search for apartments" />
      </View>
      <Search />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
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
    paddingHorizontal: 15,
    marginBottom: 80,
  },
  searchText: {
    marginLeft: 15,
    fontWeight: "700",
    fontSize: 17,
    color: colors.white,
    fontFamily: "Lobster-Regular",
  },
});
