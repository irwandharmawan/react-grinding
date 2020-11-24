import DaftarMakanan from '../lib/DaftarMakanan';
import Header from './Header';
import Footer from './Footer';

export default function MenuMakanan(props){
  return(
    <div>
      <Header />
      <table align='center' style={{marginTop:'50px',marginBottom:'50px'}}>
        <tbody>
          <tr>
            {DaftarMakanan.map((item,index)=>{
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
