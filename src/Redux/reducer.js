import { INCREMENTAR, GET_USERS, DECREMENTAR, GET_ALL_HOUSES} from "./actions";

const initialState = {
    users: [],
    contador: 0,
    houses: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case GET_USERS:
            return{
                ...state,
                users: action.payload
            }

        case INCREMENTAR:
            return{
                ...state,
                contador: state.contador+1
            }
        case DECREMENTAR:
            return{
                ...state,
                contador: state.contador - 1
                }
        case GET_ALL_HOUSES:
            return{
                ...state,
                houses: action.payload
                }
        default: 
        return{
            ...state
        }
    }
}
export default reducer;