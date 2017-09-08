import React from 'react';
import PropTypes from 'prop-types';


const Table = props => {
  return (
    <table className="wfp-table">
      {props.children}
    </table>
  );
};

Table.propTypes = {

};

const TableHeader = props => {
  return (
    <thead>
      <tr>
        {props.children}
      </tr>
    </thead>
  );
};

const TableHeaderItem = props => {
  return (
    <th>
      <span>
      </span>
      <i className="fa fa-fw fa-sort">{props.label}</i>
    </th>
  );
};


const TableRow = props => {
  return (
    <thead>
      <tr>
        {props.children}
      </tr>
    </thead>
  );
};

const TableRowItem = props => {
  return (
    <th>
      <span className={props.className} data-content={props.label}>
      </span>
      <i className="fa fa-fw fa-sort"></i>
    </th>
  );
};


module.exports = {
  Table, TableHeader,
  TableHeaderItem, TableRow, TableRowItem
}
