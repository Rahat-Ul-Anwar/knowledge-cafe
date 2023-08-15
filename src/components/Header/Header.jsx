import './Header.css';
import img from '../../images/pexels-photo-4865522.webp'

const Header = () => {
  return (
    <nav className='menu'>
      <h1 className='title'>Knowledge cafe</h1>
      <img src={img} alt="" />
    </nav>
  );
};

export default Header;
