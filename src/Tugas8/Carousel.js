import {Carousel,Container} from 'react-bootstrap';
import Data from './SlideData/Data';


export default function Slide(){
  return(
  <Container>
  <Carousel>
    {Data.map((item,index)=>{
      return(
        <Carousel.Item align='center'>
          <img
            src={item.Source}
            alt='Slides'
            width='100%'
          />
          <Carousel.Caption>
            <h3>{item.Title}</h3>
            <p>{item.Description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })}
  </Carousel>
  </Container>
)
}
