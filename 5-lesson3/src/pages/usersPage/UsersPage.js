import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonAction } from "../../Redux/actions";
import PokemonCard from "../../component/UserCard";
import { useEffect } from "react";

const PokemonsPage = () => {
    const { pokemons, loading, error } = useSelector((state) => state.PokemonReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemonAction());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{
            display: 'flex',
            flexWrap: "wrap",
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {pokemons.length > 0 ? (
                pokemons.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))
            ) : (
                <p>нету покемонов</p>
            )}
        </div>
    );
};

export default PokemonsPage;
