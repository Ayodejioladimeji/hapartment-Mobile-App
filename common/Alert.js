import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Popup from "./Popup";
import { useNavigation } from "@react-navigation/native";

const Alert = () => {
  const { logout, success, authenticate } = useSelector((state) => state.alert);
  const navigation = useNavigation();

  return (
    <View>
      {success && (
        <Popup
          image={require("../assets/images/gmail.png")}
          text={success}
          buttonText="Continue"
          navigation={navigation}
        />
      )}

      {authenticate && (
        <Popup
          image={require("../assets/images/success.png")}
          text={authenticate}
          buttonText="OK"
          navigation={navigation}
        />
      )}

      {/* {logout && (
        <Popup
          image={require("../assets/images/success.png")}
          text={authenticate}
          buttonText="Login Again"
          navigation={navigation}
        />
      )} */}
    </View>
  );
};

export default Alert;
