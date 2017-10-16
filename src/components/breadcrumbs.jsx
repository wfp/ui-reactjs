import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumbs = (props) => {
  return (

      <nav className="wfp-breadcrumbs">
        <ol className="breadcrumbs--wrapper">
          <li className="breadcrumbs--item">
            <a href="#home" className="breadcrumbs--link home">
              <span className="icon-home-dark xsmall"></span><span>{props.home}</span>
            </a>
          </li>
        {
          props.nextLabels.map((nextLabel, ind) => {
              var content = ""
              if (props.nextLinks && props.nextLinks.length > ind) {
                content = <a href={props.nextLinks[ind]} class="breadcrumbs--link" ><span>{nextLabel}</span></a>
              }
              else {
                content = <span class="breadcrumbs--last">{nextLabel}</span>
              }
              return (
                <li key={ind} className="breadcrumbs--item">
                  {content}
                </li>
              );
            })
        }
        </ol>
      </nav>

  /* 
    <ul className="wfp--breadcrumbs">
        <li className="wfp--breadcrumbs--home wfp--breadcrumbs--step">
          <a href="#">
            <span className="icon-home-dark xsmall pl3"></span>
            <span>{props.home}</span></a>
        </li>
      {
        props.nextLabels.map((nextLabel, ind) => {
          var content = ""
          if (props.nextLinks && props.nextLinks.length > ind) {
            content = <a href={props.nextLinks[ind]}><span>{nextLabel}</span></a>
          }
          else {
            content = <span>{nextLabel}</span>
          }
          return (
            <li key={ind} className="wfp--breadcrumbs--step">
              {content}
            </li>
          );
        })
      }
    </ul>
    */
  )
}



Breadcrumbs.propTypes = {
  home: PropTypes.string,
  nextLabels: PropTypes.arrayOf(PropTypes.string),
  nextLinks: PropTypes.arrayOf(PropTypes.string)
};

export default Breadcrumbs;
