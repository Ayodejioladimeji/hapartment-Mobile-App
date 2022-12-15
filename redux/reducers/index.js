import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import profile from "./profileReducer";
import verify from "./verifyReducer";
import listing from "./listingReducer";
import loading from "./loadReducer";

export default combineReducers({
  auth,
  alert,
  profile,
  verify,
  listing,
  loading,
});
