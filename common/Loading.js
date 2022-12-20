import { View, ActivityIndicator } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        height: "100%",
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
