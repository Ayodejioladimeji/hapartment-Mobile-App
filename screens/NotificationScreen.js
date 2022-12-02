import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import GoBack from "../common/GoBack";

//

const NotificationScreen = ({ navigation }) => {
  const [isEnabledApp, setIsEnabledApp] = useState(false);
  const [isEnabledEmail, setIsEnabledEmail] = useState(false);
  const toggleSwitchApp = () =>
    setIsEnabledApp((previousState) => !previousState);
  const toggleSwitchEmail = () =>
    setIsEnabledEmail((previousState) => !previousState);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GoBack navigation={navigation} title="Notifications" />

      <ScrollView style={styles.settingsWrapper}>
        <View style={styles.settingsBox}>
          <View style={styles.settingsLeft}>
            <Fontisto
              name="mobile-alt"
              size={22}
              color="black"
              style={styles.settingsIcon}
            />
            <Text style={styles.settingsText}>Notify on App</Text>
          </View>

          <Switch
            trackColor={{ false: colors.textDark, true: colors.primary }}
            thumbColor={isEnabledEmail ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchEmail}
            value={isEnabledEmail}
            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.8 }] }}
          />
        </View>

        <View style={styles.settingsBox}>
          <View style={styles.settingsLeft}>
            <MaterialIcons
              name="mark-email-unread"
              size={22}
              style={styles.settingsIcon}
            />
            <Text style={styles.settingsText}>Notify on Email</Text>
          </View>

          <Switch
            trackColor={{ false: colors.textDark, true: colors.primary }}
            thumbColor={isEnabledApp ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchApp}
            value={isEnabledApp}
            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.8 }] }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;

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
    color: colors.primary,
  },
  settingsText: {
    color: colors.textDark,
    fontFamily: "//NunitoSans-Bold",
    fontSize: Platform.OS === "ios" ? 15 : 14,
  },
  arrow: {
    color: colors.textDark,
  },
});
