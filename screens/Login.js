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
import EmailValidator from "email-validator";
import { Formik } from "formik";

// VALIDATION REGEX
const passwordUpper = /(?=.*[A-Z])/;
const passwordSpecial = /(?=.*[!@#$%^&*])/;
const passwordLower = /(?=.*[a-z])/;
const passwordRegex = /(?=.*[0-9])/;

//

const Login = () => {
  const navigation = useNavigation();

  //
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          console.log(values);
          setSubmitting(false);
        }, 500);
      }}
      //   HANDLING VALIDATION MESSAGES
      validate={(values) => {
        let errors = {};

        if (!values.email) {
          errors.email = "Email is required";
        } else if (!EmailValidator.validate(values.email)) {
          errors.email = "Invalid email address";
        }

        //   THE PASSWORD SECTION
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 8) {
          errors.password = "Password must be 8 characters long";
        } else if (!passwordUpper.test(values.password)) {
          errors.password = "Password must contain one upperCase letter";
        } else if (!passwordLower.test(values.password)) {
          errors.password = "Password must contain one lowerCase letter";
        } else if (!passwordRegex.test(values.password)) {
          errors.password = "Password must contain one number";
        } else if (!passwordSpecial.test(values.password)) {
          errors.password = "Password must contain one special character";
        }

        return errors;
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
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
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      name="email"
                    />
                    {errors.email && touched.email && (
                      <Text style={styles.errors}>{errors.email}</Text>
                    )}
                  </View>

                  <View style={styles.editProfileBox}>
                    <Text style={styles.inputText}>Password</Text>
                    <TextInput
                      secureTextEntry={true}
                      style={styles.formInput}
                      placeholder="**********"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      name="password"
                    />
                    {errors.password && touched.password && (
                      <Text style={styles.errors}>{errors.password}</Text>
                    )}
                  </View>

                  <Text
                    onPress={() => navigation.navigate("ForgotPassword")}
                    style={styles.forgotPassword}
                  >
                    Forgot password ?
                  </Text>

                  <TouchableOpacity
                    style={styles.profileButton}
                    onPress={() => navigation.navigate("RootHome")}
                  >
                    <Text style={styles.profileButtonText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        );
      }}
    </Formik>
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
    fontSize: Platform.OS === "ios" ? 16 : 14,
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
  errors: {
    color: "red",
    marginTop: 5,
    marginBottom: 10,
    fontSize: Platform.OS === "ios" ? 13 : 12,
  },
});
