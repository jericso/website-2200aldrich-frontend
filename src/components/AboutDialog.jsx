import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AboutDialog = ({ showAbout, onClose }) => {
  return (
    <Modal show={showAbout} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>2200 Aldrich Avenue South</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Our cameras caputre the 2200 block of Aldrich Avnenue South in
          Minneapolis, Minnesota. The cameras are active from 7:00 am CST until 6:00 pm
          CST, 7 days a week. Camera footage is stored for 14 days to cloud storage.
        </p>
        <p>
          If you would like video from the last 14 days, please submit a request
          by clicking the <i>Request video</i> button.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AboutDialog;
