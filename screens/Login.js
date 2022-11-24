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

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GoBack navigation={navigation} title="Login" />

      <ScrollView>
        <View style={styles.registerContainer}>
          <Text style={styles.heading}>Login to continue</Text>

          <View stye={styles.formContainer}>
            <View style={styles.editProfileBox}>
              <Text style={styles.inputText}>Email</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Provide your email"
              />
            </View>
            <View style={styles.editProfileBox}>
              <Text style={styles.inputText}>Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.formInput}
                placeholder="**********"
              />
            </View>

            <Text
              onPress={() => navigation.navigate("ForgotPassword")}
              style={styles.forgotPassword}
            >
              Forgot password ?
            </Text>

            <TouchableOpacity style={styles.profileButton}>
              <Text style={styles.profileButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 30,
  },
  heading: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
    fontFamily: "NunitoSans-Bold",
    alignSelf: "center",
    marginBottom: 30,
    color: colors.primary,
  },

  editProfileBox: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  inputText: {
    marginBottom: 5,
    fontSize: 15,
    fontFamily: "NunitoSans-Regular",
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
  forgotPassword: {
    color: colors.primary,
    marginTop: 20,
    alignSelf: "flex-end",
    marginHorizontal: 20,
  },
  profileButton: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: Platform.OS === "ios" ? 55 : 50,
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
    fontSize: 17,
    fontFamily: "NunitoSans-Regular",
  },
  login: {
    color: colors.primary,
  },
});
