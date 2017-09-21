import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  /* Close Menu if there are new props available */
  componentWillReceiveProps(nextProps) {
      this.setState({ 
        open: false
      });
    return false;
  }

  /* Open and close Menu on mobile */
  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    var headerClass = classNames({
      'wfp-header-int': true,
      'open': this.state.open
    });

    const { MainMenu, Search, UserMenu, Title } = this.props;

    return (
      <header role="header" className={headerClass}>
        <div className="header--primary wfp-wrapper--tight">

          <div className="header__mobile">
            {/* Title */}
            { Title }

            {/* Menu Button */}        
            <button className="header__mobile__button" value="Menu" onClick={this.toggleMenu}>Menu</button>
          </div>
          <div className="header__content">


            {/* Search input */}
            <div className="header__search">
              { Search }
            </div>

            {/* User Section */}
            <nav className="header__user" aria-hidden={ false }>
              { UserMenu }
            </nav>

            {/* Navigation links */}
            <div className="header__links block block--mega-menu-block">
              <nav className="header--menu" aria-hidden={ false }>
                { MainMenu }
              </nav>
            </div>

          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  Title: PropTypes.element,
  Search: PropTypes.element,
  UserMenu: PropTypes.element,
  MainMenu : PropTypes.element
};

export default Header;