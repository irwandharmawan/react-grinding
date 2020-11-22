import React from 'react';

class MenuMakanan extends React.Component{
  constructor(props){
    super(props);
    this.state={
      source:this.props.source
    };
  }

  render(){
    return(
      <div>
        <img src={this.state.source} alt='Foods' width='150' />
      </div>
    )
  }
}

export default MenuMakanan;
