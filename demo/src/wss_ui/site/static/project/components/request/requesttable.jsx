import PropTypes from 'prop-types';
import React from 'react';
import ReactTable from 'react-table';
import RequestAvailableActions from './actionscell';
import RequestDetails from './detailscell';
import RequestHistory from './historycell';
import RequestStatus from './statuscell';

export default class RequestTable extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      requestData: [],
      filterString: '',
      data_key: props.data_key
    };

    this.dataSource = this.dataSource.bind(this);
  }

  dataSource(source, data_key) {
    $.getJSON(source, data => {
      this.setState({ requestData: data[data_key] });
    });
  }

  componentDidMount() {
    this.dataSource(this.props.src, this.state.data_key);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filterString !== this.props.filterString) {
      this.dataSource(this.props.src + nextProps.filterString, this.state.data_key);
      this.setState({ filterString: nextProps.filterString });
    }
  }

  render() {

    var columns = [
      {
        Header: <span>REQUESTOR<i className="fa fa-fw fa-sort" /></span>,
        id: 1,
        accessor: 'user',
        Cell: (row) => ((
          <div>
            {row.value.first_name}
            {row.value.last_name}</div>
        ))

      }, {
        Header: <span>REQUEST<i className="fa fa-fw fa-sort" /></span>,
        id: 2,
        accessor: 'info',
        Cell: (row) => (
          <a href={row.value.url}>
            <div>{row.value.type}</div>
            <div>{row.value.id}</div>
          </a>
        )

      }, {
        Header: <span>HISTORY<i className="fa fa-fw fa-sort" /></span>,
        id: 3,
        accessor: 'history',
        Cell: (row) => (<RequestHistory history={row.value} />),
        minWidth: 200
      }, {
        Header: <span>STATUS<i className="fa fa-fw fa-sort" /></span>,
        id: 4,
        accessor: d => d.info.status,
        Cell: (row) => (<RequestStatus status={row.value} />)

      }, {
        Header: <span>DETAILS<i className="fa fa-fw fa-sort" /></span>,
        id: 5,
        accessor: d => d.info.details,
        Cell: (row) => (<RequestDetails details={row.value} />)

      }, {
        Header: <span>ACTIONS<i className="fa fa-fw fa-sort" /></span>,

        id: 6,
        accessor: d => d.info.actions,
        Cell: (row) => (<RequestAvailableActions
          actions={row.value.others}
          defaultAction={row.value.default}
        />),
        minWidth: 150
      }
    ];

    return (<ReactTable
      columns={columns}
      data={this.state.requestData}
      minRows={1}
      noDataText=''
      showPagination={false}
    />);
  };
};

RequestTable.propTypes = {
  src: PropTypes.string.isRequired,
  data_key: PropTypes.string.isRequired

};
