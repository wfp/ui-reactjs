import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ oldSiteUrl, findOutMoreUrl }) => (
  <div id="beta-banner">
    <div className="wfp-wrapper">
      <div className="wfp-hidden-lg">
        This is the new version of WFPgo.
        <a href={findOutMoreUrl}>Find out more.</a>
        <div className="buttons">
          <a
            className="wfp-btn wfp-btn--warning xsmall external-link"
            href={oldSiteUrl}
            target="_blank"
          >Return to the old site</a>
          <a
            className="wfp-btn wfp-btn--warning xsmall"
            href="#"
            onClick=""
          >Tell us what you think</a>
        </div>
      </div>
      <div className="wfp-visible-lg">
        <div className="buttons">
          <a
            className="wfp-btn wfp-btn--warning xsmall external-link"
            href={oldSiteUrl}
            target="_blank"
          >Return to the old site</a>
          <a
            className="wfp-btn wfp-btn--warning xsmall"
            href="#"
            onClick=""
          >Tell us what you think</a>
        </div>
        This is the new version of WFPgo. Some pages are still available on the
        <a
          className="external-link"
          href={oldSiteUrl}
        >old site</a>
        while we complete the transition.
        <a href={findOutMoreUrl}>Find out more.</a>
      </div>
    </div>
  </div>
);
Banner.propTypes = {
  findOutMoreUrl: PropTypes.string,
  oldSiteUrl: PropTypes.string
};
export default Banner;
