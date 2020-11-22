import MenuMakanan from '../Page/MenuMakanan';
import React from 'react';

class ListMakanan extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Food:"",
      Amount:0,
      Pesan:false
    };
    this.ChooseFood=this.ChooseFood.bind(this);
    this.cancelOrder=this.cancelOrder.bind(this);
  }

  ChooseFood(e){
    let food=e.target.value;
    this.setState({
      Food:food,
      Pesan:true
    })
  }

  changeAmount(e){
    let amount=e.target.value;
    this.setState({
      Amount:amount})
  }

  cancelOrder(){
    this.setState({
      Food:"",
      Amount:0,
      Pesan:false
    })
  }




  render(){
    return(
      <div align='center'>
        <h2> Please Choose your food  </h2>
        <table>
          <tbody>
            <tr>
              <td align='center'><MenuMakanan source='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg' />
              <button type='button' onClick={e=>this.ChooseFood(e)} value='Nasi Padang'>Choose</button></td>
              <td align='center'><MenuMakanan source='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png' />
              <button type='button' onClick={e=>this.ChooseFood(e)} value='Sate'>Choose</button></td>
              <td align='center'><MenuMakanan source='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png' />
              <button type='button' onClick={e=>this.ChooseFood(e)} value='Soto Lamongan'>Choose</button></td>
              <td align='center'><MenuMakanan source='https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png' />
              <button type='button' onClick={e=>this.ChooseFood(e)} value='Nasi Kentut'>Choose</button></td>
              <td align='center'><MenuMakanan source='https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg' />
              <button type='button' onClick={e=>this.ChooseFood(e)} value='Nasi Tumpeng Mini'>Choose</button></td>
            </tr>
          </tbody>
        </table>


        <input type='text' value={this.state.Food} />
        <input type='number' value={this.state.Amount} onChange={(e)=>this.changeAmount(e)} />
        <button type='button' onClick={this.cancelOrder}> Cancel All Order </button>

        {this.state.Pesan === true ? (
          <div>
            <p>Your food order : {this.state.Food}</p>
            <p>Total Amount : {this.state.Amount}</p>
          </div>
          )
          :
          (
            <p>Anda belum memesan</p>
          )}

      </div>
    );
  }
}

export default ListMakanan;
