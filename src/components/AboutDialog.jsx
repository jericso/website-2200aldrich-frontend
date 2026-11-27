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
      <Modal.Body className="reading-text">
        <p>
          Our camera captures the West 22nd Street and South Aldrich Avenue
          intersection in Minneapolis, Minnesota. The camera is active from
          morning until night, 7 days a week. Camera footage is stored for 24
          hours.
        </p>
        <p>
          If you would like video from the last 24 hours, please submit a request
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
