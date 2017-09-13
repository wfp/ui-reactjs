import React from "react";
import ReactDOM from "react-dom";

import Home from './components/index';


(function () {

  var index = function() {

    var urls = {};

    let setup = urlsContextData => {
      urls = urlsContextData;
      ReactDOM.render(<Home urls={urls}/>,
        document.getElementById('id_home'));
    };

	  return {urls: urls, setup: setup};
  };

  if (!window.index) {
    window.index = index();
  }
}());
