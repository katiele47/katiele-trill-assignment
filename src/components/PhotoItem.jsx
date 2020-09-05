import React from 'react';

export default function PhotoItem(props) {
    return (
        <div className="photo-item">
            <div className="img-wrapper">
                <img src={props.imgSrc}></img>
            </div>
            <h4>{props.description}</h4>
        </div> 
    );
}