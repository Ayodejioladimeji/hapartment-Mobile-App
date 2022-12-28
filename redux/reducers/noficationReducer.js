import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  my_notifications: [],
};

//

const notificationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.MY_NOTIFICATIONS:
      return {
        ...state,
        my_notifications: payload,
      };

    default:
      return state;
  }
};

export default notificationReducer;
