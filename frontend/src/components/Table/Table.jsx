import React from 'react';

// Sample data for the leaderboard
const personalData = [
  { id: 1, name: 'Александра Волкова', group: '8К52Т', hours: 156, score: 76.5 },
  { id: 2, name: 'Дмитрий Соколов', group: '8Б51', hours: 142, score: 76.5 },
  { id: 3, name: 'Мария Петрова', group: '8К53Т', hours: 138, score: 76.4 },
  { id: 4, name: 'Иван Кузнецов', group: '8И51', hours: 124, score: 76.4 },
  { id: 5, name: 'Анна Смирнова', group: '8И52', hours: 118, score: 76.4 },
  { id: 6, name: 'Артём Новиков', group: '8К51Т', hours: 117, score: 76.4 },
  { id: 7, name: 'Виталий Лаврентьев', group: '8К51Т', hours: 117, score: 76.4 },
  { id: 8, name: 'Евгений Филатов', group: '8К51Т', hours: 117, score: 76.4 },
  { id: 9, name: 'Андрей Юрченко', group: '8К51Т', hours: 117, score: 76.4 },
  { id: 10, name: 'Даниил Киселёв', group: '8К51Т', hours: 117, score: 76.4 },
];

const teamData = [
  { id: 1, name: 'Horizon', hours: 156, score: 76.5 },
  { id: 2, name: 'CodeCrafters', hours: 142, score: 76.5 },
  { id: 3, name: 'Без Багов', hours: 138, score: 76.4 },
  { id: 4, name: 'Вектор', hours: 124, score: 76.4 },
  { id: 5, name: 'Pulse', hours: 118, score: 76.4 },
  { id: 6, name: '404: Баги не найдены', hours: 117, score: 76.4 },
  { id: 7, name: 'Красная кнопка', hours: 117, score: 76.4 },
  { id: 8, name: 'Meraki', hours: 117, score: 76.4 },
  { id: 9, name: 'Кремниевый Каньон', hours: 117, score: 76.4 },
  { id: 10, name: 'Эверест', hours: 117, score: 76.4 },
];

const mentorData = [
  { id: 1, name: 'Александра Волкова', hours: 156, score: 76.5 },
  { id: 2, name: 'Дмитрий Соколов', hours: 142, score: 76.5 },
  { id: 3, name: 'Мария Петрова', hours: 138, score: 76.4 },
  { id: 4, name: 'Иван Кузнецов', hours: 124, score: 76.4 },
  { id: 5, name: 'Анна Смирнова', hours: 118, score: 76.4 },
  { id: 6, name: 'Артём Новиков', hours: 117, score: 76.4 },
  { id: 7, name: 'Виталий Лаврентьев', hours: 117, score: 76.4 },
  { id: 8, name: 'Евгений Филатов', hours: 117, score: 76.4 },
  { id: 9, name: 'Андрей Юрченко', hours: 117, score: 76.4 },
  { id: 10, name: 'Даниил Киселёв', hours: 117, score: 76.4 },
];

const Table = ({ activeTab, currentPeriodLabel }) => {
  let columns = [];
  let data = [];

  if (activeTab === 'personal') {
    columns = ['МЕСТО', 'СТУДЕНТ', 'ЧАСЫ', 'БАЛЛ'];
    data = personalData;
  } else if (activeTab === 'team') {
    columns = ['МЕСТО', 'КОМАНДА', 'ЧАСЫ', 'БАЛЛ КОМАНДЫ'];
    data = teamData;
  } else if (activeTab === 'mentors') {
    columns = ['МЕСТО', 'НАСТАВНИК', 'ЧАСЫ МЕНТОРСТВА', 'БАЛЛ'];
    data = mentorData;
  }

  return (
    <div className="ranking-table">
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className={index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : ''}>
                {index + 1}
              </td>
              <td>
                <span className="name">{item.name}</span>
                {activeTab === 'personal' && <span className="group">{item.group}</span>}
              </td>
              <td>{item.hours}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;