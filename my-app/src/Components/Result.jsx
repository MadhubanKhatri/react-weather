import React from 'react'
import './MyStyle.css';

function Result(props) {
    let divStyle = {
        width: '450px',
        backgroundColor: 'black',
        height: 'auto',
        marginTop: '50px',
        borderLeft: '5px solid orange',
        borderRight: '5px solid orange',
        fontFamily: 'cursive'
    }
  return (
    <div>
        {
            props.apiCall && 
    
      <div style={divStyle}>
        <h5 className='heading city'>{props.location.city}/{props.location.country}</h5>
        <h3 className='heading temp'>{props.details.temp} C</h3>
        <h5 className='heading img'>
            <img src={props.details.img}/>
        </h5>

        <table width='100%'>
            <tr>
                <td>Wind Speed: {props.details.wind_speed} Kmh</td>
                <td>Humidity: {props.details.humidity}</td>
            </tr>
            <tr>
                <td>Cloud: {props.details.cloud}</td>
                <td>Wind Dir: {props.details.wind_dir}</td>
            </tr>
            <tr>
                <td>Feels Like: {props.details.feelsLike}</td>
                <td>Wind Degree: {props.details.wind_degree}</td>
            </tr>
        </table>
        
      </div>
}
    </div>
    
  )
}

export default Result