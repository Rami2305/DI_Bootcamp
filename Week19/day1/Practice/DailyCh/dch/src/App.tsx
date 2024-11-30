
import './App.css'

import React from 'react';
import DataFetcher from './components/DataFetcher';

const App: React.FC = () => {
  // Aquí deberías definir `leagueId`, `season`, y `teamId`
  const leagueId = 39; // Ejemplo de liga
  const season = 2020; // Ejemplo de temporada
  const teamId = 33; // El ID del equipo que quieres consultar

  return (
    <div className="App">
      <h1>Football Teams Info</h1>
      <DataFetcher leagueId={leagueId} season={season} teamId={teamId} />
    </div>
  );
};

export default App;