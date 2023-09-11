import { ReactElement, ChangeEvent } from 'react';

type FormInputProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
};

function FormInput({
  label,
  name,
  type,
  value,
  onChange,
  placeholder = '',
  required = false,
}: FormInputProps): ReactElement {
  return (
    <div className="input">
      {label === 'Senha' || label === 'Login' ? (
        <label htmlFor={ `input${label}` }>
          {label}
          <span className="asterisco-red"> * </span>
        </label>
      ) : (
        <label htmlFor={ `input${label}` }>{label}</label>
      )}
      <input
        type={ type }
        name={ name }
        id={ `input${label}` }
        className={ name }
        value={ value }
        onChange={ onChange }
        placeholder={ placeholder }
        required={ required }
      />
    </div>
  );
}

export default FormInput;
