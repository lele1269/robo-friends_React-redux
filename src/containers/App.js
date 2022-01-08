import React, {Component} from "react";
import CardList from "../components/CardList";
import Searchbox from '../components/Searchbox';
import '../containers/App.css';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import {requestRobots, setSearchField} from '../components/action'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

/*    constructor(){
        super()
        this.state = {
            robots:[],
            searchField: ''
        }
    }

*/

    //componentDidMount è un componente di react chiamato LyfeCicle conmponent il quale rirenderizza la pagina senza il bisogno
    //di essere richiamato.
    componentDidMount(){
         /*
        fetch('https://jsonplaceholder.typicode.com/users') //richiesta al server
        .then(response => response.json()) //conversione della risposta in Json
        .then(users => this.setState({ robots: users })); //lettura ed assegnazione dei valori ricevuti alla variabile State
        */
       this.props.onRequestRobots() 
    }


    render(){
        // const {robots} = this.state
        const {searchField, onSearchChange, robots, isPending} = this.props
            const filteredRobots = robots.filter(robot =>{
                return robot.name.toLowerCase().includes(searchField.toLowerCase())
            })
        // return !robots.length ?
            return isPending ?
           <h1 className="title">Page Loading...</h1> :
            (<div>
                <h1 className="title">Robo Friends</h1>
                <Searchbox searchChange={onSearchChange}/>
                <Scroll >
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>)
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(App);
//higher order function. Funzione che ritorna un altra funzione.
//Questa è la sintassi da seguire.
//connect accetta due parametri: mapStateToProps e mapDispatchToProps