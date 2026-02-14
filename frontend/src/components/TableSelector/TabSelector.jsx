import React from 'react';

const PersonIcon = () => {
  <svg 
    class="w-6 h-6 text-gray-800 dark:text-white" 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
  <path 
    fill-rule="evenodd" 
    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" 
    clip-rule="evenodd"
  />
</svg>
}

const TeamIcon = () => {
  <svg 
    class="w-6 h-6 text-gray-800 dark:text-white" 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
  <path 
    fill-rule="evenodd" 
    d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" 
    clip-rule="evenodd"
  />
</svg>
}

const MentorIcon = () => {
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5713 5h7v9h-7m-6.00001-4-3 4.5m3-4.5v5m0-5h3.00001m0 0h5m-5 0v5m-3.00001 0h3.00001m-3.00001 0v5m3.00001-5v5m6-6 2.5 6m-3-6-2.5 6m-3-14.5c0 .82843-.67158 1.5-1.50001 1.5-.82843 0-1.5-.67157-1.5-1.5s.67157-1.5 1.5-1.5 1.50001.67157 1.50001 1.5Z"/>
</svg>

}

const TabSelector = ({ activeTab, onTabClick }) => {
  const tabs = [
    { 
      id: 'personal', 
      label: 'Личный рейтинг', 
      subtitle: 'Ваши индивидуальные достижения', 
      icon: <PersonIcon /> 
    },
    { 
      id: 'team', 
      label: 'Командный рейтинг', 
      subtitle: 'Рейтинг команд', 
      icon: <TeamIcon /> 
    },
    { 
      id: 'mentors', 
      label: 'Наставнический рейтинг', 
      subtitle: 'Рейтинг наставников', 
      icon: <MentorIcon/>
    },
  ];

  return (
    <div className="tab-selector">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabClick(tab.id)}
        >
          <span className="tab-icon">{tab.icon}</span>
          <div>
            <span className="tab-label">{tab.label}</span>
            <br/>
            <span className="tab-subtitle">{tab.subtitle}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default TabSelector;