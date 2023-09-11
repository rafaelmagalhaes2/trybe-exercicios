import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      {planets.map(({ name, image }) => (
        <PlanetCard
          key={ name }
          planetName={ name }
          planetImage={ image }
        />
      ))}
    </div>
  );
}

export default SolarSystem;
