import Link from 'next/link';

import s from './AppLink.module.scss';

const AppLink = ({ children, href }) => {
  return (
    <Link href={href} className={s.app__link}>
      {children}
    </Link>
  );
};

export default AppLink;
