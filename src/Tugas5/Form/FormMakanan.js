import DaftarMakanan from '../Lib/DaftarMakanan';
import React, { Component } from 'react';

class FormMakanan extends Component{
  constructor(props){
    super(props);
    this.state={
      Amount:0,
      FoodChoice:''
    }
    this.SubmitForm=this.SubmitForm.bind(this);
    this.InputHandler=this.InputHandler.bind(this);

    this.inputRef=React.createRef();
  }

  SubmitForm(e){
    e.preventDefault()
    if(this.state.FoodChoice ==='' && this.state.Amount<=0){
      alert('Kamu belum memesan apapun')
    }
    else if (this.state.FoodChoice !=='' && this.state.Amount<=0) {
      alert('Silahkan masukkan Jumlah pesanan')
    }
    else if (this.state.FoodChoice ==='' && this.state.Amount>0) {
      alert('Makanan Kamu belum ada')
    }
    else{alert('Pesanan Anda Adalah : '+this.state.FoodChoice+' | Jumlah pesanan : '+this.state.FoodChoice)}

    this.setState({
      Amount:0,
      FoodChoice:''
    });
    this.inputRef.current.focus();
  }

  InputHandler(value,e){
    this.setState({[value]:e.target.value})

  }

  render(){
    return(
      <div>
        {DaftarMakanan.map((item,index)=>{
          return(
            <p>{item.Nama} | Harga {item.Harga}</p>
          );
        })}

        <div align='center'>
          <form onSubmit={this.SubmitForm}>
            <input type='text' ref={this.inputRef} value={this.state.FoodChoice} onChange={e=>this.InputHandler('FoodChoice',e)} />
            <input type='number' value={this.state.Amount} onChange={e=>this.InputHandler('Amount',e)} />
            <input type='submit'/>
          </form>
        </div>

      </div>

    )
  }
}

export default FormMakanan;
