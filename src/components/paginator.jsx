import React from 'react';
import PropTypes from 'prop-types';

import ReactPaginate from 'react-paginate';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class Paginator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount:0,
    };
    this.loadPaginator = this.loadPaginator.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);

  }

  componentDidMount() {
    this.loadPaginator();
  }

  loadPaginator() {
    fetch(this.props.baseUrl, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      },
      credentials: 'include'
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          pageCount: Math.ceil(data.total_pages),
        });
      });
  }

  handlePageClick(data) {
    var new_page_number = data.selected + 1;
    if (this.props.baseUrl.indexOf('?')>-1) {
      this.props.handlePageChange(this.props.baseUrl + '&page=' + new_page_number)
    }
    else{
      this.props.handlePageChange(this.props.baseUrl + '?page=' + new_page_number)
    };
  }

  render() {
    return (
      <div className="wfp-pagination">
        <ReactPaginate
          activeClassName={"active"}
          disabledClassName={"disabled"} //TODO: Create this class
          breakClassName={"pagination--item"}
          breakLabel={
            <a
              className="pagination--btn ellipsis"
              href=""
            >&hellip;
            </a>
          }

          containerClassName={"pagination--wrapper"}
          // hrefBuilder={this.hrefBuilder}
          marginPagesDisplayed={2}
          nextClassName={"pagination--item"}
          nextLabel={"next"}
          nextLinkClassName={"pagination--btn"}
          onPageChange={this.handlePageClick}
          pageClassName={"pagination--item"}
          pageCount={this.state.pageCount}
          pageLinkClassName={"pagination--btn"}
          pageRangeDisplayed={2}
          previousClassName={"pagination--item"}
          previousLabel={"previous"}
          previousLinkClassName={"pagination--btn"}
          subContainerClassName={"pagination--item"}
        />
      </div>
    );
  }
}

Paginator.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default Paginator;
