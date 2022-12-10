export const INCREMENTAR = "INCREMENTAR";
export const DECREMENTAR = "DECREMENTAR";
export const GET_USERS = "GET_USERS";
//*************************************************************************************** */
export const GET_ALL_HOUSES = "GET_ALL_HOUSES";


export const incrementar = () => {
    return {
        type: INCREMENTAR
    }
}
export const decrementar = () => {
    return {
        type: DECREMENTAR
    }
}

//action creator hecha para obtener los personajes de una api
export const getUsers = () => {
    //hay que pedir info a la api entonces retorno la funcion que va a recibir dispatch
    return function(dispatch){
        //aca hago el fetch 
        fetch("https://rickandmortyapi.com/api/character/?page=1")
            .then((response) => response.json())
            .then((data) => dispatch({type: GET_USERS, payload: data}))
    }
};
//*************************************************************************************************** */
export const getAllHouses = () => {
    return function(dispatch){
        fetch("http://localhost:3001/houses")
            .then((response) => response.json())
            .then((data) => console.log(data))
            
    }
};