import React, { useState } from "react";
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../assets/colors/colors";

const Map = () => {
  const [switchMap, setSwitchMap] = useState("terrain");

  //
  return (
    <View style={styles.container}>
      <View style={styles.mapTop}>
        <TouchableOpacity
          style={styles.maps}
          onPress={() => setSwitchMap("terrain")}
        >
          <Text style={styles.mapsText}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.maps}
          onPress={() => setSwitchMap("hybrid")}
        >
          <Text style={styles.mapsText}>Satelite</Text>
        </TouchableOpacity>
      </View>

      {/*  */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 7.1562300000000505,
          longitude: 3.331070000000068,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        provider={PROVIDER_GOOGLE}
        mapType={switchMap}
      >
        <Marker
          coordinate={{
            latitude: 7.15,
            longitude: 3.33,
          }}
          pinColor="red"
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>

        <Circle
          center={{
            latitude: 7.15,
            longitude: 3.33,
          }}
          radius={100}
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: 10,
  },
  mapTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  maps: {
    height: 40,
    width: 100,
    borderWidth: 0.3,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  map: {
    width: 350,
    height: 400,
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
  },
});
