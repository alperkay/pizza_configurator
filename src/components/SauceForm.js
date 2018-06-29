import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { selectSauce } from '../actions/ingredients'

class BaseForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: 'initial sauce'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const sauce = this.state.value;
    if (this.state.value!=="initial sauce") this.props.selectSauce(sauce)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="initial sauce">Pick your sauce!</option>
            <option value="white sauce">White sauce</option>
            <option value="red sauce">Red sauce</option>
            <option value="double red sauce">Double red sauce € 1,00</option>
            <option value="mix sauce">Mix it up € 1,50</option>
          </select>
        </label>
        <input type="submit" value="Choose" />
      </form>
    );
  }
}

export default connect(null, {selectSauce})(BaseForm)
