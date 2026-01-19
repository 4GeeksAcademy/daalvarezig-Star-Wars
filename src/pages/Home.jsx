import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacters, getPlanets, getVehicles } from "../store.js";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer();

  useEffect (() => {
	getCharacters(dispatch);
	getPlanets(dispatch);
	getVehicles(dispatch);
  }, []);

	return (
		<div className="text-center mt-5">
			<h1 className="text-white mt-4">Star Wars Lite DB</h1>
				<img src="https://wallpapers.com/images/featured-full/personajes-de-star-wars-rzma8krur1w1m4rn.jpg"
					 className= "img-fluid rounded-4 d-block mx-auto w-25 mb-5"
					 alt= "Star Wars"
				/>		 


			{/*======== characters =========*/}		
			<h2 className="text-white mt-4">Characters</h2>

			<div className="d-flex overflow-auto">
				{store.characters.map((c) => (
				  <div className="card m-2" style={{ width: "18rem" }} key={c.uid}>

						<img src={`https://starwars-visualguide.com/assets/img/characters/${c.uid}.jpg`}
						className="card-img-top"
						alt={c.name}
						/>
					<div className="card-body">
						<h5 className="card-title">{c.name}</h5>
						<p className="card-text">Character description placeholder</p>

						<button className="btn btn-primary">Details</button>
						
					</div>	
				  </div>
				))}
			</div>
			{/*======== Planets =========*/}		
			<h2 className="text-white mt-4">Planets</h2>


			{/*======== Vehicles =========*/}		
			<h2 className="text-white mt-4">Vehicles</h2>
		</div>


	);
}; 