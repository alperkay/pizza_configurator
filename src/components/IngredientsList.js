import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import BaseForm from './BaseForm'
import SauceForm from './SauceForm'
import ToppingForm from './ToppingForm'
import DroneForm from './DroneForm'


class IngredientsList extends PureComponent {

  render() {
    return (
      <div>
        <BaseForm />
        <SauceForm />
        <ToppingForm />
        <DroneForm />
        <p>{this.props.base}</p>
        <p>{this.props.sauce}</p>
        <p>{this.props.toppings.join(', ')}</p>
        <p>{this.props.drone}</p>
        <p>{this.props.totalCost} €</p>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    base: state.pizza.base,
    sauce: state.pizza.sauce,
    toppings: state.pizza.toppings,
    drone: state.pizza.droneDelivery,
    totalCost: state.pizza.totalCost
  }
}

export default connect (mapStateToProps)(IngredientsList)
