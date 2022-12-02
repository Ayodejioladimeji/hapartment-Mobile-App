import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  token: "",
  user: {},
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.TOKEN:
      return {
        ...state,
        token: payload,
      };
    case GLOBALTYPES.USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
