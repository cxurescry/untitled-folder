import React, { useState } from 'react';

const PeriodNavigator = ({ onPeriodChange }) => {
  const [activeType, setActiveType] = useState(null); // 'semester' or 'year'
  const [currentPeriodIndex, setCurrentPeriodIndex] = useState(0);

  // Данные периодов (можно подгружать динамически)
  const semesterPeriods = [
    { label: 'Осень 2025', value: '2025-autumn' },
    { label: 'Весна 2026', value: '2026-spring' },
    { label: 'Осень 2026', value: '2026-autumn' },
    { label: 'Весна 2027', value: '2027-spring' },
  ];

  const yearPeriods = [
    { label: '2024', value: '2024' },
    { label: '2025', value: '2025' },
    { label: '2026', value: '2026' },
    { label: '2027', value: '2027' },
  ];

  const getPeriods = () => (activeType === 'semester' ? semesterPeriods : yearPeriods);
  const currentPeriod = getPeriods()[currentPeriodIndex] || { label: '—', value: '' };

  const handleTypeClick = (type) => {
    setActiveType(type);
    setCurrentPeriodIndex(0); // сброс на первый период
    onPeriodChange(type, getPeriods()[0]?.value, getPeriods()[0]?.label);
  };

  const goToPrev = () => {
    if (currentPeriodIndex > 0) {
      const newIndex = currentPeriodIndex - 1;
      setCurrentPeriodIndex(newIndex);
      onPeriodChange(activeType, getPeriods()[newIndex].value, getPeriods()[newIndex].label);
    }
  };

  const goToNext = () => {
    if (currentPeriodIndex < getPeriods().length - 1) {
      const newIndex = currentPeriodIndex + 1;
      setCurrentPeriodIndex(newIndex);
      onPeriodChange(activeType, getPeriods()[newIndex].value, getPeriods()[newIndex].label);
    }
  };

  return (
    <div className="period-navigator flex items-center justify-center gap-6">
      {/* Кнопка "Семестр" */}
      <button
        className={`px-6 py-3 rounded-full border-2 font-medium text-sm transition-all ${
          activeType === 'semester'
            ? 'bg-[#0E9344] text-white border-[#0E9344]'
            : 'bg-white text-[#090909] border-[#D1D5DB] hover:bg-[#0E9344] hover:text-white'
        }`}
        onClick={() => handleTypeClick('semester')}
        aria-label="Выбрать семестр"
      >
        Семестр
      </button>

      {/* Кнопка "Год" */}
      <button
        className={`px-6 py-3 rounded-full border-2 font-medium text-sm transition-all ${
          activeType === 'year'
            ? 'bg-[#0E9344] text-white border-[#0E9344]'
            : 'bg-white text-[#090909] border-[#D1D5DB] hover:bg-[#0E9344] hover:text-white'
        }`}
        onClick={() => handleTypeClick('year')}
        aria-label="Выбрать год"
      >
        Год
      </button>

      {/* Активная кнопка с стрелками — появляется только при выборе типа */}
      {activeType && (
        <div className="flex items-center gap-3">
          {/* Стрелка назад */}
          <button
            className="w-10 h-10 rounded-full border-2 border-[#D1D5DB] flex items-center justify-center text-[#090909] hover:bg-[#0E9344] hover:text-white transition-colors"
            onClick={goToPrev}
            disabled={currentPeriodIndex === 0}
            aria-label="Предыдущий период"
          >
            ←
          </button>

          {/* Активная кнопка периода */}
          <button
            className="px-6 py-3 bg-[#0E9344] text-white rounded-full font-medium text-sm shadow-md whitespace-nowrap"
            onClick={() => {}}
          >
            {activeType === 'semester' ? `Семестр < ${currentPeriod.label} >` : `Год < ${currentPeriod.label} >`}
          </button>

          {/* Стрелка вперёд */}
          <button
            className="w-10 h-10 rounded-full border-2 border-[#D1D5DB] flex items-center justify-center text-[#090909] hover:bg-[#0E9344] hover:text-white transition-colors"
            onClick={goToNext}
            disabled={currentPeriodIndex === getPeriods().length - 1}
            aria-label="Следующий период"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};
export default PeriodNavigator;