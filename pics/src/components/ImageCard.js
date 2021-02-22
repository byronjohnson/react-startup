import React from 'react';

class ImageCard extends React.Component {

    constructor(props){
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    };

    render(){
        return ( <div>
            <img ref={this.imageRef} src={this.props.image.urls.thumb} alt={this.props.image.description} />
            <div>{this.props.image.user.first_name}  {this.props.image.user.last_name}</div>
        </div>
        );
    };

}

export default ImageCard;