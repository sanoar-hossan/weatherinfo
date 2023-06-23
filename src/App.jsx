import { useState } from "react"


function App() {
 
const [city,setCity]=useState();
const [weather,setWeather]=useState();
const search = (e) => {
  if (e.key === 'Enter') {
    const city = e.target.value; // Assuming you have an input field where the user enters the city name

    fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      
        console.log(weather);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });


      fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`)
      .then(res=>res.json())
      .then(data=>console.log(data))

  }
};

console.log(city);



 
  

  return (
    <>
    <h1>lets build weather api</h1>
    <input type="text" placeholder="Search" 
    onChange={(e)=>setCity(e.target.value)}
    value={city}
    onKeyDown={search}
    />
{
  weather?.current ? weather.current.condition.text : "Your city name is not correct"
}

<div>
  <button className="btn btn-primary">to get 7 days weather</button>
</div>
      
    </>
  )
}

export default App
