import React from 'react'
import strengthMeter from '../lib/strengthMeter'
import './App.css'


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      password: ''
    }
  }

  handleInputChange(event){
    this.setState({ password: event.target.value })
  }

  render(){
    const indicateStrength = strengthMeter(this.state.password)
    return(
      <div>
        <input
        type="password"
        onChange={this.handleInputChange}
        className={ indicateStrength }
        />
        <span className={ indicateStrength }>{ indicateStrength }</span>
      </div>
    )
  }
}


module.exports = App
