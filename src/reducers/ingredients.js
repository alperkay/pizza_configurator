import {SELECT_BASE, SELECT_SAUCE, SELECT_TOPPINGS, SELECT_DRONE} from '../actions/ingredients'


const initialState = {
  base: null,
  sauce: null,
  toppings: [],
  droneDelivery: false,
  totalCost: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_BASE:
      return {...state, base: action.payload}
    case SELECT_SAUCE:
      return {...state, sauce: action.payload}
    case SELECT_TOPPINGS:
      if (state.toppings.length<3) {
        return {...state, toppings: [...state.toppings, action.payload]}
      } else  {
        state.toppings.shift()
        return {...state, toppings: [...state.toppings, action.payload]}}
    case SELECT_DRONE:
      return {...state, droneDelivery: action.payload}
    default:
      return state
  }
}
