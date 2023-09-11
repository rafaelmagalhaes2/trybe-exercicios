import { ProductType } from '../types';

type ProductProps = {
  productInfo: ProductType;
};

function Product({ productInfo }: ProductProps) {
  const { title, image, price } = productInfo;

  return (
    <li className="product">
      <p>{ title }</p>
      <p>{ price }</p>
      <img src={ image } alt={ title } />
    </li>
  );
}

export default Product;
