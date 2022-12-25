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

const Map = ({ map }) => {
  const { latitude, longitude, address, city, region, country } = map;
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
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        provider={PROVIDER_GOOGLE}
        mapType={switchMap}
        // showsUserLocation="true"
        showsMyLocationButton="true"
        // showsCompass="true"
        showsTraffic="true"
        // showsIndoors="true"
        // showsIndoorLevelPicker="true"
        zoomEnabled="true"
        zoomTapEnabled="true"
        loadingEnabled="true"
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          pinColor="red"
        >
          <Callout>
            {/* <Text style={styles.mapText}> {address}</Text> */}
            <Text style={styles.mapText}> {city}</Text>
            <Text style={styles.mapText}> {region}</Text>
            <Text style={styles.mapText}>{country}</Text>
          </Callout>
        </Marker>

        <Circle
          center={{
            latitude: latitude,
            longitude: longitude,
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
    overflow: "hidden",
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
    width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
  },
  mapText: {
    lineHeight: 25,
    paddingHorizontal: 30,
  },
});
