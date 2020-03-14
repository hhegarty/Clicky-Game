import React from 'react';

import './CardList.css';
import CardItem from '../CardItem';

const CardList = props => (
  <div className='container'>
    <div className='row'>
      {props.characters.map((character, index) => (
        <CardItem key={character.id} imageClick={props.imageClick} character={character} />
      ))}
    </div>
  </div>
);

export default CardList;