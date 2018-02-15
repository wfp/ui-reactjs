import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from 'react-modal';
import ModalTitle from './modaltitle';



class UniversalModal extends React.Component {

  constructor(props) {super(props);

    this.state = {
      modalIsOpen: false
    };
  }

  componentWillReceiveProps(newProps){
    if (newProps.modalIsOpen === true) {
      this.openModal();
    }
  }

  componentWillMount () {
    if (this.props.modalIsOpen === true) {
      this.openModal();
    }
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }
  
  closeModal = (e) => {
    if (e) { e.preventDefault(); }
    if (this.props.closeModal) {
      this.props.closeModal();
    }
    this.setState({ modalIsOpen: false });
  }

  render() {

    const overlayBaseClass = classNames({
      'wfp-modal__overlay' : true,
      'wfp-modal--small' : this.props.type === 'small',
      'wfp-modal--large' : this.props.type === 'large'
    }); 

    return(
      <span>
        {this.props.trigger &&
          <span>
          {React.cloneElement(this.props.trigger, {
           onClick: this.openModal,
           closeModal: this.closeModal
          })}
          </span>
        }
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          closeTimeoutMS={200}
          contentLabel="Share Modal"
          style={{}}
          className={{
            base: 'wfp-modal',
            afterOpen: 'wfp-modal__after--open',
            beforeClose: 'wfp-modal__before--close'
          }}
          overlayClassName={{
            base: overlayBaseClass,
            afterOpen: 'wfp-modal__overlay__after--open',
            beforeClose: 'wfp-modal__overlay__before--close'
          }}
        >
          <button className="wfp-modal__close" onClick={this.closeModal}>close</button>
          <div className="wfp-modal__inner">
              {React.cloneElement(this.props.children, {
                closeModal: this.closeModal
              })}
          </div>
        </Modal>
      </span>);
  }
}


UniversalModal.propTypes = {
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};


UniversalModal.defaultProps = {
  trigger: 'Trigger Buttons',
  children: 'Modal content'
};


export default UniversalModal;
