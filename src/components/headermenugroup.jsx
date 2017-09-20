import React from 'react';
import PropTypes from 'prop-types';


const HeaderMenuGroup = props => {
  return (
    <nav id="extended_menu" className="header--menu {this.props.className ? this.props.className : '')}">
      <ul className="menu--group">
        {props.children}
      </ul>
    </nav>

  );
};
/*

                <li class="menuitem menu--item" data-target="content" data-action="page_my"><a href="#" class="menu--link fill-data" data-content="labels.my_requests">My requests</a></li>
                <li class="menuitem menu--item" data-target="content" data-action="page_incoming"><a href="#" class="menu--link fill-data" data-content="labels.incoming_requests">Incoming requests</a></li> 
                <li class="menuitem menu--item " data-target="content" data-action="page_create">
                  <button id="main-cta" class="wfp-btn fill-data-list-item wfp-btn--primary" data-fill-attribute="class" data-content="mode"><span class=" fill-data-list-item fill-data" data-content="labels.create_a_request">Create a request</span></button>
                </li>
                <li class="menu--item ">
                  <div class="header--search wfp-visible-xl">
                    <input type="search" class="header--input mousetrap" id="search" placeholder="Find a form">
                  </div>
                </li>
                <li class="menu--item dropdown-trigger closed">
                  <a class="menu--link no-underline">
                    <img src="/images/default-avatar.gif" data-content="user.picture" data-fill-attribute="src" class="img img-round fill-data"> 
                    <span class="fill-data wfp-visible-xl" data-content="user.name">Maurizio BLASILLI</span> 
                    <!--i class="fa fa-fw fa-chevron-down"></i-->
                  </a>
                  <div class="dropdown">
                    <ul class="menu--group">
                      <li class="menu--item"><a class="">Sign Out</a></li>
                    </ul>
                  </div>
                </li>

*/
HeaderMenuGroup.propTypes = {

};


export default HeaderMenuGroup;
