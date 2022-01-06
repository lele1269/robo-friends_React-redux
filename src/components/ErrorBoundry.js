import React, {Component} from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
            //per far si che lo stato di hasError cambi è necessario un metodo dato da un LifeCicle hook  method nativo in react
            //chiamato componentDidCatch che funziona in modo molto simile al blocco try/catch nativo in JS
        }
    }

    componentDidCatch(error, info){
        //questo life cicle hook riceve due paramentri: error e info.
        this.setState({hasError: true})
        //se riceve un errore cambia lo stato da false a TRUE
    }


    render(){
        //con il ciclo if si verifica se lo state è in errore
        // se vero ritorna un messaggio di errore
        //se falso riceve i "figli" come props
        if(this.state.hasError){
            return <h1>Oooops an error occured</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;