import { SafeAreaView, View, StatusBar } from "react-native";
import React from "react";

const MyStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor }}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
};

export default MyStatusBar;
