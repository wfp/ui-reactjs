import React from "react";
import ReactDOM from "react-dom";

import {Header} from "wfp-wss-ui-react";

let message = () => console.log("Babel integrated as well!!");
message();

ReactDOM.render(<Header className="myclass">Library integration</Header>,
  document.getElementById('app'));
