import styles from './Page.module.css'
import Header from "../Header/index.js";
import Form from "../Form/index.js";
import {useEffect, useState} from "react";
import Loader from "../Loader/index.js";
import Forecast from "../Forecast/index.js";


const APIkey = "0f6b1108c66072677c895afbc93c473c"
const Page = () => {
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const getData = (city) => {
    setIsLoading(true)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
      .then(res => res.json())
      .then(data => {
        setWeather({
          temp: data.main.temp,
          sky: data.weather[0].description,
          city: data.name,
          image: data.weather[0].icon,
          country: data.sys.country
        })
        setIsError(false)
        console.log(1111)
      })
      .catch((error) => {
        console.log(2222)
        setIsError(true)

      })
      .finally(()=>{
        setIsLoading(false)
      })
  }
  useEffect(() => {
    getData("bishkek")
  }, []);


  return (
    <div className={styles.box}>
      <Header/>
      <Form getData={getData}/>


      {isLoading ?
        <Loader/>
        : isError ? 'error' :
          <Forecast weather={weather}/>}

    </div>
  );
};

export default Page;