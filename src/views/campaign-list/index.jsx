import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import * as compaignAction from "../../actions";
import { messages } from "../../constants"
import Search from "../../components/search"
import Grid from "../../components/grid"
import Pagination from "../../components/pagination"

class CampaignList extends PureComponent {

  constructor() {
    super();
    this.pageSize = 10;
    this.state = {
      keyword: ""
    }
  }

  componentDidMount() {
    this.handleFetchCampaigns();
  }

  handleFetchCampaigns = (pageNumber = 1) =>  {
    const { actions } = this.props;
    const { keyword } = this.state;

    actions.compaignAction.fetchCampaigns({keyword, pageNumber, size: this.pageSize});
  }

  handleSearchCampaigns = (keyword, pageNumber = 1) =>  {
    const { actions } = this.props;
    
    this.setState({ keyword }, () => {
      actions.compaignAction.fetchCampaigns({keyword, pageNumber, size: this.pageSize});
    })
  }

  getColumnsConfig = () => {
    return [
      { field: "_id", label: "ID"},
      { field: "name", label: "Campaign Name"},
      { field: "type", label: "Campaign Type"},
      { company: "company", label: "Company Name"}
    ];
  }

  render = () => {
    const { compaigns } = this.props;

    if (compaigns.result === null) return null;

    return (
      <Fragment>
        <Search
          onSearch={this.handleSearchCampaigns}
          placeHolderText={messages.CAMPASIGN_SEARCH_LABEL}
        />
        <Grid
          rows={compaigns.result && compaigns.result.data || []}
          columnsConfig={compaigns.result ? this.getColumnsConfig() : []}
          enableSelection={true}
        />
        <Pagination
          size={this.pageSize}
          totalRecords = {(compaigns.result && compaigns.result.totalRecords) || 0}
          onPageUpdate= {this.handleFetchCampaigns}
        />
      </Fragment>
    );
  };
}

CampaignList.propTypes = {
  actions: PropTypes.object,
  compaigns: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    compaigns: state.compaigns
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      compaignAction: bindActionCreators(compaignAction, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignList);