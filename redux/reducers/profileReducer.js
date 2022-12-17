import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  profile_callback: false,
  userloading: false,
  all_agents: [],
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

    case GLOBALTYPES.ALL_AGENTS:
      return {
        ...state,
        all_agents: payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
