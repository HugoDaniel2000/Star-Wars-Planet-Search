import React from 'react';
import './App.css';
import InputsFilters from './components/InputsFilters';
import TablePlanets from './components/Table';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <InputsFilters />
      <TablePlanets />
    </AppProvider>
  );
}

export default App;
