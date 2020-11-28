import Data from './PlayersData.js';
import {ProgressBar,Pagination} from 'react-bootstrap';
import Example from './Popping.js'

function MainTable(){
  return(
    <div>
    <table style={{marginTop:'20px'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Player Name</th>
          <th>Team</th>
          <th>Transfer</th>
          <th>Transfer Progress</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((item,index)=>{
          return(
            <tr>
              <td>{index+1}</td>
              <td>{item.Name}</td>
              <td>{item.Team}</td>
              <td>{item.Transfer}</td>
              <td><ProgressBar animated striped now={item.Progress} label={`${item.Progress}%`}></ProgressBar></td>
            </tr>
          );
        })}
      </tbody>
    </table>

    <Pagination style={{marginTop:'20px'}}>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>

    <Example />

    </div>
  )};
export default MainTable;
