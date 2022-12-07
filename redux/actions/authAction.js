import { Alert } from "react-native";
import { postDataApi } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { authloading: true } });

    const res = await postDataApi("/register", data);

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

// Authenticate the user code
export const authenticate = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { authloading: true } });

    const res = await postDataApi("/authenticate", data);

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { authenticate: res.data.msg },
    });
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

// Resend OTP code to user
export const resendCode = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { resendloading: true } });

    const res = await postDataApi("/resend", data);

    dispatch({
      type: GLOBALTYPES.ACTIVATION_TOKEN,
      payload: res.data.activation_token,
    });

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { success: res.data.msg },
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { resendloading: false } });
    }, 3000);
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

// Login the user
export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { authloading: true } });

    const res = await postDataApi("/login", data);

    //  Save the data to the storage
    await AsyncStorage.setItem("access_token", res.data.access_token);

    // save the token to the state
    dispatch({
      type: GLOBALTYPES.TOKEN,
      payload: res.data.access_token,
    });

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { authenticate: res.data.msg },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { authloading: false } });
    }, 3000);
  }
};
