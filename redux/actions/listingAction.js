import { Alert } from "react-native";
import {
  getDataApi,
  getDataApis,
  patchDataApi,
  postDataApis,
} from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

//

// Create Listing
export const createListing =
  (data, token, listing_callback) => async (dispatch) => {
    try {
      const res = await postDataApis("/create_listing", data, token);

      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { createListingSuccess: res.data.msg },
      });

      dispatch({
        type: GLOBALTYPES.LISTING_CALLBACK,
        payload: !listing_callback,
      });

      setTimeout(() => {
        dispatch({
          type: GLOBALTYPES.LOADING,
          payload: { createlistingloading: false },
        });
      }, 2000);
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: error.response.data.msg },
      });

      setTimeout(() => {
        dispatch({
          type: GLOBALTYPES.LOADING,
          payload: { createlistingloading: false },
        });
      }, 3000);
    }
  };

// MY listings
export const myListings = (token) => async (dispatch) => {
  try {
    dispatch({
      type: GLOBALTYPES.LOADING,
      payload: { mylistingloading: true },
    });

    const res = await getDataApi("/my_listing", token);

    dispatch({ type: GLOBALTYPES.MY_LISTINGS, payload: res.data });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.LOADING, payload: {} });
    }, 3000);
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
    }, 3000);
  }
};

// All listings
export const allListings = () => async (dispatch) => {
  try {
    dispatch({
      type: GLOBALTYPES.LOADING,
      payload: { alllistingloading: true },
    });

    const res = await getDataApis("/all_listing");

    dispatch({ type: GLOBALTYPES.ALL_LISTINGS, payload: res.data });

    setTimeout(() => {
      dispatch({
        type: GLOBALTYPES.LOADING,
        payload: { alllistingloading: false },
      });
    }, 3000);
  } catch (error) {
    console.log(error);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });

    setTimeout(() => {
      dispatch({
        type: GLOBALTYPES.LOADING,
        payload: { alllistingloading: false },
      });
    }, 3000);
  }
};

// Listing details
export const listDetails = () => async (dispatch) => {
  try {
    dispatch({
      type: GLOBALTYPES.LOADING,
      payload: { listdetailsloading: true },
    });

    const res = await getDataApis("/list_details/id");

    dispatch({ type: GLOBALTYPES.LIST_DETAILS, payload: res.data });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.LOADING, payload: {} });
    }, 3000);
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
    }, 3000);
  }
};

// Save Properties
export const saveProperties = (data, token, callback) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.LOADING, payload: { favloading: true } });
    const res = await postDataApis("/save_favorite", data, token);
    Alert.alert(res.data.msg);
    dispatch({ type: GLOBALTYPES.ALERT, payload: !callback });

    dispatch({
      type: GLOBALTYPES.CALLBACK,
      payload: !callback,
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.LOADING, payload: { favloading: false } });
    }, 1000);
  } catch (error) {
    console.log(error.response.data.msg);
    Alert.alert(error.response.data.msg);

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.LOADING, payload: { favloading: false } });
    }, 3000);
  }
};

// Get Saved Properties
export const getSavedProperties = (token) => async (dispatch) => {
  try {
    dispatch({
      type: GLOBALTYPES.LOADING,
      payload: { getfavoriteloading: true },
    });

    const res = await getDataApi("/get_favorite", token);

    dispatch({ type: GLOBALTYPES.SAVED_PROPERTIES, payload: res.data });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.LOADING, payload: {} });
    }, 3000);
  } catch (error) {
    console.log(error.response.data.msg);
    Alert.alert(error.response.data.msg);

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
      dispatch({ type: GLOBALTYPES.LOADING, payload: {} });
    }, 3000);
  }
};
