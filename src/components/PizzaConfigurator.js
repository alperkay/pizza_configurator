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
        <h2>Welcome to <span className="website">NewAgePizza.com</span></h2>
        <h3>Let's get you a delicious pizza!</h3>
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
