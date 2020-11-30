import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { messages } from "../../constants"
import { debounce } from "../../utils"
import "./search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  handleOnSearch = evt => {
    const { onSearch } = this.props;

    this.setState({ keyword: evt.target.value });

    if (!this.delayedHandleOnSearch) {
      this.delayedHandleOnSearch =  debounce(() => {
         onSearch(this.state.keyword);
      }, 600);
    }

    this.delayedHandleOnSearch();
  }

  render = () => {
    const { keyword } = this.state;
    const { placeHolderText } = this.props;

    return (
      <Fragment>
        <input className="search-input" placeholder={placeHolderText} onChange={this.handleOnSearch} value={keyword} name="keyword" />
      </Fragment>
    )
  }
}

Search.defaultProps = {
  placeHolderText: messages.DEFALT_SEARCH_LABEL
};


Search.propTypes = {
  placeHolderText: PropTypes.string,
  onSearch: PropTypes.func.isRequired
};

export default Search;