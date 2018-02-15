import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import store from '../../../stories/configureStore';

import ReactTable from "react-table";

import UniversalModalSubTitle from '../universalmodal/modalSubTitle';
import UniversalModalContent from '../universalmodal/modalcontent';

import { RenderInput, RenderSelect, FormGroup, FormGroupTitle, FormHint } from './inputs';
import WfpActionButton from '../wfpActionButton';
import Label from './label';


class BankingDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  render() {
    const { disabled, readOnly, handleSubmit, pristine, reset, submitting } = this.props;
    var data = this.props.data;

    if (this.state.search) {
      data = data.filter(row => {
        var output = false;
        Object.values(row).forEach((element) => {
          const el = String(element.toString().toLowerCase()).includes(this.state.search.toLowerCase());
          if (el === true)  {
            output = true;
          }
        });
        return output;
      })
    }

    return (
      <form onSubmit={handleSubmit} className="wfp-form--stacked">
        <div>
          <UniversalModalSubTitle>
            <div className="wfp-form">
              <Label>Bank name, city or number to search...</Label>
              <input 
                className={this.state.search ? 'notempty' : ''}
                type="text"
                placeholder="Enter bank name city or number to search.."
                value={this.state.search}
                onChange={e => this.setState({search: e.target.value})} />
            </div>
          </UniversalModalSubTitle>
          <UniversalModalContent>
            <ReactTable
            data={data}
            columns={[
                  {
                    Header: "Bank Number",
                    accessor: "bank_number"
                  },
                  {
                    Header: "Bank Name",
                    accessor: "bank_name"
                  },
                  {
                    Header: "City",
                    accessor: "city"
                  },
                  {
                    Header: "Address",
                    accessor: "street",
                    Cell: row => {
                      return (
                        <span>
                          {row.original.street} {row.original.address_number}
                        </span>
                      )
                    }
                  },
                  {
                    Header: "Swift",
                    accessor: "swift_code"
                  },
                  {
                    Header: "Branch",
                    accessor: "bank_branch"
                  },
                  {
                    Header: "Branch",
                    accessor: "bank_branch",
                    Cell: row => {
                      return (
                        <span>
                          <WfpActionButton
                            label="Apply"
                            action={row}
                            closeModal={this.props.closeModal}
                            onActionClick={this.props.updateBankingData}
                          />
                        </span>
                      )
                    }
                  }
            ]}
            defaultPageSize={10}
            showPageSizeOptions={false}
            className="-striped -highlight"
          />
        </UniversalModalContent>
        </div>
      </form>
    )
  }
}

BankingDialog = reduxForm({
    form: 'BankingDialog',  //Form name is same
    enableReinitialize: true
})(BankingDialog)

export default BankingDialog;