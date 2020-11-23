import React from 'react';
import DaftarMakanan from '../Lib/DaftarMakanan';

class MenuMakanan extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div align='center'>
        <table>
          <tbody>
            <tr>
              {DaftarMakanan.map((item,index)=>{
                return(
                <td align='center'><img src={item.Gambar} width='150' height='100' />
                <p>{item.Nama}</p>
                <p>{item.Harga}</p>
                </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default MenuMakanan;
