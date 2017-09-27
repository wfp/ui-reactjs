import React from 'react';
import ReactTable from 'react-table'
import PropTypes from 'prop-types';
import RequestHistory from './historycell';
import RequestStatus from './statuscell';
import RequestDetails from './detailscell';
import RequestAvailableActions from './actionscell';


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
      this.setState({
        requestData: data[data_key],
      });
    });
  }

  componentDidMount() {
    this.dataSource(this.props.src, this.state.data_key);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filterString !== this.props.filterString) {
      this.dataSource(this.props.src + nextProps.filterString, this.state.data_key);
      this.setState({filterString: nextProps.filterString})
    }
  }

  render() {

    var columns = [{
      Header: <span>REQUESTOR<i className="fa fa-fw fa-sort"></i></span>,
      //width: 300,
      accessor: 'request',
      Cell: (row) => (

        (<div>{row.value.type}</div>))

    },
      {
        Header: <span>REQUEST<i className="fa fa-fw fa-sort"></i></span>,
        accessor: 'request',
        Cell: (row) => (<div>{row.value.id}</div>)

      },
      {
        Header: <span>HISTORY<i className="fa fa-fw fa-sort"></i></span>,
        accessor: 'history',
        Cell: (row) => (<RequestHistory history={row.value}/>)

      },
      {
        Header: <span>STATUS<i className="fa fa-fw fa-sort"></i></span>,
        accessor: 'status',
        Cell: (row) => (<RequestStatus status={row.value}/>)

      },
      {
        Header: <span>DETAILS<i className="fa fa-fw fa-sort"></i></span>,
        accessor: 'details',
        Cell: (row) => (<RequestDetails details={row.value}/>)

      },
      {
        Header: <span>ACTIONS<i className="fa fa-fw fa-sort"></i></span>,
        accessor: 'actions',
        Cell: (row) => (<RequestAvailableActions actions={row.value}/>)
      }
    ]

    return (
      <ReactTable
        data={this.state.requestData}
        columns={columns}
        showPagination={false}
        minRows={0}
      />)
  };
};

RequestTable.propTypes = {
  src: PropTypes.string.isRequired,
  data_key: PropTypes.string.isRequired

};

