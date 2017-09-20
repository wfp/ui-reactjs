 import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';


class FilterPanel extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      formTypes: [],
      statusOptions: [],
      officers: []
    };
    this.onFormTypeChange = this.onFormTypeChange.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
    this.onOfficerChange = this.onOfficerChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  };

  onFormTypeChange(value) {

  };

  onStatusChange(value) {

  };

  onOfficerChange(value) {

  };
  onSubmit(event){}


  componentDidMount() {
    $.getJSON(this.props.src, data => {
      this.setState({
        formTypes: data['form_types'],
        statusOptions: data['status_options'],
        officers: data['officers'],
      });
    })
  };

  render() {
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
                    <Select
                      name="form-name"
                      value="two"
                      options={this.state.formTypes}
                      onChange={this.state.onFormTypeChange}
                    />

                </div>
                <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">

                <label className="fill-data" for="status" data-content="labels.status"></label>
                   <Select
                      name="status"
                      value="two"
                      addLabelText={labels.status}
                      options={this.state.statusOptions}
                      onChange={this.state.onStatusChange}
                    />

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
                     <label><span className="fill-data" for="to-date" data-content="labels.to"></span><span
                      className="required-symbol">*</span></label>
                  <Select
                      name="officer"
                      value="one"
                      options={this.state.officers}
                      onChange={this.state.onOfficerChange}
                    />

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
    )
  };
};

FilterPanel.propTypes = {

};

export default FilterPanel;
