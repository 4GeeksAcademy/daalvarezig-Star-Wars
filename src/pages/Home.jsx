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
	  <>	
		<div className="text-center mt-5">
			<h1 className="text-white mt-4">
				<img src="https://w0.peakpx.com/wallpaper/799/369/HD-wallpaper-star-wars-logo-for-your-mobile-tablet-explore-star-wars-logo-star-wars-jedi-logo-star-wars-empire-logo.jpg"
					 className= "img-fluid rounded-4 d-block mx-auto w-25 mb-5"
					 alt= "Star Wars Lite DB"
					 data-bs-toggle="modal"
					 data-bs-target="#swModal"
					 style={{ cursor: "pointer", width: "200px"}}
				/>		 
			</h1>
		</div>

		<div className="modal fade" id="swModal" tabIndex="-1" aria-hidden="true">
		  <div className="modal-dialog modal-dialog-centered modal-lg">
			<div className="modal-content bg-transparent text-warning">
				
				<div className="modal-header border-bottom-0 justify-content-center position-relative">
					<h5 className="modal-title w-100 text-center">Categorias</h5>
				</div>	
					
				 <div className="modal-body">
				  <div className=" d-flex justify-content-center gap-4">
				  
				  <div className="d-flex flex-column align-items-center">
					<p className="mb-2">Personajes</p>
					<img src="https://wallpapers.com/images/featured-full/personajes-de-star-wars-rzma8krur1w1m4rn.jpg"
					onClick={() => setCategory("people")}
					className="img-fluid rounded shadow"
					style={{ width: "140px", cursor:"pointer" }}
					data-bs-dismiss="modal"
					/>
				  </div>

				  <div className="d-flex flex-column align-items-center">	
					<p className="mb-2">Planetas</p>
					<img src="https://wallpapers.com/images/high/star-wars-space-background-midf3y73f8dhsj3t.webp"
					onClick={() => setCategory("planets")}
					className="img-fluid rounded shadow"
					style={{ width: "140px", cursor:"pointer" }}
					data-bs-dismiss="modal"
					/>
				  </div>	

				  <div className="d-flex flex-column align-items-center">	
					<p className="mb-2">Vehiculos</p>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASyZAqOUGxbYbu07emWkDY9MM3ohZDhKXFg&s"
					onClick={() => setCategory("vehicles")}
					className="img-fluid rounded shadow"
					style={{ width: "140px", cursor:"pointer" }}
					data-bs-dismiss="modal"
					/>
				  </div>	

				 </div>	
				</div> 

			
      	    </div>	
		  </div>
		</div>  
	</>	
  );
}; 