import Offcanvas from 'react-bootstrap/Offcanvas';

const RequestOffcanvas = ({ showRequest, onClose }) => {
  return (
    <Offcanvas
      show={showRequest}
      onHide={onClose}
      placement="end"
      backdrop="static"
      className="_2200aldrich-offcanvas"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Request video</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Submit form to receive camera footage for a particular date/time range.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default RequestOffcanvas;
