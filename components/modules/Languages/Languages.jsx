import Link from 'next/link';

import s from './Languages.module.scss';

const Languages = () => {
  return (
    <div className={s.wrapper}>
      <Link href="/uk">
        <p className={s.langItem}>UA</p>
      </Link>
      <Link href="/en">
        <p className={s.langItem}>EN</p>
      </Link>
    </div>
  );
};

export default Languages;
