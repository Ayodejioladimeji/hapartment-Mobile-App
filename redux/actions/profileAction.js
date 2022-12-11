import { postDataApis } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";


export const identity = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { authloading: true } });

    const res = await postDataApis("/register", data);

    dispatch({
      type: GLOBALTYPES.ACTIVATION_TOKEN,
      payload: res.data.activation_token,
    });

    dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { authloading: false } });
    }, 3000);
  }
};
