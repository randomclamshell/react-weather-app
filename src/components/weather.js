import React from 'react';

const Weather = props => (
     //we set up a conditional statement to only render below if the fields are valid
     <div>
               { props.city && props.country && <p> Location: { props.city }, { props.country } </p> }
               { props.temperature && <p> Temperature: { props.temperature } °F </p> }
               { props.humidity && <p> Humdity: { props.humidity } </p> }
               { props.description && <p> Conditions: { props.description } </p> }
               { props.error && <p> { props.error } </p> }
     </div>
)

export default Weather;