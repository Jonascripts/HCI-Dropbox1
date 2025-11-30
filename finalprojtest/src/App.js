import React from 'react';
import { LineGraph } from './components/Line';
import { BarGraph } from './components/Bar';
import { PieChart } from './components/Pie';

function App() {
  return (
    <div className="App">
      <h1>Packages Per Day</h1>
      <LineGraph />
      <h2>box efficiency data</h2>
      <BarGraph />
      <h3>Maintenance Pie Chart</h3>
      <PieChart />
    </div>
  );
}

export default App;
