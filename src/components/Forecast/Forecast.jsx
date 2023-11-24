import styles from './Forecast.module.css'
import iconLacation from './Images/location.png'
import PropTypes from "prop-types";

const Forecast = ({weather}) => {
  if (weather != null) {
    let temp = Math.round(weather.temp);
    return (
      <div className={styles.container}>
        <div className={styles.flex2}>
          <p className={styles.sky}>{weather.sky}</p>
        </div>
        <div className={styles.flex2}>
          <div className={styles.flex2}>
            <p className={styles.temp}>{temp}&deg;</p>

            <img
              width="2px"
              height="100px"
              src={"http://openweathermap.org/img/wn/01n@2x.png"}
              alt="icon"
            />
            <div>
              <p> {new Date().toDateString()}</p>
              <div>
                <img
                  width="15px"
                  height="17px"
                  src={iconLacation}
                  alt="location"
                />

                <span className={styles.city}>{weather.city} </span>

                <span className={styles.country}>, {weather.country}</span>
              </div>
            </div>
          </div>
          <img
            width="100px"
            height="100px"
            src={`http://openweathermap.org/img/wn/${weather.image}@2x.png`}
            alt="icon"
          />
        </div>
      </div>
    );
  };
}

export default Forecast;
Forecast.propTypes = {
  weather: PropTypes.string
}
