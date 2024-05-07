'use client';

import clsx from 'clsx';
import s from './products.module.scss';

const ProductsError = () => {
  return <div className={clsx('container', s.error)}>Sorry, no products for you</div>;
};

export default ProductsError;
