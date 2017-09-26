import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import DropdownItem from './dropdownitem';
import classnames from 'classnames';
class UserMenuWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }
    componentDidMount() {
        this.setState({
            open: false
        });
    }
    toggleDropdown(evt) {
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        const classes = classnames('menu--item dropdown-trigger', {
            'closed': !this.state.open,
            'opened': !!this.state.open
        });
        return (<li className={ classes }>
            <a className="menu--link no-underline" onClick={ this.toggleDropdown }>
                <img src="" data-content="user.picture" data-fill-attribute="src" className="img img-round fill-data" />
                <span className="fill-data" data-content="user.name"></span>
                <i className="fa fa-fw fa-chevron-down"></i>
              </a>
          <div className="dropdown">
            <ul className="menu--group">
            {this.props.urls.map( (el) =>{
                return <DropdownItem key={el.id} url={el.url} label={el.label} />
            }
            )}
              <li className="menu--item"><a className="">Sign Out</a></li>
            </ul>
          </div>
        </li>);
    }
}
/*
const UserMenuWidget = props => {
  return (
    <li className="menu--item dropdown-trigger opened">
      <a className="menu--link no-underline">
        <img src="" data-content="user.picture" data-fill-attribute="src" className="img img-round fill-data" />
        <span className="fill-data" data-content="user.name"></span>
        <i className="fa fa-fw fa-chevron-down"></i>
      </a>
      <div className="dropdown">
        <ul className="menu--group">
        {props.urls.map( (el) =>{
            return <DropdownItem key={el.id} url={el.url} label={el.label} />
        }
        )}
          <li className="menu--item"><a className="">Sign Out</a></li>
        </ul>
      </div>
    </li>
  );
};
*/
export default UserMenuWidget;