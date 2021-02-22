import React from 'react';

const ImageList = (props) => {
    console.log(props.images);

    const myimages = props.images.map( (image) => {
       return (
            <div key={image.id}>
                <img src={image.urls.thumb} alt={image.description} />
                <div>{image.user.first_name}  {image.user.last_name}</div>
            </div>
       ) 
    })

    return(
        <div>{myimages}</div>
    )
}

export default ImageList;