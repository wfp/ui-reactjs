import React, { Component, PropTypes } from 'react';

import ReactTable from "react-table";

import UniversalModal from '../../universalmodal/modal';
import UniversalModalTitle from '../../universalmodal/modaltitle';
import UniversalModalSubTitle from '../../universalmodal/modalSubTitle';
import UniversalModalContent from '../../universalmodal/modalcontent';
import UniversalModalFooter from '../../universalmodal/modalfooter';
import WfpActionButton from '../../wfpActionButton';
import ReactTablePagination from '../../reactTablePagination';


import { RenderInput, RenderSelect, FormGroup, FormGroupTitle, FormHint } from '../inputs';
import Label from '../label';


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
              <Label>Filter by bank name, bank number or city to search. If you can't find your bank, close this window to enter details manually.</Label>
              <input 
                className={this.state.search ? 'notempty' : ''}
                type="text"
                placeholder="Bank name, City or Number to search.."
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
                    Header: "Action",
                    accessor: "bank_branch",
                    className: "center",
                    Cell: row => {
                      return (
                        <span>
                          <WfpActionButton
                            label="Select"
                            action={row.original}
                            closeModal={this.props.closeModal}
                            onActionClick={this.props.updateBankingData}
                          />
                        </span>
                      )
                    }
                  }
            ]}
            defaultPageSize={7}
            showPageSizeOptions={false}
            className="-striped"
            PaginationComponent={ReactTablePagination}
          />
        </UniversalModalContent>
        </div>
      </form>
    )
  }
}


const BankingDialogWrapper = (props) => {
  return (
      <div>
          <UniversalModalTitle>
              WINGS Banks
          </UniversalModalTitle>
              <BankingDialog data={props.data} updateBankingData={props.updateBankingData} closeModal={props.closeModal} />
      </div>
  )
}


const BankingDialogModal = (props) => (
  <UniversalModal
    type="large"
    trigger={<WfpActionButton label="Search WINGS banks..." />}>
      <BankingDialogWrapper data={props.data} updateBankingData={props.updateBankingData} />
  </UniversalModal>
)

export default BankingDialogModal;