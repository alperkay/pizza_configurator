import { selectBase } from '../actions/ingredients'
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

class BaseForm extends React.Component {
  state = {base: ''};

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.selectBase(event.target.value)
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="base-form">Pick a base first!</InputLabel>
          <Select
            value={this.state.base}
            onChange={this.handleChange}
            input={<Input name="base" id="base" />}
          >
            <MenuItem value="20cm NY Style">20cm NY Style € 6,45</MenuItem>
            <MenuItem value="25cm NY Style">25cm NY Style € 8,99</MenuItem>
            <MenuItem value="30cm NY Style">30cm NY Style € 11,49</MenuItem>
            <MenuItem value="35cm NY Style">35cm NY Style € 13,49</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

BaseForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), connect(null, {selectBase}))(BaseForm);
