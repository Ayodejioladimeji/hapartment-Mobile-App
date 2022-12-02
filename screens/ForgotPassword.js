import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import MyStatusBar from "../common/MyStatusBar";
import colors from "../assets/colors/colors";
import GoBack from "../common/GoBack";
import { useNavigation } from "@react-navigation/native";

//

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GoBack navigation={navigation} title="Forgot Password" />

      <ScrollView>
        <View style={styles.registerContainer}>
          <Text style={styles.heading}>Forgot your Password ?</Text>
          <Text style={styles.subHeading}>
            Enter the email address associated with your account and we will
            send you a one-time-code to reset your password
          </Text>

          <View stye={styles.formContainer}>
            <View style={styles.editProfileBox}>
              <Text style={styles.inputText}>Email</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Provide your email"
              />
            </View>

            <TouchableOpacity style={styles.profileButton}>
              <Text style={styles.profileButtonText}>Get Code</Text>
            </TouchableOpacity>

            <Text style={styles.member}>
              Remember your password ?{" "}
              <Text
                onPress={() => navigation.navigate("Login")}
                style={styles.login}
              >
                Login
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 30,
  },
  heading: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
    // fontFamily: "//NunitoSans-ßBold",
    alignSelf: "center",
    marginBottom: 10,
    color: colors.primary,
  },

  subHeading: {
    alignSelf: "center",
    marginBottom: 30,
    fontSize: Platform.OS === "ios" ? 15 : 14,
    // fontFamily: "//NunitoSans-ßRegular",
    textAlign: "center",
    paddingHorizontal: 20,
  },

  editProfileBox: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  inputText: {
    marginBottom: 5,
    fontSize: 15,
    // fontFamily: "//NunitoSßans-Regular",
    fontWeight: "600",
  },

  formInput: {
    borderWidth: 0.4,
    height: Platform.OS === "ios" ? 55 : 50,
    padding: 10,
    borderRadius: 5,
    borderColor: colors.textLighter,
    fontSize: 15,
  },
  profileButton: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.primary,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  profileButtonText: {
    color: colors.white,
    fontWeight: "700",
    fontSize: Platform.OS === "ios" ? 15 : 14,
  },

  member: {
    marginTop: 20,
    marginBottom: 120,
    alignSelf: "center",
    fontSize: Platform.OS === "ios" ? 15 : 14,
    // fontFamily: "//NunitoSanßs-Regular",
  },
  login: {
    color: colors.primary,
  },
});
