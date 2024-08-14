import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pokemon from '../components/Pokemon';
import Sidebar from '../components/Sidebar';

const FavoritePokemon: React.FC = () => {
  return <Pokemon id="1" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/pokemonFavorito" element={<FavoritePokemon />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
