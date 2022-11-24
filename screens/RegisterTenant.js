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

const RegisterTenant = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GoBack navigation={navigation} title="Register Tenant" />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.registerContainer}>
          <Text style={styles.heading}>Create an account</Text>

          <View stye={styles.formContainer}>
            <View style={styles.editProfileBox}>
              <Text style={styles.inputText}>FirstName</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Provide your firstname"
              />
            </View>
            <View style={styles.editProfileBox}>
              <Text style={styles.inputText}>LastName</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Provide your lastname"
              />
            </View>
            <View style={styles.editProfileBox}>
              <Text style={styles.inputText}>Email</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Provide your email"
              />
            </View>
            <View style={styles.editProfileBox}>
              <Text style={styles.inputText}>Username</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Provide your username"
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
            <View style={styles.editProfileBox}>
              <Text style={styles.inputText}>Confirm password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.formInput}
                placeholder="***********"
              />
            </View>

            <TouchableOpacity style={styles.profileButton}>
              <Text style={styles.profileButtonText}>Create Account</Text>
            </TouchableOpacity>

            <Text style={styles.member}>
              Already a member?{" "}
              <Text
                style={styles.login}
                onPress={() => navigation.navigate("Login")}
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

export default RegisterTenant;

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
    fontSize: Platform.OS === "ios" ? 15 : 14,
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
  profileButton: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.primary,
    height: 60,
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
    fontFamily: "NunitoSans-Regular",
  },
  login: {
    color: colors.primary,
  },
});
