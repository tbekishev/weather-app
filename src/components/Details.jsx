import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CompressIcon from '@mui/icons-material/Compress';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import './Details.scss';

const Details = ({ weather, units }) => {

  const tempUnit = units === 'metric' ? '°C': '°F';
  const windUnit = units === 'metric' ? 'm/s': 'm/h';

  const cards = [
    {
      id: 1,
      icon: <ArrowDownwardIcon />,
      title: 'min',
      data: weather.temp_min.toFixed(),
      unit: tempUnit
    },
    {
      id: 2,
      icon: <ArrowUpwardIcon />,
      title: 'max',
      data: weather.temp_max.toFixed(),
      unit: tempUnit
    },
    {
      id: 3,
      icon: <InsertEmoticonIcon />,
      title: 'feels like',
      data: weather.feels_like.toFixed(),
      unit: tempUnit
    },
    {
      id: 4,
      icon: <CompressIcon />,
      title: 'pressure',
      data: weather.pressure,
      unit: 'hPa'
    },
    {
      id: 5,
      icon: <WaterDropIcon />,
      title: 'humidity',
      data: weather.humidity,
      unit: '%'
    },
    {
      id: 6,
      icon: <AirIcon />,
      title: 'wind speed',
      data: weather.speed.toFixed(),
      unit: windUnit
    }
  ]

  return (
    <div className='section section__details'>
      {cards.map(({ id, icon, title, data, unit}) => (
        <div key={id} className='card'>
          <div className='details__card-icon'>
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>        
      ))}
    </div>
  )
};

export default Details;
