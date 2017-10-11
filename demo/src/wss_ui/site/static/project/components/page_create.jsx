import React from 'react';
import PropTypes from 'prop-types';

import {
  Breadcrumbs,
  Tabs, Tab
} from "wfp-ui-reactjs";

const GridHeading = props => {
  return (
    <h3><i className={"fa fa-fw " + props.className}></i><span>{props.headingText}</span></h3>
  )
}

const FormLink = (props) => {
  return (
    <div className="wfp-u-1-2 wfp-grid wfp-form-description">
      <div className="wfp-u-1-12"></div>
      <div className="wfp-u-10-12">
        <div className="heading">{props.content.heading}</div>
        <div className="title"><a className="menuitem" data-target="content"
                                  data-action="page_my" data-content={props.content.ident}
                                  data-fill-attribute="data-action"
                                  href={props.content.form_url}><span>{props.content.name}</span></a>
        </div>
        <div className="description">{props.content.description}</div>
      </div>
    </div>

  );
};

const Grid = props => {
  return (
    <div className="wfp-grid">
      <div className="wfp-grid wfp-u-1-1">

        {props.content_list.map((content, ind) => {
          return (<FormLink key={ind} content={content}/>)
        })
        }
      </div>
    </div>
  )
}

const PageCreate = (props) => {
  return (

    <div className="content wfp-wrapper">
      <Breadcrumbs home={labels.home} nextLabels={[labels.create_a_request]} nextLinks={[]}/>

      <section>
        <GridHeading className="fa-clock-o" headingText={labels.latest_forms_used}/>
        <Grid content_list={latest_forms}/>
      </section>
      <Tabs tabsTitle={labels.order_by}>
         <Tab tabLabel={labels.az}>

           <div className="wfp-form-list--az">
            <GridHeading className="fa-align-left" headingText={labels.all_forms_az}/>
            <Grid content_list={formslist_by_az}/>
           </div>
         </Tab>

          <Tab tabLabel={labels.topics}>
            <div>
            <GridHeading className="fa-align-left" headingText={labels.all_forms_topic}/>
            <Grid content_list={formslist_by_topics}/>
            </div>
          </Tab>
      </Tabs>

    </div>

  );
};


PageCreate.propTypes = {
  className: PropTypes.string
};

export default PageCreate;
