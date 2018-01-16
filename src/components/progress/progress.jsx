import React from 'react';
import PropTypes from 'prop-types';
import ProgressStep from './progressStep';
import ProgressItem from './progressItem';


const progressData = [
    {
        "title": "Submitted",
        "items": [
            {
                "user": {
                    "username": "fabiola.diblasi",
                    "last_name": "DIBLASI",
                    "text": "DIBLASI Fabiola (Mrs)",
                    "org_unit_name": "RMBP Project Budget &Programming Service",
                    "position_title": "Programme Assistant",  
                    "id": "i00392670",
                    "first_name": "Fabiola",
                    "display_name": "DIBLASI Fabiola",
                    "extension": "2931",
                    "enabled": "true",
                    "indexno": "00392670",
                    "email": "fabiola.diblasi@wfp.org"
                },
                "action": "action",
                "timestamp": "2017-12-22T08:17:30.406292Z",
                "message": "Here is a message"
            },
            {
                "user": {
                    "username": "fabiola.diblasi",
                    "last_name": "DIBLASI",
                    "text": "DIBLASI Fabiola (Mrs)",
                    "org_unit_name": "RMBP Project Budget &Programming Service",
                    "position_title": "Programme Assistant",  
                    "id": "i00392670",
                    "first_name": "Fabiola",
                    "display_name": "DIBLASI Fabiola",
                    "extension": "2931",
                    "enabled": "true",
                    "indexno": "00392670",
                    "email": "fabiola.diblasi@wfp.org"
                },
                "active": true,
                "action": "action",
                "timestamp": "2017-12-22T08:17:30.406292Z",
                "message": "Here is a message"
            }
        ]
    }
];

const Progress = props => {
    return (
        <div>
            {progressData.map(function(el, index){
                return <ProgressStep {...el} />;
            })}
        </div>
    );
};

Progress.propTypes = {
  className: Progress.string
};

export default Progress;