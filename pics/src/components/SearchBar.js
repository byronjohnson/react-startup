import React from 'react';

class SearchBar extends React.Component {
    

    state = {
        term: ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        
        // Pass the search term to the App parent component
        this.props.onSubmit(this.state.term);
    }
    

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={ (e) => { this.setState({ term: e.target.value })} } />
                    </div>
                    <div>{this.state.term}</div>
                </form>
            </div>
        )
    }
}

export default SearchBar;