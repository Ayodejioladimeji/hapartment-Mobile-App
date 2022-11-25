import { View, ActivityIndicator } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";

const Loading = () => {
  return (
    <View
      style={{
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Loading;
