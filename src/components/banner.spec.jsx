import React from 'react';
import TestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import Banner from './banner';


test('Banner renders correctly', () => {
  const tree = renderer.create(
    <Banner>
      Text inside
    </Banner>
  );

  expect(tree).toMatchSnapshot();
});

