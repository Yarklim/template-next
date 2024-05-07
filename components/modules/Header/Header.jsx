import Languages from '../Languages/Languages';
import NavBar from '../NavBar/NavBar';
import s from './Header.module.scss';

const Header = ({ dict }) => {
  return (
    <header className={s.wrapper}>
      <p>{dict.header.logo}</p>
      <NavBar dict={dict} />
      <Languages />
    </header>
  );
};

export default Header;
