import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import MyStatusBar from "../common/MyStatusBar";
import GoBack from "../common/GoBack";
import LandlordSearch from "../components/LandlordSearch";
import Rating from "../common/Rating";
import landlordData from "../constants/landlordData";

//

const LandlordScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GoBack navigation={navigation} title="Apartment Agents" />

      <LandlordSearch />

      <ScrollView
        style={styles.landlordWrapper}
        contentInsetAdjustmentBehavior="automatic"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {landlordData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate("LandlordProfileScreen")}
          >
            <View style={styles.landlordBox}>
              <View style={styles.landlordLeft}>
                <Image source={item.image} style={styles.landlordImage} />
                <View>
                  <Text style={styles.landlordText}>{item.name}</Text>
                  <Text style={styles.addressText}>{item.address}</Text>
                  <Rating />
                </View>
              </View>

              <MaterialIcons
                name="chevron-right"
                size={24}
                color="black"
                style={styles.arrow}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default LandlordScreen;

const styles = StyleSheet.create({
  landlordWrapper: {
    paddingHorizontal: 15,
    marginVertical: 5,
    marginBottom: Platform.OS === "ios" ? 100 : 70,
  },
  landlordBox: {
    borderWidth: 0.3,
    borderColor: colors.textDark,
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  landlordLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  landlordImage: {
    marginRight: 10,
    height: 80,
    width: 80,
  },
  landlordText: {
    color: colors.textDark,
    // fontFamily: "//NunitoSans-Bold",
    fontSize: 14,
  },
  addressText: {
    color: colors.textDark,
    // fontFamily: "//NunitoSans-Regular",
    fontSize: 12,
  },
  arrow: {
    color: colors.textDark,
  },
});
