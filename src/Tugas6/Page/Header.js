import '../Style/Header';
import {Link} from 'react-router-dom';


function Header(){
  return(
    <div align='center'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Makanan'>Menu Makanan</Link></li>
        <li><Link to='/Minuman'>Menu Minuman</Link></li>
        <li><Link to='/Kontak'>Kontak</Link></li>
      </ul>
    </div>
  )
}

export default Header;
