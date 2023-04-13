import React from "react";
import { Modal, Form } from "react-bootstrap";

function ConfirmModal({
  showConfirmationModal,
  setShowConfirmationModal,
  handleYesButton,
  message,
}) {
  
  return (
    <Modal
      show={showConfirmationModal}
      onHide={() => setShowConfirmationModal(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="confirmBoxHeader">
        <h6>Confirmation!</h6>
        <button
          type="button"
          class="close"
          aria-label="Close"
          onClick={() => setShowConfirmationModal(false)}
        >
          x
        </button>
      </Modal.Header>

      <Modal.Body style={{ paddingTop: "10px"}}>
        <Form>
          <div className="checkBoxMessage">Are you sure You want to sign-out?</div>
          <div className="col-md-12 text-center" style={{paddingTop:"20px"}}>
            <button
              type="button"
              style={{ fontFamily: "Calibri" }}
              class="btn btn-primary "
              onClick={handleYesButton}
            >
              Yes
            </button>
            {' '}
            <button
              type="button"
              style={{ fontFamily: "Calibri" }}
              class="btn btn-primary"
              aria-label="Close"
              onClick={() => setShowConfirmationModal(false)}
            >
              No
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ConfirmModal;
