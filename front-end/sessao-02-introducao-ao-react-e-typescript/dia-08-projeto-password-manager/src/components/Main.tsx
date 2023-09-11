import { useState } from 'react';
import { ServiceData } from '../types/types';
import Form from './Form';
import Services from './Services';
import Button from './Button/Button';

function Main() {
  // States
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState<ServiceData[]>([]);
  const [registerDisabled] = useState(false);

  // Show Form
  const handleShowForm = () => {
    setShowForm(true);
  };

  // Button Cancel
  const handleCancel = () => {
    setShowForm(false);
  };

  // Register Service
  const handleRegisterService = (newService: ServiceData) => {
    setServices([...services, newService]);
    setShowForm(false);
  };

  // Remove Service
  const handleRemoveService = (login: string) => {
    const updatedServices = services
      .filter((service) => service.login !== login);
    setServices(updatedServices);
  };

  return (
    <main>
      {showForm ? (
        <>
          <Form onRegister={ handleRegisterService } onClick={ handleCancel } />
          <Services services={ services } onRemoveService={ handleRemoveService } />
        </>
      ) : (
        <>
          <section className="section-button-register">
            <Button
              onClick={ () => handleShowForm() }
              disabled={ registerDisabled }
              className="register-button"
            >
              Cadastrar nova senha
            </Button>
          </section>

          <section className="section-services">
            <Services services={ services } onRemoveService={ handleRemoveService } />
          </section>
        </>
      )}
    </main>
  );
}

export default Main;
