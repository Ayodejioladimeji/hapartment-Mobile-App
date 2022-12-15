import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Card from "../common/Card";
import colors from "../assets/colors/colors";
import data from "../constants/dataa";
// import fontsize from "../assets/fontsize/fontsize";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Cards from "../common/Cards";

//

const NewListings = () => {
  const navigation = useNavigation();
  const { all_listings } = useSelector((state) => state.listing);

  //
  return (
    <View style={styles.newWrapper}>
      <Text style={styles.newText}>New apartments</Text>

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

export default NewListings;

const styles = StyleSheet.create({
  newWrapper: {
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: colors.white,
  },
  newText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    color: colors.primary,
    // fontFamily: "//NunitoSans-Bold",
  },
});
