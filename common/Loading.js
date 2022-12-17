import { View, ActivityIndicator } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";

const Loading = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white,
      }}
    >
      <ActivityIndicator size="small" color={colors.primary} />
    </View>
  );
};

export default Loading;
