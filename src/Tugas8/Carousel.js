import {Carousel} from 'react-bootstrap';
import Data from './SlideData/Data';


export default function Slide(){
  return(
    <div>
  <Carousel>
    {Data.map((item,index)=>{
      return(
        <Carousel.Item align='center'>
          <img
            src={item.Source}
            alt='Slides'
            width='80%'
            height='500vh'
          />
          <Carousel.Caption>
            <h3>{item.Title}</h3>
            <p>{item.Description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })}
  </Carousel>
  </div>
)
}
