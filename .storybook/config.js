import { configure } from '@storybook/react';

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