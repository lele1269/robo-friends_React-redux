import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants.js"

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

//questa funzione riceverà come paramentro un dato di tipo testo e ritornera un oggetto che avrà
// la proprietà type --> l'azione che dovrà essere eseguita e payload --> spedisce i dati al reducer


export const requestRobots = ()=> (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload: err}))
}