import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { selectDrone } from '../actions/ingredients'

class DroneForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: 'initial'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const drone = this.state.value;
    if (this.state.value!=="initial") this.props.selectDrone(drone)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="initial">Turbo-drone-delivery?</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </label>
        <input type="submit" value="Choose" />
      </form>
    );
  }
}

export default connect(null, {selectDrone})(DroneForm)
