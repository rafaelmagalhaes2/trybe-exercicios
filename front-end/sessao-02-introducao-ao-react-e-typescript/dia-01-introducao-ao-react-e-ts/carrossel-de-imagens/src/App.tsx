import Carrossel from "./components/Carrossel";
import Title from "./components/Title";

function App() {

 return (
    <div className="container">

      <header>
        <Title>Corrossel de imagens com REACT</Title>
      </header>
      
      <main>
        <Carrossel />
      </main>
      
    </div>
  );
 }

 export default App;
