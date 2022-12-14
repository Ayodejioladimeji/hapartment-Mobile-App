import { patchDataApi, postDataApis } from "../../utils/fetchData";
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
