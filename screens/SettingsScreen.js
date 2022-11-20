import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import MyStatusBar from "../common/MyStatusBar";
import GoBack from "../common/GoBack";

//

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={{ height: 60 }}>
        <GoBack navigation={navigation} title="Settings" />
      </View>

      <ScrollView style={styles.settingsWrapper}>
        <View style={styles.settingsBox}>
          <View style={styles.settingsLeft}>
            <MaterialIcons
              name="settings"
              size={24}
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
            <MaterialIcons
              name="help-outline"
              size={24}
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
            <AntDesign
              name="message1"
              size={24}
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
    height: 70,
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
    fontFamily: "NunitoSans-Bold",
    fontSize: 16,
  },
  arrow: {
    color: colors.textDark,
  },
});
