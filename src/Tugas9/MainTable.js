import Data from './PlayersData.js';
import {ProgressBar} from 'react-bootstrap';

const styleCol={
  paddingRight:'30px'
}

function MainTable(){
  return(
    <div>
    <table>
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
    </div>
  )};
export default MainTable;
