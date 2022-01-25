import React from 'react';
import './App.css';
import TablePlanets from './components/Table';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <span>Hello World</span>
      <TablePlanets />
    </AppProvider>
  );
}

export default App;
