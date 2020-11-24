import DaftarMinuman from '../lib/DaftarMinuman';
import Header from './Header';
import Footer from './Footer';

export default function MenuMinuman(props){
  return(
    <div>
      <Header />
      <table align='center' style={{marginTop:'50px',marginBottom:'50px'}}>
        <tbody>
          <tr>
            {DaftarMinuman.map((item,index)=>{
              return(
                <td><img src={item.Source} alt={item.Name} width='150' height='80'/>
                <p>{item.Name}</p>
                <p>{item.Price}</p>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>

      <Footer />
    </div>
  );
}
