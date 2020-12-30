import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import "semantic-ui-css/semantic.min.css";


class App extends React.Component {

    // constructor(props){
    //     super(props);

    //     this.state = { 
    //         lat: null,
    //         long: null,
    //         errorMessage: ''
    //     }

        
    // }

    state = { 
        lat: null,
        long: null,
        errorMessage: ''
    }   

    componentDidMount(){
        console.log('my component was rendered to the screen');

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

    componentDidUpdate(){
        console.log('my component was updated');
    }

    render (){

        if(this.state.errorMessage && !this.state.lat){
            return <div>
                <div>Error Message: {this.state.errorMessage}</div>
            </div>
        } else if(!this.state.errorMessage && this.state.lat){
            // return <div>
            //     <div>Lattitude: {this.state.lat}</div> 
            //     <div>Longitude: {this.state.long}</div> 
            // </div>

            return <SeasonDisplay 
                lat = {this.state.lat}
                long = {this.state.long}
            />
        } else {
            return <Spinner />
        }

        
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)