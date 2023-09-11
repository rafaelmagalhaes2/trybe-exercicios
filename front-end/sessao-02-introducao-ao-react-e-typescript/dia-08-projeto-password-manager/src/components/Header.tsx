import { ReactElement } from 'react';

function Header(): ReactElement {
  return (
    <header>
      <h1>
        Gerenciador
        <span className="asterisco"> * </span>
        de
        <span className="asterisco"> * </span>
        Senhas
      </h1>
    </header>
  );
}

export default Header;
