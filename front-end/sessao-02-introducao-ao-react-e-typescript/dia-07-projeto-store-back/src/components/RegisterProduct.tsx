import React, { useState } from 'react';
import Product from './Product';
import { ProductType } from '../types';
import '../styles/RegisterProduct.css';

type Props = {
  handleSubmit: (productInfo: ProductType) => void
};

export default function RegisterProduct(props: Props) {
  const { handleSubmit } = props;

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    image: '',
    tags: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: id === 'price' ? event.target.valueAsNumber : value,
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(formData);
    setFormData({
      name: '',
      description: '',
      price: 0,
      image: '',
      tags: '',
    });
  };

  return (
    <main>
      <h1>Cadastrar novo produto</h1>
      <div className="register-container">
        <form onSubmit={ onSubmit }>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              id="name"
              name="name"
              value={ formData.name }
              onChange={ handleChange }
              required
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              name="description"
              value={ formData.description }
              onChange={ handleChange }
              required
            />
          </label>
          <label htmlFor="price">
            Preço
            <input
              type="number"
              id="price"
              name="price"
              value={ formData.price }
              onChange={ handleChange }
              required
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              id="image"
              name="image"
              value={ formData.image }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="tags">
            Tags
            <input
              type="text"
              id="tags"
              name="tags"
              value={ formData.tags }
              onChange={ handleChange }
            />
          </label>
          <button type="submit">Salvar</button>
        </form>
        <Product productInfo={ formData } />
      </div>
    </main>
  );
}
