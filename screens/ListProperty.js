import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import colors from "../assets/colors/colors";
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import MyStatusBar from "../common/MyStatusBar";
import handleSubmit from "../utils/createListing";

//

const ListProperty = ({ navigation }) => {
  const { token } = useSelector((state) => state.auth);
  const {
    address,
    property_type,
    country,
    state,
    city,
    statename,
    cityname,
    bedrooms,
    bathrooms,
    toilets,
    furnishing,
    home_facilities,
    area_facilities,
    description,
    price,
    category,
    video,
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
    imageSeven,
  } = useSelector((state) => state.listing);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { listing_callback } = useSelector((state) => state.listing);

  //

  const submit = () => {
    handleSubmit(
      address,
      property_type,
      country,
      state,
      city,
      statename,
      cityname,
      bathrooms,
      toilets,
      furnishing,
      home_facilities,
      area_facilities,
      description,
      price,
      category,
      bedrooms,
      video,
      imageOne,
      imageTwo,
      imageThree,
      imageFour,
      imageFive,
      imageSix,
      imageSeven,
      setLoading,
      dispatch,
      token,
      listing_callback
    );
  };

  //

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerWrapper}>
          <View style={styles.identityWrapper}>
            <Image
              source={require("../assets/icon.png")}
              style={styles.brandImage}
            />

            <View style={styles.textView}>
              <Text style={styles.heading}>List Your Property</Text>
              <Text style={styles.subheading}>
                Follow the instructions below to list your property
              </Text>

              {/* <View style={styles.download}>
                  <Text style={styles.downloadText}>Download</Text>
                  <AntDesign name="pdffile1" style={styles.downloadIcon} />
                </View> */}
            </View>

            {/* section center */}
            <View style={styles.section}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.profileDetails}
                onPress={() => navigation.navigate("BasicInformation")}
              >
                <View style={styles.profileLeft}>
                  <View style={styles.detailsBox}>
                    <MaterialCommunityIcons
                      name="numeric-1"
                      size={20}
                      color="black"
                      style={styles.profileIcon}
                    />
                  </View>
                  <View>
                    <Text style={styles.detailsText}>Basic Information</Text>
                    <Text style={styles.subText}>Location & property type</Text>
                  </View>
                </View>
                {address !== "" &&
                property_type !== "" &&
                country !== "" &&
                state !== "" &&
                city !== "" ? (
                  <MaterialIcons
                    name="check-circle"
                    size={24}
                    color={colors.primary}
                    style={styles.arrow}
                  />
                ) : (
                  <MaterialIcons
                    name="chevron-right"
                    size={24}
                    color="black"
                    style={styles.arrow}
                  />
                )}
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.profileDetails}
                onPress={() => navigation.navigate("PropertyDetails")}
              >
                <View style={styles.profileLeft}>
                  <View style={styles.detailsBox}>
                    <MaterialCommunityIcons
                      name="numeric-2"
                      size={20}
                      color="black"
                      style={styles.profileIcon}
                    />
                  </View>
                  <View>
                    <Text style={styles.detailsText}>Property Details</Text>
                    <Text style={styles.subText}>
                      Facilities & environments
                    </Text>
                  </View>
                </View>

                {bathrooms !== "" &&
                toilets !== "" &&
                furnishing !== "" &&
                home_facilities.length !== 0 &&
                area_facilities.length !== 0 ? (
                  <MaterialIcons
                    name="check-circle"
                    size={24}
                    color={colors.primary}
                    style={styles.arrow}
                  />
                ) : (
                  <MaterialIcons
                    name="chevron-right"
                    size={24}
                    color="black"
                    style={styles.arrow}
                  />
                )}
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.profileDetails}
                onPress={() => navigation.navigate("Description")}
              >
                <View style={styles.profileLeft}>
                  <View style={styles.detailsBox}>
                    <MaterialCommunityIcons
                      name="numeric-3"
                      size={20}
                      color="black"
                      style={styles.profileIcon}
                    />
                  </View>
                  <View>
                    <Text style={styles.detailsText}>Add Description</Text>
                    <Text style={styles.subText}>
                      Property description and price
                    </Text>
                  </View>
                </View>

                {category !== "" && price !== "" && description !== "" ? (
                  <MaterialIcons
                    name="check-circle"
                    size={24}
                    color={colors.primary}
                    style={styles.arrow}
                  />
                ) : (
                  <MaterialIcons
                    name="chevron-right"
                    size={24}
                    color="black"
                    style={styles.arrow}
                  />
                )}
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.profileDetails}
                onPress={() => navigation.navigate("PropertyImages")}
              >
                <View style={styles.profileLeft}>
                  <View style={styles.detailsBox}>
                    <MaterialCommunityIcons
                      name="numeric-4"
                      size={20}
                      color="black"
                      style={styles.profileIcon}
                    />
                  </View>
                  <View>
                    <Text style={styles.detailsText}>Add Property Images</Text>
                    <Text style={styles.subText}>
                      Take pictures of the property
                    </Text>
                  </View>
                </View>

                {imageOne !== null &&
                imageTwo !== null &&
                imageThree !== null &&
                imageFour !== null &&
                imageFive !== null &&
                imageSix !== null &&
                imageSeven !== null ? (
                  <MaterialIcons
                    name="check-circle"
                    size={24}
                    color={colors.primary}
                    style={styles.arrow}
                  />
                ) : (
                  <MaterialIcons
                    name="chevron-right"
                    size={24}
                    color="black"
                    style={styles.arrow}
                  />
                )}
              </TouchableOpacity>
            </View>

            {/* the buttons */}

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("RootHome")}
            >
              <View style={styles.identityBtn}>
                <Text style={styles.identityBtnText}>Continue later</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={
                address === "" ||
                property_type === "" ||
                country === "" ||
                state === "" ||
                city === "" ||
                bathrooms === "" ||
                toilets === "" ||
                furnishing === "" ||
                home_facilities.length === 0 ||
                area_facilities.length === 0 ||
                description === "" ||
                price === "" ||
                category === "" ||
                imageOne === null ||
                imageTwo === null ||
                imageThree === null ||
                imageFour === null ||
                imageFive === null ||
                imageSix === null ||
                imageSeven === null
                  ? styles.identityDisableButton
                  : styles.identityButton
              }
              disabled={
                address === "" ||
                property_type === "" ||
                country === "" ||
                state === "" ||
                city === "" ||
                bathrooms === "" ||
                toilets === "" ||
                furnishing === "" ||
                home_facilities.length === 0 ||
                area_facilities.length === 0 ||
                description === "" ||
                price === "" ||
                category === "" ||
                imageOne === null ||
                imageTwo === null ||
                imageThree === null ||
                imageFour === null ||
                imageFive === null ||
                imageSix === null ||
                imageSeven === null
                  ? true
                  : false
              }
              onPress={submit}
            >
              {loading ? (
                <ActivityIndicator size="small" color={colors.white} />
              ) : (
                <Text style={styles.identityButtonText}>CREATE LISTING</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ListProperty;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },

  identityWrapper: {
    marginVertical: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
  },

  brandImage: {
    height: 60,
    width: "30%",
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },

  heading: {
    fontSize: Platform.OS === "ios" ? 18 : 17,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.primary,
    alignSelf: "center",
  },
  subheading: {
    fontSize: Platform.OS === "ios" ? 15 : 13,
    color: colors.primary,
    textAlign: "center",
    // paddingHorizontal: 10,
  },

  download: {
    height: 40,
    borderWidth: 0.5,
    borderColor: colors.primary,
    width: 130,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  downloadText: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 13,
  },
  downloadIcon: {
    color: "red",
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 5,
  },

  section: {
    marginVertical: 10,
    marginTop: 40,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  identityBtn: {
    borderColor: colors.primary,
    borderWidth: 0.5,
    height: Platform.OS === "ios" ? 50 : 45,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 25,
  },

  identityBtnText: {
    color: colors.primary,
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: Platform.OS === "ios" ? 13 : 12,
  },

  identityButton: {
    borderColor: "transparent",
    borderWidth: 0.5,
    height: Platform.OS === "ios" ? 50 : 45,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 25,
    backgroundColor: colors.primary,
  },
  identityDisableButton: {
    borderColor: "transparent",
    borderWidth: 0.5,
    height: Platform.OS === "ios" ? 50 : 45,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 25,
    backgroundColor: colors.textLight,
    color: colors.primary,
  },

  identityButtonText: {
    color: colors.white,
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: Platform.OS === "ios" ? 14 : 13,
  },

  profileDetails: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: colors.primary,
    height: Platform.OS === "ios" ? 70 : 60,
    padding: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  profileLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    color: colors.white,
    alignSelf: "center",
  },
  detailsText: {
    color: colors.textDark,
    fontSize: Platform.OS === "ios" ? 16 : 14,
    // fontFamily: "//NunitoSans-Bold",
  },
  subText: {
    color: colors.textLight,
    fontSize: Platform.OS === "ios" ? 13 : 14,
    // fontFamily: "//NunitoSans-Bold",
  },
  detailsBox: {
    height: 30,
    width: 30,
    backgroundColor: colors.primary,
    color: colors.white,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
