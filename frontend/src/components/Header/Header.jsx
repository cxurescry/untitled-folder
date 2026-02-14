import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <h1>Лидерборд ИШИТР+</h1>
        <p>Система учета и мотивации</p>
      </div>

      <nav className="header-nav">
        <Link
          to="/"
          className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}
        >
          Главная
        </Link>

        <Link
          to="/profile"
          className={`nav-button ${location.pathname === '/profile' ? 'active' : ''}`}
        >
          Личный кабинет
        </Link>
      </nav>
    </header>
  );
};

export default Header;
