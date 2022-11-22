import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import GoBack from "../common/GoBack";
import Carousel from "../components/Carousel";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import MyStatusBar from "../common/MyStatusBar";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.detailsWrapper}>
      {/* <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" /> */}
      <GoBack navigation={navigation} title="Apartment Details" />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Carousel />
        <View style={styles.detailsName}>
          <Text style={styles.name}>2 Bedroom Flat</Text>
          <Text style={styles.name}>250,000</Text>
        </View>

        <View style={styles.locationWrapper}>
          <MaterialCommunityIcons
            name="map-marker"
            size={18}
            color={colors.secondary}
            style={{ marginLeft: -3 }}
          />
          <Text style={styles.locationText}>
            22, Bolaji street, Agbado area Lagos state
          </Text>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.cardFooterBox}>
            <Ionicons name="bed-outline" size={18} color={colors.secondary} />
            <Text style={styles.footerBoxText}>2 Bed</Text>
          </View>
          <View style={styles.cardFooterBox}>
            <FontAwesome5 name="bath" size={15} color={colors.secondary} />
            <Text style={styles.footerBoxText}>2 Bath</Text>
          </View>
          <View style={styles.cardFooterBox}>
            <FontAwesome5 name="toilet" size={15} color={colors.secondary} />

            <Text style={styles.footerBoxText}>2 Toilet</Text>
          </View>
        </View>

        <View style={styles.mapWrapper}>
          <View style={styles.cardTimeWrapper}>
            <Text style={styles.cardTime}>Updated September 20, 2022</Text>
          </View>

          <View style={styles.map}>
            <Text style={styles.mapText}>View on map</Text>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.content}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Text>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Area guide</Text>
          <Text style={styles.content}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Text>
        </View>

        <View style={styles.videoWrapper}>
          <Text>Videos section</Text>
        </View>

        <View style={styles.agentWrapper}>
          <View style={styles.agentBox}>
            <Image
              source={require("../assets/images/profile.jpeg")}
              style={styles.agentImage}
            />
            <View>
              <Text style={styles.agentName}>Ayodeji Oladimeji</Text>
              <Text style={styles.desc}>Agent</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.viewWrapper}
            onPress={() => navigation.navigate("LandlordProfileScreen")}
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
  },
  detailsName: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontFamily: "NunitoSans-Black",
    color: colors.primary,
    fontWeight: "bold",
  },
  locationWrapper: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 12,
    fontFamily: "NunitoSans-Regular",
    color: colors.secondary,
  },

  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 15,
  },
  cardFooterBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  footerBoxText: {
    color: colors.secondary,
    fontSize: 12,
    marginLeft: 3,
    fontFamily: "NunitoSans-Regular",
  },
  mapWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 15,
  },
  cardTimeWrapper: {
    padding: 12,
    borderWidth: 0.3,
    borderColor: colors.textLight,
    alignItems: "center",
    color: colors.primary,
  },
  map: {
    backgroundColor: colors.primary,
    padding: 12,
  },
  mapText: {
    color: colors.white,
    fontWeight: "bold",
    fontFamily: "NunitoSans-Bold",
    fontSize: 12,
  },
  cardTime: {
    color: colors.primary,
    fontSize: 12,
    fontFamily: "NunitoSans-Bold",
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
    fontSize: 15,
    fontFamily: "NunitoSans-Bold",
    fontWeight: "600",
    marginBottom: 5,
  },
  content: {
    fontFamily: "NunitoSans-Regular",
    lineHeight: 25,
    fontSize: 14,
    color: colors.textLight,
  },
  videoWrapper: {
    height: 200,
    width: "95%",
    marginVertical: 40,
    marginHorizontal: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 13,
    fontFamily: "NunitoSans-Bold",
    color: colors.secondary,
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
  },
});