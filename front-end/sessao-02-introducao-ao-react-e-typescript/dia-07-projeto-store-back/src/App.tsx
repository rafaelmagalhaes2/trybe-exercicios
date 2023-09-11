import { useState } from 'react';
import './styles/App.css';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';
import { ProductType, ProductWithId } from './types';

function App() {
  const [products, setProducts] = useState<ProductWithId[]>([]);
  const [showProducts, setShowProducts] = useState(false);
  const [id, setId] = useState(0);

  const handleShowProducts = () => {
    setShowProducts(true);
  };

  const handleShowRegister = () => {
    setShowProducts(false);
  };

  const handleRegister = (data: ProductType) => {
    const newId = id + 1;
    const newIdData: ProductWithId = { id: newId, ...data };
    setProducts([...products, newIdData]);
    setId(newId);
  };

  const handleDelete = (productId: string | number) => {
    setProducts((prevProducts) => prevProducts.filter((index) => index.id !== productId));
  };

  return (
    <div className="app">
      <header>
        <button onClick={ handleShowRegister }>Cadastrar</button>
        <button onClick={ handleShowProducts }>Ver produtos</button>
      </header>

      <main>
        {showProducts ? (
          <section>
            <ListProducts products={ products } handleDelete={ handleDelete } />
          </section>
        ) : (
          <section>
            <RegisterProduct handleSubmit={ handleRegister } />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
