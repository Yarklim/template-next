import { getProductById } from '@/api/api';

import clsx from 'clsx';
import s from './ProductPage.module.scss';

const ProductPage = async ({ params }) => {
  const { productName } = params;
  const product = await getProductById(productName);

  return (
    <section className={clsx('container', s.wrapper)}>
      <div className={s.productCard}>
        <h1>{product?.brand}</h1>
        <p>{product?.model}</p>
        <p>{product?.category}</p>
      </div>
    </section>
  );
};

export default ProductPage;
