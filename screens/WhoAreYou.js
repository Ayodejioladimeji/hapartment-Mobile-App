import { View, Text, SafeAreaView } from "react-native";
import React from "react";

//

const WhoAreYou = () => {
  //

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: "red", height: 100 }}>
        <Text>View today</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: "blue", height: 100 }}></View>
    </SafeAreaView>
  );
};

export default WhoAreYou;
