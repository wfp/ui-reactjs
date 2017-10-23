import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      animating: false,
      subOpen: false
    };
  }

  /* Close Menu if there are new props available */
  componentWillReceiveProps(nextProps) {
    if (nextProps.MainMenu && nextProps.MainMenu.open === false) {
      this.setState({ 
        open: false
      });
    }
    return false;
  }

  /* Open and close Menu on mobile */
  toggleMenu = () => {
    this.setState({ animating: true });
    setTimeout(function(){ this.setState({ animating: false }); }.bind(this), 1000);
    this.setState({ open: !this.state.open });
    document.body.classList.toggle('menu--open', !this.state.open);
  }

  
  render() {
    var headerClass = classNames({
      'wfp-header-int': true,
      'open': this.state.open,
      'animating' : this.state.animating,
    });

    const { Title } = this.props;

    return (
      <header role="header" className={headerClass}>
        <div className="header--primary wfp-wrapper--tight">

          <div className="header__mobile">
            {/* Title */}
            { Title }

            {/* Menu Button */}        
            <button className="header__mobile__button" value="Menu" onClick={this.toggleMenu}>Menu</button>

          </div>
          {/* Mainmenu */}
          { this.props.children }
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  Title: PropTypes.element,
  MainMenu : PropTypes.element
};

export default Header;