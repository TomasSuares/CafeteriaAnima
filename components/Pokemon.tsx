import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
}

const Pokemon: React.FC<{ id?: string }> = ({ id }) => {
  const params = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  const pokemonId = id || params.id;

  useEffect(() => {
    if (!pokemonId) return;

    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.toLowerCase()}`);
        if (!response.ok) {
          throw new Error('Failed to load Pokémon data');
        }
        const data: PokemonData = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load Pokémon data');
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {pokemon ? (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
      ) : (
        <div>Pokémon not found</div>
      )}
    </div>
  );
};

export default Pokemon;
