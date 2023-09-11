import { useState } from 'react';
import ServiceList from './Services/ServiceList';
import { ServiceData } from '../types/types';
import Locker from '../images/locker-img.svg';
import Vetor from '../images/Vector 1.png';
import ServiceCheckBox from './Services/ServiceCheckBox';

type ServicesProps = {
  services: ServiceData[];
  onRemoveService: (login: string) => void;
};

function Services({ services, onRemoveService }: ServicesProps) {
  const [hidePasswords, setHidePasswords] = useState(false);

  // Checkbox event
  const handlePasswordVisibilityChange = () => {
    setHidePasswords(!hidePasswords);
  };

  return (
    <div className="services">
      {services.length > 0 ? (
        <>
          <img className="vector" src={ Vetor } alt="Vetor" />
          <div className="checkbox-pass">
            <ServiceCheckBox
              hidePasswords={ hidePasswords }
              onPasswordVisibilityChange={ handlePasswordVisibilityChange }
            />
          </div>
          <div className="services-wrapper">
            {services.map((service) => (
              <ServiceList
                key={ service.login }
                services={ [service] }
                onRemoveService={ onRemoveService }
                hidePasswords={ hidePasswords }
              />
            ))}
          </div>
        </>
      ) : (
        <div className="message-empty-services">
          <img className="vector" src={ Vetor } alt="Vetor" />
          <p className="message">Não há nenhuma senha cadastrada...</p>
          <img className="locker" src={ Locker } alt="Locker" />
        </div>
      )}
    </div>
  );
}

export default Services;
