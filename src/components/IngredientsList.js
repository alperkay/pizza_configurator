import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import BaseForm from './BaseForm'
import SauceForm from './SauceForm'
import ToppingForm from './ToppingForm'
import DroneForm from './DroneForm'
import { clearPizza } from '../actions/ingredients'
import Test from './Test'
import Test2 from './Test2'
import Test3 from './Test3'
import Test4 from './Test4'

class IngredientsList extends PureComponent {

  render() {
    return (
      <div>
        <Test />
        <Test2 />
        <Test3 />
        <Test4 />
      {/* // <div>
      //   <BaseForm />
      //   <SauceForm />
      //   <ToppingForm />
      //   <DroneForm />
      //   <button>Order!</button> */}
        {/* <button onClick={this.props.clearPizza}>Restart</button> */}
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

export default connect (mapStateToProps, {clearPizza})(IngredientsList)
