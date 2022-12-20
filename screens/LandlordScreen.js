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
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import GoBack from "../common/GoBack";
import LandlordSearch from "../components/LandlordSearch";
import Rating from "../common/Rating";
import { useSelector } from "react-redux";
import Loading from "../common/Loading";

//

const LandlordScreen = ({ navigation }) => {
  const { all_agents } = useSelector((state) => state.profile);
  const { allagentloading } = useSelector((state) => state.loading);

  //
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GoBack navigation={navigation} title="Apartment Agents" />

      <LandlordSearch />

      {allagentloading ? (
        <Loading />
      ) : (
        <ScrollView
          style={styles.landlordWrapper}
          contentInsetAdjustmentBehavior="automatic"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {all_agents.map((item) => {
            let id = item._id;
            return (
              <TouchableOpacity
                key={item._id}
                onPress={() =>
                  navigation.navigate("LandlordProfileScreen", { id })
                }
              >
                <View style={styles.landlordBox}>
                  <View style={styles.landlordLeft}>
                    {item.image !== null ? (
                      <Image
                        source={{ uri: item.image }}
                        style={styles.landlordImage}
                      />
                    ) : (
                      <Image
                        source={require("../assets/images/user.jpg")}
                        style={styles.landlordImage}
                      />
                    )}
                    <View>
                      <Text style={styles.landlordText}>{item.fullname}</Text>
                      <Text style={styles.addressText}>{item.username}</Text>
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
            );
          })}
        </ScrollView>
      )}
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
