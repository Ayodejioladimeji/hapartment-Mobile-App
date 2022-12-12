import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  Platform,
  ActivityIndicator,
} from "react-native";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import { GLOBALTYPES } from "../redux/actions/globalTypes";
import { useDispatch, useSelector } from "react-redux";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

//

const IdentityVerificationModal = () => {
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const { profile_callback, userloading } = useSelector(
    (state) => state.profile
  );
  const dispatch = useDispatch();

  //
  React.useEffect(() => {
    toggleModal();
  }, []);

  // modal method
  const toggleModal = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // next
  const next = () => {
    dispatch({
      type: GLOBALTYPES.PROFILE_CALLBACK,
      payload: !profile_callback,
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
      dispatch({ type: GLOBALTYPES.VERIFY, payload: {} });

      navigation.navigate("RootHome");
    }, 3000);
  };

  console.log(userloading);

  //

  return (
    <Modal transparent>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/images/pending.png")}
              style={styles.image}
            />
          </View>

          <Text style={styles.header}>We are on it!</Text>
          <Text style={styles.text}>
            Please check your email for updates on your verification status in
            the next 2hours.
          </Text>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={next}
            style={styles.modalButton}
          >
            {userloading ? (
              <ActivityIndicator size="small" color={colors.white} />
            ) : (
              <Text style={styles.buttonText}>Done</Text>
            )}
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default IdentityVerificationModal;

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  image: {
    height: Platform.OS === "ios" ? 80 : 60,
    width: Platform.OS === "ios" ? 80 : 60,
  },
  header: {
    alignSelf: "center",
    fontSize: Platform.OS === "ios" ? 22 : 17,
    color: colors.primary,
    marginTop: 20,
  },
  text: {
    marginVertical: 10,
    fontSize: Platform.OS === "ios" ? 17 : 15,
    textAlign: "center",
    lineHeight: 22,
    color: colors.textLight,
  },
  modalButton: {
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10,
    height: Platform.OS === "ios" ? 50 : 40,
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
});
