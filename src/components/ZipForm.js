// Default
import React, { Component } from 'react'



export class ZipForm extends Component {
  // Constructor
  constructor(props) {
    super(props)

    this.state = {
      zipcode: ''
    }

    this.inputUpdated = this.inputUpdated.bind(this);
  }
  
  // Functions
  inputUpdated(e) {
    const { value } = e.target;

    this.setState({ zipcode: value });
  }

  // Render
  render() {
		return (
			<div className="zip-form">
				<form>
					<label htmlFor="zipcode">Zip Code</label>
          <input 
          className="form-control" 
          type="input" 
          name="zipcode"
          value={this.state.zipcode}
          onInput={this.inputUpdated}
          />
					<button type="submit" className="btn btn-success">Get the forecast!</button>
				</form>
			</div>
		)
	}
}

export default ZipForm
