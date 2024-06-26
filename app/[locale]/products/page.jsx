import { getAllProducts } from '@/api/api';
import AppLink from '@/components/UI/AppLink/AppLink';

import { getDictionary } from '../dictionaries';

import clsx from 'clsx';
import s from './products.module.scss';

export const metadata = {
  title: 'Starting Template Next | Products',
  description: 'Generated by create next app',
};

const ProductsPage = async ({ params }) => {
  const allProducts = getAllProducts();

  const { locale } = params;

  const dict = await getDictionary(locale);

  return (
    <div className={clsx('container', s.wrapper)}>
      <h1>{dict.productsPage.title}</h1>
      <ul className={s.list}>
        {allProducts.map(({ id, brand, category, model }) => (
          <li key={id} className={s.item}>
            <AppLink href={`/products/${id}`}>
              <div className={s.link}>
                <h2>{brand}</h2>
                <p>{model}</p>
                <p>{category}</p>
              </div>
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
