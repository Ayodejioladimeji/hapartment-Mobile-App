import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  my_notification: [],
};

//

const notificationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.MY_NOTIFICATION:
      return {
        ...state,
        my_notification: payload,
      };

    default:
      return state;
  }
};

export default notificationReducer;
