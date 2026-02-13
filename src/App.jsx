import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Camera from './components/Camera';
import RequestOffcanvas from './components/RequestOffcanvas';
import './App.css';

function App() {
  const [showRequest, setShowRequest] = useState(false);

  const handleCloseRequest = () => setShowRequest(false);
  const handleShowRequest = () => setShowRequest(true);

  let copyright = (
    <footer className="copyright-footer">
      &copy; Copyright {new Date().getFullYear()} 2200aldrich.com
    </footer>
  );

  return (
    <div class="app-main">
      <Container>
        <Row>
          <Col>
            <h1>2200 Aldrich Avenue South</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Minneapolis, Minnesota</h3>
          </Col>
          <Col>
            <Button variant="dark" onClick={handleShowRequest}>
              Request video
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>&nbsp;</Col>
        </Row>
        <Row>
          <Col>
            <Camera
              srcValue={'https://rtsp.me/embed/fbR65NiA/'}
              title={'Camera 1 - Looking South'}
            />
          </Col>
          <Col></Col>
          <Col>
            <Camera
              srcValue={'https://rtsp.me/embed/fbR65NiA/'}
              title={'Camera 2 - Looking North'}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <RequestOffcanvas
        showRequest={showRequest}
        onClose={() => handleCloseRequest()}
      />
      {copyright}
    </div>
  );
}

export default App;
