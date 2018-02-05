import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import UniversalModal from '../src/components/universalmodal/modal';
import UniversalModalTitle from '../src/components/universalmodal/modaltitle';
import UniversalModalContent from '../src/components/universalmodal/modalcontent';
import UniversalModalFooter from '../src/components/universalmodal/modalfooter';
import WfpActionButton from '../src/components/wfpActionButton';

const DefaultDialogContent = (props) => {
  return (
      <div>
          <UniversalModalTitle>
              Title
          </UniversalModalTitle>
          <UniversalModalContent>
              <p>Are you sure you wish to confirm this action?</p>
              <UniversalModalFooter>
                  <a href="#" className="" onClick={props.closeModal}>Cancel</a>
                  <WfpActionButton
                      label="Do something"
                      action={props.closeModal}
                      closeModal={props.closeModal}
                      onActionClick={props.closeModal}
                  />
              </UniversalModalFooter>
          </UniversalModalContent>
      </div>
  )
}

storiesOf('Modal Dialog')
  .addDecorator(withKnobs)
  	.add('Default Modal Dialog',
    	 withInfo({
      styles: {
       
      },
      text: 'The Default Modal Dialog used for Confirmations or Yes/no Dialogs'
    })(() => {
		const label = text('Button label', 'Open Modal');
		const className = text('Modal class', 'wfp-modal--small');
	    return (
	      	<UniversalModal
		       	className="wfp-modal--small"
		       	trigger={<WfpActionButton label={label} />}>
		        	<DefaultDialogContent />
		    </UniversalModal>
		)
	}
    )
  )