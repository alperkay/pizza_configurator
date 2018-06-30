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

class IngredientsList extends PureComponent {

  render() {
    return (
      <div>
        <Test />
        <Test2 />
        <Test3 />
      </div>

      // <div>
      //   <BaseForm />
      //   <SauceForm />
      //   <ToppingForm />
      //   <DroneForm />
      //   <button>Order!</button>
      //   <button onClick={this.props.clearPizza}>Restart</button>
      //   <p><b>Base: </b>{this.props.base}</p>
      //   <p><b>Sauce: </b>{this.props.sauce}</p>
      //   <p><b>Toppings: </b>{this.props.toppings.join(', ')}</p>
      //   <p><b>Delivery with drone: </b>{this.props.drone}</p>
      //   <p><b>Total cost: </b>{this.props.totalCost} €</p>
      // </div>
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
