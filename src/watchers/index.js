import { takeEvery } from "redux-saga/effects";
import { actions } from "../constants";
import { fetchCampaigns } from "../workers";

export function* watchFetchCampaigns() {
  yield takeEvery(actions.FETCH_CAMPAIGNS, fetchCampaigns);
}

