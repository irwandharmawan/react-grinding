import React from 'react';

function Alert(){
  function ShowAlert(){
    alert('This Website is under maintenance');
  }

  return(
    <div align='center'>
      <a href='/' onClick={ShowAlert}>Check the Website Status</a>
    </div>
  )
}


export default Alert;
