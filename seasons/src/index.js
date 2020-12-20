import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {

    constructor(props){
        super(props);

        this.state = { 
            lat: null,
            long: null,
            errorMessage: ''
        }

        window.navigator.geolocation.getCurrentPosition(
            (position) => { 
                console.log(position)
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });
            },
            (error) => { 
                console.log(error);

                this.setState( {errorMessage: error.message });
            }
        );
    }

    render (){
        return <div>
            <div>Lattitude: {this.state.lat}</div> 
            <div>Longitude: {this.state.long}</div> 
            <div>Error Message: {this.state.errorMessage}</div>
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)