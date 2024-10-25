import { useEffect, useState } from "react";

const TaskList = () => {
    const [abilities, setAbilities] = useState([]);
    const [filter, setFilter] = useState("all");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/agents")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Ошибка загрузки данных");
                }
                return response.json();
            })
            .then((data) => {
                const agentAbilites = data.data[0].abilities
                setAbilities(agentAbilites)
                setLoading(false)
            })
            .catch((error) => {
                setError(error);
                setLoading(false);

            })
    }, []);


    if(loading) return "Загрузка";
    if(error) return "Ошибка:"


    const filteredAbilities = abilities.filter((ability) =>
        filter === "all" ? true : ability.slot === filter
    );

    return (
        <div className="ability-filter">
            <div className="filter-buttons">
                <button
                    className={filter === "all" ? "active" : ""}
                    onClick={() => setFilter("all")}
                >
                    Все
                </button>
                <button
                    className={filter === "Ability1" ? "active" : ""}
                    onClick={() => setFilter("Ability1")}
                >
                    Способность 1
                </button>
                <button
                    className={filter === "Ability2" ? "active" : ""}
                    onClick={() => setFilter("Ability2")}
                >
                    Способность 2
                </button>
                <button
                    className={filter === "Grenade" ? "active" : ""}
                    onClick={() => setFilter("Grenade")}
                >
                    Способность 3
                </button>
                <button
                    className={filter === "Ultimate" ? "active" : ""}
                    onClick={() => setFilter("Ultimate")}
                >
                    Способность 4
                </button>
            </div>

            <ul className="ability-list">
                {filteredAbilities.map((ability) => (
                    <li key={ability.displayName} className="ability-item">
                        <h3>{ability.displayName}</h3>

                        <p>{ability.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
