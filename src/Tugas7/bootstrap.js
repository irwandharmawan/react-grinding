import { Container, Col, Row , Badge, Media, Button, ButtonGroup, Card,CardGroup, Breadcrumb} from 'react-bootstrap';
import Data from './Data.js'


export default function BootstrapLayout(){
  return(
    <Container style={{marginTop:'20px'}}>
      <Row>
      <Col>
        <h4><Badge variant='secondary'>Website React Bootstrap</Badge></h4>
      </Col>
      <Col md='auto'>
          <ButtonGroup>
            <Button variant="primary" style={{fontSize:'10pt'}}>
            Notifications <Badge variant="light">9</Badge>
            <span className="sr-only">unread messages</span>
            </Button>
            <Button variant="primary" style={{fontSize:'10pt'}}>
            Message<Badge variant="light">19</Badge>
            <span className="sr-only">unread messages</span>
            </Button>
          </ButtonGroup>
        </Col>
        <Col xs lg='2'>
          <Media>
          <img height={30} width={30}className='mr-3' alt='User Icon' src='https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg' />
          <Media.Body>
            <p style={{fontSize:'10pt'}}> Irwan Dharmawan </p>
          </Media.Body>
          </Media>
        </Col>

      </Row>

      {/**/}
      <Row style={{marginTop:'20px'}}>
      {/*two first column just for layouting*/}
      <Col></Col>
      <Col></Col>
      <Col>
      <Breadcrumb align='left'>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      </Col>
      </Row>

      <Row>
        <CardGroup>
        {Data.map((item,index)=>{
          return(
            <Col>
              <Card style={{ width: 'auto' }}>
                <Card.Img variant="top" src={item.Source} />
                <Card.Body>
                  <Card.Title>{item.Title}</Card.Title>
                  <Card.Text>
                    {item.Description}
                  </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
        </CardGroup>
      </Row>
      </Container>


  )
}
