import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  FlatList,
} from "react-native";
import React from "react";
import GoBack from "../common/GoBack";
import Carousel from "../components/Carousel";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import VideoComponent from "../components/VideoComponent";
import { addComma } from "comma-separator";
import { format } from "timeago.js";
import { list } from "../constants/list";
import { useDispatch, useSelector } from "react-redux";
import { GLOBALTYPES } from "../redux/actions/globalTypes";
import Tab from "../components/Tab";

//

const DetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    address,
    property_type,
    country,
    acquired,
    statename,
    cityname,
    bedrooms,
    bathrooms,
    toilets,
    furnishing,
    home_facilities,
    area_facilities,
    price,
    description,
    images,
    postedBy,
    updatedAt,
  } = route.params.item;

  const id = postedBy._id;

  //
  return (
    <View style={styles.detailsWrapper}>
      <GoBack navigation={navigation} title="Apartment Details" />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Carousel images={images} />

        <View style={styles.detailsName}>
          <Text style={styles.name}>{property_type}</Text>
          <Text style={styles.amount}>₦{addComma(price)}</Text>
        </View>

        <View style={styles.locationWrapper}>
          <MaterialCommunityIcons
            name="map-marker"
            size={18}
            color={colors.textLight}
            style={{ marginLeft: -3 }}
          />
          <Text style={styles.locationText}>{address}</Text>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.cardFooterBox}>
            <FontAwesome5 name="bed" size={16} color={colors.textLight} />
            <Text style={styles.footerBoxText}>
              {bedrooms}
              {bedrooms === "singleroom"
                ? ""
                : bedrooms === "room&parlour"
                ? ""
                : bedrooms === "selfcontain"
                ? ""
                : bedrooms === "1"
                ? "Bedroom"
                : "Bedrooms"}
            </Text>
          </View>
          <View style={styles.cardFooterBox}>
            <FontAwesome5 name="bath" size={16} color={colors.textLight} />
            <Text style={styles.footerBoxText}>{bathrooms} Bathroom</Text>
          </View>
          <View style={styles.cardFooterBox}>
            <FontAwesome5 name="toilet" size={16} color={colors.textLight} />

            <Text style={styles.footerBoxText}>{toilets} Toilet</Text>
          </View>
        </View>

        <View style={styles.save}>
          <MaterialIcons
            name="favorite-outline"
            size={16}
            color={colors.textLight}
          />
          <Text style={styles.saveText}>Save</Text>
        </View>

        <Tab params={route.params.item} />

        {/* date section */}
        <View style={styles.videoWrapper}>
          <View style={styles.dateWrapper}>
            <Text style={styles.cardTime}>
              Property updated : {format(updatedAt)}
            </Text>
          </View>
        </View>

        {/* share */}
        {/* <View style={styles.shareWrapper}>
          <View style={styles.shareHeader}>
            <AntDesign name="sharealt" size={18} color={colors.textDark} />
            <Text style={styles.shareText}>Share this property</Text>
          </View>

          <View style={styles.shareIcons}>
            <AntDesign name="facebook-square" size={26} color="#3b5998" />
            <FontAwesome name="twitter-square" size={26} color="#00acee" />
            <FontAwesome5
              name="whatsapp-square"
              size={26}
              color={colors.primary}
            />
          </View>
        </View> */}

        {/* Agent section */}
        <View style={styles.agentWrapper}>
          <View style={styles.agentBox}>
            {postedBy.image === null ? (
              <Image
                source={require("../assets/images/user.jpg")}
                style={styles.agentImage}
              />
            ) : (
              <Image
                source={{ uri: postedBy.image }}
                style={styles.agentImage}
              />
            )}
            <View>
              <Text style={styles.agentName}>{postedBy.fullname}</Text>
              <Text style={styles.desc}>Agent</Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.viewWrapper}
            onPress={() => navigation.navigate("LandlordProfileScreen", { id })}
          >
            <Text style={styles.viewText}>View Agent</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  detailsWrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  detailsName: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontFamily: "NunitoSans-Bold",
    color: colors.primary,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
    fontFamily: "NunitoSans-Bold",
    color: colors.primary,
    fontWeight: "bold",
  },
  locationWrapper: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 13,
    fontFamily: "NunitoSans-Regular",
    color: colors.textLight,
  },

  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 15,
    height: 50,
  },
  cardFooterBox: {
    alignItems: "center",
    height: 50,
    borderWidth: 0.3,
    borderColor: colors.textLighter,
    flexDirection: "column",
    justifyContent: "center",
    width: "32%",
  },
  footerBoxText: {
    color: colors.textLight,
    fontSize: 12,
    fontFamily: "NunitoSans-Regular",
  },
  save: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 20,
    borderWidth: 0.3,
    borderColor: colors.primary,
    height: 40,
    borderRadius: 3,
  },
  saveText: {
    color: colors.primary,
    textTransform: "uppercase",
    marginLeft: 5,
  },

  map: {
    backgroundColor: colors.primary,
    padding: 12,
    borderWidth: 0.3,
    marginLeft: 20,
    width: 170,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
  },

  descriptionWrapper: {
    marginHorizontal: 10,
    marginTop: 20,
    padding: 15,
    borderWidth: 0.3,
    borderColor: colors.textLighter,
    borderRadius: 15,
  },
  description: {
    fontSize: 14,
    fontFamily: "NunitoSans-Bold",
    fontWeight: "600",
    marginBottom: 5,
  },
  content: {
    fontFamily: "NunitoSans-Regular",
    lineHeight: 25,
    fontSize: 13,
    color: colors.textLight,
  },
  facilities: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    flexWrap: "wrap",
  },
  facilitiesBox: {
    borderWidth: 0.3,
    borderColor: colors.textLighter,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width: Platform.OS === "ios" ? 170 : 150,
    borderRadius: 20,
  },

  facilitiesText: {
    // fontFamily: "//NunitoSans-Bold",
    textAlign: "center",
    fontSize: Platform.OS === "ios" ? 15 : 12,
    color: colors.textLight,
  },
  videoWrapper: {
    marginHorizontal: 10,
    marginTop: 20,
    padding: 15,
    borderWidth: 0.3,
    borderColor: colors.textLighter,
    borderRadius: 15,
  },
  dateWrapper: {
    padding: 12,
    borderWidth: 0.3,
    borderColor: colors.textLight,
    alignItems: "center",
    color: colors.textLight,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTime: { color: colors.textLight },
  shareWrapper: {
    marginTop: 20,
    marginHorizontal: 15,
    borderWidth: 0.3,
    borderColor: colors.textLighter,
    height: 100,
  },
  shareHeader: {
    backgroundColor: colors.light,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  shareText: {
    marginLeft: 5,
  },
  shareIcons: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    // alignSelf: "center",
    height: 60,
    width: 180,
  },
  agentWrapper: {
    height: 100,
    borderWidth: 0.3,
    borderColor: colors.textLight,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 10,
    width: "100%",
    // padding: 15,
  },
  agentBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  agentImage: {
    height: 60,
    width: 60,
    borderRadius: 40,
    marginRight: 10,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  agentName: {
    fontSize: 14,
    fontFamily: "NunitoSans-Bold",
    color: colors.secondary,
    fontWeight: "600",
  },
  desc: {
    fontSize: 11,
    fontFamily: "NunitoSans-Regular",
    color: colors.primary,
  },
  viewWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingHorizontal: 20,
  },
  viewText: {
    color: colors.white,
    fontFamily: "NunitoSans-Bold",
    fontSize: 11,
    fontWeight: "600",
  },
});
