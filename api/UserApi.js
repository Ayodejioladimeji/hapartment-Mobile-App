import { View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GLOBALTYPES } from "../redux/actions/globalTypes";
import { getDataApi } from "../utils/fetchData";
import { myListings } from "../redux/actions/listingAction";

const UserApi = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { profile_callback } = useSelector((state) => state.profile);

  //

  useEffect(() => {
    if (token !== "") {
      const getData = async () => {
        try {
          dispatch({ type: GLOBALTYPES.USER_LOADING, payload: true });

          const res = await getDataApi("/user", token);

          dispatch({
            type: GLOBALTYPES.USER,
            payload: res.data,
          });

          dispatch({
            type: GLOBALTYPES.TOKEN,
            payload: token,
          });

          setTimeout(() => {
            dispatch({ type: GLOBALTYPES.USER_LOADING, payload: false });
          }, 3000);
          //
        } catch (error) {
          console.log(error);
        }
      };

      getData();
    }
  }, [token, profile_callback]);

  useEffect(() => {
    if (token !== "") {
      dispatch(myListings(token));
    }
  }, [dispatch, token]);

  return <View></View>;
};

export default UserApi;
