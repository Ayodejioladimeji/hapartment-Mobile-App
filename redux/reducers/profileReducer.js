import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  profile_callback: false,
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.PROFILE_CALLBACK:
      return {
        ...state,
        profile_callback: payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
