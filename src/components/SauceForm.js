import { selectSauce } from '../actions/ingredients'
import { connect } from 'react-redux'
import compose from 'recompose/compose';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 350,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SauceForm extends React.Component {
  state = {sauce: ''};

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.selectSauce(event.target.value)
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="sauce-form">then a sauce...</InputLabel>
          <Select
            value={this.state.sauce}
            onChange={this.handleChange}
            input={<Input name="sauce" id="sauce" />}
          >
            <MenuItem value="White sauce">White sauce</MenuItem>
            <MenuItem value="Red sauce">Red sauce</MenuItem>
            <MenuItem value="Double red sauce">Double red sauce € 1,00</MenuItem>
            <MenuItem value="Mix it up">Mix it up € 1,50</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SauceForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), connect(null, {selectSauce}))(SauceForm);
