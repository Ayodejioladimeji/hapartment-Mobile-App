import { Alert } from "react-native";
import { postDataApi, postDataApis } from "../../utils/fetchData";
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

      dispatch({
        type: GLOBALTYPES.LOADING,
        payload: { createnotificationloading: false },
      });
      navigation.navigate("NotificationScreen");
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
