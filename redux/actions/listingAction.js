import {
  getDataApi,
  getDataApis,
  patchDataApi,
  postDataApis,
} from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

//

// Create Listing
export const createListing = (data, token) => async (dispatch) => {
  try {
    const res = await postDataApis("/create_listing", data, token);

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { createListingSuccess: res.data.msg },
    });
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
    dispatch({ type: GLOBALTYPES.ALERT, payload: { alllistingloading: true } });

    const res = await getDataApis("/all_listing");

    dispatch({ type: GLOBALTYPES.ALL_LISTINGS, payload: res.data });

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
