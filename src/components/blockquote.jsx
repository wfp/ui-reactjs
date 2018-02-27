import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Blockquote extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleBlockquote = () => {
    this.setState({open: !this.state.open})
  }

  render () {
      const { className, children, style, title, toggleable, columnCount, type, ...other } = this.props;
      const blockquoteClass = classNames({
        'blockquote' : true,
        'blockquote--toggleable': toggleable === true,
        'blockquote--light': type === "light",
        'blockquote--warning': type === "warning",
        'blockquote--info': type === "info",
        'blockquote--open': this.state.open
      }); 

      const blockquoteContentClass = classNames({
        'blockquote__content' : true,
        [`${className}`]: className
      }); 

      return (
    		<div
          className={blockquoteClass}
  	    >
          {title &&
            <div onClick={this.toggleBlockquote} className="blockquote__title">
              { title }
            </div>
          }
          <div className={blockquoteContentClass} style={style}>
            { children }
          </div>
  	    </div>
  	  );
    };
}

Blockquote.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
};


export default Blockquote;
