import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../configureStore';
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import { RenderStatic } from '../../src/components/forms/inputs';

const info = `
The RenderStatic Input is a field to show plain view-only content.
`;

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .add('Render Static',

    withInfo(info)(() => {
      const data = text('data', '2323');
      const unit = text('unit', 'Musd');
      const labelKey = text('labelKey', 'display_name');
      const labelPosition = text('labelPosition', 'horizontal');
      return (
        
        <RenderStatic
              label="Staff Member"
              labelPosition = {labelPosition}
              data={data}
              unit={unit}
          />
        
      )
    })
  );
