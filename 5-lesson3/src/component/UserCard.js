import React, { useEffect, useState } from 'react';

const PokemonCard = ({ pokemon }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            setPokemonDetails(data);
        };
        fetchDetails();
    }, [pokemon.url]);

    if (!pokemonDetails) return <p>Loading...</p>;

    return (
        <div style={{
            width: '250px',
            height: '300px',
            padding: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
            border: '1px solid black',
            borderRadius: '8px',
            textAlign: 'center'
        }}>
            <img
                src={pokemonDetails.sprites.front_default}
                alt={pokemon.name}
                style={{ width: '100px', height: '100px' }}
            />
            <h1 style={{ fontSize: '18px', margin: '10px 0' }}>{pokemon.name}</h1>
            <p>Height: {pokemonDetails.height}</p>
            <p>Weight: {pokemonDetails.weight}</p>
        </div>
    );
};

export default PokemonCard;
