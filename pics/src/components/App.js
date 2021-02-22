import React from 'react';
import unsplash from '../api/unsplash.js';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import "semantic-ui-css/semantic.min.css";


class App extends React.Component {

    // State
    state = {
        images: []
    }

    // API Requests
    onSearchSubmit = async (term) => {
        console.log(term);

        const response = await unsplash.get( 'search/photos',
            {
                params: {
                    query: term
                }
            }
        );

        this.setState({ images: response.data.results });
    }

    // Render Method
    render(){
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div>{this.state.images.length} found</div>

                <ImageList images={this.state.images} />
            </div>
        );
    }
    
}

export default App;