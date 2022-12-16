import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  address: "",
  property_type: "",
  country: "",
  state: "",
  city: "",
  statename: "",
  cityname: "",
  bedrooms: "",
  bathrooms: "",
  toilets: "",
  furnishing: "",
  home_facilities: [],
  area_facilities: [],
  category: "",
  price: "",
  description: "",
  video: "",
  listing_callback: false,
  my_listings: [],
  all_listings: [],
  list_details: {},
};

//

const listingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.ADDRESS:
      return {
        ...state,
        address: payload,
      };
    case GLOBALTYPES.PROPERTY_TYPE:
      return {
        ...state,
        property_type: payload,
      };
    case GLOBALTYPES.COUNTRY:
      return {
        ...state,
        country: payload,
      };
    case GLOBALTYPES.STATE:
      return {
        ...state,
        state: payload,
      };
    case GLOBALTYPES.CITY:
      return {
        ...state,
        city: payload,
      };
    case GLOBALTYPES.STATE_NAME:
      return {
        ...state,
        statename: payload,
      };
    case GLOBALTYPES.CITY_NAME:
      return {
        ...state,
        cityname: payload,
      };
    case GLOBALTYPES.BEDROOMS:
      return {
        ...state,
        bedrooms: payload,
      };
    case GLOBALTYPES.BATHROOMS:
      return {
        ...state,
        bathrooms: payload,
      };
    case GLOBALTYPES.TOILETS:
      return {
        ...state,
        toilets: payload,
      };
    case GLOBALTYPES.FURNISHING:
      return {
        ...state,
        furnishing: payload,
      };
    case GLOBALTYPES.HOME_FACILITIES:
      return {
        ...state,
        home_facilities: payload,
      };
    case GLOBALTYPES.AREA_FACILITIES:
      return {
        ...state,
        area_facilities: payload,
      };
    case GLOBALTYPES.CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case GLOBALTYPES.PRICE:
      return {
        ...state,
        price: payload,
      };
    case GLOBALTYPES.DESCRIPTION:
      return {
        ...state,
        description: payload,
      };
    case GLOBALTYPES.VIDEO:
      return {
        ...state,
        video: payload,
      };
    case GLOBALTYPES.LISTING_CALLBACK:
      return {
        ...state,
        listing_callback: payload,
      };
    case GLOBALTYPES.MY_LISTINGS:
      return {
        ...state,
        my_listings: payload,
      };
    case GLOBALTYPES.ALL_LISTINGS:
      return {
        ...state,
        all_listings: payload,
      };
    case GLOBALTYPES.LIST_DETAILS:
      return {
        ...state,
        list_details: payload,
      };

    default:
      return state;
  }
};

export default listingReducer;
