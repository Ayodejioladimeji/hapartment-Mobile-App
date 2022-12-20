import { View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allListings } from "../redux/actions/listingAction";
import { allAgent } from "../redux/actions/profileAction";

const FetchApi = () => {
  const dispatch = useDispatch();

  //

  // get all listings from the database
  useEffect(() => {
    dispatch(allListings());
  }, []);

  // Fetch all agents
  useEffect(() => {
    dispatch(allAgent());
  }, []);

  return <View></View>;
};

export default FetchApi;
