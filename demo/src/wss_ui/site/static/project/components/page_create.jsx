import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {CommonLinksHeader, LinkMenuItem, Breadcrumbs} from "wfp-wss-ui-react";


const PageCreate = (props) => {
  return (

    <div className="content">
      <Breadcrumbs home="labels.home" nextLabels={["labels.create_a_request"]} nextLinks={[]}/>

      <section>
        <h3><i className="fa fa-fw fa-clock-o"></i><span className="fill-data"
                                                         data-content="labels.latest_forms_used"></span></h3>
        <div className="wfp-grid">
          <div className="fill-data-list wfp-grid wfp-u-1-1" data-content="latest_forms">


            <div className="wfp-u-1-2 wfp-grid wfp-form-description template">
              <div className="wfp-u-1-12"></div>
              <div className="wfp-u-10-12">
                <div className="heading fill-data-list-item" data-content="heading"></div>
                <div className="title"><a className="fill-data-list-item menuitem" data-target="content"
                                          data-action="page_my" data-content="ident" data-fill-attribute="data-action"
                                          href="#"><span className="fill-data-list-item" data-content="name"></span></a>
                </div>
                <div className="description fill-data-list-item" data-content="description"></div>
              </div>


            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wfp-form-list selected-az">

          <div className="tab-selector">
            <span className="fill-data" data-content="labels.order_by"></span><a href="#" className="active"><span
            className="fill-data" data-content="labels.az"></span></a> | <a href="#"><span className="fill-data"
                                                                                           data-content="labels.topics"/></a>
          </div>

          <div className="wfp-form-list--az">

            <h3><i className="fa fa-fw fa-align-left"></i><span className="fill-data"
                                                                data-content="labels.all_forms_az"></span></h3>

            <div className="wfp-grid">
              <div className="fill-data-list wfp-grid wfp-u-1-1" data-content="formslist_by_az">


                <div className="wfp-u-1-2 wfp-grid wfp-form-description template">
                  <div className="wfp-u-1-12"></div>
                  <div className="wfp-u-10-12">
                    <div className="heading fill-data-list-item" data-content="heading"></div>
                    <div className="title"><a className="fill-data-list-item menuitem" data-target="content"
                                              data-action="page_my" data-content="ident"
                                              data-fill-attribute="data-action" href="#"><span
                      className="fill-data-list-item" data-content="name"></span></a></div>
                    <div className="description fill-data-list-item" data-content="description"></div>
                  </div>
                </div>


              </div>
            </div>

          </div>

          <div className="wfp-form-list--topics">

            <h3><i className="fa fa-fw fa-align-left"></i><span className="fill-data"
                                                                data-content="labels.all_forms_topic"></span></h3>

            <div className="wfp-grid">
              <div className="fill-data-list wfp-grid wfp-u-1-1" data-content="formslist_by_topics">


                <div className="wfp-u-1-2 wfp-grid wfp-form-description template">
                  <div className="wfp-u-1-12"></div>
                  <div className="wfp-u-10-12">
                    <div className="heading fill-data-list-item" data-content="heading"></div>
                    <div className="title"><a className="fill-data-list-item menuitem" data-target="content"
                                              data-action="page_my" data-content="ident"
                                              data-fill-attribute="data-action" href="#"><span
                      className="fill-data-list-item" data-content="name"></span></a></div>
                    <div className="description fill-data-list-item" data-content="description"></div>
                  </div>
                </div>


              </div>
            </div>

          </div>

        </div>

      </section>

    </div>

  );
};


PageCreate.propTypes = {
  className: PropTypes.string
};

export default PageCreate;
