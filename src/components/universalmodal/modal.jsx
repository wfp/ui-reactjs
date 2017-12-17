import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ModalTitle from './modaltitle';



class UniversalModal extends React.Component {

  constructor(props) {super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (newProps.trigger === "open") {
      this.openModal();
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }
  
  closeModal(e) {
    if (e) { e.preventDefault(); }
    this.setState({ modalIsOpen: false });
  }

  render() {
    return(
      <span>
        {this.props.trigger !== 'open' &&
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
            base: `wfp-modal__overlay wfp-modal--small  ${this.props.className}`,
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
  trigger: PropTypes.node,
  children: PropTypes.node
};

export default UniversalModal;
