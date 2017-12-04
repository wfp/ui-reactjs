import React from 'react';
import renderer from 'react-test-renderer';

import UniversalModal from './modal';
import UniversalModalTitle from './modaltitle';
import UniversalModalContent from './modalcontent';
import UniversalModalFooter from './modalfooter';

test('Modal Display', () => {

	const Trigger = (props) => {
	  return (
	      <div>
	          Trigger
	      </div>
	  )
	}

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
	                      label={props.action.action_info.label}
	                      action={props.action.transition}
	                      closeModal={props.closeModal}
	                      onActionClick={props.onActionClick}
	                  />
	              </UniversalModalFooter>
	          </UniversalModalContent>
	      </div>
	  )
	}

    const tree = renderer.create(
	     <UniversalModal
	       className="wfp-modal--small"
	       trigger={<Trigger />}>
	        <DefaultDialogContent />
	    </UniversalModal>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
