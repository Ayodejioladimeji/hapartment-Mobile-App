import React, { useEffect, useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { MaterialIcons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import { BASE_URL, API_KEY } from "@env";
import colors from "../assets/colors/colors";
import propertyData from "../constants/propertyData";
import { strictAddComma } from "comma-separator";
import bathrooms from "../constants/bathrooms";
import homefacilities from "../constants/homefacilities";
import areafacilities from "../constants/areafacilities";
import furnishing from "../constants/furnishing";

//

const FilterSearch = () => {
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [propertyType, setPropertyType] = useState(null);
  const [homeSelectedItems, setHomeSelectedItems] = useState([]);
  const [areaSelectedItems, setAreaSelectedItems] = useState([]);
  const [furnish, setFurnish] = useState("");
  const [bath, setBath] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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
        // console.log(JSON.stringify(response.data));
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
        console.log(error);
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
        // console.log(JSON.stringify(response.data));
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
        // console.log(JSON.stringify(response.data));
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

  const onSelectedHomeChange = (newSelectItems) => {
    setHomeSelectedItems(newSelectItems);
  };

  const onSelectedAreaChange = (newSelectItems) => {
    setAreaSelectedItems(newSelectItems);
  };

  const handleSubmit = () => {
    const newData = {
      country,
      state,
      city,
      propertyType,
      furnish,
      bath,
      homeSelectedItems,
      areaSelectedItems,
      minPrice,
      maxPrice,
    };

    console.log(newData);
  };

  //

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
            style={[
              styles.dropdown,
              isFocus && { borderColor: colors.primary },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={propertyData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select property type" : "..."}
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
          <Text style={styles.selectHeading}>Select Bathrooms</Text>
          <Dropdown
            style={[
              styles.dropdown,
              isFocus && { borderColor: colors.primary },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={bathrooms}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select bathroom"
            value={bath}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setBath(item.value);
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
            placeholder="Select country"
            searchPlaceholder="Search..."
            value={country}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setCountry(item.value);
              handleState(item.value);
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
            placeholder="Select state"
            searchPlaceholder="Search..."
            value={state}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setState(item.value);
              handleCity(country, item.value);
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
            placeholder="Select city"
            searchPlaceholder="Search..."
            value={city}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setCity(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.country}>
          <Text style={styles.selectHeading}>Furnishing</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={furnishing}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Choose Furnishing"
            value={furnish}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setFurnish(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.country}>
          <Text style={styles.selectHeading}>Select Home Facilities</Text>

          <View
            style={{
              borderWidth: 0.6,
              borderColor: colors.textLight,
              borderRadius: 5,
            }}
          >
            <SectionedMultiSelect
              IconRenderer={MaterialIcons}
              items={homefacilities}
              uniqueKey="name"
              selectText="Select facilities"
              showDropDowns={false}
              readOnlyHeadings={false}
              onSelectedItemsChange={onSelectedHomeChange}
              selectedItems={homeSelectedItems}
              styles={{
                borderWidth: 1,
                button: { backgroundColor: colors.primary },
              }}
            />
          </View>
        </View>

        <View style={styles.country}>
          <Text style={styles.selectHeading}>Select Area Facilities</Text>

          <View
            style={{
              borderWidth: 0.6,
              borderColor: colors.textLight,
              borderRadius: 5,
            }}
          >
            <SectionedMultiSelect
              IconRenderer={MaterialIcons}
              items={areafacilities}
              uniqueKey="name"
              selectText="Select facilities"
              showDropDowns={false}
              readOnlyHeadings={false}
              onSelectedItemsChange={onSelectedAreaChange}
              selectedItems={areaSelectedItems}
              styles={{
                button: { backgroundColor: colors.primary },
              }}
            />
          </View>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.selectHeading}>Price </Text>
          <View style={styles.inputDiv}>
            <TextInput
              placeholder="Min #12,000"
              style={styles.textInputs}
              onChangeText={setMinPrice}
              value={minPrice}
            />

            <TextInput
              placeholder="Max #50,000,000"
              style={styles.textInputs}
              onChangeText={setMaxPrice}
              value={maxPrice}
            />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.filterButton}
          onPress={handleSubmit}
        >
          <Text
            style={{
              color: colors.white,
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            Search
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
    fontSize: Platform.OS === "ios" ? 17 : 16,
    textAlign: "center",
    marginBottom: 30,
    // fontFamily: "//NunitoSans-Bold",
    color: colors.secondary,
    paddingHorizontal: 30,
    fontWeight: "600",
  },

  selectHeading: {
    marginBottom: 7,
    // fontFamily: "//NunitoSans-Regular",
    fontSize: Platform.OS === "ios" ? 15 : 14,
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
    fontSize: Platform.OS === "ios" ? 16 : 14,
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

  active: {
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width: 110,
    height: 100,
  },
  textInputs: {
    borderWidth: 1,
    borderColor: colors.primary,
    height: 55,
    borderRadius: 5,
    marginBottom: 10,
    width: "45%",
    paddingHorizontal: 15,
  },
  inputDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
