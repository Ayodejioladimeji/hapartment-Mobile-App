import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Card from "../common/Card";
import colors from "../assets/colors/colors";
import data from "../constants/dataa";
import { useNavigation } from "@react-navigation/native";
import Cards from "../common/Cards";
import { useSelector } from "react-redux";
// import fontsize from "../assets/fontsize/fontsize";

//

const LagosListings = () => {
  const navigation = useNavigation();
  const { all_listings } = useSelector((state) => state.listing);

  //
  return (
    <View style={styles.lagosWrapper}>
      <Text style={styles.lagosText}>Featured Apartments</Text>

      <FlatList
        data={all_listings}
        renderItem={({ item }) => {
          return <Cards item={item} navigation={navigation} />;
        }}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default LagosListings;

const styles = StyleSheet.create({
  lagosWrapper: {
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  lagosText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    color: colors.primary,
    // fontFamily: "//NunitoSans-Bold",
  },
});
