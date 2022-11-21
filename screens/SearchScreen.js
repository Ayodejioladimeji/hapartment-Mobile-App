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
      <GoBack navigation={navigation} title="Search for apartments" />

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
    height: 60,
    backgroundColor: "orange",
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
