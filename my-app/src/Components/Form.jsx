import {useState} from 'react'
import axios from 'axios'
import Result from './Result';

function Form() {
    const [location, setLocation] = useState({
        city: '',
        country: ''
    })
    const [isCalled, setCall] = useState(false)

    const [details, setDetails] = useState(
        {
          temp: null,
          humidity: null,
          cloud: null,
          wind_speed: null,
          wind_dir: null,
          condition: null,
          img: null,
          feelsLike: null,
          wind_degree: null
        }
    )
    let inputText = {
        border: '2px solid orange',
        padding: '10px',
        fontSize: '20px',
        outline: 'none',
        fontFamily: 'cursive'
    }
    let inputButton = {
        padding: '10px',
        fontSize: '20px',
        backgroundColor: 'orange',
        color: 'white',
        outline: 'none',
        border: 'none',
        marginLeft: "10px",
        fontFamily: 'cursive',
        boxShadow: '1px 2px 1px 2px black',
        cursor: 'pointer'
    }
    let container = {
        position: "relative",
        top: '-50px'
    }
    const handleAPI = (event) => {
        event.preventDefault();
        const city = event.target.city_name.value;

        axios.get('http://api.weatherapi.com/v1/current.json?key=4f2aa6c0f2bf4bc186151423232205&q='+city+'&aqi=no')
        .then((res)=>[setLocation({city: res.data.location.name, country: res.data.location.country}), setDetails({temp:res.data.current.temp_c, humidity: res.data.current.humidity, cloud: res.data.current.cloud, wind_dir: res.data.current.wind_dir, condition: res.data.current.condition.text, wind_speed: res.data.current.wind_kph, img: res.data.current.condition.icon, feelsLike: res.data.current.feelslike_c, wind_degree: res.data.current.wind_degree}), setCall(true)])
        .catch((err)=>console.log(err.message))
      }

    return (
        <div className='container' style={container}>
        <form onSubmit={handleAPI}>
            <input type='text' style={inputText} placeholder='City/State/Country' name='city_name'/>
            <input type='submit' style={inputButton} value='CHECK'/>
        </form>

        <Result location={location} details={details} apiCall={isCalled}/>
        </div>
    )
}

export default Form
