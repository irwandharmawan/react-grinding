import {Container, Col, Row, Carousel, Dropdown ,DropdownButton, Forms, InputGroup, Images, Figure, Jumbotron, ListGroups, Modals} from 'react-bootstrap';
import Data from './Data'

function BootstrapLayout(){
  return(
    <Container>
      <Row>
        <Col>
          <DropdownButton id="dropdown-basic-button" title="Choose Language">
            <Dropdown.Item href="#/action-1">English</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Japanese</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Bahasa Indonesia</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </Container>

    <Container>
      <p>hai </p>
    </Container>

  )
}


export default BootstrapLayout;
