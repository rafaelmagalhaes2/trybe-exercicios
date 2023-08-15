import Title from './Title';
import ModuleDetails from './ModuleDetails';
import CalculatorAge from './CalculatorAge';

export default function HelloWorld() {
  return (
    <>
      <header>
        <Title />
      </header>
      <div className="container">
        <ModuleDetails />
        <CalculatorAge />
      </div>
    </>
  );
}
