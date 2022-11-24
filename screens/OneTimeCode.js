import {
  View,
  Text,
  Pressable,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MyStatusBar from "../common/MyStatusBar";
import colors from "../assets/colors/colors";
import GoBack from "../common/GoBack";
import { useNavigation } from "@react-navigation/native";
import OtpInput from "../components/OtpInput";
import { FontAwesome5 } from "@expo/vector-icons";

//

const OneTimeCode = () => {
  const navigation = useNavigation();
  const [otpCode, setOtpCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;

  //

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <GoBack navigation={navigation} title="One Time Code" />
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.codeWrapper}>
          <FontAwesome5 name="user-lock" style={styles.codeImage} />

          <Text style={styles.codeText}>
            Provide the one-time-code sent to your email
          </Text>
          <OtpInput
            code={otpCode}
            setCode={setOtpCode}
            maximumLength={maximumCodeLength}
            setIsPinReady={setIsPinReady}
          />
          <TouchableOpacity
            disabled={!isPinReady}
            style={{
              backgroundColor: isPinReady ? colors.primary : colors.textLight,
              color: colors.white,
              height: 50,
              width: 300,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
              borderRadius: 5,
            }}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <Text style={styles.resend}>Didn't get the code ? </Text>
          <Text style={styles.resendCode}>Resend code</Text>

          <Text style={styles.timer}>0:54</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default OneTimeCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    backgroundColor: colors.white,
  },
  codeWrapper: {
    borderWidth: 0.3,
    borderColor: colors.textLighter,
    padding: 20,
    paddingVertical: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  codeImage: {
    fontSize: 40,
    color: colors.primary,
    marginBottom: 30,
  },
  codeText: {
    marginBottom: 30,
    fontSize: 19,
    marginHorizontal: 25,
    textAlign: "center",
    fontFamily: "NunitoSans-Bold",
    color: colors.primary,
  },
  codeButton: {},
  buttonText: {
    color: colors.white,
    fontFamily: "NunitoSans-Bold",
    fontSize: 18,
  },
  resend: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 15,
    fontFamily: "NunitoSans-Regular",
  },
  resendCode: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 15,
    color: colors.primary,
    fontFamily: "NunitoSans-Bold",
  },

  timer: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 25,
    color: colors.primary,
    fontFamily: "NunitoSans-Bold",
  },
});
