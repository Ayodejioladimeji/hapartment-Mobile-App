import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Search from "../components/Search";
import SearchCard from "../common/SearchCard";
import colors from "../assets/colors/colors";
// import fontsize from "../assets/fontsize/fontsize";
import MyStatusBar from "../common/MyStatusBar";
import GoBack from "../common/GoBack";
import { useSelector } from "react-redux";

//

const SearchScreen = ({ navigation }) => {
  const { all_listings } = useSelector((state) => state.listing);
  const { alllistingloading } = useSelector((state) => state.loading);

  //
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GoBack navigation={navigation} title="Search for apartments" />

      <Search />

      {alllistingloading ? (
        <Loading />
      ) : (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.searchScroll}>
            {all_listings.map((item) => {
              return <SearchCard item={item} key={item._id} />;
            })}
          </View>
        </ScrollView>
      )}
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
    // fontFamily: "//Lobster-Regular",
  },
});
