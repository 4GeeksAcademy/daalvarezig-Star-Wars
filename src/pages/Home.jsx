import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Hello Ewook!!</h1>
			<p>
				<img src="https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/30.jpg" />
			</p>
		</div>
	);
}; 