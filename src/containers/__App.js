import React, {Component} from "react";
import CardList from "../components/CardList";
import Searchbox from '../components/Searchbox';
import '../containers/App.css';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";



class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:[],
            searchField: '',
        }
    }
    //componentDidMount è un componente di react chiamato LyfeCicle conmponent il quale rirenderizza la pagina senza il bisogno
    //di essere richiamato.
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users') //richiesta al server
        .then(response => response.json()) //conversione della risposta in Json
        .then(users => this.setState({ robots: users })); //lettura ed assegnazione dei valori ricevuti alla variabile State
    }

    onSearchChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render(){
        const {robots, searchField} = this.state
            const filteredRobots = robots.filter(robot =>{
                return robot.name.toLowerCase().includes(searchField.toLowerCase())
            })
        return !robots.length ?
           <h1 className="title">Page Loading...</h1> :
            (<div>
                <h1 className="title">Robo Friends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll >
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>)
        }
    }

export default App