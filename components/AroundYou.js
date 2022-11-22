import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Card from "../common/Card";
import colors from "../assets/colors/colors";
import data from "../constants/data";
import { useNavigation } from "@react-navigation/native";

//

const AroundYou = () => {
  const navigation = useNavigation();

  //
  return (
    <View style={styles.aroundWrapper}>
      <Text style={styles.aroundText}>Apartments around You</Text>

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

export default AroundYou;

const styles = StyleSheet.create({
  aroundWrapper: {
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: colors.white,
  },
  aroundText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: colors.primary,
    fontFamily: "Lobster-Regular",
  },
});
