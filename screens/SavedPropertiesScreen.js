import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Search from "../components/Search";
import data from "../constants/data";
import SearchCard from "../common/SearchCard";
import colors from "../assets/colors/colors";
import GoBack from "../common/GoBack";
import Loading from "../common/Loading";
import { useSelector } from "react-redux";

//

const SavedPropertiesScreen = ({ navigation }) => {
  const { getfavoriteloading } = useSelector((state) => state.loading);
  const { saved_properties } = useSelector((state) => state.property);

  //
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GoBack navigation={navigation} title="Saved Properties" />

      <Search />

      {getfavoriteloading ? (
        <Loading />
      ) : (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.searchScroll}>
            {saved_properties.map((item) => {
              return <SearchCard item={item.saved_favorite} key={item._id} />;
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default SavedPropertiesScreen;

const styles = StyleSheet.create({
  searchScreen: {
    height: 60,
    backgroundColor: "orange",
  },
  searchScroll: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  searchText: {
    marginLeft: 15,
    fontWeight: "700",
    fontSize: 17,
    color: colors.white,
    // fontFamily: "//Lobster-Regular",
  },
});
