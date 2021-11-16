import ActivCityBtn from '../../components/ActiveCityBtn/ActiveCityBtn';

import './CitySwitcher.scss';

const citiesArr = [
  'tashkent',
  'riyadh',
  'algeria',
  'cairo',
  'amman',
  'mali',
  'rabat',
  'kuala lumpur',
  'stambul'
];

const CitySwitcher = ({setActiveCity,activeCity}) => {
  return (
    <div className="city-switcher">
      {
        citiesArr.map((city,index) => (
          <ActivCityBtn
            cityName={city}
            key={index}
            onClick={() => setActiveCity(city)}
            active={activeCity == city}
          />
        ))
      }
    </div>
  )
}

export default CitySwitcher;
