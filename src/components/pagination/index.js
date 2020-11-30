import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { range } from "../../utils"

import "./pagination.css";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  componentDidMount = () => {
    this.navigateTo(1);
  }

  navigateTo = (page) => {
    const { onPageUpdate } = this.props;

    this.setState(
      { currentPage: page },
      () => onPageUpdate(page)
    );
  }

  handlePageLinkClick = page => evt => {
    evt.preventDefault();
    this.navigateTo(page);
  }

  getTotalPages = () => {
    const { totalRecords, size } = this.props;
    return Math.ceil(totalRecords / size)
  }

  renderPreviousNavIcon = (currentPage, linkPage,  iconCode) => {
    return (
      <li>
        <a href="#" className={`${currentPage === 1 ? "disable-link" : "" } `} onClick={ this.handlePageLinkClick(linkPage) }  dangerouslySetInnerHTML={{__html: iconCode}}/>
      </li>
    )
  }

  renderNextNavIcon = (currentPage, linkPage,  iconCode) => {
    return (
      <li>
        <a href="#" className={`${currentPage === this.getTotalPages() ? "disable-link" : "" } `} onClick={ this.handlePageLinkClick(linkPage) }  dangerouslySetInnerHTML={{__html: iconCode}}/>
      </li>
    )
  }

  render = () => {
    const { currentPage } = this.state;
    const totalPages = this.getTotalPages();
    const allPages = range(1, totalPages);

    if (!allPages.length) return null;

    return (
      <nav>
        <ul className="pagination">
          {this.renderPreviousNavIcon(currentPage, 1, "&#xab;")}
          {this.renderPreviousNavIcon(currentPage, currentPage - 1, "&#x2039;")}

          { allPages.map((page, index) => {
            return (
              <li key={index} className={`${ currentPage === page ? "current-link" : ""}`}>
                <a href="javascript: void(0)" onClick={ this.handlePageLinkClick(page) }>{ page }</a>
              </li> 
            )
          }) }

          {this.renderNextNavIcon(currentPage, currentPage + 1, "&#x203A;")}
          {this.renderNextNavIcon(currentPage, totalPages, "&#xbb;")}
        </ul>
      </nav>
    )

  }
}

Pagination.defaultProps = {
  totalRecords: 0,
  size: 10
};


Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  size: PropTypes.number,
  onPageUpdate: PropTypes.func.isRequired
};

export default Pagination;