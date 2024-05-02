import clsx from 'clsx';
import s from './products.module.scss';

const ProductsPage = ({ params }) => {
  const { productName } = params;

  return <div className={clsx('container', s.wrapper)}>Products</div>;
};

export default ProductsPage;
