import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import Search from "../components/Search";
import SearchCard from "../common/SearchCard";
import colors from "../assets/colors/colors";
import GoBack from "../common/GoBack";
import { myListings } from "../redux/actions/listingAction";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

//

const MyPropertiesScreen = ({ navigation }) => {
  const { my_listings } = useSelector((state) => state.property);
  const { mylistingloading } = useSelector((state) => state.loading);

  //
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GoBack navigation={navigation} title="My Properties" />

      <Search />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {mylistingloading ? (
          <ActivityIndicator size="small" color={colors.primary} />
        ) : (
          <View style={styles.searchScroll}>
            {my_listings.map((data) => {
              return <SearchCard item={data} key={data._id} />;
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default MyPropertiesScreen;

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
