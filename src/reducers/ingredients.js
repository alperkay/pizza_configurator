import {SELECT_BASE, SELECT_SAUCE, SELECT_TOPPINGS, SELECT_DRONE} from '../actions/ingredients'


const initialState = {
  base: null,
  sauce: null,
  toppings: [],
  droneDelivery: null,
  totalCost: 0.0
}

const baseCost = (base) => {
  if (base==="20cm NY Style") {return 6.45}
  else if (base==="25cm NY Style") {return 8.99}
  else if (base==="30cm NY Style") {return 11.49}
  else if (base==="35cm NY Style") {return 13.49}
}

const sauceCost = (sauce) => {
  if (sauce==="White sauce") {return 0.00}
  else if (sauce==="Red sauce") {return 0.00}
  else if (sauce==="Double red sauce") {return 1.00}
  else if (sauce==="Mix it up") {return 1.50}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_BASE:
      if (!state.base) return {...state, base: action.payload, totalCost: state.totalCost+baseCost(action.payload)}
      else return {...state, base: action.payload, totalCost: state.totalCost-baseCost(state.base)+baseCost(action.payload)}
    case SELECT_SAUCE:
      if (!state.sauce) return {...state, sauce: action.payload, totalCost: state.totalCost+sauceCost(action.payload)}
      else return {...state, sauce: action.payload, totalCost: state.totalCost-sauceCost(state.sauce)+sauceCost(action.payload)}
    case SELECT_TOPPINGS:
      if (state.toppings.length<3 && !state.toppings.includes(action.payload)) {
        return {...state, toppings: [...state.toppings, action.payload], totalCost: state.totalCost+0.5}
      } else  {
        state.toppings.shift()
        return {...state, toppings: [...state.toppings, action.payload]}}
    case SELECT_DRONE:
      if (action.payload==='yes') return {...state, droneDelivery: action.payload, totalCost: Number((state.totalCost*1.1).toFixed(2))}
      if (action.payload==='no') return {...state, droneDelivery: action.payload}
    default:
      return state
  }
}
