import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App'
import MenuMakanan from './Tugas6/Page/MenuMakanan';
import MenuMinuman from './Tugas/Page/MenuMinuman';
import Kontak from './Tugas6/Page/Kontak.js';


const AppRouter=()=>{
  return(
  <BrowserRouter>
  <div>
    <Route path='/' exact component={App} />
    <Route path='/Makanan' exact component={MenuMakanan} />
    <Route path='/Minuman' exact component={MenuMinuman} />
    <Route path='/Kontak' exact component={Kontak} />
  </div>
  </BrowserRouter>)
};

export default AppRouter;
