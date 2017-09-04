/*
Rule of thumb:
To pass data from child to parent:
1. Define a callback in  parent which takes the data it needs need in as a parameter.
2. Pass that callback as a prop to the child.
3. Call the callback using this.props.[callback] in the child, and pass in the data as the argument.
*/

import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tabIndex) {
    this.setState({
      activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
    });
  }

  renderChildren() {
    return (
      React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex,

      });
    })
  )
  }

  // Render current active tab content
  renderActiveTabContent() {
    const {children} = this.props;
    const {activeTabIndex} = this.state;
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  }

  render() {
    return (
      <div>
      <div className="tab-selector">
        <span>{this.props.tabsTitle}</span>

          {this.renderChildren()}
      </div>

        <div className="tabs-active-content">
          {this.renderActiveTabContent()}
        </div>
      </div>
    );
  }
};

Tabs.defaultProps = {
  defaultActiveTabIndex: 0
};

Tabs.propTypes = {
  tabsTitle: PropTypes.string,
  defaultActiveTabIndex: PropTypes.number,
};

class Tab extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.tabIndex);
  }

  render() {
    return (
        <a href="#" className={this.props.isActive?"active":""} onClick={this.handleTabClick}><span>{this.props.tabLabel}</span></a>
    )
  }
}

Tab.propTypes = {
  tabLabel: PropTypes.string,
  tabIndex: PropTypes.number,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};

module.exports = {
  Tabs,
  Tab
}
