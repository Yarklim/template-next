import products from './products-data.json';

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  const product = products.find((el) => el.id === id);

  if (!product) {
    throw new Error();
  }

  return product;
}
