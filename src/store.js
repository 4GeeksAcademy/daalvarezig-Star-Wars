// Initial Store

export const initialStore=()=>{
  return{
    message: null,
    characters: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

// Reducer

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case "load_characters":
      return {
        ...store,
        characters: action.payload
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

    case "toggle_favorite":
      return {
        ...store,
        favorites: store.favorites.includes(action.payload)
            ? store.favorites.filter(f => f !== action.payload)
            : [...store.favorites, action.payload]
      };  

    default:
      throw Error('Unknown action.');
  }    
}

//Acciones

export async function getCharacters(dispatch) {
  try {
    const response = await fetch("https://www.swapi.tech/api/people");  //URL
    const data = await response.json();

    dispatch({
      type: "load_characters",      // Reducer Type
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