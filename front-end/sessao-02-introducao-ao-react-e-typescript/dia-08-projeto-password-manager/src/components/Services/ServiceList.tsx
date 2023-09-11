import Locker from '../../images/locker-img.svg';
import Link from '../../images/link-img.svg';
import Vector2 from '../../images/Vector 2.png';
import Trash from '../../images/trash.svg';
import { ServiceData } from '../../types/types';

type ServiceListProps = {
  services: ServiceData[];
  hidePasswords: boolean;
  onRemoveService: (login: string) => void;
};

function ServiceList(props: ServiceListProps) {
  const { services, onRemoveService, hidePasswords } = props;

  return (
    <div className="service-list">
      <ul className="list">
        {services.map(({ login, serviceName, password, url }) => (
          <li key={ login }>
            <div className="list-service-name">
              <img className="icon-locker" src={ Locker } alt="Locker" />
              <a
                className="link-service"
                href={ url }
                target="_blank"
                rel="noopener noreferrer"
              >
                {serviceName}
              </a>
              <img className="icon-link-image" src={ Link } alt="LinkImage" />
            </div>
            <div className="login-service">
              <p className="login-title">Login</p>
              <p className="login-value">{login}</p>
            </div>
            <div className="vector2">
              <img src={ Vector2 } alt="Vector2" />
            </div>
            <div className="list-password">
              <p className="password-title">
                senha
              </p>
              <p className="password-value">
                {hidePasswords ? '******' : password}
              </p>
            </div>

            <div className="vector2">
              <img src={ Vector2 } alt="Vector2" />
            </div>
            {/* <p className="">{url}</p> */}
            <button
              className="btn-remover"
              data-testid="remove-btn"
              onClick={ () => onRemoveService(login) }
            >
              <img className="icon-trash" src={ Trash } alt="Remover" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
