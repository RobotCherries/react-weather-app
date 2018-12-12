// Default
import React from 'react'



export class ZipForm extends React.Component {
  // Constructor
  constructor(props) {
    super(props)

    // States
    this.state = {
      zipcode: ''
    }

    // Bindings
    this.inputUpdated = this.inputUpdated.bind(this)
    this.submitZipCode = this.submitZipCode.bind(this);
  }
  
  // Functions
  submitZipCode(e) {
    e.preventDefault()

    const { zipcode } = this.state
    const { onSubmit } = this.props

    onSubmit(zipcode);
    this.setState({ zipcode: '' })
  }

  inputUpdated(e) {
    const { value } = e.target;
    
    this.setState({ zipcode: value })
  }

  // Render
  render() {
		return (
			<div className="zip-form">
				<form onSubmit={this.submitZipCode}>
					<label htmlFor="zipcode">Zip Code</label>
          <input 
            className="form-control" 
            type="input" 
            name="zipcode"
            value={this.state.zipcode}
            onChange={this.inputUpdated}
          />
					<button type="submit" className="btn btn-success">Get the forecast!</button>
				</form>
			</div>
		)
	}
}

export default ZipForm
