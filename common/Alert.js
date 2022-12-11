import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Popup from "./Popup";
import { useNavigation } from "@react-navigation/native";

const Alert = () => {
  const {
    logout,
    success,
    authenticate,
    forgotpasswordsuccess,
    resetpasswordsuccess,
    changepasswordsuccess,
    authenticateUser,
  } = useSelector((state) => state.alert);
  const navigation = useNavigation();

  //
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

      {forgotpasswordsuccess && (
        <Popup
          image={require("../assets/images/gmail.png")}
          text={forgotpasswordsuccess}
          buttonText="Continue"
          navigation={navigation}
        />
      )}

      {resetpasswordsuccess && (
        <Popup
          image={require("../assets/images/success.png")}
          text={resetpasswordsuccess}
          buttonText="Login"
          navigation={navigation}
        />
      )}

      {changepasswordsuccess && (
        <Popup
          image={require("../assets/images/success.png")}
          text={changepasswordsuccess}
          buttonText="OK"
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

      {authenticateUser && (
        <Popup
          image={require("../assets/images/success.png")}
          text={authenticateUser}
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
