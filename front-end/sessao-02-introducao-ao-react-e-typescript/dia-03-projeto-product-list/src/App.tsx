import ProductsList from './components/ProductsList';
import products from './data';
import Product from './components/Product';

export default function App() {
  return (
    <main>
      <ProductsList>
        {/* Transmite o Children */}
        {products.map((product) => (
          <Product key={ product.id } productInfo={ product } />
        ))}
      </ProductsList>
    </main>
  );
}
