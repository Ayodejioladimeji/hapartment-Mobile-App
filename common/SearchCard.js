import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

//

const SearchCard = ({ item }) => {
  const navigation = useNavigation();

  //
  return (
    <View>
      <View style={styles.cardsWrapper}>
        <View style={styles.imagesWrapper}>
          <Image source={{ uri: item.image[0] }} style={styles.cardImage} />

          <View style={styles.verify}>
            <Text style={styles.verifyText}>Verified</Text>
          </View>

          <TouchableOpacity style={styles.favoriteWrapper}>
            <MaterialIcons name="favorite" style={styles.favorite} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.cardBox}
          onPress={() => navigation.navigate("AgentDetailsScreen", { item })}
        >
          <Text style={styles.nameText}>
            {item.name.substring(0, 25) + "..."}
          </Text>

          <Text style={styles.amountText}>₦{item.amount}</Text>

          <View style={styles.cardLocation}>
            <MaterialCommunityIcons
              name="map-marker"
              size={18}
              color={colors.textLight}
              style={{ marginLeft: -3 }}
            />
            <Text style={styles.locationText}>
              {item.location.substring(0, 27) + "..."}
            </Text>
          </View>

          <View style={styles.cardFooter}>
            <View style={styles.cardFooterBox}>
              <Ionicons name="bed-outline" size={14} color={colors.textLight} />
              <Text style={styles.footerBoxText}>{item.bed} Bed</Text>
            </View>
            <View style={styles.cardFooterBox}>
              <FontAwesome5 name="bath" size={11} color={colors.textLight} />
              <Text style={styles.footerBoxText}>{item.bath} Bath</Text>
            </View>
            <View style={styles.cardFooterBox}>
              <FontAwesome5 name="toilet" size={11} color={colors.textLight} />
              <Text style={styles.footerBoxText}>{item.toilet} Toilet</Text>
            </View>
          </View>

          <View style={styles.cardTimeWrapper}>
            <Text style={styles.cardTime}>Updated {item.time}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  cardsWrapper: {
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 2 },
    shadowRadius: 1,
    elevation: 1,
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: colors.textLighter,
    padding: 5,
    borderBottomColor: colors.primary,
    overflow: "hidden",
  },
  imagesWrapper: {
    position: "relative",
  },
  cardImage: {
    height: 150,
    width: 150,
    // resizeMode: "cover",
  },

  cardBox: {
    // padding: 10,
    paddingHorizontal: 5,
    width: "60%",
  },
  cardName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    fontWeight: "700",
    color: colors.black,
  },

  nameText: {
    fontWeight: "600",
    fontSize: Platform.OS === "ios" ? 13 : 12,
    // fontFamily: "//NunitoSans-Bold",
    marginBottom: 10,
  },

  amountText: {
    fontWeight: "700",
    fontSize: Platform.OS === "ios" ? 14 : 13,
    marginBottom: 10,
  },

  cardLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  locationText: {
    marginLeft: 2,
    color: colors.black,
    fontSize: 11,
    // fontFamily: "//NunitoSans-Regular",
    flexWrap: "wrap",
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    borderTopColor: colors.black,
    marginTop: 3,
  },
  cardFooterBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 13,
  },
  footerBoxText: {
    color: colors.black,
    fontSize: 9,
    marginLeft: 3,
    // fontFamily: "//NunitoSans-Regular",
  },
  cardTimeWrapper: {
    marginTop: 15,
    borderTopWidth: 0.3,
    borderColor: colors.textLighter,
    paddingTop: 7,
  },
  cardTime: {
    color: colors.textLight,
    fontSize: 11,
    // fontFamily: "//NunitoSans-Regular",
  },

  verify: {
    backgroundColor: colors.primary,
    height: Platform.OS === "ios" ? 20 : 20,
    paddingLeft: 10,
    width: "50%",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    borderTopRightRadius: 30,
  },
  verifyText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "600",
  },
  favoriteWrapper: {
    position: "absolute",
    top: 10,
    right: 10,
    height: 25,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.textLighter,
    borderRadius: 50,
  },
  favorite: {
    color: "red",
    fontSize: 17,
  },
});
