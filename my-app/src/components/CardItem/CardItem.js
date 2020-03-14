import React from 'react';

import './CardItem.css';

const CardItem = props => (
  <div
    onClick={() => props.imageClick(props.character.id)}
    className='card-box col-4 col-xs-4 col-sm-4 col-md-4 col-lg-2'
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