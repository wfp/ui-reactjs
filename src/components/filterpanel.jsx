import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';

class FilterPanel extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      formModels: [],
      statusOptions: [],
      officers: [],
      formSelections: [],
      statusSelections: [],
      officerSelections: [],
      openClass: false
    };
    this.onFormModelChange = this.onFormModelChange.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
    this.onOfficerChange = this.onOfficerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleFilterPanelToggle = this.handleFilterPanelToggle.bind(this);

  };

  onFormModelChange(formModels) {
    this.setState({ formSelections: formModels });
  };

  onStatusChange(statuses) {
    this.setState({ statusSelections: statuses });

  };

  onOfficerChange(officers) {
    this.setState({ officerSelections: officers });
  };
  handleClear(event) {
    event.preventDefault();
    this.setState({ formSelections: [] });
    this.setState({ statusSelections: [] });
    this.setState({ officerSelections: [] });

    this.props.handleFilterSubmit('');

  };
  handleFilterPanelToggle(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      openPanel: !this.state.openPanel
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let filters = '';
    const joinFilters = (key) => {
      return ((str, obj) => {
        return str + '&' + key + '=' + obj['value'];
      });
    };


    filters += this.state.formSelections.reduce(joinFilters('module_class'), '')
    filters += this.state.statusSelections.reduce(joinFilters('status'), '')
    filters += this.state.officerSelections.reduce(joinFilters('officer'), '')

    this.props.handleFilterSubmit(filters.replace('&', '?'));

  };

  componentDidMount() {
    $.getJSON(this.props.src, data => {

      this.setState({
        formModels: data['form_types'],
        statusOptions: data['status_options'],
        officers: data['officers'],
      });
    })
  };

  componentWillReceiveProps(nextProps) {}

  render() {
    let openClass = classnames('wfp-filter', {
      'closed': !this.state.openClass,
      'open': !!this.state.openClass
    });
    return (
      <div className={openClass}>
        <div className="wfp-filter--closed">
          <div className="accordion-head">

            <a>
              <span className="title">Show Filters</span>

              <span className="pull-right">
                <i className="fa fa-fw fa-chevron-down" />
              </span>
            </a>
          </div>
        </div>
        <div className="wfp-filter--open">
          <div className="accordion-head">
            <a>
              <span className="title">Hide Filters</span>

              <span className="pull-right">
                <i className="fa fa-fw fa-chevron-up" />
              </span>
            </a>
          </div>

          <div className="wfp-form--stacked filter_container">
            <form
              className="font-medium"
              onSubmit={this.handleSubmit}
            >
              <div className="wfp-grid">
                <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">

                    <label  htmlFor="form-name">Form</label>
                    <Select
                      name="form-name"
                      multi
                      options={this.state.formModels}
                      value={this.state.formSelections}
                      onChange={this.onFormModelChange}
                    />

                </div>
                <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">
                    <label  htmlFor="form-name">Status</label>
                   <Select
                      name="status"
                      multi
                      value={this.state.statusSelections}
                      options={this.state.statusOptions}
                      onChange={this.onStatusChange}
                    />


                </div>
              </div>
              <div className="wfp-grid">
                <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">
                  <div className="wfp-grid">
                    <div className="wfp-u-1-3 wfp-box--flat">

                      <label >Creation Date</label>
                    </div>
                    <div className="wfp-u-1-3 wfp-box--flat pl0">
                      <label><span htmlFor="from-date">From</span>
                        <span className="required-symbol">*</span></label>
                      <input type="date" name="from-date"/>
                    </div>
                    <div className="wfp-u-1-3 wfp-box--flat">
                      <label><span htmlFor="to-date">To</span>
                        <span className="required-symbol">*</span></label>
                      <input type="date" name="to-date"/>

                    </div>
                  </div>
                </div>
                <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">

                    <label><span htmlFor="officer">Officer</span>
                       <span className="required-symbol">*</span></label>
                  <Select
                      name="officer"
                      multi
                      value={this.state.officerSelections}
                      options={this.state.officers}
                      onChange={this.onOfficerChange}

                    />

                </div>
              </div>
              <div className="wfp-form--actions">
                <button type='button' onClick={this.handleClear} className="wfp-btn wfp-btn--ghost btn-small">Clear</button>
                <input type='submit' className="wfp-btn wfp-btn--primary btn-medium" value="Filter"/>
              </div>`
            </form>
          </div>
        </div>
      </div>
    );
  };
};

FilterPanel.propTypes = {
  handleFilterSubmit: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired
};

export default FilterPanel;
