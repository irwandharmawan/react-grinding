import '../Style/Header.css';
import {Link} from 'react-router-dom';


function Header(){
  return(
    <div align='center'>
      <ul>
        <li><Link to='/' class='link'>Home</Link></li>
        <li><Link to='/Makanan' class='link'>Menu Makanan</Link></li>
        <li><Link to='/Minuman' class='link'>Menu Minuman</Link></li>
        <li><Link to='/Kontak' class='link'>Kontak</Link></li>
      </ul>
    </div>
  )
}

export default Header;
