import {Form, Button, FormControl} from 'react-bootstrap';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';


function NavigationBar(){
  return(
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Sport Access</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#news">News</Nav.Link>
      <Nav.Link href="#live-scores">Live Scores</Nav.Link>
      <NavDropdown title='League and Championship' id='nav-dropdown'>
        <NavDropdown.Item href='#england-League'>England League</NavDropdown.Item>
        <NavDropdown.Item href='#serieA'>Series A</NavDropdown.Item>
        <NavDropdown.Item href='#england-League'>England League</NavDropdown.Item>
        <NavDropdown.Item href='#primera-division'>Primera Division</NavDropdown.Item>
        <NavDropdown.Item href='#bundes-league'>Bundes League</NavDropdown.Item>
        <NavDropdown.Item href='#indonesian-league'>1st League of Indonesia</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href='#player-transfer'>Transfers</Nav.Link>
      <Nav.Link href='#teams'>Teams</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  )
}

export default NavigationBar;
