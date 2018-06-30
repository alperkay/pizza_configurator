import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { selectToppings } from '../actions/ingredients'

class ToppingForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: 'initial topping'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const topping = this.state.value;
    if (this.state.value!=="initial topping") this.props.selectToppings(topping)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="initial topping">Pick some toppings! (max 3)</option>
            <option value="pineapple">pineapple</option>
            <option value="corn">corn</option>
            <option value="olives (green)">olives (green)</option>
            <option value="red onion">red onion</option>
            <option value="spinach">spinach</option>
            <option value="cherry tomatoes">cherry tomatoes</option>
            <option value="chicken">chicken</option>
          </select>
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default connect(null, {selectToppings})(ToppingForm)
