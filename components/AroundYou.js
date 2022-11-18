import { View, Text } from "react-native";
import React from "react";
import Card from "../common/Card";

//

const AroundYou = () => {
  return (
    <View style={{ marginHorizontal: 15, marginVertical: 30 }}>
      <Text style={{ fontSize: 17, fontWeight: "500", marginBottom: 20 }}>
        Apartments round You
      </Text>
      <Card />
    </View>
  );
};

export default AroundYou;
