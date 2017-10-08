import React from 'react';
import PropTypes from 'prop-types';

import ReactPaginate from 'react-paginate';

class Paginator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      offset: 0,
      limit: this.props.perPage,
      src: this.props.src
    };
    this.getLinks = this.getLinks.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.hrefBuilder = this.hrefBuilder.bind(this);
  }

  componentDidMount() {
    this.getLinks();
  }

  getLinks() {
    $.ajax({
      url: this.state.src,
      data: {
        limit: this.props.perPage,
        offset: this.state.offset
      },
      method: 'GET',
      dataType: 'json',
      success: data => {
        console.log(data);
        this.setState({ data: data.links.page_links, pageCount: data.links.page_links.length });
      }
    });
  }

  handlePageClick(data) {
    let { selected } = data;
    let offset = Math.ceil(selected * this.props.perPage);
    let baseUrl = this.props.src;
    let url = this.state.data[selected][0].toString().split('?')[1];
    console.log(baseUrl+'?'+url);
    url = baseUrl + '?' + url;
    // console.log(this);

    this.setState({
      offset: offset,
      src: url
    }, () => {
      this.getLinks();
    });
  }
  hrefBuilder(selectedIndex) {
    const url = this.props.src;

    return url+'?page='+selectedIndex;
  }

  render() {
    return (
      <div className="wfp-pagination">
        <ReactPaginate
          activeClassName={"active"}
          breakClassName={"pagination--item"}
          breakLabel={
            <a
              className="pagination--btn ellipsis"
              href=""
            >&hellip;
            </a>
          }
          containerClassName={"pagination--wrapper"}
          hrefBuilder={this.hrefBuilder}
          marginPagesDisplayed={2}
          nextClassName={"pagination--item"}
          nextLabel={"next"}
          nextLinkClassName={"pagination--btn"}
          onPageChange={this.handlePageClick}
          pageClassName={"pagination--item"}
          pageCount={this.state.pageCount}
          pageLinkClassName={"pagination--btn"}
          pageRangeDisplayed={5}
          perPage={20}
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
  perPage: PropTypes.number,
  src: PropTypes.string.isRequired
};

Paginator.defaultProps = {
  perPage: 10
};

export default Paginator;
