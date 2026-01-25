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

						{store.favorites.length === 0 && (
							<li className="dropdown-item text-muted">No hay favoritos</li>
						)}

						{store.favorites.map((fav, index) => (
							<li
								key={index}
								className="dropdown-item d-flex justify-content-between align-items-center"
							>
								<span
									onClick={() =>
										navigate(`/details/${fav.category}/${fav.uid}`)
									}
									style={{ cursor: "pointer" }}
								>
									{fav.name || "Sin nombre"}
									<small className="text-muted"> ({fav.category})</small>
								</span>

								<i
									className="fa-solid fa-trash text-danger"
									onClick={() =>
										dispatch({ type: "toggle_favorite", payload: fav })
									}
									style={{ cursor: "pointer" }}
								></i>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
