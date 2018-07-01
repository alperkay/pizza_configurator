import { connect } from 'react-redux'
import { selectDrone } from '../actions/ingredients'
import compose from 'recompose/compose';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
};

class DroneForm extends React.Component {
  state = {
    checkedA: true,
    checkedB: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.props.selectDrone(event.target.value)
  };

  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value='yes'
            />
          }
          label="Fast drone delivery"
        />
      </FormGroup>
    );
  }
}

DroneForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), connect(null, {selectDrone}))(DroneForm);
