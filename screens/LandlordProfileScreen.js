import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import React from "react";
import GoBack from "../common/GoBack";
import { useNavigation } from "@react-navigation/native";
import colors from "../assets/colors/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import SearchCard from "../common/SearchCard";
import data from "../constants/dataa";
import { useEffect } from "react";
import { agentDetails } from "../redux/actions/profileAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../common/Loading";

//

const LandlordProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  const id = route.params.id.toString();
  const dispatch = useDispatch();
  const { agent_details } = useSelector((state) => state.profile);
  const { agentdetailsloading } = useSelector((state) => state.loading);

  //

  useEffect(() => {
    if (id) {
      dispatch(agentDetails(id));
    }
  }, [id]);

  //
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GoBack title="Agent Profile" navigation={navigation} />
      {agentdetailsloading ? (
        <Loading />
      ) : (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.profileWrapper}>
            <View style={styles.profileBox}>
              {agent_details.agent_details.image === null ? (
                <Image
                  source={require("../assets/images/profile.jpeg")}
                  style={styles.profileImage}
                />
              ) : (
                <Image
                  source={{ uri: agent_details.agent_details.image }}
                  style={styles.profileImage}
                />
              )}
              <Text style={styles.nameText}>
                {agent_details.agent_details.fullname}
              </Text>
              <Text style={styles.usernameText}>
                @{agent_details.agent_details.username}
              </Text>

              <View style={styles.contactWrapper}>
                <FontAwesome5 name="whatsapp" size={24} color={colors.white} />
                <Text style={styles.contactText}>
                  {agent_details.agent_details.verification[0].identity_mobile}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.apartment}>
            <Text style={styles.apartmentText}>
              ({agent_details.agent_listing.length}) Apartments posted by{" "}
              {agent_details.agent_details.username}
            </Text>

            <View>
              {agent_details.agent_listing.map((item) => (
                <SearchCard item={item} key={item._id} />
              ))}
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default LandlordProfileScreen;

const styles = StyleSheet.create({
  profileWrapper: {
    height: 280,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: colors.textLighter,
    borderBottomWidth: Platform.OS === "ios" ? 0.17 : 0.3,
    marginHorizontal: 10,
  },

  profileBox: {
    width: "50%",
  },
  profileImage: {
    height: 100,
    width: 100,
    marginBottom: 10,
    borderRadius: 50,
    alignSelf: "center",
    borderWidth: 4,
    borderColor: colors.primary,
  },
  nameText: {
    // fontFamily: "//NunitoSans-Black",
    fontSize: 17,
    textAlign: "center",
  },
  usernameText: {
    // fontFamily: "//NunitoSans-Bold",
    textAlign: "center",
    fontSize: 15,
  },
  contactWrapper: {
    height: 45,
    width: 170,
    borderRadius: 40,
    backgroundColor: colors.primary,
    marginTop: 15,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  contactText: {
    color: colors.white,
    // fontFamily: "//NunitoSans-Bold",
    marginLeft: 10,
  },
  apartment: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  apartmentText: {
    marginBottom: 20,
    fontSize: 14,
    // fontFamily: "//NunitoSans-Bold",
    alignSelf: "center",
  },
});
