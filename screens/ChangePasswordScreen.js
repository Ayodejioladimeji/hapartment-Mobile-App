import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import GoBack from "../common/GoBack";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";

// VALIDATION REGEX
const passwordUpper = /(?=.*[A-Z])/;
const passwordSpecial = /(?=.*[!@#$%^&*])/;
const passwordLower = /(?=.*[a-z])/;
const passwordRegex = /(?=.*[0-9])/;

//

const ChangePasswordScreen = () => {
  const navigation = useNavigation();

  //
  return (
    <Formik
      initialValues={{
        currentPassword: "",
        password: "",
        password2: "",
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

        if (values.password2 !== values.password) {
          errors.password2 = "Password does not match";
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
            <GoBack navigation={navigation} title="Password Change" />

            <ScrollView>
              <View style={styles.registerContainer}>
                <Text style={styles.heading}>Change your password</Text>

                <View stye={styles.formContainer}>
                  <View style={styles.editProfileBox}>
                    <Text style={styles.inputText}>Current Password</Text>
                    <TextInput
                      secureTextEntry={true}
                      style={styles.formInput}
                      placeholder="**********"
                      onChangeText={handleChange("currentPassword")}
                      onBlur={handleBlur("currentPassword")}
                      value={values.currentPassword}
                      name="password"
                    />
                    {errors.currentPassword && touched.currentPassword && (
                      <Text style={styles.errors}>
                        {errors.currentPassword}
                      </Text>
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

                  <View style={styles.editProfileBox}>
                    <Text style={styles.inputText}>Confirm Password</Text>
                    <TextInput
                      secureTextEntry={true}
                      style={styles.formInput}
                      placeholder="**********"
                      onChangeText={handleChange("password2")}
                      onBlur={handleBlur("password2")}
                      value={values.password2}
                      name="password2"
                    />
                    {errors.password2 && touched.password2 && (
                      <Text style={styles.errors}>{errors.password2}</Text>
                    )}
                  </View>

                  <TouchableOpacity style={styles.profileButton}>
                    <Text style={styles.profileButtonText}>
                      Change Password
                    </Text>
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

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 30,
  },
  heading: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
    // fontFamily: "//NunitoSans-Bold",
    alignSelf: "center",
    marginBottom: 50,
    color: colors.primary,
  },

  editProfileBox: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  inputText: {
    marginBottom: 5,
    fontSize: 15,
    // fontFamily: "//NunitoSans-Regular",
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
    textTransform: "uppercase",
  },

  member: {
    marginTop: 20,
    marginBottom: 120,
    alignSelf: "center",
    fontSize: 17,
    // fontFamily: "//NunitoSans-Regular",
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
