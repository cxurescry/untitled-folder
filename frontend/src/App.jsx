import {Routes, Route} from 'react-router'
import React, { useState } from 'react';
import Header from './components/Header/Header';
import TabSelector from './components/TableSelector/TabSelector';
import Stats from './components/Stats/Stats';
import Table from './components/Table/Table';

const App = () => {
  const [activeTab, setActiveTab] = useState('personal');
  // const [currentPeriod, setCurrentPeriod] = useState({ type: 'semester', value: '2025-autumn', label: 'Осень 2025' });

  // const handlePeriodChange = (type, value, label) => {
  //   setCurrentPeriod({ type, value, label });
  // };

  return (
    <div className="app">
      <Header />
      <TabSelector activeTab={activeTab} onTabClick={setActiveTab} />
      {activeTab === 'personal' && (
        <Stats position="#15" hours="48" avgScore="4.8" />
      )}
      <Table 
        activeTab={activeTab}
        // period={currentPeriod}
      />
    </div>
  );
};

export default App;