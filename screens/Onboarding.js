import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  SafeAreaView,
} from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";
// import LinearGradient from "react-native-linear-gradient";
import colors from "../assets/colors/colors";
import MyStatusBar from "../common/MyStatusBar";
import onboardData from "../constants/onboardData";

const Onboarding = (props) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>Done</Text>
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Skip</Text>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

  //
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Image
        source={require("../assets/brandlogo.png")}
        style={styles.brandImage}
      />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={onboardData}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        renderSkipButton={renderSkipButton}
        showPrevButton
        onDone={handleDone}
        showSkipButton
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  brandImage: {
    height: 100,
    width: "35%",
    marginTop: 30,
    marginHorizontal: 10,
    resizeMode: "contain",
    alignSelf: "center",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  image: {
    marginTop: 0,
    height: 350,
    width: 350,
  },
  title: {
    fontSize: 23,
    color: colors.primary,
    textAlign: "center",
    // fontFamily: "OpenSans-Bold",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 15,
    color: colors.textDark,
    textAlign: "center",
    // fontFamily: "OpenSans-SemiBold",
    marginHorizontal: 50,
    lineHeight: 20,
    marginTop: 20,
  },
  dotStyle: {
    backgroundColor: colors.secondary,
  },
  activeDotStyle: {
    backgroundColor: colors.primary,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  rightText: {
    color: colors.primary,
    // fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
    fontWeight: "bold",
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  leftText: {
    color: colors.primary,
    // fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
    fontWeight: "bold",
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
    backgroundColor: colors.primary,
  },

  doneButtonText: {
    fontSize: 14,
    // fontFamily: "OpenSans-SemiBold",
    textAlign: "center",
    color: colors.white,
    fontWeight: "bold",
  },
});

export default Onboarding;
