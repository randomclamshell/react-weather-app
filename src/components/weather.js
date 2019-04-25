import React from 'react';
import './style.css'
const Weather = props => (
     //we set up a conditional statement to only render below if the fields are valid
     <div className="weather">
               { props.city && props.country && <p> Location: { props.city }, { props.country } </p> }
               { props.temperature && <p> Temperature: { props.temperature } °F </p> }
               { props.humidity && <p> Humdity: { props.humidity } </p> }
               { props.description && <p> Conditions: { props.description } </p> }
               { props.error && <p> { props.error } </p> }
     </div>
)

export default Weather;