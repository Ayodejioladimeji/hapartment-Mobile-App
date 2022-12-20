import { getDataApi, getDataApis, patchDataApi } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

//

// Edit user profile
export const profile = (data, token, profile_callback) => async (dispatch) => {
  try {
    const res = await patchDataApi("/updateUser", data, token);

    dispatch({
      type: GLOBALTYPES.PROFILE_CALLBACK,
      payload: !profile_callback,
    });

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { authenticate: res.data.msg },
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
    }, 8000);
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
    }, 3000);
  }
};

// verify Agent identity
export const identity = (data, token) => async (dispatch) => {
  try {
    const res = await patchDataApi("/verifyagent", data, token);

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { verifyagent: res.data.msg },
    });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
    }, 3000);
  }
};

// Get all agent
export const allAgent = () => async (dispatch) => {
  try {
    // dispatch({ type: GLOBALTYPES.LOADING, payload: { allagentloading: true } });

    const res = await getDataApis("/all_agents");

    dispatch({ type: GLOBALTYPES.ALL_AGENTS, payload: res.data });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.LOADING, payload: {} });
    }, 3000);
  } catch (error) {
    console.log(error.response.data.msg);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.LOADING, payload: {} });
    }, 3000);
  }
};

// Get all agent details
export const agentDetails = (id, token) => async (dispatch) => {
  try {
    dispatch({
      type: GLOBALTYPES.LOADING,
      payload: { agentdetailsloading: true },
    });

    const res = await getDataApis(`/agent_details/${id}`);

    console.log(res);

    dispatch({ type: GLOBALTYPES.AGENT_DETAILS, payload: res.data });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.LOADING, payload: {} });
    }, 3000);
  } catch (error) {
    console.log(error.response.data.msg);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.LOADING, payload: {} });
    }, 3000);
  }
};
