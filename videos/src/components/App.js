import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    // Set default videos when the ap loads
    componentDidMount(){
        this.onTermSubmit('outkast');
    }

   onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            'params': {
                'q': term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })

        console.log(response);
   };

   onVideoSelect = (video) => {
       this.setState( {
           selectedVideo: video
        });
        console.log('From the App', video);
   };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail selectedVideo={this.state.selectedVideo} />
                </div>
                <div className="five wide column">
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                </div>
                
            </div>
        </div>
      </div>
    );
  }
}

export default App;
