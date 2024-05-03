import NavBar from '../NavBar/NavBar';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.wrapper}>
      <p>LOGO</p>
      <NavBar />
    </header>
  );
};

export default Header;
