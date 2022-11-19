import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "../assets/colors/colors";

//

const SearchCard = ({ item }) => {
  return (
    <View style={styles.cardWrapper}>
      <Image source={item.image} style={styles.cardImage} />

      <View style={styles.cardBox}>
        <View style={styles.cardName}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.amountText}>₦{item.amount}</Text>
        </View>

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
            <Ionicons name="bed-outline" size={15} color={colors.textLight} />
            <Text style={styles.footerBoxText}>{item.bed} Bed</Text>
          </View>
          <View style={styles.cardFooterBox}>
            <FontAwesome5 name="bath" size={12} color={colors.textLight} />
            <Text style={styles.footerBoxText}>{item.bath} Bath</Text>
          </View>
        </View>

        <View style={styles.cardTimeWrapper}>
          <Text style={styles.cardTime}>Updated {item.time}</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  cardWrapper: {
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
    width: Platform.OS === "ios" ? 205 : 210,
    height: 280,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  cardImage: {
    height: 140,
    width: "100%",
  },

  cardBox: {
    padding: 10,
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
    fontSize: Platform.OS === "ios" ? 14 : 12,
  },

  amountText: {
    fontWeight: "700",
    fontSize: Platform.OS === "ios" ? 14 : 12,
  },

  cardLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  locationText: {
    marginLeft: 2,
    color: colors.black,
    fontSize: Platform.OS === "ios" ? 12 : 11,
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
    fontSize: Platform.OS === "ios" ? 12 : 11,
    marginLeft: 3,
  },
  cardTimeWrapper: {
    marginTop: 15,
    borderTopWidth: 1,
    borderColor: colors.textLighter,
    paddingTop: 7,
  },
  cardTime: {
    color: colors.textLight,
    fontSize: Platform.OS === "ios" ? 12 : 11,
  },
});
