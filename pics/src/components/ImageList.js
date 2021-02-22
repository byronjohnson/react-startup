import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    console.log(props.images);

    const myimages = props.images.map( (image) => {
       return <ImageCard key={image.id} image={image} />
    })

    return <div class="image-list">{myimages}</div>
}

export default ImageList;