import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div style={{ width: '200px', padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link to="/pokemonFavorito">Favorite Pokémon</Link>
        </li>
        <li>
          <Link to="/pokemon/1">Pokémon with ID 1</Link>
        </li>
        <li>
          <Link to="/pokemon/25">Pokémon with ID 25</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
