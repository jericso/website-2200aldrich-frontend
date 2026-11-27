import { useRef, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import clipRequestService from '../services/clipRequest';

const CLIP_MINUTES = 10;
const WINDOW_HOURS = 24;
const MINUTE_MS = 60 * 1000;

// Format a Date as the local "YYYY-MM-DDTHH:mm" string a datetime-local input expects.
const toLocalInputValue = (date) => {
  const pad = (n) => String(n).padStart(2, '0');
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
    `T${pad(date.getHours())}:${pad(date.getMinutes())}`
  );
};

// The clip must start within the last 24 hours and finish (start + 10 min) by now.
// The picker works in whole minutes, so round the bounds inward to whole minutes;
// otherwise the picker's earliest minute could fall just outside the window.
const getWindow = () => {
  const now = Date.now();
  const earliestMs = now - WINDOW_HOURS * 60 * MINUTE_MS;
  const latestMs = now - CLIP_MINUTES * MINUTE_MS;
  return {
    earliest: new Date(Math.ceil(earliestMs / MINUTE_MS) * MINUTE_MS),
    latest: new Date(Math.floor(latestMs / MINUTE_MS) * MINUTE_MS),
  };
};

const validate = ({ email, startTime }) => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return 'Please enter a valid email address.';
  }
  if (!startTime) {
    return 'Please choose a start date and time.';
  }
  const start = new Date(startTime);
  if (Number.isNaN(start.getTime())) {
    return 'Please choose a valid start date and time.';
  }
  const { earliest, latest } = getWindow();
  if (start < earliest) {
    return `Video is only available from the previous ${WINDOW_HOURS} hours.`;
  }
  if (start > latest) {
    return `The start time must be at least ${CLIP_MINUTES} minutes ago so the full clip has been recorded.`;
  }
  return null;
};

const RequestOffcanvas = ({ showRequest, onClose }) => {
  const [email, setEmail] = useState('');
  const [startTime, setStartTime] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  // Incremented each time the panel closes, so a request still in flight when
  // the panel closes doesn't show its result the next time it opens.
  const sessionRef = useRef(0);

  const { earliest, latest } = getWindow();

  const resetForm = () => {
    setEmail('');
    setStartTime('');
    setError(null);
    setSuccess(null);
    // `submitting` is left alone: if a request is in flight, the button stays
    // disabled until it finishes, so it can't be sent twice.
  };

  const handleClose = () => {
    sessionRef.current += 1;
    resetForm();
    onClose();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const validationError = validate({ email, startTime });
    if (validationError) {
      setError(validationError);
      return;
    }

    // datetime-local values are in the user's local time; send UTC ISO to the server.
    const start = new Date(startTime);
    const session = sessionRef.current;

    setSubmitting(true);
    try {
      await clipRequestService.create({
        email: email.trim(),
        startTime: start.toISOString(),
      });

      if (session !== sessionRef.current) return; // panel was closed meanwhile

      const end = new Date(start.getTime() + CLIP_MINUTES * MINUTE_MS);
      setSuccess(
        `Request received for ${start.toLocaleString()} – ${end.toLocaleTimeString()}. ` +
          `The clip will be sent to ${email.trim()}.`
      );
      setEmail('');
      setStartTime('');
    } catch (err) {
      if (session !== sessionRef.current) return; // panel was closed meanwhile
      setError(err.response?.data?.error || 'Unable to submit request.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Offcanvas
      show={showRequest}
      onHide={handleClose}
      placement="end"
      backdrop="static"
      className="_2200aldrich-offcanvas"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Request video</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>
          Request a {CLIP_MINUTES}-minute clip of camera footage. The clip must
          be from within the previous {WINDOW_HOURS} hours.
        </p>

        {error && (
          <Alert variant="danger" onClose={() => setError(null)} dismissible>
            {error}
          </Alert>
        )}
        {success && (
          <Alert variant="success" onClose={() => setSuccess(null)} dismissible>
            {success}
          </Alert>
        )}

        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="clipRequestEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={254}
              autoComplete="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="clipRequestStartTime">
            <Form.Label>Start date and time</Form.Label>
            <Form.Control
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              min={toLocalInputValue(earliest)}
              max={toLocalInputValue(latest)}
              required
            />
            <Form.Text muted>
              Between {earliest.toLocaleString()} and {latest.toLocaleString()}{' '}
              (your local time).
            </Form.Text>
          </Form.Group>

          <Button variant="dark" type="submit" disabled={submitting}>
            {submitting ? (
              <>
                <Spinner as="span" animation="border" size="sm" className="me-2" />
                Submitting…
              </>
            ) : (
              'Submit request'
            )}
          </Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default RequestOffcanvas;
