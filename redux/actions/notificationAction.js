import { Alert } from "react-native";
import { getDataApi, postDataApi, postDataApis } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

// CREATE NOTIFICATON
export const createNotification =
  (data, token, callback, navigation) => async (dispatch) => {
    try {
      dispatch({
        type: GLOBALTYPES.LOADING,
        payload: { createnotificationloading: true },
      });

      const res = await postDataApis("/create_notification", data, token);

      Alert.alert(res.data.msg);

      dispatch({ type: GLOBALTYPES.CALLBACK, payload: !callback });

      setTimeout(() => {
        dispatch({
          type: GLOBALTYPES.LOADING,
          payload: { createnotificationloading: false },
        });
        navigation.navigate("NotificationScreen");
      }, 2000);
    } catch (error) {
      Alert.alert(error.response.data.msg);

      setTimeout(() => {
        dispatch({
          type: GLOBALTYPES.LOADING,
          payload: { createnotificationloading: false },
        });
      }, 1000);
    }
  };

// GET NOTIFICATIONS CREATED
export const getNotifications = (token) => async (dispatch) => {
  try {
    dispatch({
      type: GLOBALTYPES.LOADING,
      payload: { getnotificationloading: true },
    });

    const res = await getDataApi("/my_notifications", token);

    dispatch({ type: GLOBALTYPES.MY_NOTIFICATION, payload: res.data });

    dispatch({
      type: GLOBALTYPES.LOADING,
      payload: { getnotificationloading: false },
    });
  } catch (error) {
    Alert.alert(error.response.data.msg);

    setTimeout(() => {
      dispatch({
        type: GLOBALTYPES.LOADING,
        payload: { getnotificationloading: false },
      });
    }, 1000);
  }
};
