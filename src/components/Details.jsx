import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './Details.scss';

const Details = () => {
  return (
    <div className='section section__details'>
      <div className='card'>
        <div className='details__card-icon'>
          <ArrowDownwardIcon />
          <small>min</small>
        </div>
        <h2>32 F</h2>
      </div>
      <div className='card'>
        <div className='details__card-icon'>
          <ArrowDownwardIcon />
          <small>min</small>
        </div>
        <h2>32 F</h2>
      </div>
      <div className='card'>
        <div className='details__card-icon'>
          <ArrowDownwardIcon />
          <small>min</small>
        </div>
        <h2>32 F</h2>
      </div>
      <div className='card'>
        <div className='details__card-icon'>
          <ArrowDownwardIcon />
          <small>min</small>
        </div>
        <h2>32 F</h2>
      </div>
    </div>
  )
};

export default Details;
