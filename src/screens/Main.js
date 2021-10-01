import { Button, Navbar, Container, Row, Col} from 'react-bootstrap';
import { onLightSwitch } from '../services/particle'
import '../styles/shared.css'

function Main() {

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
            <label>Downstairs Light 1</label>
          </Col>
        </Row>
        <Row xs>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('on','livingroom','1')}>On</Button>
          </Col>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('off','livingroom','1')}>Off</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <label>Downstairs Light 2</label>
          </Col>
        </Row>
        <Row xs>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('on','livingroom','2')}>On</Button>
          </Col>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('off','livingroom','2')}>Off</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <label>Downstairs Light 3</label>
          </Col>
        </Row>
        <Row xs>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('on','livingroom','3')}>On</Button>
          </Col>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('off','livingroom','3')}>Off</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <label>Downstairs Light 4</label>
          </Col>
        </Row>
        <Row xs>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('on','livingroom','4')}>On</Button>
          </Col>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('off','livingroom','4')}>Off</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <label>Downstairs Light 5</label>
          </Col>
        </Row>
        <Row xs>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('on','livingroom','5')}>On</Button>
          </Col>
          <Col>
            <Button className="w-100" variant="outline-secondary" onClick={() => onLightSwitch('off','livingroom','5')}>Off</Button>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export { Main };
