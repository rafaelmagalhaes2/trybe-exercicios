import { ReactElement } from 'react';

type PasswordCheckProps = {
  valid: boolean;
  text: string;
};

function PasswordCheck({ valid, text }: PasswordCheckProps): ReactElement {
  const className = valid ? 'valid-password-check' : 'invalid-password-check';

  return <div className={ `password-check ${className}` }>{text}</div>;
}

export default PasswordCheck;
