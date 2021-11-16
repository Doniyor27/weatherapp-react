import './ActiveCityBtn.scss';

const ActiveCityBtn = ({cityName,onClick,active}) => {
  return (
    <button
      className={`city-switcher-btn ${active ? 'active' : 'active'}`}
      onClick={onClick}>
      {cityName}
    </button>
  )
}

export default ActiveCityBtn;