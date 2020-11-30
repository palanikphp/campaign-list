import { actions } from "../constants";

export const fetchCampaigns = (data = { keyword: "", pageNumber: 1, size: 10 } ) => ({
  type: actions.FETCH_CAMPAIGNS,
  data
});
