import React from 'react';

const Stats = ({ position, hours, avgScore }) => {
  return (
    <div className="stats-cards">
      <div className="stat-card">
        <h3>Ваша позиция</h3>
        <p className="stat-value">{position}</p>
      </div>
      <div className="stat-card">
        <h3>Часы</h3>
        <p className="stat-value">{hours}</p>
        <p className="stat-subtitle">за текущий период</p>
      </div>
      <div className="stat-card">
        <h3>Средний балл</h3>
        <p className="stat-value">{avgScore}</p>
      </div>
    </div>
  );
};

export default Stats;