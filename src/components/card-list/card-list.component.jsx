import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
  <div className="card-list">        
  {props.tracks.map(track => (
    <Card key={track.id} track={track} />
    ))}
  </div>
);