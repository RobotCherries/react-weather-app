// Default
import React from 'react'
// APIs
import { get } from 'axios';
// Components
import ZipForm from './ZipForm'
import WeatherList from './WeatherList';



class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);
  
    // States
    this.state = {
      zipcode: '',
      city: {},
      dates: [],
      selectedDate: null
    }

    // Bindings
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onDayClicked = this.onDayClicked.bind(this)
  }

  // Functions
  onFormSubmit(zipcode) {
    get(`http://localhost:3000/weather/${zipcode}`)
    .then(({ data }) => {
      const { city, list: dates } = data
  
      this.setState({ zipcode, city, dates, selectedDate: null })
    })
  }

  onDayClicked(dayIndex) {
    this.setState({ selectedDate: dayIndex})
  }

  // Render
  render() {
    return (
      <div className="app">
        <ZipForm onSubmit={this.onFormSubmit} />
        <WeatherList days = {this.state.dates} onDayClicked={this.onDayClicked} />
      </div>
    )
  }
}

export default App