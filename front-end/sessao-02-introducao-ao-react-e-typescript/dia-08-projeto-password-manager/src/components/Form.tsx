import Swal from 'sweetalert2';
import { ReactElement, useState, ChangeEvent, useEffect } from 'react';
import Vetor from '../images/Vector 4.png';
import { ServiceData } from '../types/types';
import FormInput from './Form/FormInput';
import PasswordToggleBtn from './Form/PassToggleBtn';
import PasswordCheck from './Form/PasswordCheck';
import Button from './Button/Button';

// Props
type FormProps = {
  onRegister: (newService: ServiceData) => void;
  onClick: () => void;
};

// Form
function Form({ onRegister, onClick }: FormProps): ReactElement {
  const [services, setServices] = useState<any[]>([]);
  const [formData, setFormData] = useState<ServiceData>({
    serviceName: '',
    login: '',
    password: '',
    url: '',
  });

  // Password States Validation
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isLengthWithinRange, setIsLengthWithinRange] = useState(false);
  const [hasLettersAndNumbers, setHasLettersAndNumbers] = useState(false);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);

  // Button Cadastrar State
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Button Show Password
  const [passwordType, setPasswordType] = useState<string>('password');

  // Button Show Password State
  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  // Get Values
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Button Cadastrar
  const handleRegister = () => {
    const newService = {
      serviceName: formData.serviceName,
      login: formData.login,
      password: formData.password,
      url: formData.url,
    };

    onRegister(newService);
    setServices([...services, newService]);
    setFormData({ serviceName: '', login: '', password: '', url: '' });

    // Show SweetAlert2 alert
    Swal.fire({
      text: 'Serviço cadastrado com sucesso',
      icon: 'success',
      timer: 1500,
      timerProgressBar: true,
    });
  };

  // Update States
  useEffect(() => {
    setIsLengthValid(formData.password.length >= 8);
    setIsLengthWithinRange(formData.password.length <= 16);
    setHasLettersAndNumbers(/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(formData.password));
    setHasSpecialCharacter(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(formData.password));

    const isServiceNameValid = formData.serviceName.trim() !== '';
    const isLoginValid = formData.login.trim() !== '';

    setButtonDisabled(!(
      isServiceNameValid
      && isLoginValid
      && isLengthValid
      && isLengthWithinRange
      && hasLettersAndNumbers
      && hasSpecialCharacter
    ));
  }, [
    formData,
    isLengthValid,
    isLengthWithinRange,
    hasLettersAndNumbers,
    hasSpecialCharacter,
  ]);

  return (
    <form>
      <div className="container-form">
        <div className="form-input">
          <FormInput
            label="Nome do serviço"
            name="serviceName"
            type="text"
            value={ formData.serviceName }
            onChange={ handleChange }
          />

          <div className="ipts-login-pass">
            <FormInput
              label="Login"
              name="login"
              type="text"
              value={ formData.login }
              onChange={ handleChange }
              required
            />

            <FormInput
              label="Senha"
              name="password"
              type={ passwordType }
              value={ formData.password }
              onChange={ handleChange }
              required
            />

            <PasswordToggleBtn
              passwordType={ passwordType }
              onClick={ togglePasswordVisibility }
            />
          </div>

          <FormInput
            label="URL"
            name="url"
            type="text"
            value={ formData.url }
            onChange={ handleChange }
            required
          />
          <p className="campos-obrigatorios">
            <span className="asterisco-red"> * </span>
            Campos Obrigatórios
          </p>
        </div>

        <div className="check-password">
          <img className="vetor4" src={ Vetor } alt="Vetor4" />
          <div className="box-check">
            <PasswordCheck
              valid={ isLengthValid }
              text="Possuir 8 ou mais caracteres"
            />
            <PasswordCheck
              valid={ isLengthWithinRange }
              text="Possuir até 16 caracteres"
            />
            <PasswordCheck
              valid={ hasLettersAndNumbers }
              text="Possuir letras e números"
            />
            <PasswordCheck
              valid={ hasSpecialCharacter }
              text="Possuir algum caractere especial"
            />
          </div>
        </div>
      </div>

      <div className="buttons-form">
        <Button
          onClick={ () => onClick() }
          disabled={ undefined }
          className="btn-form-cancel"
        >
          Cancelar
        </Button>

        <Button
          onClick={ () => handleRegister() }
          disabled={ buttonDisabled }
          className="btn-form-register"
        >
          Cadastrar
        </Button>
      </div>
    </form>
  );
}

export default Form;
