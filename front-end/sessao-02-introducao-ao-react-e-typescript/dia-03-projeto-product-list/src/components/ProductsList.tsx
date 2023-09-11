/*
* Recebe o Children e imprime as informações
*/
function ProductsList({ children } : { children: React.ReactNode }) {
  return (
    <section>
      <h1>Lista de produtos</h1>
      <ul>
        {/* Imprimi o Children */}
        { children }
      </ul>
    </section>
  );
}

export default ProductsList;
