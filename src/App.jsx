import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Camera from './components/Camera';
import AboutDialog from './components/AboutDialog';
import RequestOffcanvas from './components/RequestOffcanvas';
import './App.css';

function App() {
  const [showRequest, setShowRequest] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);
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
            <Button variant="dark" onClick={handleShowAbout}>
              About
            </Button>
            &nbsp;&nbsp;
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
              srcValue={'http://localhost:8889/proxied/'}
              title={'Camera 1 - Looking North'}
            />
          </Col>
        </Row>
      </Container>
      <AboutDialog showAbout={showAbout} onClose={() => handleCloseAbout()} />
      <RequestOffcanvas
        showRequest={showRequest}
        onClose={() => handleCloseRequest()}
      />
      {copyright}
    </div>
  );
}

export default App;
