import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className="card bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/id/${id}?size=250x250`}></img>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}

export default Card;