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

  useEffect(() => {
    dispatch(allListings());
  }, []);

  //
  return (
    <View style={styles.aroundWrapper}>
      <Text style={styles.aroundText}>Recent Apartments</Text>

      <FlatList
        data={all_listings}
        renderItem={({ item }) => {
          return <Cards item={item} navigation={navigation} />;
        }}
        keyExtractor={(item) => item._id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
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
