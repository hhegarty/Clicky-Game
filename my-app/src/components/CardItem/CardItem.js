import React from 'react';

import './CardItem.css';

const CardItem = props => (
  <div
    onClick={() => props.imageClick(props.character.id)}
   
  >
    <div className='img-container'>
      <img
        title={props.character.name}
        alt={props.character.name}
        src={props.character.image}
        className='img-thumbnail'
      />
    </div>
  </div>
);

export default CardItem;