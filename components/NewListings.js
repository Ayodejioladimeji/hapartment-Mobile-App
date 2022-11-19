import { View, Text, FlatList } from "react-native";
import React from "react";
import Card from "../common/Card";
import colors from "../assets/colors/colors";
import data from "../constants/data";

//

const NewListings = () => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingTop: 10,
        backgroundColor: colors.white,
      }}
    >
      <Text
        style={{
          fontSize: 17,
          fontWeight: "500",
          marginBottom: 5,
          color: colors.primary,
        }}
      >
        New Listings
      </Text>

      <FlatList
        data={data}
        renderItem={Card}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default NewListings;
