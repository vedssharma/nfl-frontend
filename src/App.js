import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch("http://nfl-data.hnd9dmape3ewbffs.eastus.azurecontainer.io/players")
      .then(response => response.json())
      .then(data => setPlayers(data))
  }, [])

  return (
    <div>
      <h1>NFL Front End</h1>
      <h2>All Players</h2>
      <ul>
        {players.map(player => <li key={player.id}>
          {player.name}
        </li>)}
      </ul>

    </div>


  );
}

export default App;
