import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import Searchbox from '../components/Searchbox';
import '../containers/App.css';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

function App(){

    //utilizzo degli hook
    //Quest’ultimimi dichiarano “variabili di stato”
    const [robots, setRobots] = useState([]); //variabile robots --> () passando lo stato iniziale che in questo caso corrispondo ad una variabile vuota
    const [searchField, setSearch] = useState(''); //variabile searchField --> idem per questa variabile
    //N.B: A differenza delle classi, lo state non deve essere un oggetto. Possiamo tenere un numero o una stringa se è quello di cui abbiamo bisogno. 
    
    //Cosa ritorna useState? Ritorna una coppia  di valori: lo stato corrente ed una funzione che lo aggiorna. 
    //Questo è il motivo per cui scriviamo const [contatore, setContatore] = useState(). 
    //E’ simile a this.state.contatore e this.setState in una classe, eccetto per il fatto che li ottieni in coppia. 


    //componentDidMount è un componente di react chiamato LyfeCicle component il quale rirenderizza la pagina senza il bisogno
    //di essere richiamato.

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users') //richiesta al server
        .then(response => response.json()) //conversione della risposta in Json
        .then(users => {setRobots(users)}); //lettura ed assegnazione dei valori ricevuti alla variabile State
    },[]) //use effect continuerebbe a rederizzare all'infinito, motivo per cui accetta un secondo parametro.
    //sarebbe la logica equilvalente al "vecchio" ComponentDidMount.

    //useEffect indica a React che il componente necessità di far qualcosa dopo il render e verrà quindi chiamato successivamente
    //alla renderizzazione del DOM

    const onSearchChange = (e) => {
        setSearch(e.target.value) //Accetta il parametro per il cambiamento dello State
    }
    
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

    return !robots.length ? 
        <h1 className="title">Page Loading...</h1> :
    (
            <div>
                <h1 className="title">Robo Friends</h1>
                <Searchbox searchChange={onSearchChange}/>
                <Scroll >
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
    )
}

export default App;
