import { put } from "redux-saga/effects";
import { actions } from "../constants";
import mockData from "../mock-data/compaign.json" // loading the JSON data statically since it's not hosted
import { sliceResult, searchResult } from "../utils"

export function* fetchCampaigns({ data }) {
  const resultData = data.keyword ? searchResult(mockData, "company", data.keyword) : mockData;

    yield put({
    type: actions.FETCH_CAMPAIGNS_SUCCESSES,
    result: {
      totalRecords: resultData.length || 0,
      data: sliceResult(
        resultData,
        data.pageNumber ? parseInt(data.pageNumber, 10) : 1,
        data.pageNumber ? parseInt(data.size, 10) : 10,
      )
    },
  });
}

