import React from 'react';

class Text extends React.Component{
  constructor(props){
    super(props);
    this.state={
      message:'Hallo There',
      catch:this.props.list
    }
    this.MessageHandle=this.MessageHandle.bind(this);
    this.changeValue=this.changeValue.bind(this);
    this.changeHandle=this.changeHandle.bind(this);
  }

  MessageHandle(value,e){
    e.preventDefault();
    if(value==='' || value===undefined){
        alert(this.state.message);
    }
    else{
      alert(value);
    }
  }

  changeValue(e){
    e.preventDefault();
    this.setState((state,props)=>{
      return{message:'value is changed'};
    });
  }

  changeHandle(e){
    this.setState((state,props)=>{
      return{message:e.target.value}
    });
  }

  render(){
    return(
      <div>
        <p>{this.state.message}</p>
        <p>{this.state.catch}</p>
        <a href='/' onClick={(e)=>this.MessageHandle('',e)}>Click to see message</a>
        <a href='/' onClick={(e)=>this.changeValue(e)}> Change The Value </a>
        <input type='text' onChange={this.changeHandle} placeholder='dont type !!!' />
      </div>
    )
  }
}

export default Text;
