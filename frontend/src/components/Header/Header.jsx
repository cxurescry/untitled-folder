import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Лидерборд ИШИТР+</h1>
        <p>Система учета и мотивации</p>
      </div>
      <nav className="header-nav">
        <button className="nav-button active">Главная</button>
        <button className="nav-button">Личный кабинет</button>
      </nav>
    </header>
  );
};

export default Header;