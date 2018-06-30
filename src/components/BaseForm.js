import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { selectBase } from '../actions/ingredients'

class BaseForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: 'initial base'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const base = this.state.value;
    if (this.state.value!=="initial base") this.props.selectBase(base)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="initial base">Pick a base!</option>
            <option value="20cm NY Style">20cm NY Style € 6,45</option>
            <option value="25cm NY Style">25cm NY Style € 8,99</option>
            <option value="30cm NY Style">30cm NY Style € 11,49</option>
            <option value="35cm NY Style">35cm NY Style € 13,49</option>
          </select>
        <input type="submit" value="Choose" />
      </form>
    );
  }
}

export default connect(null, {selectBase})(BaseForm)
