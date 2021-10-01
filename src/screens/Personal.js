import { Button, Navbar, Container, Row, Col} from 'react-bootstrap';
import '../styles/shared.css'
import { onLightSwitch } from '../services/particle'

function Personal() {

  return (
    <div className="Personal">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Mos Eisley Cantina - Bedroom</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <label>Bedroom Light</label>
          </Col>
        </Row>
        <Row xs>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('on','bedroom','1')}>On</Button>
          </Col>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('off','bedroom','1')}>Off</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <label>Left Night Table Light</label>
          </Col>
        </Row>
        <Row xs>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('on','bedroom','2')}>On</Button>
          </Col>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('off','bedroom','2')}>Off</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <label>Right Night Table Light</label>
          </Col>
        </Row>
        <Row xs>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('on','bedroom','3')}>On</Button>
          </Col>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('off','bedroom','3')}>Off</Button>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <label>Bedtime</label>
          </Col>
        </Row>
        <Row xs>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('off','bedroom','999')}>Off</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export { Personal };
