import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  // Данные для отображения (можно заменить на props или state при необходимости)
  const profileData = {
    fullName: 'Журавлёв Евгений Иванович',
    school: 'ИШИТР',
    direction: 'Программная инженерия',
    group: '8К53Т',
    course: '1',
    individualRank: '#15',
    teamRank: '4',
    hours: '32',
    coins: '350',
    currentLevel: 3,
    progress: 510,
    maxProgress: 700,
    achievements: [
      { title: 'Первая сотня', desc: '100 часов достигнуто'},
      { title: 'Звезда недели', desc: 'Top-3 за неделю' },
      { title: 'Стартовый рывок', desc: '20 часов за первую неделю' },
      { title: 'Неделя учебы', desc: '30 часов за неделю' },
      { title: 'Точность', desc: '5 дней подряд по 4+ часа' },
      { title: 'Спринтер', desc: '10 часов за один день' },
    ],
    weeklyHours: [
      { week: '1 неделя', hours: 24 },
      { week: '2 неделя', hours: 27 },
      { week: '3 неделя', hours: 13 },
      { week: '4 неделя', hours: 30 },
    ],
    avgHours: 23,
    month: 'октябрь 2025',
  };

  return (
    <div className="profile-container">
      {/* Header */}
      <header className="profile-header">
      <div className="header-content">
        <h1>Лидерборд ИШИТР+</h1>
        <p>Система учета и мотивации</p>
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Главная</Link>
        <Link to="/profile" className="nav-link active">Личный кабинет</Link>
      </nav>
      </header>

      {/* Main Content */}
      <main className="profile-main">
        {/* Basic Info + Stats */}
        <div className="info-stats-grid">
          <div className="basic-info card">
            <h3 className="card-title">Основная информация</h3>
            <div className="info-row">
              <span className="label">ФИО</span>
              <span className="value">{profileData.fullName}</span>
            </div>
            <div className="info-row">
              <span className="label">Школа</span>
              <span className="value">{profileData.school}</span>
            </div>
            <div className="info-row">
              <span className="label">Направление</span>
              <span className="value">{profileData.direction}</span>
            </div>
            <div className="info-row">
              <span className="label">Группа</span>
              <span className="value">{profileData.group}</span>
            </div>
            <div className="info-row">
              <span className="label">Курс</span>
              <span className="value">{profileData.course}</span>
            </div>
          </div>

          <div className="stats-section">
            <div className="period-selector">
              <button className="period-btn active">Месяц &lt; октябрь 2025 &gt;</button>
              <button className="period-btn">Семестр</button>
              <button className="period-btn">Год</button>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-title">Индивидуальный рейтинг</div>
                <div className="stat-value">{profileData.individualRank}</div>
              </div>
              <div className="stat-card">
                <div className="stat-title">Командный рейтинг</div>
                <div className="stat-value">{profileData.teamRank}</div>
              </div>
              <div className="stat-card">
                <div className="stat-title">Часы</div>
                <div className="stat-value">{profileData.hours}</div>
              </div>
              <div className="stat-card">
                <div className="stat-title">Количество коинов</div>
                <div className="stat-value">{profileData.coins}</div>
              </div>
            </div>

            {/* Level Progress */}
            <div className="level-card card">
              <div className="level-title">Текущий уровень</div>
              <div className="level-number">{profileData.currentLevel}</div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${(profileData.progress / profileData.maxProgress) * 100}%` }}
                ></div>
              </div>
              <div className="progress-text">
                {profileData.progress}/{profileData.maxProgress}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="achievements-section card">
          <div className="section-header">
            <h3>Мои ачивки</h3>
          </div>
          <div className="achievements-grid">
            {profileData.achievements.map((ach, idx) => (
              <div key={idx} className="achievement-card">
                <div className="achievement-title">{ach.title}</div>
                <div className="achievement-desc">{ach.desc}</div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <a href="#">Все ачивки →</a>
          </div>
        </div>

        {/* Weekly Hours Chart */}
        <div className="hours-chart card">
          <h3 className="chart-title">Часы работы за месяц по неделям</h3>
          <div className="chart-bars">
            {profileData.weeklyHours.map((week, idx) => (
              <div key={idx} className="bar-item">
                <div
                  className="bar"
                  style={{ height: `${(week.hours / 30) * 100}%` }} // max 30 часов — высота 100%
                >
                  <span className="bar-value">{week.hours}</span>
                </div>
                <div className="bar-label">{week.week}</div>
              </div>
            ))}
          </div>
          <div className="chart-footer">
            <span className="avg-hours">Средняя активность: {profileData.avgHours} часа</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="profile-footer">
        <button className="settings-btn">
          <span>⚙️</span> Настройки
        </button>
      </footer>
    </div>
  );
};

export default Profile;
