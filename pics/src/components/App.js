import React from 'react';
import SearchBar from './SearchBar';
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {

    onSearchSubmit(term){
        console.log('here is the term caught in App:');
        console.log(term);
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
    
}

export default App;