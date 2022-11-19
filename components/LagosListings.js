import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Card from "../common/Card";
import colors from "../assets/colors/colors";
import data from "../constants/data";
import fontsize from "../assets/fontsize/fontsize";

//

const LagosListings = () => {
  return (
    <View style={styles.lagosWrapper}>
      <Text style={styles.lagosText}>Lagos Listings</Text>

      <FlatList
        data={data}
        renderItem={Card}
        keyExtractor={(item) => item.id}
        horizontal={true}
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
    marginBottom: 200,
  },
  lagosText: {
    fontSize: fontsize.seven,
    fontWeight: "500",
    marginBottom: 5,
    color: colors.primary,
    fontFamily: "Lobster-Regular",
  },
});
