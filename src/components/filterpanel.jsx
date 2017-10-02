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

    filters += this.state.formSelections.reduce(joinFilters('form_model'), '');
    filters += this.state.statusSelections.reduce(joinFilters('status'), '');
    filters += this.state.officerSelections.reduce(joinFilters('officer'), '');

    this.props.handleFilterSubmit(filters.replace('&', '?'));

  };

  componentDidMount() {
    $.getJSON(this.props.src, data => {
      this.setState({ formModels: data['form_types'], statusOptions: data['status_options'], officers: data['officers'] });
    });
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
            <a onClick={this.handleFilterPanelToggle}>
              <span
                className="title fill-data"
                data-content="labels.show_filters"
              />
              <span className="pull-right">
                <i className="fa fa-fw fa-chevron-down" />
              </span>
            </a>
          </div>
        </div>
        <div className="wfp-filter--open">
          <div className="accordion-head">
            <a>
              <span
                className="title fill-data"
                data-content="labels.hide_filters"
              />
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
                  <label
                    className="fill-data"
                    data-content="labels.form"
                    htmlFor="form-name"
                  />
                  <Select
                    multi
                    name="form-name"
                    onChange={this.onFormModelChange}
                    options={this.state.formModels}
                    value={this.state.formSelections}
                  />

                </div>
                <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">
                  <label
                    className="fill-data"
                    data-content="labels.status"
                    htmlFor="form-name"
                  />
                  <Select
                    multi
                    name="status"
                    onChange={this.onStatusChange}
                    options={this.state.statusOptions}
                    value={this.state.statusSelections}
                  />

                </div>
              </div>
              <div className="wfp-grid">
                <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">
                  <div className="wfp-grid">
                    <div className="wfp-u-1-3 wfp-box--flat">
                      <label
                        className="fill-data"
                        data-content="labels.creation_date"
                      />
                    </div>
                    <div className="wfp-u-1-3 wfp-box--flat pl0">
                      <label>
                        <span
                          data-content="labels.from"
                          htmlFor="from-date"
                        />
                        <span className="required-symbol">*</span>
                      </label>
                      <input
                        name="from-date"
                        type="date"
                      />
                    </div>
                    <div className="wfp-u-1-3 wfp-box--flat">
                      <label><span
                        className="fill-data"
                        data-content="labels.to"
                        htmlFor="to-date"
                      />
                      <span className="required-symbol">*</span>
                      </label>
                      <input
                        name="to-date"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
                <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">
                  <label>
                    <span
                      className="fill-data"
                      data-content="labels.to"
                      htmlFor="to-date"
                    />
                    <span className="required-symbol">*</span>
                  </label>
                  <Select
                    multi
                    name="officer"
                    onChange={this.onOfficerChange}
                    options={this.state.officers}
                    value={this.state.officerSelections}
                  />

                </div>
              </div>
              <div className="wfp-form--actions">
                <button
                  className="wfp-btn wfp-btn--ghost btn-small"
                  onClick={this.handleClear}
                  type='button'
                >Clear</button>
                <input
                  className="wfp-btn wfp-btn--primary btn-medium"
                  type='submit'
                  value="Filter"
                />
              </div>
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
