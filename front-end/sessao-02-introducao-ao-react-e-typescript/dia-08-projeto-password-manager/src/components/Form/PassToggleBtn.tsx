import { ReactElement } from 'react';
import Show from '../../images/eye-open.svg';
import Hide from '../../images/eye-closed.svg';

type PassToggleBtnProps = {
  passwordType: string;
  onClick: () => void;
};

function PassToggleBtn({ passwordType, onClick }: PassToggleBtnProps): ReactElement {
  return (
    <div className="toggle-button-password">
      <button
        id="togglePassword"
        data-testid="show-hide-form-password"
        type="button"
        onClick={ onClick }
      >
        {passwordType === 'password' ? (
          <img className="icon" src={ Show } alt="Show password" />
        ) : (
          <img className="icon" src={ Hide } alt="Hide password" />
        )}
      </button>
    </div>
  );
}

export default PassToggleBtn;
