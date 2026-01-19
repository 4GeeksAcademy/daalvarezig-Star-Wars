// Initial Store

export const initialStore=()=>{
  return{
    message: null,
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

// Reducer

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case "load_people":
      return {
        ...store,
        people: action.payload
      };

    case "load_planets":
      return {
        ...store,
        planets: action.payload
      };
      
    case "load_vehicles":
      return {
        ...store,
        vehicles: action.payload
      };

    case "add_favorite":
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };
      
    case "remove_favorite":
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav !== action.payload)
      };  

    default:
      throw Error('Unknown action.');
  }    
}

//Acciones

export async function getPeople(dispatch) {
  try {
    const response = await fetch("https://www.swapi.tech/api/people");  //URL
    const data = await response.json();

    dispatch({
      type: "load_people",      // Reducer Type
      payload: data.results     // Qué enviamos al store
    });

  } catch (error) {
     console.error(error);
  }
}

export async function getPlanets(dispatch) {
  try {
    const response = await fetch("https://www.swapi.tech/api/planets");
    const data = await response.json();

    dispatch({
      type: "load_planets",
      payload: data.results
    });

  } catch (error) {
     console.error(error);
  }
}

export async function getVehicles(dispatch) {
  try {
    const response = await fetch("https://www.swapi.tech/api/vehicles");
    const data = await response.json();

    dispatch({
      type: "load_vehicles",
      payload: data.results
    });

  } catch (error) {
     console.error(error);
  }
}