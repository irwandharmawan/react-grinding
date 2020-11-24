//still need improvement

import Header from './Header';
import Footer from './Footer';
import React, { Component } from 'react';
import '../Style/Kontak.css'

class Kontak extends Component{
  constructor(){
    super();
    this.state={
      Name:'',
      Email:'',
      Phone:'',
      Text:''
    };
    this.SubmitHandler=this.SubmitHandler.bind(this);
    this.inputHandler=this.inputHandler.bind(this);

  }

  SubmitHandler(e){
    e.preventDefault();
    alert('Form Kamu telah terkirim !')
  }

  inputHandler(value,e){
    this.setState({[value]:e.target.value});
  }

  render(){
    return(
      <div id='Form'>
        <Header />
        <h1> Kirimkan Pertanyaan, kritik dan saran kamu disini </h1>
        <form onSubmit={this.SubmitHandler} id='usrForm'>
          <input type='text' name='Name Input' value={this.state.Name} onChange={e=>this.inputHandler('Name',e)} />
          <input type='email' name='Name Input' value={this.state.Email} onChange={e=>this.inputHandler('Email',e)} />
          <input type='tel' name='Name Input' value={this.state.Phone} onChange={e=>this.inputHandler('Phone',e)} />
          <textarea cols='50' rows='4' form='usrForm' value={this.state.Text} onChange={e=>this.inputHandler('Text',e)} />
          <input type='submit' />
        </form>
        <Footer />
      </div>
    )
  }
}

export default Kontak;
