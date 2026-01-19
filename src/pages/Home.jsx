import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getPeople, getPlanets, getVehicles } from "../store.js";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer();

  useEffect (() => {
	getPeople(dispatch);
	getPlanets(dispatch);
	getVehicles(dispatch);
  }, []);

	return (
		<div className="text-center mt-5">
			<h1>Star Wars Lite DB</h1>

				<img src="https://wallpapers.com/images/featured-full/personajes-de-star-wars-rzma8krur1w1m4rn.jpg"
					 className= "img-fluid rounded-4 d-block mx-auto w-25 mb-5"
					 alt= "Star Wars"
				/>		 
		</div>
	);
}; 