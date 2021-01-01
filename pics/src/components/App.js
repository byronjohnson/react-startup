import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import "semantic-ui-css/semantic.min.css";


class App extends React.Component {

    async onSearchSubmit(term){
        console.log('here is the term caught in App:');
        console.log(term);

        const unsplashEndpoint = 'https://api.unsplash.com/search/photos';

        const response = await axios.get(
            unsplashEndpoint,
            {
                params: {
                    query: term
                },
                headers: {
                    Authorization: 'Client-ID baAsnw73DRkWDm1BAgMWnzjpyQogI5qSULI51HWTeNc'
                }
            }
        );

        console.log(response.data);
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