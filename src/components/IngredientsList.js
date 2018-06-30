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
        <p><b>Base: </b>{this.props.base}</p>
        <p><b>Sauce: </b>{this.props.sauce}</p>
        <p><b>Toppings: </b>{this.props.toppings.join(', ')}</p>
        <p><b>Delivery with drone: </b>{this.props.drone}</p>
        <p><b>Total cost: </b>{this.props.totalCost} €</p>
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
