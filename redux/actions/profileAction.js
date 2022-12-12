import { patchDataApi } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

//

export const profile = (data, token, profile_callback) => async (dispatch) => {
  try {
    const res = await patchDataApi("/updateUser", data, token);

    dispatch({
      type: GLOBALTYPES.PROFILE_CALLBACK,
      payload: !profile_callback,
    });

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { authenticate: res.data.msg },
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
    }, 8000);
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
