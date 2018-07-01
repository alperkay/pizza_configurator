import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import BaseForm from './BaseForm'
import SauceForm from './SauceForm'
import ToppingsForm from './ToppingsForm'
import DroneForm from './DroneForm'

class PizzaConfigurator extends PureComponent {

  render() {
    return (
      <div>
        <BaseForm />
        <SauceForm />
        <ToppingsForm />
        <DroneForm />
        <p><b>Total cost: </b>{Number(this.props.totalCost).toFixed(2)} €</p>
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

export default connect (mapStateToProps)(PizzaConfigurator)
