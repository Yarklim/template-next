import Link from 'next/link';
import s from './NavBar.module.scss';

const NavBar = ({ dict }) => {
  return (
    <nav className={s.wrapper}>
      <Link href="/" className={s.link}>
        {dict.header.navBar.home}
      </Link>
      <Link href="/about" className={s.link}>
        {dict.header.navBar.about}
      </Link>
      <Link href="/products" className={s.link}>
        {dict.header.navBar.products}
      </Link>
    </nav>
  );
};

export default NavBar;
