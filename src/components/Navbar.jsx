import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <div className="container-fluid">

                {/* LOGO */}
                <Link to="/" className="navbar-brand text-warning">
                    Star Wars
                </Link>

                {/* FAVORITOS */}
                <div className="dropdown ms-auto">
                    <button 
                        className="btn btn-warning dropdown-toggle" 
                        type="button" 
                        data-bs-toggle="dropdown"
                    >
                        Favoritos ({store.favorites.length})
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end">
                        
                        {/* Si no hay favoritos */}
                        {store.favorites.length === 0 && (
                            <li className="dropdown-item text-muted">
                                Vacío...
                            </li>
                        )}

                        {/* Lista dinámica */}
                        {store.favorites.map((favId, index) => {

                            // Buscar el elemento en characters / planets / vehicles
                            const allItems = [
                                ...store.characters, 
                                ...store.planets, 
                                ...store.vehicles
                            ];

                            const item = allItems.find(i => i.uid === favId);

                            if (!item) return null;

                            return (
                                <li 
                                    key={index} 
                                    className="dropdown-item d-flex justify-content-between align-items-center"
                                >
                                    {/* Ir al detalle */}
                                    <span 
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            // Detectar categoría
                                            let category = "people";
                                            if (store.planets.some(p => p.uid === item.uid)) category = "planets";
                                            if (store.vehicles.some(v => v.uid === item.uid)) category = "vehicles";

                                            navigate(`/details/${category}/${item.uid}`);
                                        }}
                                    >
                                        {item.name}
                                    </span>

                                    {/* Botón borrar */}
                                    <i 
                                        className="fa-solid fa-trash text-danger ms-2"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => 
                                            dispatch({ type: "toggle_favorite", payload: item.uid })
                                        }
                                    ></i>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
