import { combineReducers } from "redux";
import { actions } from "../constants";

const defaultState = {
  loading: true,
  result: null,
  error: null
};

const compaigns = (state = defaultState, action) => {
  switch (action.type) {
    case actions.FETCH_CAMPAIGNS_SUCCESSES:
      return { ...state, loading: true, result: action.result, error: null };
    case actions.FETCH_CAMPAIGNS_ERROR:
      return { ...state, loading: true, result: null, error: action.error };
    default:
      return state;
  }
};

const compaignApp = combineReducers({
  compaigns,
});

export default compaignApp;
