import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import { BASE_URL, API_KEY } from "@env";
import colors from "../assets/colors/colors";
import propertyData from "../constants/propertyData";
import {
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

//

const FilterSearch = () => {
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [stateName, setStateName] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [propertyType, setPropertyType] = useState(null);

  useEffect(() => {
    var config = {
      method: "get",
      url: `${BASE_URL}/countries`,
      headers: {
        "X-CSCAPI-KEY": API_KEY,
      },
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let countryArray = [];
        for (var i = 0; i < count; i++) {
          countryArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name,
          });
        }
        setCountryData(countryArray);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  const handleState = (countryCode) => {
    var config = {
      method: "get",
      url: `${BASE_URL}/countries/${countryCode}/states`,
      headers: {
        "X-CSCAPI-KEY": API_KEY,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let stateArray = [];
        for (var i = 0; i < count; i++) {
          stateArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name,
          });
        }
        setStateData(stateArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCity = (countryCode, stateCode) => {
    var config = {
      method: "get",
      url: `${BASE_URL}/countries/${countryCode}/states/${stateCode}/cities`,
      headers: {
        "X-CSCAPI-KEY": API_KEY,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let cityArray = [];
        for (var i = 0; i < count; i++) {
          cityArray.push({
            value: response.data[i].id,
            label: response.data[i].name,
          });
        }
        setCityData(cityArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.filterHeading}>
          Filter through your preferred preference
        </Text>
        <View style={styles.country}>
          <Text style={styles.selectHeading}>Select Property Type</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={propertyData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select country" : "..."}
            searchPlaceholder="Search..."
            value={propertyType}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setPropertyType(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.country}>
          <Text style={styles.selectHeading}>Select Country</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={countryData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select country" : "..."}
            searchPlaceholder="Search..."
            value={country}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setCountry(item.value);
              handleState(item.value);
              setCountryName(item.label);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.states}>
          <Text style={styles.selectHeading}>Select State</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={stateData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select state" : "..."}
            searchPlaceholder="Search..."
            value={state}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setState(item.value);
              handleCity(country, item.value);
              setStateName(item.label);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.city}>
          <Text style={styles.selectHeading}>Select City</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={cityData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select city" : "..."}
            searchPlaceholder="Search..."
            value={city}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setCity(item.value);
              setCityName(item.label);
              setIsFocus(false);
            }}
          />
        </View>
        <View style={styles.city}>
          <Text style={styles.selectHeading}>Select Price Range</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={cityData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select city" : "..."}
            searchPlaceholder="Search..."
            value={city}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setCity(item.value);
              setCityName(item.label);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.city}>
          <Text style={styles.selectHeading}>
            Choose Facilities of your choice
          </Text>

          <View style={styles.descriptionWrapper}>
            <View style={styles.facilities}>
              <View style={styles.facilitiesBox}>
                <FontAwesome5
                  name="hospital"
                  // size={15}
                  style={styles.facilitiesIcon}
                />
                <Text style={styles.facilitiesText}>Hospital</Text>
              </View>

              <View style={styles.facilitiesBox}>
                <FontAwesome5
                  name="school"
                  // size={15}
                  style={styles.facilitiesIcon}
                />
                <Text style={styles.facilitiesText}>School</Text>
              </View>

              <View style={styles.facilitiesBox}>
                <Fontisto name="shopping-store" style={styles.facilitiesIcon} />
                <Text style={styles.facilitiesText}>Shopping Mall</Text>
              </View>

              <View style={styles.facilitiesBox}>
                <MaterialCommunityIcons
                  name="police-station"
                  style={styles.facilitiesIcon}
                />
                <Text style={styles.facilitiesText}>Police Station</Text>
              </View>

              <View style={styles.facilitiesBox}>
                <Fontisto name="drug-pack" style={styles.facilitiesIcon} />
                <Text style={styles.facilitiesText}>Drug Store</Text>
              </View>

              <View style={styles.facilitiesBox}>
                <MaterialIcons
                  name="emoji-transportation"
                  style={styles.facilitiesIcon}
                />
                <Text style={styles.facilitiesText}>Public Transport</Text>
              </View>

              <View style={styles.facilitiesBox}>
                <MaterialIcons
                  name="sports-soccer"
                  style={styles.facilitiesIcon}
                />
                <Text style={styles.facilitiesText}>Sports Center</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() =>
            Alert.alert(
              `You have selected\nCountry: ${countryName}\nState: ${stateName}\nCity: ${cityName}`
            )
          }
        >
          <Text
            style={{
              color: colors.white,
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FilterSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
  },
  filterHeading: {
    fontSize: 19,
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "NunitoSans-Bold",
    color: colors.secondary,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  selectHeading: {
    marginBottom: 7,
    fontFamily: "NunitoSans-Regular",
    fontSize: 18,
    marginTop: 20,
    color: colors.primary,
    fontWeight: "700",
  },
  dropdown: {
    height: 55,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  filterButton: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 30,
  },
  descriptionWrapper: {
    marginTop: 10,
    padding: 15,
    borderWidth: 0.3,
    borderColor: colors.textLighter,
    borderRadius: 15,
  },
  facilities: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
    flexWrap: "wrap",
  },
  facilitiesBox: {
    borderWidth: 0.3,
    borderColor: colors.textLight,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width: 100,
    height: 100,
  },
  facilitiesIcon: {
    fontSize: Platform.OS === "ios" ? 20 : 20,
    color: colors.primary,
    marginBottom: 5,
  },
  facilitiesText: {
    fontFamily: "NunitoSans-Bold",
    textAlign: "center",
    fontSize: Platform.OS === "ios" ? 15 : 12,
  },
});
