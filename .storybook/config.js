import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

//addDecorator(withKnobs);

import { setDefaults } from '@storybook/addon-info';
// addon-info
setDefaults({
  inline: true
});

import { injectGlobal } from 'styled-components'
import styles from '../lib/styles/main.css'

import configCss from './config.css'

injectGlobal`${styles}`




// Option defaults:
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'WFP React UI',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: '#'
});
