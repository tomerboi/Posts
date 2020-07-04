import React from 'react';

import './Post.css';

const post = (props) => (
    <div onClick={props.clicked}>
        <article className="Post">
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    </div>
);

export default post;