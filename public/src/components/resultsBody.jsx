import React from 'react';
import LargeMovieTile from './largeMovieTile.jsx';

const ResultsBody = props => (
  <div>
    <LargeMovieTile className="results-large-tile" movie={props.movie} />
  </div>
);


export default ResultsBody;
