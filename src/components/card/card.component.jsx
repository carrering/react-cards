import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img src={`https://robohash.org/${props.track.id}?set=set2&size=180x180`} alt="track"/>
    <h2> {props.track.name} </h2>
    <p>{ props.track.email }</p>
  </div>
)