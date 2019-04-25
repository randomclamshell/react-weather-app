import React from 'react';
import './style.css';

const Form = props => (
   
     <form onSubmit={ props.getWeather }>
     <input type="text" name="city" placeholder="City" />
     <br />
     <input type="text" name="country" placeholder="Country" />
     <br />
     <button>Get Weather</button>
</form>
)

export default Form;