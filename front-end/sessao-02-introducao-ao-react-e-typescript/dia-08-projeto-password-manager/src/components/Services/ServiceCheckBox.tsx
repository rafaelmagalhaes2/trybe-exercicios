import { useState } from 'react';
import Bullet from '../../images/Rectangle21.svg';

type ServiceCheckBoxProps = {
  hidePasswords: boolean;
  onPasswordVisibilityChange: () => void;
};

function ServiceCheckBox(props: ServiceCheckBoxProps) {
  const { hidePasswords, onPasswordVisibilityChange } = props;

  const [isChecked, setIsChecked] = useState(hidePasswords);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onPasswordVisibilityChange();
  };

  return (
    <>
      <label className="label-checkbox" htmlFor="checkbox">
        Esconder senhas
      </label>
      <label className={ `custom-checkbox ${isChecked ? 'checked' : ''}` }>
        <input
          className="checkbox"
          id="checkbox"
          type="checkbox"
          checked={ isChecked }
          onChange={ handleCheckboxChange }
        />
        <div className="bullet">
          <img className="img-bullet" src={ Bullet } alt="Bullet" />
        </div>
      </label>
    </>
  );
}

export default ServiceCheckBox;
