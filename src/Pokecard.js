import React from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard(props) {
    let imgSrc = `${POKE_API}${props.id}.png`;
    return (
        <div className="Pokecard">
            <div className="Pokecard-name">{props.name}</div>
            <img className="Pokecard-image" src={imgSrc} alt={props.name} />
            <div className="Pokecard-info">Type: {props.type}</div>
            <div className="Pokecard-info">Exp: {props.base_experience}</div>
        </div>
    );
}

export default Pokecard;
