import {Container, Col, Row, Media, Badge, Dropdown ,DropdownButton, Forms, InputGroup, Images, Figure, Jumbotron, ListGroups, Modals, Breadcrumbs} from 'react-bootstrap';
import './style.css';
import Slide from './Carousel';

function BootstrapLayout(){
  return(
    <Container fluid id='Container'>
      <Row className='header'>
        <Col md={4}>
          <DropdownButton id="dropdown-basic-button" title="Choose Language">
            <Dropdown.Item href="#/action-1">English</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Japanese</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Bahasa Indonesia</Dropdown.Item>
          </DropdownButton>
        </Col>

        <Col md={{span:4,offset:4}} className='profile'>
          <Media>
            <img
              width={23}
              height={23}
              src='https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg'
              alt='login picture'
            />

            <Media.Body>
              <h5> Irwan Dharmawan </h5>
            </Media.Body>
          </Media>

        </Col>
      </Row>

      {/*Breadcrumbs*/}
      <Row>

      </Row>

      {/*Slideshow Row*/}
      <Row className='Slide'>
        <Slide />
      </Row>

    </Container>

  )
}


export default BootstrapLayout;
