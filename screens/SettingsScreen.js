import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import React from "react";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import MyStatusBar from "../common/MyStatusBar";
import GoBack from "../common/GoBack";

//

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GoBack navigation={navigation} title="Settings" />

      <ScrollView style={styles.settingsWrapper}>
        <View style={styles.settingsBox}>
          <View style={styles.settingsLeft}>
            <MaterialIcons
              name="settings"
              size={22}
              color="black"
              style={styles.settingsIcon}
            />
            <Text style={styles.settingsText}>Preference</Text>
          </View>

          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrow}
          />
        </View>

        <View style={styles.settingsBox}>
          <View style={styles.settingsLeft}>
            <AntDesign
              name="questioncircle"
              size={22}
              color="black"
              style={styles.settingsIcon}
            />
            <Text style={styles.settingsText}>FAQS</Text>
          </View>

          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrow}
          />
        </View>

        <View style={styles.settingsBox}>
          <View style={styles.settingsLeft}>
            <FontAwesome5
              name="hands-helping"
              size={22}
              color="black"
              style={styles.settingsIcon}
            />
            <Text style={styles.settingsText}>Help Center</Text>
          </View>

          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrow}
          />
        </View>

        <View style={styles.settingsBox}>
          <View style={styles.settingsLeft}>
            <MaterialIcons
              name="policy"
              size={22}
              color="black"
              style={styles.settingsIcon}
            />
            <Text style={styles.settingsText}>Terms and conditions</Text>
          </View>

          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrow}
          />
        </View>

        <View style={styles.settingsBox}>
          <View style={styles.settingsLeft}>
            <MaterialIcons
              name="privacy-tip"
              size={22}
              color="black"
              style={styles.settingsIcon}
            />
            <Text style={styles.settingsText}>Privacy Policy</Text>
          </View>

          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrow}
          />
        </View>

        <View style={styles.settingsBox}>
          <View style={styles.settingsLeft}>
            <AntDesign
              name="message1"
              size={22}
              color="black"
              style={styles.settingsIcon}
            />
            <Text style={styles.settingsText}>Leave Feedback</Text>
          </View>

          <MaterialIcons
            name="chevron-right"
            size={24}
            color="black"
            style={styles.arrow}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  settingsWrapper: {
    paddingHorizontal: 15,
    marginVertical: 25,
  },
  settingsBox: {
    borderWidth: 0.3,
    borderColor: colors.textDark,
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: Platform.OS === "ios" ? 70 : 60,
    marginBottom: 20,
  },
  settingsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingsIcon: {
    marginRight: 10,
    color: colors.textDark,
  },
  settingsText: {
    color: colors.textDark,
    // fontFamily: "//NunitoSans-Bold",
    fontSize: Platform.OS === "ios" ? 15 : 14,
  },
  arrow: {
    color: colors.textDark,
  },
});
