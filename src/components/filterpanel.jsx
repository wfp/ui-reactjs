 import React from 'react';
import PropTypes from 'prop-types';


const FilterPanel = props => {
  return (
    <div className="wfp-filter closed">
      <div className="wfp-filter--closed">
        <div className="accordion-head">
          <a>
            <span className="title fill-data" data-content="labels.show_filters"></span>
            <span className="pull-right">
              <i className="fa fa-fw fa-chevron-down"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="wfp-filter--open">
        <div className="accordion-head">
          <a>
            <span className="title fill-data" data-content="labels.hide_filters"></span>
            <span className="pull-right">
                <i className="fa fa-fw fa-chevron-up"></i>
            </span>
          </a>
        </div>

        <div className="wfp-form--stacked filter_container">
          <form className="font-medium">
            <div className="wfp-grid">
              <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">
                <label className="fill-data" for="form-name" data-content="labels.form"></label>
                <select id="form-name">
                  <option value="0" selected>All form types</option>
                  <option disabled>──────────</option>
                  <optgroup label="Filter by form type">
                    <option value="1">[HR044] Certificate of attendance and statement of school expenditures
                    </option>
                    <option value="2">[HR044] Leave Application</option>
                  </optgroup>
                </select>
              </div>
              <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">
                <label className="fill-data" for="status" data-content="labels.status"></label>
                <select id="status">
                  <option value="0" selected="">All status</option>
                  <option disabled>──────────</option>
                  <optgroup label="Filter by status">
                    <option value="1">Saved draft</option>
                    <option value="2">Submitted</option>
                    <option value="3">Supervisor acknowledge</option>
                    <option value="4">Approved</option>
                    <option value="5">Sent back</option>
                    <option value="6">Rejected</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div className="wfp-grid">
              <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">
                <div className="wfp-grid">
                  <div className="wfp-u-1-3 wfp-box--flat">
                    <label className="fill-data" data-content="labels.creation_date"></label>
                  </div>
                  <div className="wfp-u-1-3 wfp-box--flat pl0">
                    <label><span className="fill-data" for="from-date" data-content="labels.from"></span><span
                      className="required-symbol">*</span></label>
                    <input type="date" name="from-date"/>
                  </div>
                  <div className="wfp-u-1-3 wfp-box--flat">
                    <label><span className="fill-data" for="to-date" data-content="labels.to"></span><span
                      className="required-symbol">*</span></label>
                    <input type="date" name="to-date"/>
                  </div>
                </div>
              </div>
              <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">
                <label className="fill-data" for="officer-name" data-content="labels.officer"></label>
                <select id="officer-name">
                  <optgroup label="Filter by officer name">
                    <option value="0" selected="">From everyone</option>
                    <option disabled>──────────</option>
                    <option value="1">Mario ROSSI</option>
                    <option value="2">John SMITH</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div className="wfp-form--actions">
              <button className="wfp-btn wfp-btn--ghost btn-small">Clear</button>
              <button className="wfp-btn wfp-btn--primary btn-medium">Filter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

FilterPanel.propTypes = {

};

export default FilterPanel;
