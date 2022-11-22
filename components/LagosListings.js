import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Card from "../common/Card";
import colors from "../assets/colors/colors";
import data from "../constants/data";
import { useNavigation } from "@react-navigation/native";
// import fontsize from "../assets/fontsize/fontsize";

//

const LagosListings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.lagosWrapper}>
      <Text style={styles.lagosText}>Lagos apartments</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Card item={item} navigation={navigation} />;
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
    marginBottom: 200,
  },
  lagosText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: colors.primary,
    fontFamily: "Lobster-Regular",
  },
});
