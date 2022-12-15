import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Card from "../common/Card";
import colors from "../assets/colors/colors";
import data from "../constants/dataa";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { allListings } from "../redux/actions/listingAction";
import Cards from "../common/Cards";

//

const AroundYou = ({ data }) => {
  const navigation = useNavigation();
  const { all_listings } = useSelector((state) => state.listing);
  const dispatch = useDispatch();

  // get all listings from the database
  useEffect(() => {
    dispatch(allListings());
  }, []);

  // Filter through the array to get featured content
  const recentApartment = all_listings.filter(
    (item) => item.category === "Recent apartment"
  );

  //
  return (
    <>
      {recentApartment.length !== 0 && (
        <View style={styles.aroundWrapper}>
          <Text style={styles.aroundText}>Recent Apartments</Text>

          <FlatList
            data={recentApartment}
            renderItem={({ item }) => {
              return <Cards item={item} navigation={navigation} />;
            }}
            keyExtractor={(item) => item._id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </>
  );
};

export default AroundYou;

const styles = StyleSheet.create({
  aroundWrapper: {
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: colors.white,
  },
  aroundText: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 10,
    color: colors.primary,
    // fontFamily: "//NunitoSans-Bold",
  },
});
