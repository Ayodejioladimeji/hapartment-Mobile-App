import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  profile_callback: false,
  userloading: false,
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.PROFILE_CALLBACK:
      return {
        ...state,
        profile_callback: payload,
      };

    case GLOBALTYPES.USER_LOADING:
      return {
        ...state,
        userloading: payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
