import {Tabs,Tab,Container} from 'react-bootstrap';
import MainTable from'./MainTable';

const style1 = {
    display:'flex',
    justifyContent:'space-between',
    width: '100%'
}

const style2 = {
    textAlign: 'center',
}

function Series(){
  return(
    <Container>
    <Tabs defaultActiveKey="all-transfer" id="uncontrolled-tab-example" style={style1}>
      <Tab eventKey="all-transfer" title="All Transfer">
        <MainTable />
      </Tab>
      <Tab eventKey="england-league" title="England League">
      </Tab>
      <Tab eventKey="Series-A" title="Series A" disabled>
      </Tab>
      <Tab eventKey="Primera-Division" title="Primera Division" disabled>
      </Tab>
      <Tab eventKey="Bundes-League" title="Bundes League" disabled>
      </Tab>
      <Tab eventKey="Indonesia-League" title="Indonesia League" disabled>
      </Tab>
    </Tabs>
    </Container>
  )}


export default Series;
