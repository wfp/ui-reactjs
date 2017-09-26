import React from "react";
import ReactDOM from "react-dom";

import PageCreate from './components/page_create';

(function () {

  var page_create = function() {

    var urls = {};

    let setup = urlsContextData => {
      urls = urlsContextData;
      ReactDOM.render(<PageCreate urls={urls} />, document.getElementById('id_create'));
    };

	  return {urls: urls, setup: setup};
  };

  if (!window.page_create) {
    window.page_create = page_create();
  }
}());
