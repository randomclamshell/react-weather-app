import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';
import './App.css';
const apiKey = `${process.env.REACT_APP_apiKey}`;


class App extends React.Component {
  //setting the initial state
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    //target the names in the input fields in the form 
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    //set up api 
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`);
    const data = await apiCall.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a place to search!"
      })
    }

  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />

        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
