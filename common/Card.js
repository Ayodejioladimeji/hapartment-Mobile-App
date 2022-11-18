import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

//

const Card = () => {
  return (
    <View style={styles.cardWrapper}>
      <Image
        source={require("../assets/images/profile.png")}
        style={styles.cardImage}
      />

      <View style={styles.cardBox}>
        <View style={styles.cardName}>
          <Text>2 Bedroom Flat</Text>
          <View style={styles.cardRating}>
            <Feather name="star" size={17} color="gold" />
            <Text style={styles.ratingText}>4.8</Text>
          </View>
        </View>

        <View style={styles.cardLocation}>
          <MaterialCommunityIcons
            name="map-marker"
            size={18}
            color={colors.textLight}
            style={{ marginLeft: -3 }}
          />
          <Text style={styles.locationText}>Emene Enugu, Nigeria</Text>
        </View>

        <View style={styles.cardAmount}>
          <Text style={styles.cardPrice}>#350,000 </Text>
          <Text style={styles.cardYear}>/ Annum</Text>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.cardFooterBox}>
            <Text style={styles.footerBoxText}>2</Text>
            <Ionicons name="bed-outline" size={20} color="black" />
          </View>
          <View style={styles.cardFooterBox}>
            <Text style={styles.footerBoxText}>2</Text>
            <Ionicons name="bed-outline" size={20} color="black" />
          </View>
          <View style={styles.cardFooterBox}>
            <Text style={styles.footerBoxText}>2</Text>
            <Ionicons name="bed-outline" size={20} color="black" />
          </View>
          <View style={styles.cardFooterBox}>
            <Text style={styles.footerBoxText}>2</Text>
            <Ionicons name="bed-outline" size={20} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardWrapper: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
    borderWidth: 1,
    width: 260,
    height: 300,
  },
  cardImage: {
    height: 150,
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
  },

  cardRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginTop: 2,
    marginLeft: 4,
  },
  cardLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  locationText: {
    marginLeft: 2,
    color: colors.textLight,
  },
  cardAmount: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  cardPrice: {
    fontSize: 15,
    color: colors.textDark,
    fontWeight: "600",
  },
  cardYear: {
    color: colors.textLight,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-evenly",
  },
  cardFooterBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  footerBoxText: {
    marginRight: 4,
  },
});
