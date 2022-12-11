import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  profile: {},
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.USER_PROFILE:
      return {
        ...state,
        profile: payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
