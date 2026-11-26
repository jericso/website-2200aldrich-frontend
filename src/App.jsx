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

  const copyright = (
    <footer className="copyright-footer">
      &copy; Copyright {new Date().getFullYear()} 2200aldrich.com
    </footer>
  );

  return (
    <div className="app-main">
      <Container>
        <Row>
          <Col>
            <h1>
              {/* Abbreviated on phones so the title fits on one line */}
              <span className="d-none d-sm-inline">2200 Aldrich Avenue South</span>
              <span className="d-sm-none">2200 Aldrich Ave S</span>
            </h1>
          </Col>
        </Row>
        <Row className="align-items-center gy-2 mb-3">
          <Col xs={12}>
            <h3 className="mb-0">Minneapolis, Minnesota</h3>
          </Col>
          <Col xs={12} className="d-flex gap-2">
            {/* Buttons share the full width on phones, natural width on larger screens */}
            <Button
              variant="dark"
              className="flex-fill flex-md-grow-0"
              onClick={handleShowAbout}
            >
              About
            </Button>
            <Button
              variant="dark"
              className="flex-fill flex-md-grow-0"
              onClick={handleShowRequest}
            >
              Request video
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Camera
              srcValue={'https://streams.2200aldrich.com/aldrich-north/'}
              title={'Camera 1 - Looking North'}
            />
          </Col>
        </Row>
      </Container>
      <AboutDialog showAbout={showAbout} onClose={handleCloseAbout} />
      <RequestOffcanvas
        showRequest={showRequest}
        onClose={handleCloseRequest}
      />
      {copyright}
    </div>
  );
}

export default App;
