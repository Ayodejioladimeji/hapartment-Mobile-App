import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../assets/colors/colors";
import { GLOBALTYPES } from "../redux/actions/globalTypes";

const Popup = ({ image, text, buttonText, navigation }) => {
  const dispatch = useDispatch();
  const { success, authenticate } = useSelector((state) => state.alert);
  const scaleValue = React.useRef(new Animated.Value(0)).current;

  //
  React.useEffect(() => {
    toggleModal();
  }, [authenticate, success]);

  // modal method
  const toggleModal = () => {
    if (success || authenticate) {
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  //   navigate method
  const next = () => {
    dispatch({ type: GLOBALTYPES.ALERT, payload: {} });

    if (success) {
      navigation.navigate("OneTimeCode");
    } else {
      navigation.navigate("RootHome");
    }

    dispatch({ type: GLOBALTYPES.ALERT, payload: { authloading: false } });
  };

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
              source={image}
              style={{ height: 80, width: 80, marginVertical: 20 }}
            />
          </View>

          <Text style={styles.text}>{text}</Text>

          <TouchableWithoutFeedback onPress={next}>
            <View style={styles.modalButton}>
              <Text style={styles.modalButtonText}>{buttonText}</Text>
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Popup;

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
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  text: {
    marginVertical: 30,
    fontSize: 17,
    textAlign: "center",
    lineHeight: 22,
  },
  modalButton: {
    backgroundColor: colors.primary,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  modalButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
