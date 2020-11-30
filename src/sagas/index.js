import { all, fork } from "redux-saga/effects";

import * as campaignWatcher from "../watchers";

function* appRootSaga() {
  yield all([
    fork(campaignWatcher.watchFetchCampaigns),
  ]);
}

export default appRootSaga;
