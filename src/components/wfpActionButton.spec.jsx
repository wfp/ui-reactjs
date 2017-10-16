import React from 'react';
import TestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import WfpActionButton from './wfpActionButton';


test('Click open other actions menu', () => {
  const label = 'MyAction';
  const action = 'action1';
  const actionWidget = shallow(
    <WfpActionButton label={label} action={action} onActionClick={() => {}} />
  );

  expect(actionWidget.find('button')).toHaveLength(1);

  expect(actionWidget.find('button').text()).toEqual(label);

  actionWidget.find('button').simulate('click');
});
