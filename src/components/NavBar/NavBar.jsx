import Link from 'next/link';
import s from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={s.wrapper}>
      <Link href="/" className={s.link}>
        Main
      </Link>
      <Link href="/about" className={s.link}>
        About
      </Link>
      <Link href="/products" className={s.link}>
        Products
      </Link>
    </nav>
  );
};

export default NavBar;
