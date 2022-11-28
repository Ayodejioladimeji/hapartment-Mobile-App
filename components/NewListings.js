import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Card from "../common/Card";
import colors from "../assets/colors/colors";
import data from "../constants/data";
// import fontsize from "../assets/fontsize/fontsize";
import { useNavigation } from "@react-navigation/native";

//

const NewListings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.newWrapper}>
      <Text style={styles.newText}>New apartments</Text>

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
    marginBottom: 15,
    color: colors.primary,
    fontFamily: "NunitoSans-Bold",
  },
});
