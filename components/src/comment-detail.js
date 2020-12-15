import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return(
        <div className="comment">
            <a className="avatar" href="">
                <img alt="avatar" src={faker.image.animals()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Sam
                </a>
                <div className="metadata">
                    <span className="date"></span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    );
}

export default CommentDetail;